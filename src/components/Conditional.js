import React from 'react'

const Conditional = (props) => {
    // condition ? statement if true : statement if false
    return (
        <div>
            {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
        </div>

    )

    // if (props.isLoading === true) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }

    // return (
    //     <h1>Some cool stuff about conditional rendering</h1>

    // )


}
export default Conditional