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
            ul.appendChild(li);
            if (indez === 0) {
                li.style.backgroundColor = "black";
            } else {
                li.style.backgroundColor = corAleatoria();
            }
        }
    }
}
gerarPixels();

function corAleatoria() {
    const letrasHex = "0123456789ABCDEF";
    let cor = "#";
    for (let index = 0; index < 6; index += 1) {
        cor += letrasHex[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function gerarCores() {
    let cores = document.getElementsByClassName("colors");
    for (let index = 0; index < cores.length; index += 1) {
        cores[index].style.backgroundColor = corAleatoria();

    }
}


function gerarTabela() {
    let itemDeTroca = document.getElementById('tabela');
    let table = document.createElement('table');
    table.id = "pixel-board";
    table.style.display = "inline-block";

    for (let index = 0; index < 5; index += 1) {
        let tr = document.createElement('tr');

        for (let indez = 0; indez < 5; indez += 1) {
            let td = document.createElement('td')
            td.className = "pixel";
            td.style.width = "50px";
            td.style.height = "50px";
            td.style.border = 'solid black 1px';
            td.style.backgroundColor = "white";
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }


    itemDeTroca.replaceWith(table);
}
gerarTabela();