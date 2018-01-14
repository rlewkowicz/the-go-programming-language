package popcountloop

var pc [256]byte

func init() {
	for i := range pc {
		pc[i] = pc[i/2] + byte(i&1)
	}
}

func PopCount(x uint64) int {
	a := pc[byte(x>>(0*8))]
	for i := uint(1); i <= 7; i++ {
		a += pc[byte(x>>(i*8))]
	}
	return int(a)
}
