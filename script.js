let btn  = document.getElementById('btn');
let container = document.getElementById('container');
let para = document.getElementById('para');

function generateRandomColor(){
let maxVal = 0xFFFFFF; // 16777215.
let randomNumber = Math. random() * maxVal;
randomNumber = Math. floor(randomNumber);
randomNumber = randomNumber. toString(16);
let randColor = randomNumber. padStart(6, 0);
return `#${randColor. toUpperCase()}`
}

function mouseHover(event){
   let col =  event.target.style.backgroundColor = generateRandomColor();
    setTimeout(() => {
      event.target.style.backgroundColor = "";
    }, 500);
    
}

function gameArea(inpu){
let set = inpu;
if(set<=32){
for(let i=0;i<set;i++){
let row = document.createElement('div');
row.setAttribute('class','row');
row.id = "row";
container.appendChild(row);
for(let j=0;j<set;j++){
let rows = document.getElementsByClassName('row');
let create = document.createElement('div');

create.setAttribute('id','divi');
create.setAttribute('class','col');
create.style.height = Math.trunc(container.clientHeight/set)-1 +"px";

// create.style.backgroundColor = generateRandomColor();
create.addEventListener("mouseover", mouseHover, false);
    
rows[i].appendChild(create);


}
}
para.style.display = "none";
}
else{
    para.innerText="Please enter value below 32";
    para.style.color ="red";
    para.style.display = 'block';

}
// setTimeout(() => {
//     location.reload();
//   }, 5000);

 
let divId = document.getElementsByClassName('col');
let color = ["red","green","blue"];
  for(i=0;i<divId.length;i++){
    divId[i].addEventListener('mouseover',(event)=>{
  for(let i=0;i<color.length;i++){
 
  event.target.style.backgroundColor = color[i];
}
 });
}


console.log(color);
console.log(divId);





}

function userInput(){

    let value = Number(prompt('Enter a number'));
    gameArea(value);

}
btn.addEventListener('click',userInput);

// gameArea();