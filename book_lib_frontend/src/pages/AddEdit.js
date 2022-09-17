import React,{useEffect,useState} from 'react';
import{useNavigate,useParams} from 'react-router-dom';
import {toast} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.css';


const initialState = {
    Book_id :"",
    description:"",
    Book_title:"",
    Book_author:"",
    Status:"",
    Issued_to:"",
}

const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const[data,setData]=useState({});
    const navigate = useNavigate();
    let [books,setbooks]=useState([])

    

    const{Book_id,description, Book_title,Book_author,Status,Issued_to} = state;
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state,[name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!Book_id || !description || !Book_title || !Book_author || !Status || !Issued_to){
            toast.error("please provide value in each  input field");
        }else{
            books.create(Book_id,description,Book_title,Book_author,Status,Issued_to)(state,(err) =>{
                if(err){
                    toast.error(err);
                } else{
                    toast.success("user created successfully!");
                }
            });
            setTimeout(() =>navigate.push("/"), 500)
        }
    };
    return (
        
        <div className='mt-4'>

            <div className="card col-md-4 mx-auto shadow p-3 mb-5 bg-white rounded">
            <form 
            style={{
                margin:"auto",
                padding:"15px", 
                maxWidth:"400px", 
                
                }} 
                onSubmit={handleSubmit}
                >
                    <label htmlFor="name" className="mx-2">Book ID</label>
                    <div className="form-group">
                    
                    <input
                    type="text"
                    className="form-control"
                    id='Book_id'
                    name="Book_id"
                    placeholder='Yourname ....'
                    value={Book_id}
                    onChange={handleInputChange}

                    />
                    
                    </div>

                   <div className="form-group mt-2">
                   <label htmlFor="Book_title">Book Title</label>
                    <input
                    type="text"
                    className="form-control"
                    id='Book_title'
                    name="Book_title"
                    placeholder='your Email ....'
                    value={Book_title}
                    onChange={handleInputChange}

                    />
                   </div>
                    <div className="form-group mt-2">
                    <label htmlFor="description">Description</label>
                    <input
                    className="form-control"
                    type="text"
                    id='description'
                    name="description"
                    placeholder='Enter description ....'
                    value={description}
                    onChange={handleInputChange}

                    />
                     </div>
                    <div className="form-group mt-2">
                    <label htmlFor="Book_author">Book_author</label>
                    <input
                    className="form-control"
                    type="text"
                    id='Book_author'
                    name="Book_author"
                    placeholder='Enter book author name ....'
                    value={Book_author}
                    onChange={handleInputChange}

                    />
                     </div>
                    <div className="form-group mt-2">
                    <label htmlFor="Status">Status</label>
                    <input
                    className="form-control"
                    type="Text"
                    id='Status'
                    name="Status"
                    placeholder='Enter Status ....'
                    value={Status}
                    onChange={handleInputChange}

                    />
                     </div>
                    <div className="form-group mt-2">
                    <label htmlFor="Issued_to">Issued To</label>
                    <input
                    className="form-control"
                    type="text"
                    id='Issued_to'
                    name="Issued_to"
                    placeholder='Enter name for issue book ....'
                    value={Issued_to}
                    onChange={handleInputChange}

                    />
                    </div>
                    <input type="submit" className="btn btn-primary mx-2 mt-3" value="Save" />
                </form>
            </div>
               




           
            <h2>AddEdit</h2>
        </div>
    );
}

export default AddEdit;
