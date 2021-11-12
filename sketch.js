function draw(){

  background(250, 200, 90);

  

  textSize(32);
  fill(0);
  textAlign(CENTER,CENTER);
  text(label,width/2,height-100);
  
  let emoji='🎧'
  if (label=='cow'){
      emoji='🐮';
  };
  if(label=='goat'){
    emoji='🐐'
  }
  if(label=='sheep'){
    emoji='🐑'
  }
  if(label=='dog'){
    emoji='🐕'
  }
  if(label=='cat'){
    emoji='🐱'
  }
      
    
  
  textSize(256)
  text(emoji,width/2,height-400);
}

function gotResults(error, results){
  if(error){
    console.error(error);
    return;
    
  }
  label=results[0].label;

}


let classifier;
let label="waiting.............................";
let label2;


function preload(){ 
  classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WMmrQrqe-/model.json');
}

function setup(){
 createCanvas(1600,772);

 
  classifyAudio();
}


function classifyAudio(){
  classifier.classify(gotResults);
}




