---
layout: categories
title: "How 32-bit and 64-bit Processors Fetch Data"
date: 2025-09-16
categories: ["Computer Architecture"]  
excerpt : CPUs don’t fetch data one byte at a time , they grab chunks called words. This post explains how 32-bit and 64-bit processors handle memory alignment
---

# How 32-bit and 64-bit Processors Fetch Data

The CPU (processor) gets data from RAM. But it doesn’t take it one byte at a time , the CPU grabs chunks of memory called *words*. How big a word is depends on the processor.

Each box = 1 byte. Grouped into words of 4 bytes (for 32-bit CPU):

<img width="923" height="308" alt="image" src="https://github.com/user-attachments/assets/6c80a93d-7bf5-4653-b888-0bbf1003998d" />

For 32-bit CPU , word = 32 bits = 4 bytes

For 64-bit CPU , word = 64 bits = 8 bytes

So , on a 32-bit machine the CPU can fetch 4 bytes in one go; on a 64-bit machine it can fetch 8 bytes in one go.

The CPU works fastest when the data it needs starts at the beginning of a word. If the data sits across two words, the CPU must fetch both words and combine them and that wastes time (extra cycles) and is slower.

If an `int` (4 bytes) is stored at address `0x1000`, that’s divisible by 4 which is perfect for a 32-bit CPU.

If the same `int` were stored at address`0x1001` , a 32-bit CPU would have to read two words (0x1000..0x1003 and 0x1004..0x1007) and stitch them slower.
