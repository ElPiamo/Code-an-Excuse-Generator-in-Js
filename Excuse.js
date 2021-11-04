 window.onload = () => {
 document.querySelector('#your-excuse').innerHTML = createExcuse();};

let createExcuse = () => {
let who = ['The dog','My grandma','His turtle','My bird', 'My baby brother', 'My horrible ex', "A Dothraki", 'Jigsaw'];
let action = ['ate','peed','crushed','broke', 'wet', 'rolled-over', 'stabbed', 'swalow', 'screamed'];
let what = ['my homework', 'the keys', 'the car', 'my legs', 'my 4geeks instructor', 'my nintendo', "me"];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying', 'last Halloween', "when I was partying"];
let excuse = [(who[Math.floor(Math.random()*who.length)]), (action[Math.floor(Math.random()*action.length)]), (what[Math.floor(Math.random()*what.length)]), when[Math.floor(Math.random()*when.length)]]
    return `${excuse[0]} ${excuse[1]} ${excuse[2]} ${excuse[3]}`}