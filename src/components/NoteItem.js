import NoteContext from '../context/NoteContext'
import React,{useContext} from 'react'
import "../css/noteitem.css"

const NoteItem = (props) => {
    const context = useContext(NoteContext)
    const {deletenote}=context
    const {note,updatenote}=props.note

    return (
            <div className="card" >
                    <div className="card-body">
                        <div className='topheading'>

                        <h5 className="card-title">{note.title}</h5>
                        <div className='iconpack'>
                        <i className="fa-regular fa-pen-to-square icon"  onClick={()=>{updatenote(note)}}></i>
                        <i className="fa-regular fa-skull-crossbones mx-2 " onClick={()=>{deletenote(note._id)}}></i>
                        </div>
                        </div>
                        <p className="card-text" >{note.discription}</p>
                    </div>
            </div>
    )
}

export default NoteItem
