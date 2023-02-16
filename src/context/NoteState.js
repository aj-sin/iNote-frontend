import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
    const host = "http://localhost:5000"
    // const host = "https://inoteapi.onrender.com"
    const notesinitial = []
    const [notes, setNotes] = useState(notesinitial)

    //get notes
    const getnote = async () => {
        // API CALL
        const response = await fetch(`${host}/api/note/fetchallnote`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem("token")
            },
        });
        const json = await response.json()
        setNotes(json)
    }

    //Add note
    const addnote = async (title, discription, tag) => {
        // console.log("Addnote is being initiated")
        //API CALL
        const response = await fetch(`${host}/api/note/addnote`, {
            method: 'POST',
            mode: 'cors',

            headers: {
                'Content-Type': "application/json",
                'auth-token':localStorage.getItem('token')

            },

            body: JSON.stringify({ title, discription, tag })
        });
        await response.json()
        // console.log(json)
    }

    //edit note
    //now there is a very high chance it will not work reference video 65 time 1:00
    const editnote = async (id, title, discription, tag) => {
        //API call
        // console.log("note edit")
        const response = await fetch(`${host}/api/note/updatenote/${id}`, {
            method: 'PUT',

            headers: {
                'Content-Type': "application/json",
                'auth-token':localStorage.getItem('token')

            },

            body: JSON.stringify({ title, discription, tag })
        });

        //mydoing
       await response.json()
    //    console.log(json)
        


        let newnotes=JSON.parse(JSON.stringify(notes))
        // let newnotes=notes----->this will not work as it create a reference to the notes object
        
        //logic to edit in client
        for (let index = 0; index < newnotes.length; index++) {
            // console.log(notes[index])          
            if (newnotes[index]._id === id) {
                newnotes[index].title = title
                newnotes[index].discription = discription
                newnotes[index].tag = tag
                break;
            }
            setNotes(newnotes)

        }

    }

    //Delete note
    const deletenote = async(id) => {
        const response = await fetch(`${host}/api/note/deletenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
                'auth-token':localStorage.getItem('token')
            },
        });
        await response.json()
        // console.log(json)
        props.showalert("Note Deleted Successfully","success")
        const newnote=notes.filter((note)=>{return note._id!==id})
        setNotes(newnote)

    }
    return (
        <NoteContext.Provider value={{ notes, addnote, deletenote, editnote, getnote }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState