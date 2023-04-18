Merge sort is a sorting algorithm that is based on the divide and conquer technique. It works by repeatedly dividing the list into two halves, sorting the two halves and 
then merging them together.

It is one of the most efficient sorting algorithms. It is a comparison-based, stable sorting algorithm.

## Space and Time Complexity
The time complexity of the merge sort algorithm is O(n log n) in all the three cases (worst, average and best) as merge sort always divides the array into two halves and
take linear time to merge two halves.
So, it is not only a fast sorting algorithm but also a stable sorting algorithm.
The space complexity of the merge sort algorithm is O(n).
This is because the merge sort algorithm uses an extra array to store the sorted array.

## Algorithm
The algorithm can be divided into two parts.

The first part involves dividing the array into two halves until we can no longer divide.
The second part involves merging the smaller sorted arrays into larger sorted arrays until we are left with a single sorted array.

So, the algorithm can be described as follows:
First, we divide the array into two halves.
Then, we sort the two halves by recursively calling the merge sort algorithm on both halves.
So, we divide the array into two halves until we can no longer divide.
Then, we merge the smaller sorted arrays into larger sorted arrays until we are left with a single sorted array.
While merging the two halves, we compare the elements of the two halves and copy the smaller element to the temporary array.
If there are any remaining elements in the left half, we copy them to the temporary array.
If there are any remaining elements in the right half, we copy them to the temporary array.
Finally, we copy the elements from the temporary array to the original array.
We now have a sorted array.

## Implementation
python
```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left = arr[:mid]
        right = arr[mid:]
        merge_sort(left)
        merge_sort(right)
        i = j = k = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1
            k += 1
        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1
        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1
```

c
```c
void merge(int arr[], int l, int m, int r)
{
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[n1], R[n2];
    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
```

Merge sort is one of the first algorithms that we came across that has a time complexity of O(n log n). It is a stable sorting algorithm and is used in many real-world applications.
So, it is important to know how it works.
However, it is not the most efficient sorting algorithm. It is slower than the quick sort algorithm.

[Next - Quick Sort](/notes/quick-sort)
[Back](/notes)