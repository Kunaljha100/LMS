import React,{useState,useEffect} from 'react'
import ListBookItem from '../components/ListBookItem'

const BooksList = () => {

    let [books,setbooks]=useState([])

    useEffect(()=>{
        getbooks()

    },[])

    let getbooks =async() =>{
        let response= await fetch('/api')
        let data = await response.json()
        console.log('DATA:',data)
        setbooks(data)
    }
  return (
    <div class="container">
      <div  className="table-responsive shadow mb-5">
        <table className='table table-hover '>
            <thead>
                <tr>
                    <th >SR NO</th>
                    <th >Book ID</th>
                    <th >Book Title</th>
                    <th >Book Author</th>
                    <th >Status</th>
                    <th >Issued TO</th>
                    <th >Create Date</th>
                    <th >Descriptions</th>
                    <th >Action</th>
                </tr>

                
            </thead>
            <tbody>
                {Object.keys(books).map((id,index) => {
                    return (
                        <tr key={id}>
                                <th scope="row">{index + 1}</th>
                                <td>{books[id].Book_id}</td>
                                <td>{books[id].Book_title}</td>
                                <td>{books[id].Book_author}</td>
                                <td>{books[id].Status}</td>
                                <td>{books[id].Issued_to}</td>
                                <td>{books[id].create_date}</td>
                                <td>{books[id].description}</td>
                                <td><a href='#'><i class="fa fa-edit"></i></a>&nbsp;&nbsp;<a href="#"><i class="fa fa-eye"></i></a></td>
                                <td>
                                    {/* <Link to={`/update/${id}`}>
                                    <button className='btn btn-secondary'>Edit</button>
                                    </Link>&nbsp;&nbsp;
                                    <button className='btn btn-danger pl-2'>Delete</button>&nbsp;&nbsp;
                                    <Link to={`/view/${id}`}>
                                    <button className='btn btn-primary'>View</button>
                                    </Link> */}
                                </td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
        
    </div>
    </div>
  )
}

export default BooksList