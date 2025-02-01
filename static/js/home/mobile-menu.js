window.addEventListener('load', function(){
    var buttonMenu = document.querySelector('.mobile img')
    var mobileMenu = document.querySelector('.menu')
    var body = document.querySelector('body')

    buttonMenu.addEventListener('click', function(e){
        mobileMenu.style.right = '0px'
        e.stopPropagation()
    })

    mobileMenu.onclick = function(e){
        e.stopPropagation()
    }

    body.onclick = function(){
        mobileMenu.style.right = '-250px'
    }
})