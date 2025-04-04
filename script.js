let moon = document.getElementById("moon");
let text = document.getElementById("text");
let lamby = document. getElementById("lamby");
let man = document.getElementById("man");

window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    moon.style.top = value * 0.001 + "px";
    lamby.style.bottom =  value * 0.2 + "px";
    homeleft.style.left = value * 0.3 + "px";
    homeryt.style.right = value * 0.2 + "px";
    mount.style.right = value * 0.1 +"px"
    mountt.style.left = value * 0.1 +"px"
    man.style.left = value * 0.4 + "px";
});

const toggleBW = () => {
    document.documentElement.classList.toggle("bw-mode");
};

//progress bar

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);

    if(pos > 100){
        scrollProgress.style.display = "grid";
    } else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", ()=>{
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
};

window.onscroll= calcScrollValue;
window.onload = calcScrollValue;