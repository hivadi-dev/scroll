const box = document.querySelectorAll('.box')
box.forEach((val)=>{
    val.classList.add(val.getAttribute('data-animate'))
    val.setAttribute('data-top' , val.offsetTop)
})
window.addEventListener('scroll' , ()=>{
    box.forEach((index)=>{
        let st = window.innerHeight - 50
        let boxH = index.getBoundingClientRect().top
        if(boxH < st){
            index.classList.add('show')
        }else{
            index.classList.remove('show')
        }
    })
})

