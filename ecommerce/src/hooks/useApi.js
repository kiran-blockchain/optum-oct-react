import axios from "axios";
import { useEffect ,useState} from "react";
export const useApi = (url, payload, type) => {
    const [result, setResult] = useState();
    useEffect(() => {
        const fetchInfo = async () => {
            try {
                let response
                if (type == 'POST') {
                    response = await axios.post(url, payload);
                }
                else {
                    response = await axios.get(url);
                }
                setResult({ status: "success", data: response.data, error: "" })
            } catch (ex) {
                setResult({ status: "failure", data: "", error: "Error in fetching the data" })
            }
        };
        fetchInfo()
    }, [url])
    return result;
}