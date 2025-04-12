function abrirModal(img) {
    var modal = document.getElementById("modal");
    var imagemModal = document.getElementById("imagem-modal");
    
    imagemModal.src = img.src;
    modal.style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}
