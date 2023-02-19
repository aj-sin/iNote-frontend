import NoteContext from '../context/NoteContext'
import "../css/modal.css"
import React, { useContext, useState } from 'react'

const Addnote = (props) => {
    const context = useContext(NoteContext)
    const { addnote } = context
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const Onchange1 = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const handleclick = (e) => {
        if (note.title.trim().length === 0) {
            e.preventDefault()
            props.showalert("Title is Blank", "danger")
            props.modalClose()
        } else {
            e.preventDefault()
            addnote(note.title, note.description, note.tag)
            props.onDataChange(note);
            props.showalert("Note Added Successfully", "success")
            setNote({ title: "", description: "", tag: "" })
            props.modalClose()
        }
    }
    return (

        <div className='Add-modal'>
            <div>

            <h3>Add Note</h3>
            </div>

            <form className='modalform' onSubmit={handleclick}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"></label>
                    <input type="text" className="form-control" id="title"  name="title" placeholder='Title' aria-describedby="emailHelp" maxlength="40" value={note.title} onChange={Onchange1} />

                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"></label>
                    <input type="text" value={note.description} className="form-control" id="description" placeholder='Description' name='description' maxlength="150" onChange={Onchange1} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"></label>
                    <input type="text" className="form-control" id="tag" name='tag' placeholder='Tags' value={note.tag} maxlength="20" onChange={Onchange1} />
                </div>
                <div>

                <button  type="submit" className="modalbtn" >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Addnote
