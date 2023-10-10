import { useEffect, useState } from "react"

export const EffectDemo = () => {
    const [userinfo, setUserInfo] = useState(null);
    const [userId, setUserId] = useState(1);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(result => {
            return result.json();
        }).then(final => {
            setUserInfo(final);
        });
    }, [userId])//[] observable array any state variable 

    return (
        <div>
            <h6>This is Effect Demo
                {JSON.stringify(userinfo)}</h6>
                <button onClick={e => {
                    setUserId(2);
                }}>Click me</button>
        </div>
        
    )
}