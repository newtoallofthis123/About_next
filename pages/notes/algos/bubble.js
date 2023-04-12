import NotesLayout from "@/components/notes_layout"
import Link from "next/link"

export default function BubbleAlgo() {
    return (
        <NotesLayout>
            <div className="notes">
                <h1 className='center main-title'>Bubble Sort</h1>
                <p>
                    Bubble sort is one of the popular sorting algorithms that sorts an array by repeatedly swapping the adjacent elements if they are in wrong order.
                    Now, let's take a closer look at how it works.
                </p>
                <h2>
                    Space Time Complexity
                </h2>
                <p>
                    The time complexity of bubble sort is O(n^2) and the space complexity is O(1).
                    Hence, it is not a very efficient algorithm.
                    The reason for the time complexity is that we have to compare each element with the next element.
                    Hence, the number of comparisons is n(n-1)/2.
                    So, it is O(n^2).
                    It is quite memory efficient as we do not need any extra space.
                    Hence, the space complexity is O(1).
                </p>
                <h2>
                    How it works
                </h2>
                <p>
                    Let's take an example array [5, 4, 3, 2, 1].
                    We will start with the first element and compare it with the next element.
                    If the first element is greater than the next element, we will swap them.
                    If the first element is smaller than the next element, we will not swap them.
                    We will continue this process until we reach the end of the array.
                    So, we will compare 5 with 4 and swap them.
                    Then, we will compare 5 with 3 and swap them.
                    Then, we will compare 5 with 2 and swap them.
                    Then, we will compare 5 with 1 and swap them.
                    So, we will have [4, 3, 2, 1, 5] after the first iteration.
                    Now, we will start with the first element and compare it with the next element.
                    We will compare 4 with 3 and swap them.
                    Then, we will compare 4 with 2 and swap them.
                    Then, we will compare 4 with 1 and swap them.
                    So, we will have [3, 2, 1, 4, 5] after the second iteration.
                    Now, we will start with the first element and compare it with the next element.
                    We will compare 3 with 2 and swap them.
                    Then, we will compare 3 with 1 and swap them.
                    So, we will have [2, 1, 3, 4, 5] after the third iteration.
                    Now, we will start with the first element and compare it with the next element.
                    We will compare 2 with 1 and swap them.
                    So, we will have [1, 2, 3, 4, 5] after the fourth iteration.
                    Now, we will start with the first element and compare it with the next element.
                    We will compare 1 with 2 and not swap them.
                    So, we will have [1, 2, 3, 4, 5] after the fifth iteration.
                    Hence, this is our sorted array.
                </p>
                <h2>
                    Implementation
                </h2>
                <p>
                    Let's take a look at the implementation of bubble sort in C.
                </p>
                <pre>
                    <code className="language-javascript">
                        {`void bubble_sort(int arr[], int n) {
    int i, j, temp;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`}
                    </code>
                </pre>
                <h2>
                    Visualisation
                </h2>
                <p>
                    Here's an interactive visualisation of bubble sort.
                    It will help you understand how it works.
                    You can find it here: <a href="https://www.sortvisualizer.com/bubblesort/">https://www.sortvisualizer.com/bubblesort/</a>
                </p>
                <h2>
                    Observations
                </h2>
                <p>
                    Bubble sort is a very simple algorithm.
                    It is not very efficient.
                    It is not used in practice.
                    It is used for educational purposes.
                    It has a time complexity of O(n^2).
                    It has a space complexity of O(1).
                    Bubble sort sorts using the largest element.
                    So, it builds the list from the end.
                    This is the opposite of selection sort.
                </p>
                <p>
                    <Link href="merge">
                        Merge Sort
                    </Link>
                </p>
                <p>
                    <Link href="/notes/algos">
                        Back to Algorithms
                    </Link>
                </p>
            </div>
      </NotesLayout>
  )
}
