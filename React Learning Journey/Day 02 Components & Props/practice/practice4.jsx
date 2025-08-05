// 4. Destructure props inside the component function.

function Greet({name}){
    return <h1>Hello, {name}</h1>
}

function App(){
    return(
        <Greet name="Hatim"/>
    )
}

App()