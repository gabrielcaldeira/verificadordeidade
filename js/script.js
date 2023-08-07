function verificar(){
    var res = document.getElementById('res')

    var anoatual = new Date().getFullYear()
    var datanascimento = document.getElementById('datanascimento')
    var idade = anoatual - datanascimento.value

    var gender = document.getElementsByName('radsex')
    if (gender[0].checked){
        gender = 'masculino'
    }else{
        gender = 'feminino'
    }

    if (datanascimento.value > anoatual || datanascimento.value == false){
        res.innerHTML = '<p><strong>[ERROR]</strong>Verifique os dados e tente novamente!</p>'
    }else{
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'imagemrepresentativa')
        if(idade <= 10){
            var idadetex = 'criança'
            imagem.setAttribute('alt','criança')
            if(gender == 'masculino'){
                imagem.setAttribute('src','imagens/crianca-masc.png')
            }else{
                imagem.setAttribute('src','imagens/crianca-fem.png')
            }
        }else if (idade <= 21){
            var idadetex = 'adolecente'
            imagem.setAttribute('alt','adolecente')
            if(gender == 'masculino'){
                imagem.setAttribute('src','imagens/adolecente-masc.png')
            }else{
                imagem.setAttribute('src','imagens/adolecente-fem.png')
            }
        }else if (idade <= 50){
            var idadetex = 'adulto'
            imagem.setAttribute('alt','adulto')
            if(gender == 'masculino'){
                imagem.setAttribute('src','imagens/adulto-masc.png')
            }else{
                imagem.setAttribute('src','imagens/adulto-fem.png')
            }
        } else{
            var idadetex = 'idoso'
            imagem.setAttribute('alt','idoso')
            if(gender == 'masculino'){
                imagem.setAttribute('src','imagens/idoso-masc.png')
            }else{
                imagem.setAttribute('src','imagens/idoso-fem.png')
            }
        }
        if (gender == 'feminino' || idadetex ==  'criança'){
            res.innerHTML = `voce é uma ${idadetex} do genero ${gender} e sua idade é ${idade} anos.`
        }else{
            res.innerHTML = `voce é um ${idadetex} do genero ${gender} e sua idade é ${idade} anos.` 
        }
        res.appendChild(imagem)
    }
}