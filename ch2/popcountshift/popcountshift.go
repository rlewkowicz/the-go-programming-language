package popcountshift

func PopCount(x uint64) int {
	a := 0
	for i := uint(1); i <= 64; i++ {
		if x>>i == 1 {
			a++
		}
	}
	return int(a)
}
