---
layout: post
title: "C++ basics"
categories: ["Languages", "C++"]
excerpt: "C++ basics - variables , struct , arrays , pointers"
---

For the malware reversing part, a basic understanding of variables is important. We will learn variables first, and then see how they work in the operating system by reversing simple programs.

# Declaring a type

int age = 25;     // `an integer`

char grade = 'A'; // `a single character`

float pi = 3.14;  // `a floating point number`

int numbers[3] = {10, 20, 30}; // `an array`

# Structure

A `struct` is a composite data type in C/C++ that combines variables of different types into a single memory block, laid out in a defined order. Each variable inside is called a member, and they are stored contiguously in memory

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

# Pointers

Every variable lives in memory. A pointer stores the address of another variable.

```cpp
int x = 42;
int *ptr ;  
ptr = &x ; // &x means "address of x"
*ptr = 50; //changing the value of x to 50
```

So for different types of variables and functions, there exists different types of pointers. we will see some important pointers.  

- null pointer : It’s like a pointer points to nowhere
    
    ```cpp
    int* ptr = nullptr;
    ```
    
- Void Pointer : such pointers can be referenced to any type of variable but you can’t dereference the pointer without type casting
    
    ```cpp
    int x = 10 ;
    void* ptr ;
    ptr = &x ; //referencing 
    ```
    

- Constant Pointer : The address referenced to pointer can not be changed , but the value at that address can be changed.
    
    ```cpp
    int x = 10;
    int y = 20;
    int* const ptr = &x;
    *ptr = 500; //Right Approach
    ptr = &y;//Wrong Approach 
    ```
    

- Function Pointer : it holds the address of a function
    
    ```cpp
    void abc(int x); // abc function takes integer as an argument and returns nothing
    void (*function_ptr)(int) = &abc; // function_ptr made for the same function type
    ```

# Variables and Their Memory

we have to learn first the basic concept about [How 32-bit and 64-bit Processors Fetch Data](https://scriptkiddienotes.github.io/learning-log/computer%20architecture/2025/09/16/How-32-bit-and-64-bit-Processors-Fetch-Data/).

Here is the list of basic variables sizes according to their processor type :

<div class="table-wrap" markdown="1">
	
| Type | 32-bit system | 64-bit system |
| --- | --- | --- |
| `int` | 4 bytes | 4 bytes |
| `char` | 1 byte | 1 byte |
| `float` | 4 bytes | 4 bytes |
| `pointer` (`int*`) | 4 bytes | 8 bytes |

</div>

For structure , it’s different according to how the members of the structure are placed , let’s see an example

## structure size case - 1

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

## structure size case - 2

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
