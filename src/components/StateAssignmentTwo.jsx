import React, {useState} from "react";

function StateAssignmentTwo(){
    const [array, setArray] = useState([]);

    return(
        <div>
            <button onClick={() => setArray([...array, Math.floor(Math.random() * 10 )])}>Click here!</button>

            <ul>
                {array.map((item, index) => {return <li key={index}>{item}</li>;})}
            </ul>
        </div>
    );
}

export default StateAssignmentTwo