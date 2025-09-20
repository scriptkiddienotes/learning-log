---
layout: post
title: "C++ basics - variables , struct , arrays , pointers"
categories: ["Languages", "C++"]
excerpt: "C++ basics - variables , struct , arrays , pointers"
---

For malware reversing part , the basic understanding of variables is important, we would learn variables first and then how they work in the operating system by reversing the programs

## Declare a type

int age = 25;     // an integer

char grade = 'A'; // a single character

float pi = 3.14;  // a floating point number

int numbers[3] = {10, 20, 30}; // an array

## Structure

A `struct` is a *composite data type* in C/C++ that aggregates variables of possibly different types into a single memory block, laid out in a defined order. Each variable inside is called a **member**, and they are stored contiguously in memory

```c++
struct Person {
char name[20];
int age;
};  
```

struct Person p1;
p1.age = 30;                // a structure

so , if i define `struct Person p1` :

- p1 is a new data type
- p1 object has two members `name` which is an array and `age` which is an integer.

## Pointers

Every variable lives in memory. A pointer stores the *address* of another variable.

int x = 42;
int *ptr = &x;   // &x means "address of x"

we have to learn first the basic concept about [How 32-bit and 64-bit Processors Fetch Data](https://scriptkiddienotes.github.io/learning-log/computer%20architecture/2025/09/16/How-32-bit-and-64-bit-Processors-Fetch-Data/).

# Variables and Their Memory
