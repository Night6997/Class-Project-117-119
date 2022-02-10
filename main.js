function setup(){

    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifycanvas);
    synth = window.speechSynthesis;
}

function ClearCanvas(){

    background("white");

}

function preload(){

    classifier=ml5.imageClassifier('DoodleNet');

}

function draw(){

    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){

        line(pmouseX,pmouseY,mouseX,mouseY);

    }
    
}

function classifycanvas(){

    classifier.classify(canvas,gotResults);

}

function gotResults(error,results){

    if(error){

        console.error(error);

    }
    if(results){

      console.log(results);
      document.getElementById("p1").innerHTML="Sketch is of "+results[0].label;
      document.getElementById("p2").innerHTML="Confidence ="+Math.round(results[0].confidence*100)+"%";
      utterThis = new SpeechSynthesisUtterance(results[0].label);
      synth.speak(utterThis);

    }

}
