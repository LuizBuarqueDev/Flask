document.getElementById("imageForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fileInput = document.getElementById("imageUpload");
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append("image", file);

        fetch("/upload", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("message").innerHTML = "Imagem enviada com sucesso!";
        })
        .catch(error => {
            document.getElementById("message").innerHTML = "Erro ao enviar imagem!";
            console.error("Error:", error);
        });
    } else {
        document.getElementById("message").innerHTML = "Por favor, selecione uma imagem.";
    }
});