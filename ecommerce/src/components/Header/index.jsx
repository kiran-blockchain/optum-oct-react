//presentation component

import { useContext } from "react";
import { NavSection } from "../NavSection";
import { CartContext } from "../../Providers/cartProvider";

// export const Header = (props) => {
    export const Header = ({headerConfig})=>{
    const {itemCount,removeItem} = useContext(CartContext)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {headerConfig.title}
                    </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavSection navItems={headerConfig.navItems}/>
                <button className="btn btn-primary">Cart - {itemCount.length}</button>
            </div>
        </nav>
    );
}