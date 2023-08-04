const navİtem = document.getElementById('nav-item')
const open = document.getElementById('open')
const close = document.getElementById('close')

if(open){
    open.addEventListener('click' , ()=>{
        navİtem.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        navİtem.classList.remove('active')
    })
}