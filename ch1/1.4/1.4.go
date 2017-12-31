package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	counts := make(map[string]map[string]int)
	files := os.Args[1:]
	if len(files) == 0 {
		arg := ""
		countLines(os.Stdin, counts, arg)
	} else {
		for _, arg := range files {
			f, err := os.Open(arg)
			if err != nil {
				fmt.Fprintf(os.Stderr, "%v: %v\n", os.Args[0], err)
				continue
			}
			countLines(f, counts, arg)
			f.Close()
		}
	}
	for line, m := range counts {
		s, sep := "", ""
		for fname, _ := range m {
			if fname != "count" {
				s += sep + fname
				sep = ", "
			}
		}
		if m["count"] > 1 {
			fmt.Printf("%s Appeared %d times across the files: %s\n", line, m["count"], s)
		}
	}
}

func countLines(f *os.File, counts map[string]map[string]int, arg string) {
	input := bufio.NewScanner(f)
	for input.Scan() {
		if counts[input.Text()] == nil {
			counts[input.Text()] = make(map[string]int)
		}
		counts[input.Text()]["count"]++
		counts[input.Text()][arg]++
	}
}
