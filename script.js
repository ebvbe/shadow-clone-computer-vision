const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const fingers = {
    thumb: [0, 1, 2, 3, 4], 
    index: [0, 5, 6, 7, 8], 
    middle: [0, 9, 10, 11, 12], 
    ring: [0, 13, 14, 15, 16], 
    pinky:[0, 17, 18, 19, 20]
};

function drawFingerSkeleton(){
    ctx.strokeStyle = "lime";
    ctx.lineWidth = 2;

    for (let finger of Object.values(fingers)){
        ctx.beginPath();
        finger.forEach((i, idx) => {
            const x = lm[i].x * canvas.width;
            const y = lm[i].y * canvas.height;
            if (idx === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();
    }

    lm.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x * canvas.width, point.y * canvas.height, 3, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
    });
}