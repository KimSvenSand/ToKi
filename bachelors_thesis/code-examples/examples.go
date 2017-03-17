package main

import "fmt"

func main() {
  var word string = "string"
  fmt.Printf("%d", double(word)) //cannot use word (type string) as type int in argument to double
}

func double(nr int) int {
  return nr * 2
}
