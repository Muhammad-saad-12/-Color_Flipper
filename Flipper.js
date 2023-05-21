const colors=["green","red","rgba(133,122,200)","#f15025","hotpink","lightblue","aqua"];
const btn=document.getElementById('btn');
   const color =document.querySelector(".color");
btn.addEventListener('click',function(){
    //Get random b/w 0-3.
const randomNumber=getrandomNumber();
document.body.style.backgroundColor =colors[randomNumber];
color.textContent=colors[randomNumber];
});
function getrandomNumber(){
return Math.floor(Math.random()*colors.length);
}