---
title: "Singleton Pattern"
description: "Understanding the Singleton Design Pattern"
date: 2023-10-27
order: 1
tags: ["design-patterns", "creational"]
---

# Singleton Pattern

The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.

## Implementation

```java
public class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```
