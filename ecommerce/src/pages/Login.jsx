import { useState } from "react"
import { RegisterConfig } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/AuthReducer";
import { Textbox } from "../components/Textbox";
import { ProgressIndicator } from "../components/Progress";
import { useNavigate } from "react-router";
import { useNetworkState } from "../hooks/useNetwork";

export const Login = () => {
    const navigate = useNavigate();
    //import custom hook
    const networkStatus = useNetworkState();
    
    const auth = useSelector(x => x.auth);
    const [signin, setSignin] = useState({
        username: "kminchelle",
        password: "0lelplR"
    });
    const dispatch = useDispatch();

    const handleChange = (target) => {
        const state = signin;
        state[target.name] = target.value;
        setSignin({ ...state })
    };
    const showSuccess = () => {
        if (auth.loginStatus) {
            setTimeout(() => {
                navigate("/products")
            }, 5000)
            return (<div class="alert alert-success" role="alert">
                User Logged In Successfully.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>)
        } else if (auth.hasError) {
            return (<div class="alert alert-danger" role="alert">
                Invalid Credentials.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>)
        }
    };
    const showProgress = () => {
        return (auth.isLoading ? <ProgressIndicator /> : null);
    }
    return (
        <form className="container mt-4">
            {showSuccess()}
            {showProgress()}
            <div>
                <label>{networkStatus ? "Online" : "offline"}</label>
            </div>

            <Textbox textboxConfig={RegisterConfig.Username}
                handleTextboxChange={handleChange}
            />
            <Textbox textboxConfig={RegisterConfig.Password}
                handleTextboxChange={handleChange}
            />
            <button type="button"

                class="btn btn-primary"
                onClick={e => {
                    dispatch(login(signin))
                }}>Sign in</button>
        </form>

    )
}