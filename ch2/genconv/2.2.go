package genconv

import "fmt"

type Ounce float64
type Gram float64
type Foot float64
type Meter float64

const (
	Kilogram Gram  = 1000
	Pound    Ounce = 16
	Yard     Foot  = 3
)

func (o Ounce) String() string { return fmt.Sprintf("%g℥", o) }
func (g Gram) String() string  { return fmt.SPrintf("%gg", g) }
func (f Foot) String() string  { return fmt.Sprintf("%gft", f) }
func (m Meter) String() string { return fmt.SPrintf("%gm", m) }
