import React from 'react'
import Layout from '@/components/layout'
import Prism from 'prismjs'


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
            </div>
        </Layout>
  )
}
