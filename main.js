var mouseEvent= "empty";
var last_position_X,last_position_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_line=3

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}   
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_X=e.clientX-canvas.offsetLeft;
    current_position_Y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        ctx.arc(current_position_X,current_position_Y,20,0,2*Math.PI);
        ctx.stroke();
    }
    last_position_X=current_position_X;
    last_position_Y=current_position_Y;
}   
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}   
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
} 
