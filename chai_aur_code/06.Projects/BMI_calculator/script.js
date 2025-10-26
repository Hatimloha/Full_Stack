const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const weight = parseInt(document.querySelector('#weight').value)
     
    const height = parseInt(document.querySelector('#height').value)


    const result = document.querySelector("#result")


    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Enter valid Height"
        result.style.color = 'red' 
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Enter valid weight"
        result.style.color = 'red' 
    }else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)

        result.innerHTML = `<span>Current Index:${BMI}</span>`

        result.style.color = 'green'
    }



})