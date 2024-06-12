trocatema = () =>{
    // alert("mudei o tema e voê não viu")
    // const html = document.documentElement;

    // document.querySelector("body").style.background

    // document.querySelector("body").style.background = "Pink"; TROCA O FUNDO QUANDO CLICA
    document.documentElement.classList.toggle("light")
    const isLight = document.documentElement.classList.contains("light");
    const imagem = isLight ? "./img/sherek.feliz.jpg" : "./img/sherek.emo.jpg";
    const alertas =  isLight ? "personagem shereck feliz" : "personagem shereck emo";

    document.querySelector("#perfil img").setAttribute("src", imagem);
    document.querySelector("#perfil img").setAttribute("alt", alertas);
}