import CustomCheckbox from "./Checkbox"
import Button from "./Button"
import { useState } from "react"
export default function TodoRow(props){
    const [isHover, setIsHover] = useState(false)
    function showButton(){
        setIsHover(true)
    }
    function buttonDissapear(){
        setIsHover(false)
    }
    const [isChecked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!isChecked);
    };
    return(
        <div className="todorow" onMouseOver={showButton} onMouseOut={buttonDissapear}>
            <CustomCheckbox checked={isChecked} onChange={handleChange}/>
            <label className="addedText">{props.add}</label>
            {isHover ? <Button onClick={props.onClick} id={props.id}/> : null }     
        </div>
    )
}