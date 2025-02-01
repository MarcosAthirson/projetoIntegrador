window.addEventListener('load', function(){
    var eduComp = document.querySelector('.eduComp')
    var listaEduComp = document.querySelector('.listEduComp')

    if(eduComp.textContent == ''){
        listaEduComp.style.display = 'none'
    } else {
        var li = document.querySelectorAll('.listEduComp li')
        var i = 0
        while (i < li.length){
            if (li[i].textContent == '')
                li[i].style.display = 'none'
            i++
        }
    }
})