import { useState } from "react";

function ProfileCard({titulo, arroba, img}){
    //let {titulo,arroba, img} = props;

    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    return (
        <div>
            <div>
                <img src={img} alt="logo" />
                <h3>{titulo}</h3>
                <p>{arroba}</p>
            </div>
            <button onClick={handleClick}>
                <p>+</p>
            </button>
            <div>
                <span><p>Likes: {count}</p></span>
            </div>
        </div>
    )
}


export default ProfileCard;