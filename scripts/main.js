//Laura Pardo: Bien por el use strict
"use strict";
//Laura Pardo: Uso muy interesante de javascript para crear un texto ligero de leer, visualmente apelador y demuestra buen conocimiento del lenguaje.
const strings = ["Systems and Computing Engineering Student","Mathematics Student", "Programmer", "Environmentalist",
                    "Animal Lover", "Artist", "Figure Collector", "Figure Skating Enthusiast",  "Pokemon fan", "Passionate Learner"];
const TIME_AFTER_TYPING = 1400;
const TIME_BETWEEN_TYPING = 100;
const TIME_AFTER_DELETING = 500;
const TIME_BETWEEN_DELETING = 30;
//Laura Pardo: Podrías complementar la documentación con pequeñas descripciones de los métodos.
let cur_string = 0;
let cur_string_index = 0;
let interval_val;

let typer = document.querySelector("#text-typing");
let cursor = document.querySelector("#cursor");

function typingEffect() {
	let char = strings[cur_string][cur_string_index];
    typer.innerHTML += char;
    cur_string_index++;

    if(typer.innerHTML === strings[cur_string]) {
       clearInterval(interval_val);
       cursor.className = "blink";

       setTimeout(
           function() {
                cursor.className = "";
               interval_val = setInterval(deletingEffect, TIME_BETWEEN_DELETING);
           }, TIME_AFTER_TYPING
        ) 
    }
};

function deletingEffect() {
	let text = strings[cur_string].substring(0, cur_string_index - 1);
    typer.innerHTML = text;
    cur_string_index--;
    let next_string = (cur_string + 1)%(strings.length);

    if(text === "" || text === strings[next_string].substring(0, cur_string_index)) {
       clearInterval(interval_val);
       cur_string = next_string;
       cursor.className = "blink";

       setTimeout(
           function() {
               cursor.className = "";
               interval_val = setInterval(typingEffect, TIME_BETWEEN_TYPING);
           }, TIME_AFTER_DELETING
        ) 
    }
};


// Start the typing effect
cursor.className = "";
interval_val = setInterval(typingEffect, TIME_BETWEEN_TYPING);
