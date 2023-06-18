package taskq

import (
	"context"
	"fmt"
	"sync/atomic"
	"time"
)

// Queue -----------------------------------------------------------------------

type Queue interface {
	Push(t Task)
	ShutD(d time.Duration)
}

// RunQ will run a Queue with customized context.Context, maximum of workers and capacity of the Queue.
func RunQ(ctx context.Context, maxWorkers uint, qCapacity uint) Queue {
	q := &que{
		maxWorkers: maxWorkers,
		cancels:    make([]func(), 0, maxWorkers),
		tasksQ:     make(chan Task, qCapacity),
		running:    0,
	}
	// running
	atomic.StoreUint32(&q.running, 1)

	for i := uint(0); i < q.maxWorkers; i++ {
		wCtx, cancel := context.WithCancel(context.WithValue(ctx, workerCtx{}, fmt.Sprintf("worker %d", i)))
		q.cancels = append(q.cancels, cancel)
		go worker(wCtx, q.tasksQ)
	}
	return q
}

type que struct {
	maxWorkers uint
	cancels    []func()
	tasksQ     chan Task
	running    uint32
}

// Push put the executable task into the que.
func (q *que) Push(t Task) {
	if atomic.LoadUint32(&q.running) != 1 {
		return
	}
	q.tasksQ <- t
}

// ShutD shut the que, and dump the tasks or not.
func (q *que) ShutD(d time.Duration) {
	if atomic.LoadUint32(&q.running) != 1 {
		return
	}
	atomic.StoreUint32(&q.running, 0)
	// stop to receive tasks.
	close(q.tasksQ)
	// dump or not.
	q.dump(d)
}

func (q *que) dump(d time.Duration) {
	// dump all remain tasks.
	remain := len(q.tasksQ)
	if d > 0 {
		// sleeping to wait for workers to fulfil tasks, maybe.
		time.Sleep(d)
		// then cancel all worker routines.
		q.shutdown()
	} else {
		// cancel all worker routines first.
		q.shutdown()
		// then
		for remain > 0 {
			<-q.tasksQ
			remain--
		}
	}
}

func (q *que) shutdown() {
	for _, cancel := range q.cancels {
		cancel()
	}
}

// Task ------------------------------------------------------------------------

// Task: Represent an exxcutable task.
type Task interface {
	Dispose()
}

// NewT: Build a Task using function fn with parameter p.
func NewT(p interface{}, fn func(interface{})) Task {
	return &taskImpl{
		p:  p,
		fn: fn,
	}
}

type taskImpl struct {
	p  interface{}
	fn func(interface{})
}

func (t *taskImpl) Dispose() {
	t.fn(t.p)
}

// Worker ----------------------------------------------------------------------

// context keys for debugging or extension.
type (
	workerCtx struct{}
)

// worker routine: representing a worker.
func worker(ctx context.Context, taskQ <-chan Task) {
	for {
		select {
		case t := <-taskQ:
			if t != nil {
				t.Dispose()
			}
		case <-ctx.Done():
			fmt.Println(ctx.Value(workerCtx{}), ": Done!!!")
			return
		}
	}
}
