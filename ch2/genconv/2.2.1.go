//Docstring or whatever
package genconv

func OToG(o Ounce) Gram { return Gram(o / 0.035274) }
func GToO(g Gram) Ounce { return Ounce(g * 0.035274) }
func FToM(f Foot) Meter { return Meter(f * 0.3048) }
func MToF(m Meter) Foot { return Foot(m * 3.28084) }
