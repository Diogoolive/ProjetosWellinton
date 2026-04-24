function saudacao() {
    let nome = document.getElementById("nome").value;
    if (nome === "") {
        alert ("Digite seu Nome!");
    } else {
        document.getElementById("resposta").innerText = "Olá, " + nome;
    }
}