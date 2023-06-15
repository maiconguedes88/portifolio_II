

function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += Letra;;
            }, 75 * i);
        })
    }
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

escrevendoLetra()


function menuMobol() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')

    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });
}

menuMobol();

function sobreMim() {

    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');
    const divEducacao = document.querySelectorAll('.education_content div');
    const liEducacao = document.querySelectorAll('.education_content ul li');

    divExperiencia[0].classList.add('ativo')
    divEducacao[0].classList.add('ativo')
    liExperiencia[0].classList.add('ativo')
    liEducacao[0].classList.add('ativo')

    function slideShow(index) {
        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShow2(index) {
        divEducacao.forEach((div)=>{
            div.classList.remove('ativo')
        });
        liEducacao.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divEducacao[index].classList.add('ativo');
        liEducacao[index].classList.add('ativo');
    }

    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', ()=>{
            slideShow(index);
        })
    });

    liEducacao.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow2(index);
        })
    });

}

sobreMim();


const listaAll = document.querySelectorAll('.projects_armazenamento ul li');
const buttomGeral = document.querySelectorAll('.projects_models ul li');
const buttomAll = document.querySelectorAll('.projects_models .all');

function removeClick(index) {
    buttomGeral.forEach((item) => {
        item.classList.remove('ativo');
    });
    buttomGeral[index].classList.add('ativo')
}

buttomGeral.forEach((item, index) => {
    item.addEventListener('click', () => {
        removeClick(index);
    })
})


function showLista(lista, buttom = "all"){
    lista.forEach((item) =>{
        item.classList.remove('ativo')
    });
    if(buttom == 'design'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
    }
    if(buttom == 'graphic'){
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }
    if(buttom == 'website'){
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
    if(buttom == 'all'){
        lista[1].classList.add('ativo');
        lista[0].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
}


buttomGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButtom = e.target;
        if(currentButtom.classList.contains('all')){
            showLista(listaAll);
        }
        if(currentButtom.classList.contains('design')){
            showLista(listaAll, "design")
        }
        if(currentButtom.classList.contains('graphic')){
            showLista(listaAll, "graphic")
        }
        if(currentButtom.classList.contains('website')){
            showLista(listaAll, "website")
        }
        if(currentButtom.classList.contains('all')){
            showLista(listaAll, "all")
        }
    })
})