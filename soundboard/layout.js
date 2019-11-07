/*
	INSTRUCTIONS
	_____________________________________

	Use the functions below to create your unique soundboard. 
	"type" is a choice between soundType.NOTE, which plays a synth note, or soundType.SAMPLE, which plays a mp3 file.
	If "type" is set to soundType.NOTE, "source" expects a note in picth-octave notation, i.e., "D#4".
	If "type" is set to soundType.SAMPLE, "source" expects a file path, i.e., "sounds/victory.mp3".

	Createing a circle:
	createCircle(type, source, fill, radius, fromLeft, fromTop);

	Creating a rectangle:
	createRect(type, source, fill, width, height, fromLeft, fromTop);

	Creating text:
	createText(text, fill, font (font.BOLD or font.CURSIVE), size, fromLeft, fromTop);	
 */


// SOUNDBOARD LAYOUT
// _____________________________________

// A title for our soundboard
createText("My Amazing Soundboard", "#fff", font.BOLD, 42, 300, 80);

// A light blue circle, plays D3 note
createCircle(soundType.NOTE, "D4", "#64e1e3", 50, 200, 200);

// A green circle, plays ding sample
createCircle(soundType.SAMPLE, "sounds/correct-ding.mp3", "#b0e364", 70, 300, 300);
createText("Ding", "#fff", font.CURSIVE, 18, 300, 300);

// A dark blue circle, plays victory sample
createCircle(soundType.SAMPLE, "sounds/victory.mp3", "#235478", 90, 400, 400);
createText("Victory", "#fff", font.CURSIVE, 18, 400, 400);

// A pink square, plays C4 note
createRect(soundType.NOTE, "C4", "#d15282", 100, 100, 800, 500);