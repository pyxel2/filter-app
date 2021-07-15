eyex=0;
eyey=0;
function preload() {
    sharingan=loadImage("1200px-Sharingan_triple.svg")
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.position(415,175);
    video = createCapture(VIDEO);
    video.size(700, 500);
    video.hide();


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initiated');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("eye x =" + results[0].pose.eye.x);
        console.log("eye y =" + results[0].pose.eye.y);
        eyex=results[0].pose.eye.x-15;
        eyey=results[0].pose.eye.y-15;
    }
}

function draw() {
    image(video, 0, 0, 700, 500);
    image(sharingan,eyex,eyey,50,50);
}
function take_snapshot(){
    save('myfilteredimage.png(🤡🎥)')
}