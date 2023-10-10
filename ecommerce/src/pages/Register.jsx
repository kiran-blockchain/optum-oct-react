

 import { Textbox } from "../components/Textbox"
import { Dropdown } from "../components/Dropdown"
import { RegisterConfig } from "../utils/config"
import { useState } from "react"
import { Radio } from "../components/Radio"
import { Checkbox } from "../components/Checkbox"

export const Register = () => {
    const [register, setRegister] = useState({});
    const [isButtonEnabled,setEnabled] = useState(false);
    const countryList = [{
        value: "IN",
        text: "India"
    },
    {
        value: "USA",
        text: "United States of America"
    }];
    const handleChange = (target) => {
        const state = register;
        if (target.type == 'checkbox') {
            state[target.name]=target.checked;
            setEnabled(target.checked);
            
        } else {
            state[target.name] = target.value;//
        }
        setRegister({ ...state })
       
    }
    return (
        <form className="container mt-4">
            <Textbox textboxConfig={RegisterConfig.FirstName}
                handleTextboxChange={handleChange}
            />
            <Textbox textboxConfig={RegisterConfig.LastName}
                handleTextboxChange={handleChange} />
            <Textbox textboxConfig={RegisterConfig.Email}
                handleTextboxChange={handleChange} />
            <Dropdown
                dropdownConfig={RegisterConfig.Country}
                list={countryList}
                handleDdlChange={handleChange} />
            <Textbox textboxConfig={RegisterConfig.Password}
                handleTextboxChange={handleChange} />
            <Textbox textboxConfig={RegisterConfig.ConfirmPassword}
                handleTextboxChange={handleChange} />

            <Radio handleRadioChange={handleChange}
                radioConfig={RegisterConfig.Gender} />

            <Checkbox checkboxConfig={RegisterConfig.AgreeTerms}
            handleCheckboxChange={handleChange}
            />
            {isButtonEnabled?<button type="submit" 
           
            class="btn btn-primary">Sign in</button>:null}
            
            <div>
                {JSON.stringify(register)}
            </div>
        </form>
    )
}