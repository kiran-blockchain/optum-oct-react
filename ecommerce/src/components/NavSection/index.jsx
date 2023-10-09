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
    const buildNavLinks = () => {
        if (navItems && navItems.length > 0) {
            return navItems.map((item, index) => {
                return (
                    <li className="nav-item" key={item.name + item.index}>
                        <a className="nav-link" href={item.url}>{item.name}</a>
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