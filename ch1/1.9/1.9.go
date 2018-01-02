package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
)

func main() {
	for _, url := range os.Args[1:] {
		hasit := strings.HasPrefix(url, "http://")
		if hasit != true {
			url = "http://" + url
		}
		resp, err := http.Get(url)
		if err != nil {
			fmt.Fprintf(os.Stderr, "%v: %v\n", os.Args[0], err)
		}
		fmt.Println(resp.Status)
		b, err := io.Copy(os.Stdout, resp.Body)
		fmt.Printf("%v\n", b)
		resp.Body.Close()
		if err != nil {
			fmt.Fprintf(os.Stderr, "%v: reading %s: %v\n", os.Args[0], url, err)
			os.Exit(1)
		}
	}

}
