/*
A simple task queue for manipulating concurrency procedures.

Usage:

	q := RunQ(context.Background(), 10, 100)
	defer q.ShutD(0)

	t := NewT("stq", func(v interface{}) {
	   fmt.Printf("hello, %s\n", v)
	})
	q.Push(t)
*/
package taskq
