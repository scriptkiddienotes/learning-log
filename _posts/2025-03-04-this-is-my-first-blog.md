---
layout: post
title: "C++: RAII in Practice"
date: 2025-09-15
categories: ["System Internals"]
---

## Introduction
Resource Acquisition Is Initialization (RAII) is a key C++ idiom...

## Example
```cpp
#include <iostream>
struct File {
    File() { std::cout << "open\n"; }
    ~File() { std::cout << "close\n"; }
};
int main() { File f; }
```
