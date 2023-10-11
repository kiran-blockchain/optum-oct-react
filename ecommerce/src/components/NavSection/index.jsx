import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../store/AuthReducer";
import { resetCart } from "../../store/productReducer";

export const NavSection = ({ navItems }) => {
    // const navItems = [{
    //     index: 0,
    //     name: "Login",
    //     url: "/login"
    // },
    // {
    //     index: 1,
    //     name: "Register",
    //     url: "/register"
    // },
    // {
    //     index: 2,
    //     name: "Products",
    //     url: "/products"
    // },
    // {
    //     index: 3,
    //     name: "Cart",
    //     url: "/cart"
    // },
    // {
    //     index: 4,
    //     name: "Logout",
    //     url: "/logout"
    // },];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(x=>x.auth);

    const buildNavLinks = () => {
        if (navItems && navItems.length > 0) {
            if(auth.loginStatus){
                navItems = navItems.filter(x=>x.index>=2)
            }else{
                navItems = navItems.filter(x=>x.index<2)
            }
            return navItems.map((item, index) => {
                return (
                    <li className="nav-item" key={item.name + item.index}>
                        <a className="nav-link" onClick={e=>{
                            if(item.url=='/logout'){
                                dispatch(resetCart())
                                dispatch(logout());
                                navigate("/");
                            }else{
                                navigate(`${item.url}`)
                            }

                        }}>{item.name}</a>
                    </li>
                );
            })
        }
    }
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {buildNavLinks()}
            </ul>
        </div>
    );
}