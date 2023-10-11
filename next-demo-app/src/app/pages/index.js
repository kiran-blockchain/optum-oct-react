import axios from "axios"

export const FirstPage = ({ data }) => {
    return (
        <div>
            <h1>First Page</h1>
            <h6>{JSON.stringify(data)}</h6>
        </div>
    )
}

export const getStaticProps = async () => {
    const products = await apiCall();
    return {
        props: {
            products
        }
    }
}

const apiCall = async () => {
    try {
        let result = await axios.get("https://dummyjson.com/products")
        console.log(result);
        return result.data.products;
    } catch (ex) {
        return { error: "Error in fetching the data" }
    }
}