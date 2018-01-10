package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/rlewkowicz/the-go-programming-language/ch2/genconv"
)

func main() {
	if len(os.Args) > 1 {
		for _, i := range os.Args[1:] {
			t, err := strconv.ParseFloat(i, 64)
			if err != nil {
				println("shits broke yo")
				os.Exit(1)
			}
			convertall(t)
		}
	}
}

func convertall(n float64) {
	m := genconv.Meter(n)
	f := genconv.Foot(n)
	o := genconv.Ounce(n)
	g := genconv.Gram(n)

	fmt.Printf("%s = %s, %s =%s, %s=%s, %s=%s\n",
		m, genconv.MToF(m), f, genconv.FToM(f), o, genconv.OToG(o), g, genconv.GToO(g))
}
