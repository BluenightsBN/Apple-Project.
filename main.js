x = 0;
y = 0;

draw_apple = "";

screen_width = 0;
screen_height = 0;

speak_data = "";

to_number = "";

apple = ""


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();



function start()
{
  document.getElementById("status").innerHTML = "Say any number";  

  recognition.start();
} 
 




recognition.onresult = function(event) 
{

 console.log(event); 

 content = event.results[0][0].transcript;

 document.getElementById("status").innerHTML = "The number is : " + content; 

 to_number = Number(content);

 if(Number.isInteger(to_number))
 {

  document.getElementById("status").innerHTML = "Apple is being drawn"; 
  draw_apple = "set"

 }

 else 
 {

  document.getElementById("status").innerHTML = "SORRY , The number is not an Integer "; 

 }

}




function setup() 
{

screen_width = window.innerWidth;  
screen_height = window.innerHeight;  

canvas = createCanvas(screen_width - 50, screen_height - 200);


}



function draw() 
{
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number + "Apples Drawn";
    draw_apple = "";
    speak()


    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400); 
      image(apple, x, y, 50, 50);
    }


  
  }

 

}




function speak()
{
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}




function preload() 
{

img = loadImage("https://png.pngtree.com/png-vector/20210116/ourmid/pngtree-red-apple-vector-png-image_2748785.jpg");
apple = img;

}


