package main

import (
	"fmt"

	"github.com/rlewkowicz/the-go-programming-language/ch2/popcountloop"
)

func main() {
	fmt.Println(popcountloop.PopCount(9223372036854775807))
}
