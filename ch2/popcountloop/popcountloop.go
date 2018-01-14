package popcountloop

var pc [256]byte

func init() {
	for i := range pc {
		pc[i] = pc[i/2] + byte(i&1)
	}
}

func PopCount(x uint64) int {
	for i := uint(1); i <= 7; i++ {
		pc[byte(x>>(0*8))] += pc[byte(x>>(i*8))]
	}
	return int(pc[byte(x>>(0*8))])
}
