window.addEventListener('load', function(){
    //<span style="color: red; padding-left: 5px;">*</span>
    function obrigatorio(){
        var obrigatorio = document.querySelectorAll('.obrigatorio')
        var i = 0
        while (i < obrigatorio.length){
            obrigatorio[i].setAttribute('title', 'CAMPO OBRIGATÓRIO')
            obrigatorio[i].firstElementChild.insertAdjacentHTML('afterend', '<span style="color: red; padding-left: 5px;">*</span>')
            obrigatorio[i].lastElementChild.setAttribute('required', '')//input
            i++
        }
    }
    obrigatorio()

    //EXPERIÊNCIA
    function camposPreenchidosExp(){
        var inputs = document.querySelectorAll('.exp input')
        var i = 0
        var inputsPreenchidas = 0

        while (i < inputs.length){
            if (inputs[i].value != '') {
                inputsPreenchidas++
                break
            }
            i++
        }
        return inputsPreenchidas
    }

    function obrigatorioExp(){
        var labels = document.querySelectorAll('.exp label')
        var i = 0

        while (i < labels.length){
            labels[i].setAttribute('title', 'CAMPO OBRIGATÓRIO')
            if (!document.querySelector('.exp .obg')){
                var lbs = document.querySelectorAll('.exp label')
                var x = 0

                while (x < lbs.length){
                    lbs[x].firstElementChild.insertAdjacentHTML('afterend', '<span class="obg" style="color: red;padding-left: 5px;">*</span>')
                    x++
                }
            }
            labels[i].lastElementChild.setAttribute('required', '')//input
            i++
        }
    }

    function removerObrigatorioExp(){
        var labels = document.querySelectorAll('.exp label')
        var i = 0

        while (i < labels.length){
            labels[i].setAttribute('title', '')
            if (document.querySelector('.exp .obg'))
                labels[i].querySelector('.obg').remove()
            labels[i].lastElementChild.removeAttribute('required')//input
            i++
        }
    }

    function validarExp(){
        var inputs = document.querySelectorAll('.exp input')
        var i = 0

        while (i < inputs.length) {
            inputs[i].addEventListener('keydown', function(){
                if (camposPreenchidosExp() > 0)
                    obrigatorioExp()
                else
                    removerObrigatorioExp()
            })
            i++
        }
    }
    validarExp()
})