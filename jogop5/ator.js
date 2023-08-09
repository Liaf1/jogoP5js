//variavel do ator//
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
   image(imagemDoAtor, xAtor, yAtor, 32, 32);
}

function movimentaAtor(){
   if (keyIsDown(UP_ARROW)){
     yAtor -=3;     
   }
   
   if (keyIsDown(DOWN_ARROW)){ 
     if(podeSeMover()){
     yAtor +=3;
       }
   }
     
}

function verificaColisao(){
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for ( let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 25);
    if(colisao){
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -=1;
      }


    }
  }
  
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,0));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if(yAtor < 0){
    meusPontos +=1;
    voltaAtorPosicaoInicial();
    somDoPonto.play();
    
  }
}

function pontosMaiorQueZero(){
   return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}