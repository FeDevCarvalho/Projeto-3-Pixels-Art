function gerarPixels() {
    let span = document.getElementById("cores")
    for (let index = 0; index < 1; index += 1) {
        let ul = document.createElement("ul");
        ul.id = "color-pallet"
        span.replaceWith(ul);
        for (let indez = 0; indez < 4; indez += 1) {
            let li = document.createElement("li");
            li.className = "colors"
            li.style.display = "inline-block";
            li.style.border = "2px solid black";
            li.style.width = "50px";
            li.style.height = "50px";
            ul.appendChild(li)
        }
    }
}
gerarPixels();

function corAleatoria() {
    const letrasHex = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
        cor += letrasHex[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function gerarCores() {
    let cores = document.getElementsByClassName("colors");
    for (let index = 0; index < cores.length; index++) {
        cores[index].style.backgroundColor = corAleatoria();
    
}
}  