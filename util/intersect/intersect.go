package intersect

import "sort"

// reference to github.com/juliangruber/go-intersect/v2

// Simple has complexity: O(n^2)
func SimpleGeneric[T comparable](a []T, b []T) []T {
	set := make([]T, 0)
	for _, v := range a {
		if containsGeneric(b, v) {
			set = append(set, v)
		}
	}
	return set
}

func containsGeneric[T comparable](b []T, e T) bool {
	for _, v := range b {
		if v == e {
			return true
		}
	}
	return false
}

// Sorted has complexity: O(n*log(n)), a needs to be sorted
func SortedGeneric[T comparable](a []T, b []T) []T {
	set := make([]T, 0)
	for _, v := range a {
		idx := sort.Search(len(b), func(i int) bool {
			return b[i] == v
		})
		if idx < len(b) && b[idx] == v {
			set = append(set, v)
		}
	}
	return set
}

// Hash has complexity: O(n * x) where x is a factor of hash function efficiency (between 1 and 2)
func HashGeneric[T comparable](a []T, b []T) []T {
	set := make([]T, 0)
	hash := make(map[T]bool)
	for _, v := range a {
		hash[v] = true
	}
	for _, v := range b {
		if hash[v] {
			set = append(set, v)
		}
	}
	return set
}
