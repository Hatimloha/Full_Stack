// Create a component UserCard that accepts name and age as props and displays them.

function UserCard(props){
    return(
        <div>
            <h2>Hello, {props.name}</h2>
            <p>My age is: {props.age}</p>
        </div>
    )
}


function app(){
    return(
        <div>
            <UserCard name="Hatim" age='25' />
        </div>
    )
}

// ReactDOM.render(<App />, document.getElementById('root')); // if using plain React

import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);