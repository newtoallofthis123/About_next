import React from 'react'
import Layout from '@/components/layout'
import Prism from "prismjs";

export default function C() {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <Layout>
            <div className='notes'>
                <h1 style={{textDecoration: "underline",}} className="center main-title">C Notes</h1>
                <h2>
                    Basic Syntax
                </h2>
                <p>
                    The basic syntax of C is pretty easy to learn.
                    Basic Rules Include
                </p>
                <ul>
                    <li>
                        Each statement must end with a semicolon.
                    </li>
                    <li>
                        Formats must be specificed for each variable.
                        This is done by using differnet
                        key words like <code className='language-clike'>int</code> keyword.
                    </li>
                    <li>
                        The <code className='language-clike'>main()</code> function is the entry point of the program.
                    </li>
                    <li>
                        The <code className='language-clike'>return 0;</code> statement is used to end the program.
                    </li>
                    <li>
                        Each function must return a value that is of the same type as the function.
                    </li>
                    <li>
                        So, if the function is of type <code className='language-clike'>int</code>,
                        then the function must return an <code className='language-clike'>int</code>.
                    </li>
                </ul>
                <p>
                    Here is an example of a basic C program.
                </p>
                <pre>
                    <code className='language-clike'>
                        {
                            `
#include <stdio.h> // Header
int main() { // Main function
    int x = 12;
    printf("Hello, World!"); // Print to console
    return 0; // Return 0
}
`
                        }
                    </code>
                </pre>
                <h2>
                    How a C Program Works
                </h2>
                <p>
                    When a C program is run, the following steps are taken:
                </p>
                <div>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/gfg2-13.png" width="620" alt="C program compliation" />
                </div>
                <ul>
                    <li>
                        The preprocessor reads the program and replaces all the preprocessor directives with the actual code.
                    </li>
                    <li>
                        The compiler then compiles the code into assembly code.
                    </li>
                    <li>
                        The assembler then converts the assembly code into machine code.
                    </li>
                    <li>
                        The linker then links the machine code with the libraries.
                    </li>
                    <li>
                        The program is then converted into a binary file.
                    </li>
                </ul>
                <h2>
                    Variables
                </h2>
                <p>
                    Variables are used to store data.
                    There are different types of variables in C.
                    The most common ones are:
                </p>
                <ul>
                    <li>
                        <code className='language-clike'>int</code> - Stores integers.
                    </li>
                    <li>
                        <code className='language-clike'>float</code> - Stores floating point numbers.
                    </li>
                    <li>
                        <code className='language-clike'>char</code> - Stores characters.
                    </li>
                    <li>
                        <code className='language-clike'>double</code> - Stores double precision floating point numbers.
                    </li>
                    <li>
                        <code className='language-clike'>void</code> - Represents the absence of type.
                    </li>
                </ul>
                <h2>
                    Format Specifiers
                </h2>
                <p>
                    Format specifiers are used to specify the format of the data.
                    Here are some of the most common format specifiers:
                </p>
                <ul>
                    <li>
                        <code className='language-clike'>%d</code> - Used to print integers.
                    </li>
                    <li>
                        <code className='language-clike'>%f</code> - Used to print floating point numbers.
                    </li>
                    <li>
                        <code className='language-clike'>%c</code> - Used to print characters.
                    </li>
                    <li>
                        <code className='language-clike'>%s</code> - Used to print strings.
                    </li>
                </ul>
                <p>
                    Here is an example of a program that uses variables and format specifiers.
                </p>
                <pre>
                    <code className='language-clike'>
                        {
                            `
#include <stdio.h>
int main() {
    int x = 12;
    float y = 12.5;
    char z = 'a';
    double a = 12.5;
    printf("x = %d, y = %f, z = %c, a = %f", x, y, z, a);
}
`
                        }
                    </code>
                </pre>
                <h2>
                    Conditional Statements
                </h2>
                <p>
                    Conditional statements are used to execute different blocks of code based on a condition.
                    There are different types of conditional statements in C.
                    The most common ones are:
                </p>
                <ul>
                    <li>
                        <code className='language-clike'>if</code> - Executes a block of code if a condition is true.
                    </li>
                    <li>
                        <code className='language-clike'>if-else</code> - Executes a block of code if a condition is true and another block of code if the condition is false.
                    </li>
                    <li>
                        <code className='language-clike'>switch</code> - Executes a block of code based on the value of a variable.
                    </li>
                </ul>
                <p>
                    Here is an example of a program that uses conditional statements.
                </p>
                <pre>
                    <code className='language-clike'>
                        {
                            
                            `
#include <stdio.h>
int main() {
    int x = 12;
    if (x == 12) {
        printf("x is equal to 12");
    } else {
        printf("x is not equal to 12");
    }
    switch (x) {
        case 12:
            printf("x is equal to 12");
            break;
        default:
            printf("x is not equal to 12");
            break;
    }
}
`
                        }
                    </code>
                </pre>
                <h2>
                    Loops
                </h2>
                <p>
                    Loops are used to execute a block of code multiple times.
                    There are different types of loops in C.
                    The most common ones are:
                </p>
                <ul>
                    <li>
                        <code className='language-clike'>for</code> - Executes a block of code a specified number of times.
                    </li>
                    <li>
                        <code className='language-clike'>while</code> - Executes a block of code while a condition is true.
                    </li>
                    <li>
                        <code className='language-clike'>do-while</code> - Executes a block of code while a condition is true.
                    </li>
                </ul>
                <p>
                    Here is an example of a program that uses loops.
                </p>
                <pre>
                    <code className='language-clike'>
                        {
                            
                            `
#include <stdio.h>
int main() {
    int x = 12;
    for (int i = 0; i < x; i++) {
        printf("Hello, World!");
    }
    int i = 0;
    while (i < x) {
        printf("Hello, World!");
        i++;
    }
    i = 0;
    do {
        printf("Hello, World!");
        i++;
    } while (i < x);
}
`
                        }
                    </code>
                </pre>
                <h2>
                    Functions
                </h2>
                <p>
                    Functions are used to group a block of code together.
                    They are used to avoid code duplication.
                    They also make the code more readable.
                    Here is an example of a function:
                </p>
                <pre>
                    <code className='language-clike'>
                        {
                            `
#include <stdio.h>
void printHelloWorld() {
    printf("Hello, World!");
}
int main() {
    printHelloWorld();
}
`
                        }
                    </code>
                </pre>
                <h2>
                    Arrays
                </h2>
                <p>
                    Arrays are used to store multiple values of the same type.
                    They are declared using square brackets.
                    They are basically used to store homogeneous data.
                    Here is an example of an array:
                </p>
                <pre>
                    <code className='language-clike'>
                        {
                            
                            `
#include <stdio.h>
int main() {
    int arr[5];
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    arr[3] = 4;
    arr[4] = 5;
    for (int i = 0; i < 5; i++) {
        printf("%d", arr[i]);
    }
}
`
                        }
                    </code>
                </pre>
                <h2>
                    Pointers
                </h2>
                <p>
                    Pointers are used to store the address of a variable.
                    They are declared using the <code className='language-clike'>*</code> operator.
                    They are basically used to store heterogeneous data.
                </p>
                <pre>
                    <code className='language-clike'>
                        {
                            `
#include <stdio.h>
int main() {
    int x = 12;
    int *ptr = &x;
    printf("%d", *ptr);
}
`
                        }
                    </code>
                </pre>
                <p>
                    The this works is you first declare a pointer variable.
                    Then you assign the address of another variable to the pointer variable.
                    To do this, you use the <code className='language-clike'>&</code> operator.
                    Then you can access the value of the variable using the <code className='language-clike'>*</code> operator.
                    The <code className='language-clike'>*</code> operator is also used to declare a pointer variable.
                </p>
                <h2>
                    Structures
                </h2>
                <p>
                    Structures are used to store multiple values of different types.
                    They are declared using the <code className='language-clike'>struct</code> keyword.
                    They are basically used to store heterogeneous data.
                    Here is an example of a structure:
                </p>
                <pre>
                    <code className='language-clike'>
                        {
                            
                            `
#include <stdio.h>
struct Person {
    char name[20];
    int age;
};
int main() {
    struct Person person;
    person.name = "John";
    person.age = 12;
    printf("%s is %d years old", person.name, person.age);
}
`
                        }
                    </code>
                </pre>
                <h2>
                    Unions
                </h2>
                <p>
                    Unions are used to store multiple values of different types.
                    They are declared using the <code className='language-clike'>union</code> keyword.
                    They are basically used to store heterogeneous data.
                    They are a bit different from structures.
                </p>
                <h3>
                    Unions vs Structures
                </h3>
                <ul>
                    <li>
                        Unions use the same memory location for all of its members.
                    </li>
                    <li>
                        Structures use different memory locations for all of its members.
                    </li>
                    <li>
                        Unions are used to store heterogeneous data.
                    </li>
                    <li>
                        Structures are used to store homogeneous data.
                    </li>
                    <li>
                        Unions are used to save memory.
                    </li>
                    <li>
                        Structures are used to make the code more readable.
                    </li>
                    <li>
                        The size of a union is the size of the largest member.
                    </li>
                    <li>
                        The size of a structure is the sum of the sizes of all of its members.
                    </li>
                </ul>
                <h2>
                    Enumerations
                </h2>
                <p>
                    Enumerations are used to store a list of constants.
                    They are declared using the <code className='language-clike'>enum</code> keyword.
                    Here is an example of an enumeration:
                </p>
                <pre>
                    <code className='language-clike'>
                        {
                        `
#include <stdio.h>
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};
int main() {
    enum Day day = Monday;
    printf("%d", day);
}
`
                        }
                    </code>
                </pre>
                <h2>
                    Typedef
                </h2>
                <p>
                    Typedef is used to give a type a new name.
                    Here is an example of typedef:
                </p>
                <pre>
                    <code className='language-clike'>
                        {
                        `
#include <stdio.h>
typedef int integer;
int main() {
    integer x = 12;
    printf("%d", x);
}
`
                        }
                    </code>
                </pre>
                <h2>
                    Preprocessor Directives
                </h2>
                <p>
                    Preprocessor directives are used to include header files.
                    They are declared using the <code className='language-clike'>#</code> operator.
                    Here is an example of a preprocessor directive:
                </p>
                <pre>
                    <code className='language-clike'>
                        {
                        `
#include <stdio.h>
#include <stdlib.h>
int main() {
    printf("Hello, World!");
}
`
                        }
                    </code>
                </pre>
                <h2>
                    Macros
                </h2>
                <p>
                    Macros are used to define constants.
                    They are declared using the <code className='language-clike'>#define</code> operator.
                    They are also used to define functions.
                    Here is an example of a macro:
                </p>
                <pre>
                    <code className='language-clike'>
                        {
                        `
#include <stdio.h>
#define PI 3.14
int main() {
    printf("%f", PI);
}
`
                        }
                    </code>
                </pre>

            </div>
      </Layout>
  )
}
