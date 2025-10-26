// <!-- Command -->
console.log(window)
console.log(document) || console.log(window.document)
console.log(dir.document)

// <!-- document with dot -->
console.log(document.location)
console.log(document.links)
console.log(document.links[2]) // <!-- document object are not array it look simillar but not in reality-->

// <!-- DOM Manuplation -->
document.getElementById('title') // all the item with this tag
document.getElementById('title').id // title
document.getElementById('title').class // undefine
document.getElementById('title').className // heading

// we need to define which attribute is require 
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')

// setAttribute: Always remeber it override the other attribute so always write all the attribute
document.getElementById('title').setAttribute('class', 'check heading') // (define type, attribute name)

// Style:
const title = document.getElementById('title');
title.style.backgroundColor = 'green'
title.style.padding = '15px'
title.style.borderRadius = '10px'

// Imp: 

//  <h1 id="title">DOM Learning with chai aur code <span style="display: none;" >Test Text</span></h1>

// textContent 
// => it will so all the content which is visible or not (we can do display:none css to hide the text but textContent give all)
// Output: DOM Learning with chai aur code Test Text

// innerText 
// => it will show only visible content
// Output: DOM Learning with chai aur code.

// innerHTML 
// => If wa have written any html inside it will show that also
// Example: DOM  
// DOM Learning with chai aur code <span style="display: none;" >Test Text</span>



// querySeletor: 
document.querySelector("h2")
document.querySelector("#title")
document.querySelector(".heading")
document.querySelector("input")
// document.querySelector("input[type="password"])
document.querySelector('p:first-child')
