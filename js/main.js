const playvideo = () =>{
	var video = document.getElementById('trailer');
	video.style.display = "block";
	video.style.width= "100vw";
	video.style.height= "100vh";
	video.src += "?autoplay=1";
	document.getElementById('home').text ='Back' ;
}

var folder = '../images/chars/';
var images =['Tokio.jpg','Professor.jpg','Berlin.jpg','Raquel.jpg','Denver.jpg','Rio.jpg','Alison.jpg','Helsinki.jpg','Moscu.jpg','Nairobi.jpg','Oslo.jpg'];
var text = ['The protagonist and narrator; she was a runaway robber until scouted by the Professor to participate in his plan.', 
'The mastermind of the heist who assembled the group.',
"A jewel thief and the Professor's second-in-command.",
'An inspector of the National Police Corps who is put in charge of the case.',
"Moscow's son who joins him in the heist",
"A young hacker and Tokyo's boyfriend.",
"A hostage and daughter of the British ambassador to Spain.",
"A veteran Serbian soldier and Oslo's cousin.",
"A former miner turned criminal and Denver's father.",
"An expert in forgery in charge of printing the money for the group.",
"A veteran Serbian soldier and Helsinki's cousin."
]
var current = 0;

const slide = (index) =>{

	current += index;
	//tstart from 0;
	if (current > images.length-1) {
		current = 0;
	}
	//start from last
	if (current < 0) {
		current = images.length -1;
	}

	document.getElementById('name').innerHTML = images[current].slice(0,images[current].length-4);
	//document.getElementById('picture').classList.add('ani');
	document.getElementById('description').innerHTML = text[current];
	document.getElementById('picture').src = folder+images[current];

}