
import { Textbox } from "../components/Textbox"

import { Dropdown } from "../components/Dropdown"
import { RegisterConfig } from "../utils/config"
import { useState } from "react"

export const Register = () => {
    const [register,setRegister] =useState({
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
    const handleChange =({name,value})=>{
        const state = register;
        state[name] = value;//
        setRegister({...state})
    }
    return (
        <form className="container mt-4">
            <Textbox textboxConfig={RegisterConfig.FirstName}
                      onchange = {handleChange}
            />
            <Textbox textboxConfig={RegisterConfig.LastName}
            onchange = {handleChange} />
            <Textbox textboxConfig={RegisterConfig.Email}
            onchange = {handleChange} />
            <Dropdown 
            dropdownConfig={RegisterConfig.Country} 
            list={countryList}
            onchange={handleChange} />
            <Textbox textboxConfig={RegisterConfig.Password} 
            onchange={handleChange} />
            <Textbox textboxConfig={RegisterConfig.ConfirmPassword} 
            onchange={handleChange} />

            <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                <div class="col-sm-4">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                        <label class="form-check-label" for="gridRadios1">
                            First radio
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                        <label class="form-check-label" for="gridRadios2">
                            Second radio
                        </label>
                    </div>
                    <div class="form-check disabled">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                        <label class="form-check-label" for="gridRadios3">
                            Third disabled radio
                        </label>
                    </div>
                </div>
            </fieldset>
            <div class="row mb-3">
                <div class="col-sm-4 offset-sm-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1">
                            Example checkbox
                        </label>
                    </div>
                </div>
            </div>
            {JSON.stringify(register)}
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
    )
}