//presentation component

import { NavSection } from "../NavSection";

// export const Header = (props) => {
    export const Header = ({headerConfig})=>{
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
            </div>
        </nav>
    );
}