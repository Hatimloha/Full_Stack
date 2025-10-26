// Active menu color change
document.querySelectorAll('li').forEach(function(list){
    list.addEventListener('click', function(l){
        l.currentTarget.style.backgroundColor = 'grey'
    })
})


function colorChange(){
    const div = document.querySelectorAll('.div');
    div.forEach(function(item){
        item.addEventListener('click', (e) => {
            if(e.target.id === 'grey'){
                document.body.style.backgroundColor =e.target.id
            }
            if(e.target.id === 'red'){
                document.body.style.backgroundColor =e.target.id
            }
            if(e.target.id === 'green'){
                document.body.style.backgroundColor =e.target.id
            }
            if(e.target.id === 'blue'){
                document.body.style.backgroundColor =e.target.id
            }
            if(e.target.id === 'white'){
                document.body.style.backgroundColor =e.target.id
            }
        })
    })
}
colorChange()