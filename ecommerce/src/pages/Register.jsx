
import { Textbox } from "../components/Textbox"

import { Dropdown } from "../components/Dropdown"
import { RegisterConfig } from "../utils/config"
import { useState } from "react"
import { Radio } from "../components/Radio"
import { Checkbox } from "../components/Checkbox"

export const Register = () => {
    const [register, setRegister] = useState({
        // FirstName:"",
        // LastName:"",
        // Email:"",
        // Password:"",
        // ConfirmPassword:"",
        // Country:""
    });
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
        } else {
            state[target.name] = target.value;//
        }
        setRegister({ ...state })
    }
    return (
        <form className="container mt-4">
            <Textbox textboxConfig={RegisterConfig.FirstName}
                onchange={handleChange}
            />
            <Textbox textboxConfig={RegisterConfig.LastName}
                onchange={handleChange} />
            <Textbox textboxConfig={RegisterConfig.Email}
                onchange={handleChange} />
            <Dropdown
                dropdownConfig={RegisterConfig.Country}
                list={countryList}
                onchange={handleChange} />
            <Textbox textboxConfig={RegisterConfig.Password}
                onchange={handleChange} />
            <Textbox textboxConfig={RegisterConfig.ConfirmPassword}
                onchange={handleChange} />

            <Radio onchange={handleChange}
                radioConfig={RegisterConfig.Gender} />
            <Checkbox checkboxConfig={RegisterConfig.AgreeTerms}
            onchange={handleChange}
            />
            <button type="submit" class="btn btn-primary">Sign in</button>
            <div>
                {JSON.stringify(register)}
            </div>
        </form>
    )
}