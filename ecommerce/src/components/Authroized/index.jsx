import { useSelector } from "react-redux"
export const authentication = (WrappedComponent) => {
    const WithAuthentication = (props) => {
        const auth = useSelector(x => x.auth);
        if (auth.loginStatus) {
            return <WrappedComponent />
        } else {
            return <h1>Not Authenticated.</h1>
        }
    }
    return WithAuthentication;
}
