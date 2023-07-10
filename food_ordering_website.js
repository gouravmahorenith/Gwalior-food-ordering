// // image slider section Starts
let flag = 0;
var p = document.getElementsByClassName("bg");
flag=p.length-1;
// p[0].style.display="block";
slide();
function clicked(incdec=1){
    flag += incdec;
    slide();
}

function click(){
    flag++;
    slide();
}
setInterval(click , 8000);
function slide(){
    if (flag === p.length) flag = 0;
    else if (flag < 0) flag = p.length - 1;
    for(let i=0; i<p.length; i++){  p[i].style.display = "none"; }
    if(flag>-1 && flag<p.length){
    p[flag].style.display = "block";}
}

// // image slider section Ends
// Contact section Starts here
var map = document.getElementsByClassName("map");
function shouldOpenMap(){
    let ans = confirm("Do you want to open map?");
    if(ans) {
        window.open("https://www.google.com/maps/place/Thatipur,+Gwalior,+Madhya+Pradesh/@26.2206221,78.1822411,14z/data=!3m1!4b1!4m6!3m5!1s0x3976c3fd86d4324d:0xe76e2fd7ba157dc1!8m2!3d26.2150072!4d78.2073708!16s%2Fg%2F11bvtzrq1x?entry=ttu" , "gourav" , "height=600px , width=600px");
    }
}

// Footer Design

var footimg = document.getElementsByClassName("footimg");

function changeimage(i){
    if(i==1) footimg[0].src="bg/food-img-3-col.png";
    if(i==2) footimg[1].src="bg/food-img-4-col.png";
    if(i==3) footimg[2].src="bg/food-img-5-col.png";
    if(i==4) footimg[3].src="bg/food-img-6-col.png";
    if(i==5) footimg[4].src="bg/food-img-2-col0.png";
}
function asitwas(i){
    if(i==1) footimg[0].src="bg/food-img-3.png";
    if(i==2) footimg[1].src="bg/food-img-4.png";
    if(i==3) footimg[2].src="bg/food-img-5.png";
    if(i==4) footimg[3].src="bg/food-img-6.png";
    if(i==5) footimg[4].src="bg/food-img-2.png";
}
function openblog(){
window.open("https://gwaliors-food-blogs.netlify.app/" ,"gourav"); 
}

