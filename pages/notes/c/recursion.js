import React from 'react'
import Layout from '@/components/layout'
import Prism from 'prismjs'
import Link from 'next/link'


export default function RecursionC() {
    React.useEffect(() => {
        Prism.highlightAll()
    }, [])
    return (
        <Layout>
            <div className="notes">
                <h1 className="center main-title">
                    Recursion in C
                </h1>
                <p>
                    Recursion is a process in which a function calls itself directly or indirectly. It is a very powerful concept. Using recursion, certain problems can be solved quite easily. The idea is to represent a problem in terms of one or more smaller problems, and add one or more base conditions that stop the recursion.
                </p>
                <h2>
                    Few programs to understand recursion
                </h2>
                <h3>
                    1. Factorial of a number
                </h3>
                <p>
                    Factorial of a non-negative integer, is multiplication of all integers smaller than or equal to n. For example factorial of 6 is 6*5*4*3*2*1 which is 720.
                </p>
                <p>
                    The idea is to represent the problem in terms of smaller problem. For example, factorial of 6 can be represented as 6*factorial(5). The base condition for this problem would be factorial(1) = 1.
                </p>
                <p>
                    Following is the implementation of the above idea.
                </p>
                <pre>
                    <code className='language-clike'>
                        {`// C program to find factorial of a number
#include <stdio.h>
int factorial(int n){
    if (n == 0)
        return 1;
    return n*factorial(n-1);
}
int main(){
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    printf("Factorial of %d is %d", n, factorial(n));
    return 0;
}
`}
                    </code>
                </pre>
                <p>
                    Here, we have a function factorial() which takes an integer n as argument
                    and returns the factorial of n. The function calls itself until
                    the base condition is reached. The base condition is when n is 0, in that case,
                    the function returns 1.
                </p>
                <p>
                    This mimicks the mathematical definition of factorial. For example, factorial of 6 is 6*factorial(5). The base condition is factorial(1) = 1.
                    Hence what the program essentially does is, it keeps multiplying the number with the factorial of the number below it until it reaches 1.
                    So, the final operation at the end of the function call stack is 1*2*3*4*5*6.
                </p>
                <h3>
                    2. Fibonacci series
                </h3>
                <p>
                    Fibonacci series is a series where the next term is the sum of previous two terms. The first two terms of the Fibonacci series are 0 and 1.
                </p>
                <p>
                    The idea is to represent the problem in terms of smaller problem. For example, nth term of the series can be represented as (n-1)th term + (n-2)th term. The base condition for this problem would be nth term = 1 if n = 1 or n = 2.
                </p>
                <p>
                    Following is the implementation of the above idea.
                </p>
                <pre>
                    <code className='language-clike'>
                        {`// C program to print Fibonacci series
#include <stdio.h>
int fibonacci(int n){
    if (n == 1 || n == 2)
        return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
int main(){
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    printf("Fibonacci series: ");
    for (int i = 1; i <= n; i++)
        printf("%d ", fibonacci(i));
    return 0;
}
`}
                    </code>
                </pre>
                <p>
                    Here, we have a function fibonacci() which takes an integer n as argument
                    and returns the nth term of the Fibonacci series. The function calls itself until
                    the base condition is reached. The base condition is when n is 1 or 2, in that case,
                    the function returns 1.
                </p>
                <p>
                    This mimicks the mathematical definition of Fibonacci series. For example, 6th term of the series can be represented as (6-1)th term + (6-2)th term. The base condition is 6th term = 1 if n = 1 or n = 2.
                    Hence what the program essentially does is, it keeps adding the previous two terms until it reaches 1.
                    So, the final operation at the end of the function call stack is 1+1+2+3+5+8.
                </p>
                <h3>
                    3. Sum of digits of a number
                </h3>
                <p>
                    Sum of digits of a number is the sum of all the digits present in the number. For example, sum of digits of 1234 is 1+2+3+4 = 10.
                </p>
                <p>
                    The idea is to represent the problem in terms of smaller problem. For example, sum of digits of 1234 can be represented as 4 + sum of digits of 123. The base condition for this problem would be sum of digits of 0 = 0.
                </p>
                <p>
                    Following is the implementation of the above idea.
                </p>
                <pre>
                    <code className='language-clike'>
                        {`// C program to find sum of digits of a number
#include <stdio.h>
int sumOfDigits(int n){
    if (n == 0)
        return 0;
    return n%10 + sumOfDigits(n/10);
}
int main(){
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    printf("Sum of digits of %d is %d", n, sumOfDigits(n));
    return 0;
}
`}
                    </code>
                </pre>
                <p>
                    So, what the function does is, it keeps adding the last digit of the number to the sum of digits of the number without the last digit.
                    The way to obtain a number without the last digit is by dividing the number by 10.
                </p>
                <p>
                    A representation of the above idea using a while loop is as follows.
                </p>
                <pre>
                    <code className='language-clike'>
                        {`// C program to find sum of digits of a number
#include <stdio.h>
int sumOfDigits(int n){
    int sum = 0;
    while (n != 0){
        sum += n%10;
        n /= 10;
    }
    return sum;
}
`}
                    </code>
                </pre>
                <p>
                    Essentially, all recurssive functions can be implemented using loops. However, the advantage of using recurssion is that it is easier to understand and implement.
                    It is also faster because it does not require the overhead of creating a stack frame for each function call.
                </p>
                <h3>
                    4. Binary search
                </h3>
                <p>
                    Binary search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array.
                </p>
                <pre>
                    <code className='language-clike'>
                        {`// C program to implement binary search
#include <stdio.h>
int binarySearch(int arr[], int l, int r, int x){
    if (r >= l){
        int mid = l + (r-l)/2;
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            return binarySearch(arr, l, mid-1, x);
        return binarySearch(arr, mid+1, r, x);
    }
    return -1;
}
`}
                    </code>
                </pre>
                <p>
                    Here, we have a function binarySearch() which takes an array arr[], the leftmost index l, the rightmost index r and the target value x as arguments
                    and returns the index of the target value in the array. The function calls itself until
                    the base condition is reached. The base condition is when the leftmost index is greater than the rightmost index, in that case,
                    the function returns -1.
                </p>
                <p>
                    So, essentially implementing this function using a while loop would be as follows.
                </p>
                <pre>
                    <code className='language-clike'>
                        {`// C program to implement binary search
#include <stdio.h>
int binarySearch(int arr[], int l, int r, int x){
    while (l <= r){
        int mid = l + (r-l)/2;
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            r = mid-1;
        else
            l = mid+1;
    }
    return -1;
}
`}
                    </code>
                </pre>
                <p>
                    The time complexity of binary search is O(log n).
                </p>
                <h3>
                    5. GCD of two numbers
                </h3>
                <p>
                    GCD of two numbers is the largest number that divides both the numbers. For example, GCD of 12 and 18 is 6.
                </p>
                <p>
                    The idea is to represent the problem in terms of smaller problem. For example, GCD of 12 and 18 can be represented as GCD of 12 and 6. The base condition for this problem would be GCD of 0 and n = n.
                </p>
                <p>
                    Following is the implementation of the above idea.
                </p>
                <pre>
                    <code className='language-clike'>
                        {`// C program to find GCD of two numbers
#include <stdio.h>
int gcd(int a, int b){
    if (b == 0)
        return a;
    return gcd(b, a%b);
}
`}  
                    </code>
                </pre>
                <p>
                    This is an example of Euclid's algorithm for finding GCD of two numbers.
                </p>
                <p>
                    So, what the function does is, it keeps dividing the larger number by the smaller number until the remainder is 0.
                    The remainder is the GCD of the two numbers.
                </p>
                <h2>
                    Conclusion
                </h2>
                <p>
                    Recursion is a very powerful tool in programming. It is used in many algorithms and data structures.
                    It is also used in many programming languages like Python, Java, C++, etc.
                    The thing to remember is that the base condition should be reached at some point in the function call stack.
                    If the base condition is not reached, the program will go into an infinite loop.
                </p>
                <p>
                    Moreover, while implementing a recursive function, it is important to keep in mind that the function call stack is used to store the local variables of the function.
                    So, if the function is called too many times, the stack will overflow and the program will crash.
                </p>
            </div>
            <div className="center color-div">
                <Link href="/notes/c/pointers">
                    <h2>
                        Next Up <i className="bi bi-arrow-right"></i> Pointers in C
                    </h2>
                </Link>
            </div>
            <div className="disclaimer">
                <p>
                    Nearly 80% of this article is AI generated.
                </p>
            </div>
            <footer className="sticky-credit">
                <h3>
                    Content produced by <Link href="/">Ishan</Link> Joshi for Fun :)
                </h3>
            </footer>
        </Layout>
  )
}
