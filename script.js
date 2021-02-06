let t1 = document.getElementById("a")
let t2 = document.getElementById("b")
let t3 = document.getElementById("c")
let t4 = document.getElementById("d")
let t5 = document.getElementById("e")
let t6 = document.getElementById("f")
var x;
var correctcolor;
var t7 = document.getElementsByClassName('tile')

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function newGame() {
    t1.style.background = getRandomColor();
    t2.style.background = getRandomColor();
    t3.style.background = getRandomColor();
    t4.style.background = getRandomColor();
    t5.style.background = getRandomColor();
    t6.style.background = getRandomColor();

    x = Math.floor((Math.random() * 6) + 1);
    if (x === 1) { correctcolor = t1.style.background }
    else if (x == 2) { correctcolor = t2.style.background }
    else if (x == 3) { correctcolor = t3.style.background }
    else if (x == 4) { correctcolor = t4.style.background }
    else if (x == 5) { correctcolor = t5.style.background }
    else { correctcolor = t6.style.background };

    document.getElementById("qw").innerHTML = correctcolor;

}
t1.addEventListener('click',function(){
    if (t1.style.background == correctcolor){
        document.getElementById('head').innerHTML ="CONGARTULATIONS , YOU WON THE GAME"
        document.getElementById('head').style.background = "green"
}
else{
    document.getElementById('head').innerHTML ="YOU LOSE, BETTER LUCK NEXT TIME "
    document.getElementById('head').style.background = "RED"
}
});
t2.addEventListener('click',function(){
    if (t2.style.background == correctcolor){
        document.getElementById('head').innerHTML ="CONGARTULATIONS , YOU WON THE GAME"
        document.getElementById('head').style.background = "green"
}
else{
    document.getElementById('head').innerHTML ="YOU LOSE, BETTER LUCK NEXT TIME "
    document.getElementById('head').style.background = 'red '
}
});
t3.addEventListener('click',function(){
    if (t3.style.background == correctcolor){
        document.getElementById('head').innerHTML ="CONGARTULATIONS , YOU WON THE GAME"
        document.getElementById('head').style.background = "green"
}
else{
    document.getElementById('head').innerHTML ="YOU LOSE, BETTER LUCK NEXT TIME "
    document.getElementById('head').style.background = "RED"
}
});
t4.addEventListener('click',function(){
    if (t4.style.background == correctcolor){
        document.getElementById('head').innerHTML ="CONGARTULATIONS , YOU WON THE GAME"
        document.getElementById('head').style.background = "green"
}
else{
    document.getElementById('head').innerHTML ="YOU LOSE, BETTER LUCK NEXT TIME "
    document.getElementById('head').style.background = "RED"
}
});
t5.addEventListener('click',function(){
    if (t5.style.background == correctcolor){
        document.getElementById('head').innerHTML ="CONGARTULATIONS , YOU WON THE GAME"
        document.getElementById('head').style.background = "green"
}
else{
    document.getElementById('head').innerHTML ="YOU LOSE, BETTER LUCK NEXT TIME" 
    document.getElementById('head').style.background = "RED"
}
});
t6.addEventListener('click',function(){
    if (t6.style.background == correctcolor){
        document.getElementById('head').innerHTML ="CONGARTULATIONS , YOU WON THE GAME"
        document.getElementById('head').style.background = "green"
}
else{
    document.getElementById('head').innerHTML ="YOU LOSE, BETTER LUCK NEXT TIME "
    document.getElementById('head').style.background = "RED"
}
});