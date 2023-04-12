import Link from 'next/link'
import NotesLayout from '@/components/notes_layout'

export default function PointersC() {
    return (
        <NotesLayout>
            <div className="notes">
                <h1 className='center main-title'>Pointers in C</h1>
                <h2>
                    Introduction
                </h2>
                <p>Pointers are variables that store the address of another variable.</p>
                <p>Pointers are used to access the memory location of a variable.</p>
                <h2>
                    Declaring Pointers
                </h2>
                <p>
                    Pointers are declared using the <code>*</code> operator.
                </p>
                <pre>
                    <code className='language-clike'>
                        {`
int *p;
int x = 12;
p = &x;
                        `}
                    </code>
                </pre>
                <p>
                    The operator <code>&</code> is used to get the address of a variable.
                    This address is then stored in the pointer variable.
                </p>
                <p>
                    The <code>*</code> operator is used to get the value stored at the address stored in the pointer variable.
                </p>
                <pre>
                    <code className='language-clike'>
                        {`
int *p;
int x = 12;
p = &x;
printf("%d", *p);
                        `}
                    </code>
                </pre>
                <h2>
                    Pointer Arithmetic
                </h2>
                <p>
                    Pointers can be incremented and decremented.
                </p>
                <pre>
                    <code className='language-clike'>
                        {`
int *p;
int x = 12;
p = &x;
p++;
p--;
p += 2;
                        `}
                    </code>
                </pre>
                <p>
                    The <code>sizeof</code> operator can be used to get the size of a pointer.
                </p>
                <h2>
                    Pointers and Arrays
                </h2>
                <p>
                    Pointers can be used to access arrays.
                </p>
                <pre>
                    <code className='language-clike'>
                        {`
int arr[5] = {1, 2, 3, 4, 5};
int *p = arr;
printf("%d", *p);
                        `}
                    </code>
                </pre>
                <p>
                    The way arrays are stored in memory is that the first element of the array is stored at the address of the array.
                    The second element is stored at the address of the array + 1, and so on.
                </p>
                <p>
                    Hence, we are able to access the first element of the array using the pointer.
                    Essentially, the pointer is pointing to the first element of the array.
                </p>
                <h2>
                    Pointers and Functions
                </h2>
                <p>
                    Pointers can be used to pass arrays to functions.
                </p>
                <pre>
                    <code className='language-clike'>
                        {`
void printArray(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", *(arr+i));
    }
}
                        `}
                    </code>
                </pre>
                <h2>
                    Conclusion
                </h2>
                <p>
                    Pointers are a very important concept in C.
                    They are used to access the memory location of a variable.
                    They are also used to pass arrays to functions.
                </p>
                <p>
                    Pointers are mainly used where we need to pass a large amount of data to a function.
                    This is because arrays are passed by reference, and not by value.
                </p>
                <p>
                    Pointers store the address hence, instead of storing the entire array in memory, we can just store the address of the array.
                    This saves a lot of memory.
                </p>
                <div className="center color-div">
                    <Link href="/notes/c/arrays">
                        <h2>
                            Next Up <i className="bi bi-arrow-right"></i> <Link href="/notes/c/structs">Structs in C</Link>
                        </h2>
                    </Link>
                </div>
                <div className="disclaimer">
                    <p>
                        Nearly 80% of this article is AI generated.
                    </p>
                </div>
                <footer className="center sticky-credit">
                    <h3>
                        Content produced by <Link href="/">Ishan</Link> Joshi for Fun :)
                    </h3>
                </footer>
            </div>
      </NotesLayout>
  )
}
