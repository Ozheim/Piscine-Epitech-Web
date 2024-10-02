const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(6, 6);
ctx.lineTo(14, 10);
ctx.lineTo(6, 14);

ctx.fillStyle = "white";
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.stroke();
