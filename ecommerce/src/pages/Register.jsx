

import { Textbox } from "../components/Textbox"
import { Dropdown } from "../components/Dropdown"
import { RegisterConfig } from "../utils/config"
import { useState } from "react"
import { Radio } from "../components/Radio"
import { Checkbox } from "../components/Checkbox"
import { useApi } from "../hooks/useApi"

export const Register = () => {
    const [register, setRegister] = useState({});
    const [isButtonEnabled, setEnabled] = useState(false);
    const [countryList, setCountryList] = useState([])

    const apiResult = useApi("https://restcountries.com/v2/all", "get");
    console.log(apiResult);
    const handleChange = (target) => {
        const state = register;
        if (target.type == 'checkbox') {
            state[target.name] = target.checked;
            setEnabled(target.checked);

        } else {
            state[target.name] = target.value;//
        }
        setRegister({ ...state })

    }
    // if (apiResult && apiResult.status == "success" && apiResult.data.length > 0) {
    //     let mapped = apiResult.data.map(x => {
    //         return { text: x.name, value: x.alpha2Code }
    //     });
    //     setCountryList(mapped);
    // }
    console.log("I am loading!!!!");
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
            {isButtonEnabled ? <button type="submit"

                class="btn btn-primary">Sign in</button> : null}

            <div>
                {JSON.stringify(register)}
            </div>
        </form>
    )
}