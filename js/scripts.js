const POP_UP = document.getElementById('popUp');
let gramatas = [];

window.addEventListener('load', () => {
    gramatas = JSON.parse(localStorage.getItem("gramatas") || "[]");
    console.log(gramatas)
    render();
});

document.getElementById('jaunaGramata').addEventListener('click', () => {
    POP_UP.style.display = 'block';

})

document.getElementById('pievienotGramatu').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let gramata = {virsraksts: virsraksts.value, autors: autors.value};

    virsraksts.value = "";
    autors.value = "";

    gramatas.push(gramata);

    render();
})

function render() {
    let biblioteka = document.getElementById('biblioteka');
    biblioteka.innerHTML = "";

    for(let i = 0; i < gramatas.length; i++) {
        let gramata = `
        <div class="gramata">
            <h3>Virsraksts: ${gramatas[i].virsraksts}</h3>
            <h4>Autors: ${gramatas[i].autors}</h4>
        </div>`;

        biblioteka.innerHTML += gramata;
    }

    localStorage.setItem("gramatas", JSON.stringify(gramatas))
}
