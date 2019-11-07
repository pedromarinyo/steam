
// GLOBAL VARIABLES
// _____________________________________
const canvas = new fabric.Canvas('c');
const synth = new Tone.Synth().toMaster();

const nRow = 5;											// Number of rows 
const width = 1024;										// Width of canvas
const height = 720;										// Height of canvas
const soundType = { NOTE: "note", SAMPLE: "sample" };	// Types of sounds; either synth note or mp3 sample
const font = { BOLD: "Righteous", CURSIVE: "Pacifico" };

// FUNCTIONS
// _____________________________________
//  Attach a sound/mp3 file to be triggered at a button press 
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

// Create a circle that triggers a synth note or a mp3 sample.
function createCircle(type, source, fill, radius, fromLeft, fromTop) {
	
	// Outlining the circle's details
	var circle = new fabric.Circle({
		fill: fill,
	    radius: radius,   
	    left: fromLeft,  
	    top: fromTop,               
	    originY: 'center',
	    originX: 'center',
	    hasControls: false,
	    hasBorders: false,

	    hoverCursor: 'pointer',
	    shadow: 'rgba(0,0,0,0.2) 0px 0px 10px'
	});


	switch (type) {		
		case soundType.NOTE:
			circle.on("mousedown", function(){
				synth.triggerAttackRelease(source, "4n");
			});
			break;
		
		case soundType.SAMPLE:
			var sample = new sound(source);			
			circle.on("mousedown", function(){
				sample.play();
			});			
			break;
	}



	circle.on('mouseover', function(){      
          this.animate('radius', radius + 10, { 
          onChange: canvas.renderAll.bind(canvas), 
          duration: 300,
          easing: fabric.util.ease.easeOutBounce
        });
    });

	circle.on('mouseout', function(){      
      	this.animate('radius', radius, { 
          	onChange: canvas.renderAll.bind(canvas), 
          	duration: 300,
          	easing: fabric.util.ease.easeOutBounce
        });
    });	

	canvas.add(circle);
}

function createRect(type, source, fill, width, height, fromLeft, fromTop) {
	
	// Outlining the circle's details
	var rect = new fabric.Rect({
		fill: fill,
	    width: width,
	    height: height,   
	    left: fromLeft,  
	    top: fromTop,               
	    originY: 'center',
	    originX: 'center',
	    hasControls: false,
	    hasBorders: false,
	   
	    hoverCursor: 'pointer',
	    shadow: 'rgba(0,0,0,0.2) 0px 0px 10px'
	});


	switch (type) {		
		case soundType.NOTE:
			rect.on("mousedown", function(){
				synth.triggerAttackRelease(source, "4n");
			});
			break;
		
		case soundType.SAMPLE:
			var sample = new sound(source);			
			rect.on("mousedown", function(){
				sample.play();
			});			
			break;
	}



	rect.on('mouseover', function(){      
          this.animate({'width': width + 10, 'height': height + 10}, { 
          onChange: canvas.renderAll.bind(canvas), 
          duration: 300,
          easing: fabric.util.ease.easeOutBounce
        });
    });

	rect.on('mouseout', function(){      
      	this.animate({'width': width, 'height': height}, { 
          	onChange: canvas.renderAll.bind(canvas), 
          	duration: 300,
          	easing: fabric.util.ease.easeOutBounce
        });
    });	

	canvas.add(rect);
}

function createText(text, fill, font, size, fromLeft, fromTop) {
	var text = new fabric.Text(text, {
        left: fromLeft,
        top: fromTop,    
        fill: fill,
        fontFamily: font,  
        fontSize: size,
        shadow: 'rgba(0,0,0,0.5) 0px 0px 10px',
        hasControls: false,
	    hasBorders: false,
	    lockMovementX: true,
        lockMovementY: true,
        hoverCursor: 'default',
        originY: 'center',
        originX: 'center'  
      });

	canvas.add(text);
}




