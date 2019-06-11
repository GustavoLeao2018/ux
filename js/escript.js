$(document).ready(() => {
    let titulo = "Eagle Hotel";
    let subtitulo = "Welcome!";
    let numeroDePessoas = Math.floor(Math.random() * 45) +1;
    let mensagens = Math.floor(Math.random() * numeroDePessoas) + 1;
    let modificacoesQuartos = Boolean(Math.round(Math.random())) ? '<i class="fas fa-exclamation-triangle"></i>': '';

    $("#titulo").append(titulo);
    $("#subtitulo").append(subtitulo);
    $("#titulo-subtitulo").append(titulo+' '+subtitulo);

    $("#mensagens").append(mensagens);
    $("#quartos-status").append(modificacoesQuartos);
});