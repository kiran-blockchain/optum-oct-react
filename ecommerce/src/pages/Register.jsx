import { Textbox } from "../components/Textbox"
import { RegisterConfig } from "../utils/config"

export const Register = () => {
    return (
        <form className="container mt-4">
            <Textbox textboxConfig={RegisterConfig.FirstName}/>
            <Textbox textboxConfig={RegisterConfig.LastName}/>
            <Textbox textboxConfig={RegisterConfig.Email}/>
            <Textbox textboxConfig={RegisterConfig.Password}/>
            <Textbox textboxConfig={RegisterConfig.ConfirmPassword}/>
            
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
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
    )
}