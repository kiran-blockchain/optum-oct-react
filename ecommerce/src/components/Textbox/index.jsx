import { useState } from "react"

export const Textbox = ({textboxConfig,handleTextboxChange}) => {
    //Creating state
    const [data,setData] = useState(textboxConfig.defaultValue);
    return (
        <div class="row mb-3">
            <label for={textboxConfig.id}
                class="col-sm-2 col-form-label">{textboxConfig.label}</label>
            <div class="col-sm-4">
                <input type={textboxConfig.type}
                    class="form-control"
                    id={textboxConfig.id}
                    name={textboxConfig.name}
                    placeholder={textboxConfig.placeholder} 
                    value={data}
                    onChange={evt=>{
                        //Send the field name and value to the parent
                        handleTextboxChange(evt.target);

                        //update the local state
                        setData(evt.target.value);  
                                           
                    }}
                    />
            </div>{data}
        </div>
    )
}