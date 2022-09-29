let toggle = document.getElementById('btn-toggle');
let menu = document.getElementById('menu');

toggle.addEventListener('click', () =>{

    if(toggle.classList.contains('close')){
        menu.classList.remove('move-in');
        menu.classList.add('move-out');
        toggle.classList.remove('close');
    }else{
        toggle.classList.add('close');
        menu.style.display = 'flex';
        menu.classList.remove('move-out');
        menu.classList.add('move-in');
    }
    
});