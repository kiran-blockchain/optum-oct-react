export const HeaderConfig = {
    title: "E-Commerce App",
    navItems: [{
        index:0,
        name: "Login",
        url: "/login"
    },
    {
        index:1,
        name: "Register",
        url: "/register"
    },
    {
        index:2,
        name: "Products",
        url: "/products"
    },
    {
        index:3,
        name: "Cart",
        url: "/cart"
    },
    {
        index:4,
        name: "Logout",
        url: "/logout"
    },]
};
export const RegisterConfig ={
    FirstName:{
        id:"FirstName",
        name:"FirstName",
        label:"First Name",
        type:'text',
        placeholder:"Enter First Name"
    },
    LastName:{
        id:"LastName",
        name:"LastName",
        label:"Last Name",
        type:'text',
        placeholder:"Enter Last Name"
    },
    Email:{
        id:"Email",
        name:"Email",
        label:"Email",
        type:'email',
        placeholder:"Enter email"
    },
    Country:{
        id:"Country",
        name:"Country",
        label:"Country",
        type:'dropdown',
        placeholder:"Select Country" 
    },
    Password:{
        id:"Password",
        name:"Password",
        label:"Password",
        type:'password',
        placeholder:"Enter Password"
    },
    ConfirmPassword:{
        id:"ConfirmPassword",
        name:"ConfirmPassword",
        label:"Confirm Password",
        type:'password',
        placeholder:"Confirm Password"
    },
}