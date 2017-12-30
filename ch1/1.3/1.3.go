package main

import (
	"fmt"
	"os"
	"strings"
	"time"
)

func main() {
	echo1()
	echo2()
	echo3()
}

func echo1() {
	t := time.Now()
	var s, sep string
	for i := 1; i < len(os.Args); i++ {
		s += sep + os.Args[i]
		sep = " "
	}
	fmt.Println(s)
	fmt.Println(time.Since(t).Nanoseconds())
}

func echo2() {
	t := time.Now()
	var s, sep string
	for i := 1; i < len(os.Args); i++ {
		s += sep + os.Args[i]
		sep = " "
	}
	fmt.Println(s)
	fmt.Println(time.Since(t).Nanoseconds())
}

func echo3() {
	t := time.Now()
	fmt.Println(strings.Join(os.Args[1:], " "))
	fmt.Println(time.Since(t).Nanoseconds())
}
