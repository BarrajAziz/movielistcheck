import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const Add = ({ handleAdd }) => {
       
    const [newMovie, setNewMovie] = useState({
        id:1,
        title: "",
        posterUrl: "",
        rate: 1,
        description:"",         
       
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange=(e)=>{
setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }

    return (
        <div className="adding-movie">
            <Button variant="primary" onClick={handleShow}>
                Add Movie
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        TITLE:
                        <input type="text" className="form-control" placeholder="enter title here" onChange={handleChange} name="title" value={newMovie.title} />
                        DESCRIPTION:
                        <input type="text" className="form-control" placeholder="enter description here" onChange={handleChange} name="description" value={newMovie.description} />
                        POSTERURL:
                        <input type="url" className="form-control" placeholder="enter url here" onChange={handleChange} name="posteUrl" value={newMovie.posterUrl} />
                        RATE:
                        <input type="text" className="form-control" placeholder="enter rate here" onChange={handleChange} name="rate" value={newMovie.rate} />
                        <Button variant="primary" type="submit">
                            SUBMIT
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{handleAdd(newMovie);handleClose()}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Add