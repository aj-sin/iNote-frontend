import React from 'react'
import "../css/alert.css"
export default function Alert(props) {
    
  return (
   props.alert && <div className={`alert ${props.alert.type==="danger"?"error":"success"}`} role="alert" id="alert" >
        <strong>{props.alert.type==="danger"?"Error":"Success"}</strong>: {props.alert.msg} 
    </div>
  )
}