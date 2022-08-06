nose_x = 0;
nose_y = 0;

function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is initialised");
}

function draw(){
    image(video , 0 , 0, 300, 300);
    fill("red");
    stroke("red");
    circle(nose_x, nose_y, 20);
}

function take_snapshot(){
    save('Ishan_edit.png');
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log("nose x = "+ nose_x);
    console.log("nose y = "+ nose_y);
}
}


