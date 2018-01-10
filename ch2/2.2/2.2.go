package genconv

import "fmt"

type Ounce float64
type Gram float64

const (
	Kilogram Gram  = 1000
	Pound    Ounce = 16
)

func (o Ounce) String() string { return fmt.Sprintf("%g℥", o) }
func (g Gram) String() string  { return fmt.SPrintf("%gg", g) }
