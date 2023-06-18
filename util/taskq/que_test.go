package taskq

import (
	"context"
	"sync/atomic"
	"testing"
	"time"
)

// Queue -----------------------------------------------------------------------
// Test like:
// $ go test . -v -count=2
// and:
// $ go test -bench . -count=2

func TestQueueWithShutDByOne(t *testing.T) {
	q := RunQ(context.Background(), 3, 200)

	var count int64

	for i := 0; i < 200; i++ {
		t := NewT(nil, func(v interface{}) {
			atomic.AddInt64(&count, 1)
		})
		q.Push(t)
	}

	q.ShutD(10 * time.Millisecond)

	if count != 200 {
		t.Error(count)
	} else {
		t.Log(count)
	}
}

// This test could be failed, because of it has an unpredictable result.
func TestQueueWithShutDByZero(t *testing.T) {
	q := RunQ(context.Background(), 3, 200)

	var count int64

	for i := 0; i < 200; i++ {
		t := NewT(nil, func(v interface{}) {
			atomic.AddInt64(&count, 1)
		})
		q.Push(t)
	}

	q.ShutD(0)

	if count >= 200 {
		t.Error(count)
	} else {
		t.Log(count)
	}
}

func BenchmarkQueue(b *testing.B) {
	q := RunQ(context.Background(), 10, 100)

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			t := NewT(nil, func(v interface{}) {
				_ = v
			})
			q.Push(t)
		}
	})

	q.ShutD(0)
}
