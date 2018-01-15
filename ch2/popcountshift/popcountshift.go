package main

func main() {
	PopCount(5)
}

func PopCount(x uint64) int {
	a := 0
	for i := byte(0); i <= 64; i++ {
		a = +int(x & 1)
		x >>= 1
	}
	return a
}
