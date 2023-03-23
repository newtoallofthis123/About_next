import Layout from '@/components/layout'
import React from 'react'

export default function StructsC() {
    return (
        <Layout>
            <h2>
                Structs in C
            </h2>
            <p>
                Structs are a way to group together multiple variables of different types into one variable. This is useful for when you want to store multiple variables of different types in one variable. For example, if you wanted to store a person's name, age, and height, you could create a struct called person and store the name, age, and height in that struct. This is useful because you can then pass the person struct to a function and the function can access the name, age, and height of the person. This is also useful because you can create an array of structs and store multiple people in that array. This is useful because you can then loop through the array and access the name, age, and height of each person in the array.
            </p>
            <p>
                
            </p>
            <iframe style={{width: "100%", height: "100vh",}} src="https://gist.github.com/newtoallofthis123/d43bc6c49988de07e741756b27b2ec57.pibb"></iframe>
      </Layout>
  )
}
