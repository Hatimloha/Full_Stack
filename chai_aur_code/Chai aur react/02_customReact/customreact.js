
function customRender(reactElement, container){
    
    // This code is not good for multiple element
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */

    // Modulor version of above code:
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    } 
    container.appendChild(domElement)
}

const reactElement =  {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_black'
    },
    Children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root')


customRender(reactElement, mainContainer)