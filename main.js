status= "";
objects=[];
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= 'status: detecting objects';
    document.getElementById("object_name");
}

function modelLoaded(){
    console.log("model Loaded!");
    status= true;
}

function draw(){
   image(video,0,0,300,300);
   if(objects[i].label == object_name)
    {
         video.stop();
          objectDetector.detect(gotResult);
           document.getElementById("object_status").innerHTML = object_name + " Found";
            synth = window.speechSynthesis;
             utterThis = new SpeechSynthesisUtterance(object_name + "Found");
              synth.speak(utterThis);
             } 
             else { document.getElementById("object_status").innerHTML = object_name + " Not Found";
             }
}

function gotResult(error, results)
 { if (error) { console.log(error); } console.log(results); objects = results; }





