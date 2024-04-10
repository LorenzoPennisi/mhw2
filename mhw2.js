function onThumbnailClick(event){
    document.body.classList.add('no-scroll');
    ricercaModal.style.top = window.pageYOffset + 'px';
    
    ricercaModal.classList.remove('hidden');
    
}

function hiddenOnClick(event){
    if(event.target.id == 'ricercaModal'){
        document.body.classList.remove('no-scroll');

        ricercaModal.classList.add('hidden');
    }
    
}

const barra = document.querySelector('#barra');
barra.addEventListener('click', onThumbnailClick);

const esci = document.querySelector('#ricercaModal');
esci.addEventListener('click', hiddenOnClick);