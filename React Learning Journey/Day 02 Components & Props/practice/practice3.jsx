// 3. Pass different names into Greet component and render it 3 times.

function Greet(props){
    return <h2>Hello, {props.name}</h2>
}

function App(){
    return(
        <div>
            <Greet name="Hatim"/>
            <Greet name="Jafar"/>
            <Greet name="Jumana"/>
        </div>
    )
}

