let div = document.getElementById("contaner");


try {
    div.innerHTML = "Voici le texte";
}

catch (error) {
    alert(
        "div" + "contaner " +" n'existe pas "
    );
}