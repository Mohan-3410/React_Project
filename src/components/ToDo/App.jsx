import { useState } from "react"
import TodoRow from "./TodoRow"
import "./style.css"

export default function App(){

    const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([])

    function handleChange(event){
        const newItems = event.target.value
        setInputText(newItems)

    }
    function addItems(){
        setItems(prevValue => [...prevValue,inputText])
        setInputText("")
    }
    function deleteItem(id){
        setItems(prevValue => {
            return prevValue.filter((item,index) => {
                return index!==id
            })
        })
    }

    return(
        <div className="mainContainer">
            <h1>Todo</h1>
            <div className="top">
                {items.map((toDoItem,index) =>
                <TodoRow
                key={index} 
                id={index}   
                add={toDoItem}
                onClick={deleteItem}
                />)}
                
            </div>
            <div className="bottom">
                <input onChange={handleChange} type="text" value={inputText} placeholder="Add Task Here..."></input>
                <button onClick={addItems}>Add</button>
            </div>
        </div>
    )
}