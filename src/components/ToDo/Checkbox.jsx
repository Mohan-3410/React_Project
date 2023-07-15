import {useState} from "react"

const CustomCheckbox = () => {
    const [isChecked, setChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setChecked(!isChecked);
    };
  
    return (
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={`checkmark ${isChecked ? 'checked' : ''}`}></span>
        
      </label>
    );
  };
  export default CustomCheckbox;