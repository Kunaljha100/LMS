import React from 'react'

const Booksdetail = ({match}) => {
    let bookid = match.params.id
  return (
    <div><h1>Single books {bookid}</h1></div>
  )
}

export default Booksdetail