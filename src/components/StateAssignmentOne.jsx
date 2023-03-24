import {useState} from 'react';
function StateAssignmentOne() {
    const [click, setClick] = useState(0);

    return(
        <div>
            <button onClick={() => setClick(click + 1)}>{click}</button>
        </div>
    );

}

export default StateAssignmentOne