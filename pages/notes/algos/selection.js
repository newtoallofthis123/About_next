import React from 'react'
import Link from 'next/link'
import NotesLayout from '@/components/notes_layout'

export default function Selection() {
    return (
        <NotesLayout>
            <div className="notes">
                <h1 className='center main-title'>Selection Sort</h1>
                <p>
                    Selection sort is a popular sorting algorithm that sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.
                </p>
                <h2>
                    Space Time Complexity
                </h2>
                <p>
                    The time complexity of selection sort is O(n<sup>2</sup>) and the space complexity is O(1).
                    This is because the algorithm has to iterate through the array n times and for each iteration, it has to iterate through the rest of the array to find the minimum element.
                    So, the time complexity is O(n<sup>2</sup>).
                    The space complexity is O(1) because the algorithm only uses a few variables to keep track of the minimum element and its index.
                    This makes it a good algorithm to use when you need to sort a small array.
                    But when sorting a large array, it is not a good algorithm to use because it is very slow.
                    It doesn't consume a lot of memory, but it is very slow.
                </p>
                <h2>
                    Pseudocode
                </h2>
                <p>
                    The pseudocode for selection sort is as follows:
                </p>
                <pre>
                    <code className='language-clike'>
                        {`for i = 0 to n - 1
    min = i
    for j = i + 1 to n
        if arr[j] < arr[min]
            min = j
    swap arr[i] and arr[min]`}
                    </code>
                </pre>
                <p>
                    The first for loop iterates through the array from the beginning to the end.
                    The second for loop iterates through the rest of the array to find the minimum element.
                </p>
                <h2>
                    Theory
                </h2>
                <p>
                    The first for loop iterates through the array from the beginning to the end.
                    We first assume that the first element is the minimum element.
                    Then, we iterate through the rest of the array to find the minimum element.
                    If we find an element that is smaller than the current minimum element, we update the minimum element to be the new element.
                    After we find the minimum element, we swap the current element with the minimum element.
                    This is because the current element is the minimum element in the rest of the array.
                    So, we swap the current element with the minimum element.
                    This way, the minimum element is at the beginning of the array.
                    Then subsequently, the second minimum element is at the second index of the array.
                    And so on.
                </p>
                <h2>
                    Implementation
                </h2>
                <p>
                    The implementation of selection sort in c is as follows:
                </p>
                <pre>
                    <code className='language-javascript'>
                        {`void selectionSort(int arr[], int n) {
    int i, j, min, temp;
    for (i = 0; i < n - 1; i++) {
        min = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}`}
                    </code>
                </pre>
                <h2>
                    Visualization
                </h2>
                <p>
                    The visualization of selection sort is shown beautifully here: <Link href="https://www.sortvisualizer.com/selectionsort/">https://www.sortvisualizer.com/selectionsort/</Link>
                </p>
                <h2>
                    Observation
                </h2>
                <p>
                    Now, I am sure you might have noticed that the pseudocode for selection sort is very similar to the pseudocode for bubble sort.
                    The only difference is that in selection sort, we find the minimum element in the rest of the array and swap it with the current element.
                    Whereas in bubble sort, we swap the current element with the next element if the current element is greater than the next element.
                    So, selection sort is a bit more efficient than bubble sort.
                    But, both of them are O(n<sup>2</sup>) algorithms.
                </p>
                <p>
                    <Link href='/notes/algos/bubble'>Check out Bubble Sort</Link>
                </p>
                <p>
                    <Link href='/notes/algos'>Back to Algorithms</Link>
                </p>
            </div>
      </NotesLayout>
  )
}
