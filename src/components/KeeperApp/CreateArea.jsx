import React, { useState } from "react";

function CreateArea(props) {
    const [notes, setNotes]= useState({
        title : "",
        content : ""
    });
    
    function handleChange(event){
        const {name, value} = event.target;
        setNotes((prevValue) => {
            return {...prevValue, [name] : value}
        })
    }
    

    function submitNote(event){
        props.onAdd(notes)
        event.preventDefault();
    }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={notes.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3"  value={notes.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
