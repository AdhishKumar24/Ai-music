song_1 = " "
song_2 = " "
left_wrist_x=""
left_wrist_y=""
right_wrist_x=""
right_wrist_y=""


function setup(){
    console.log("setup running")
    canvas = createCanvas(500,550)
    canvas.center()
    cam_1 = createCapture(VIDEO)
    cam_1.hide()
    
    posenet = ml5.poseNet(cam_1,modelloaded)
    posenet.on("pose",gotPoses)
}

function modelloaded(){
    console.log("Posenet loaded")
}

function preload(){
    song_1 = loadSound("music.mp3")
    song_2 = loadSound("music2.mp3")
    console.log("Running.")
}

// function play_song(){
//     song.play()
//     song.setVolume(1)
//     song.rate(0.5)
// }

function gotPoses(Result){
if(Result.length>0){
    console.log(Result)
    left_wrist_x=Result[0].pose.leftWrist.x
    left_wrist_y=Result[0].pose.leftWrist.y
    right_wrist_x=Result[0].pose.rightWrist.x
    right_wrist_y=Result[0].pose.rightWrist.y
    console.log(left_wrist_x+left_wrist_y+right_wrist_x+right_wrist_y)
}
}

function draw(){
    image(cam_1,0,0,500,550)
}