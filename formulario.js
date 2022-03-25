const code = document.querySelector('#code');
const name = document.querySelector('#name');
const age= document.querySelector('#age');
const phone= document.querySelector('#phone');
const form = document.querySelector('#form');
const ui = {};
ui.message = (title,message)=>{
    const modal = document.querySelector('#modal');
    const $title = document.createElement('h2');
    modal.classList.add('modal');
    $title.textContent = title;
    $title.classList.add('modal-title');
    const $message = document.createElement('p');
    $message.classList.add('modal-message');
    $message.textContent = message;
    modal.appendChild($title);
    modal.appendChild($message);
    const $exit = document.createElement('button');
    $exit.textContent='Aceptar';
    $exit.classList.add('btn','modal-btn');
    modal.appendChild($exit);
    document.body.classList.add("opac");
    $exit.onclick = (e)=>{
        modal.className="";
        modal.textContent="";
        document.body.classList.remove("opac");
    };


}

