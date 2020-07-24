//Primera parte

let min = 0;
let max = 255;

function aleatorio(min, max){
    return(Math.floor(Math.random() * (max - min) + min));
}

let x = aleatorio(min, max);
let y = aleatorio(min, max);
let z = aleatorio(min, max);

let color1 = 'rgb('+ x +','+ y +','+ z +')';
let color2 = 'rgb('+ y +','+ z +','+ x +')';

//Segunda Parte

//Color de Titulo

const titulo = document.querySelector('.header h1');

titulo.style.backgroundColor = color1;
titulo.style.color = color2;

// Color de Subtitulo

const subtitulo = document.querySelector('.main-content h2');

subtitulo.style.backgroundColor = color2;
subtitulo.style.color = color1;

//Color de Parrafos 1

const parrafos1 = document.querySelectorAll('.parrafo1');

for(let i = 0; i < parrafos1.length; i++){
    parrafos1[i].style.backgroundColor = color1;
    parrafos1[i].style.color = color2;
}

//Color de Parrafos 2

const parrafos2 = document.querySelectorAll('.parrafo2');

for(let i = 0; i < parrafos2.length; i++){
    parrafos2[i].style.backgroundColor = color2;
    parrafos2[i].style.color = color1;
}