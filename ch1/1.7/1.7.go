package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	for _, url := range os.Args[1:] {
		resp, err := http.Get(url)
		if err != nil {
			fmt.Fprintf(os.Stderr, "%v: %v\n", os.Args[0], err)
		}
		b, err := io.Copy(os.Stdout, resp.Body)
		fmt.Printf("%v\n", b)
		resp.Body.Close()
		if err != nil {
			fmt.Fprintf(os.Stderr, "%v: reading %s: %v\n", os.Args[0], url, err)
			os.Exit(1)
		}
	}

}
