export const HeaderConfig = {
    title: "E-Commerce App",
    navItems: [{
        index: 0,
        name: "Login",
        url: "/login"
    },
    {
        index: 1,
        name: "Register",
        url: "/register"
    },
    {
        index: 2,
        name: "Products",
        url: "/products"
    },
    {
        index: 3,
        name: "Cart",
        url: "/cart"
    },
    {
        index: 4,
        name: "Logout",
        url: "/logout"
    },]
};
export const RegisterConfig = {
    FirstName: {
        id: "FirstName",
        name: "FirstName",
        label: "First Name",
        type: 'text',
        placeholder: "Enter First Name",
        defaultValue: "",
    },
    LastName: {
        id: "LastName",
        name: "LastName",
        label: "Last Name",
        type: 'text',
        placeholder: "Enter Last Name",
        defaultValue: "",
    },
    Email: {
        id: "Email",
        name: "Email",
        label: "Email",
        type: 'email',
        placeholder: "Enter email",
        defaultValue: "",
    },
    Username: {
        id: "username",
        name: "username",
        label: "User Name",
        type: 'text',
        placeholder: "Enter Username",
        defaultValue: "",
    },
    Country: {
        id: "Country",
        name: "Country",
        label: "Country",
        type: 'dropdown',
        placeholder: "Select Country",
        defaultValue: "",
    },
    Password: {
        id: "Password",
        name: "password",
        label: "password",
        type: 'password',
        placeholder: "Enter Password",
        defaultValue: "",
    },
    ConfirmPassword: {
        id: "ConfirmPassword",
        name: "ConfirmPassword",
        label: "Confirm Password",
        type: 'password',
        placeholder: "Confirm Password",
        defaultValue: "",
    },
    AgreeTerms: {
        id: "AgreeTerms",
        name: "AgreeTerms",
        label: "I agree terms and conditions",
        type: 'checkbox',
        placeholder: "",
        defaultValue: "",
    },
    Gender: {
        id: "Gender",
        name: "Gender",
        label: "Gender",
        options: [{
            id: "Male",
            label:"Male",
            value: "M"
        },
        {
            id: "Female",
            label:"Female",
            value: "F"
        },
        {
            id:"NA",
            label: "Do Not Disclose",
            value: "NA"
        }]
    },
}