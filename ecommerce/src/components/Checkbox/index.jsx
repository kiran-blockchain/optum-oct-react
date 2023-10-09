import { useState } from "react"

export const Checkbox = ({ checkboxConfig, handleCheckboxChange }) => {
    const [isChecked,setChecked]= useState();
    
    return (
        <div class="row mb-3">
            <div class="col-sm-4 offset-sm-2">
                <div class="form-check">
                    <input class="form-check-input" 
                    type="checkbox"
                    name={checkboxConfig.name}
                     id={checkboxConfig.id}
                     checked={isChecked}
                    onChange={evt=>{
                        handleCheckboxChange(evt.target)
                        setChecked(evt.target.value);
                        
                    }}
                     />
                    <label class="form-check-label" for={checkboxConfig.id}>
                        {checkboxConfig.label}
                    </label>
                </div>
            </div>
        </div>
    )
}