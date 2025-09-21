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

Here is the list of basic variables sizes according to their processor type :

| Type | 32-bit system | 64-bit system |
| --- | --- | --- |
| `int` | 4 bytes | 4 bytes |
| `char` | 1 byte | 1 byte |
| `float` | 4 bytes | 4 bytes |
| `pointer` (`int*`) | 4 bytes | 8 bytes |

For structure , it’s different according to how the members of the structure are placed , let’s see an example

case-1

```cpp
struct struct1 {
	char x;
	char y;
	int z;
};
```

For 32 bit system, the total size taken by the structure is as follows :

<img width="990" height="457" alt="image" src="https://github.com/user-attachments/assets/bb1dee0a-e798-411b-8bce-ccd0ff01cfc6" />

The first member of the structure is a character (1 byte), so it will occupy the first byte at offset 0. The second member is also a character, so it will take the next byte at offset 1. The third member is an integer (4 bytes), but there aren’t enough remaining bytes in the current word to fit it. Therefore, the integer is placed in the next word, and the 2 unused bytes from the first word are padded. In total, the size of the structure will be 8 bytes.

case - 2

```cpp
struct struct2 {
	char x;
	int z;
	char y;
};
```

For 32 bit system, the total size taken by the structure is as follows :

<img width="990" height="338" alt="image" src="https://github.com/user-attachments/assets/e3564065-0a89-4ece-a5b1-05246fa23528" />

In the second case, the order of the members is different. The first member, `char x`, takes 1 byte at offset 0. The next member is an integer, and since there aren’t enough bytes left in the first word, it is placed in the next word, occupying offsets 4 to 7. The last member, `char y`, takes 1 byte at offset 8. The remaining bytes are padded to satisfy alignment.

- `char x` → offset 0
- padding → offsets 1 to 3
- `int z` → offsets 4 to 7
- `char y` → offset 8
- padding → offsets 9 to 11

Thus , total size of the structure in second case is 12 Bytes.
