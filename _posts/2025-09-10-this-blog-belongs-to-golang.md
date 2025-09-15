---
layout: post
title: "Getting Started with Golang"
categories: ["Languages", "Golang"]
excerpt: "A beginner-friendly introduction to writing and running your first program in Go."
---

# Introduction

Go (or Golang) is a fast, statically typed language designed by Google.  
It focuses on simplicity, concurrency, and performance — making it great for cloud services and system tools.

In this tutorial, we’ll write our first Go program.

# Installing Go

You can download Go from the [official website](https://go.dev/dl/).  
After installation, verify the version:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, ScriptKiddie!")
}
```

## Running the Program

Run it in your terminal:

`go run hello.go`

You should see:

`Hello, ScriptKiddie!`

### Key Takeaways

package main defines the entry point.

fmt.Println prints output.

Go uses curly braces {} for code blocks.

The Go toolchain makes compiling and running code very simple.
