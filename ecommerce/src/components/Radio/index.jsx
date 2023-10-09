import { useState } from "react";

export const Radio = ({ radioConfig,handleRadioChange }) => {
    const [choice,selectChoice] = useState();
    const buildChoice = () => {
        return radioConfig.options.map((item, index) => {
            return (
                <div class="form-check">
                    <input class="form-check-input" type="radio" 
                    name={radioConfig.name} 
                    checked={item.value==choice}
                    id={item.id} 
                    value={item.value}
                    onChange={evt=>{
                        selectChoice(evt.target.value);
                        //send the event target to register page
                        handleRadioChange(evt.target);
                    }}  />
                    <label class="form-check-label" for={item.id}>
                        {item.label}
                    </label>
                </div>
            )
        });
    }
    return (
        <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">{radioConfig.label}</legend>
            <div class="col-sm-4">
                {buildChoice()}
            </div>
        </fieldset>
    )
}