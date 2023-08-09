let yCarros = [40, 96, 150, 210, 270, 312];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3 , 2.3];
let xCarros = [600, 600, 600, 600, 600, 600];
let comprimentoCarros = 50;
let alturaCarros = 40;

function mostraCarro(){
  for ( let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i] , xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
    }
}

function movimentaCarro(){
  for  ( let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for( let i = 0; i < imagemCarros.length; i++){
  if ( passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
  }
  }
}

function passouTodaTela(xCarros){
  return xCarros < - 50;
  
}