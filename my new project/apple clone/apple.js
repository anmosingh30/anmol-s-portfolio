let navber_list = document.getElementById('navber-list')
let openMenu = document.querySelector('.menuopen')
let cross = document.querySelector('.cross')
openMenu.addEventListener('click',()=>{
    navber_list.style.opacity = '100%'
    openMenu.style.display = 'none'
})
cross.addEventListener('click',()=>{
    navber_list.style.opacity = '0%';
    setTimeout(()=>{
        openMenu.style.display = 'block'
    },600)
})

    // gsap start //

 var tl = gsap.timeline()
 
 tl.from(".logo nav",{
        y:-100,
        duration:2,
        delay:1,
        opacity:0,
 })