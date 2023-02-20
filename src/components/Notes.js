import React, { useContext, useEffect, useRef, useState } from 'react'

import "../css/note.css"
import Addnote from './Addnote'

import NoteContext from '../context/NoteContext'
import NoteItem from './NoteItem'
import {
    useNavigate
} from "react-router-dom";
const Notes = (props) => {
    const context = useContext(NoteContext)
    const { notes, getnote, editnote ,getuser} = context
    const [childData, setChildData] = useState(null);
    const navigate = useNavigate()
    const handleDataChange = data => {
        setChildData(data);
    };
    useEffect(() => {
        if (localStorage.getItem('token')) {
            // console.log("getting note")
            getnote()
            getuser()
        } else {
            navigate("/login")

        }
        // eslint-disable-next-line
    }, [childData])
    const [note, setNote] = useState({ id: "", etitle: "", ediscription: "", etag: "" })

    const ref = useRef(null)
    // const ref2=useRef(null)

    // const handleonclick2=()=>{
    //     ref2.current.click()
    // }

    const updatenote = (currentnote) => {
        ref.current.click()//when edit icon is clicked on note card this function clicks the lauch modal and update modal is show
        setNote({ id: currentnote._id, etitle: currentnote.title, ediscription: currentnote.discription, etag: currentnote.tag })

    }

    const Onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const handleclick = (e) => {


        e.preventDefault()
        if (!note.etitle.trim().length) { note.etitle = "Add a title" }
        if (!note.ediscription.trim().length) { note.ediscription = "Add Description" }
        if (!note.etag.trim().length) { note.etag = "Add Tag" }
        editnote(note.id, note.etitle, note.ediscription, note.etag)
        props.showalert("Note Edited Successfully", "success")
        setShow(false)
        setChildData(note)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modal, setModal] = useState(false);

    const modalClose = () => setModal(false);
    const modalShow = () => setModal(true);

    return (
        <>
            <div className='completenote'>
                {/* <img  onClick={handleonclick2}  className='addlogo' src={addlogo} alt="" srcSet="" /> */}
                
                        <h2>Your Notes</h2>
                    
                        <button onClick={modalShow} className="btn-open">
                          Add
                        </button>
                   

                {modal && (
                    <div className="modal">
                        <div onClick={modalClose} className="overlay"></div>
                        <div className="modal-content">
                            <Addnote onDataChange={handleDataChange} showalert={props.showalert} modalClose={modalClose} />

                            <button className="close-modal" onClick={modalClose}>
                                <strong>X</strong>
                            </button>
                        </div>
                    </div>
                )}

                <button className="btn-modal" ref={ref} variant="primary d-none" onClick={handleShow}>
                    Launch demo modal
                </button>


                {show && (
                    <div className="modal">
                        <div onClick={handleClose} className="overlay"></div>
                        <div className="modal-content Add-modal">
                            <h3>Update Note</h3>
                            <form className='modalform'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label"></label>
                                    <input type="text" className="form-control" id="etitle" maxlength="50" name="etitle" placeholder='Title' value={note.etitle} aria-describedby="emailHelp" onChange={Onchange} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label"></label>
                                    <input type="text" className="form-control" id="edescription" placeholder='Description' name='ediscription' maxlength="150" value={note.ediscription} onChange={Onchange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label"></label>
                                    <input type="text" className="form-control" placeholder='Tags' id="etag" name='etag' maxlength="30" value={note.etag} onChange={Onchange} />
                                </div>


                            </form>

                            <button className="close-modal" onClick={handleClose}>
                                <strong>X</strong>
                            </button>
                            <button variant="primary" className="modalbtn" onClick={handleclick}>
                                Edit Note
                            </button>

                        </div>
                    </div>
                )}



                {localStorage.getItem('token') && <div className='maincardholder'>

                    {/*//! iF Same credentials are inserted than it will not show the note
                */}
                    <div className="container">
                        {notes.length === 0 && "Write a note man!!!"}
                    </div>
                    <div className='notecard'>

                        {
                            notes.map((note) => {

                                return <NoteItem note={{ note, updatenote }} key={note._id} showalert={props.showalert} />
                            })
                        }
                    </div>

                </div>}
            </div>
        </>
    )
}

export default Notes
