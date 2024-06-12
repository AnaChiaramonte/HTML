trocatema = () =>{
    // alert("mudei o tema e voê não viu")
    // const html = document.documentElement;

    // document.querySelector("body").style.background

    // document.querySelector("body").style.background = "Pink"; TROCA O FUNDO QUANDO CLICA
    document.documentElement.classList.toggle("light")
    // document.documentElement.classList.toggle("perfil")
    const isLight = document.documentElement.classList.contains("light");
    // const perfil = document.documentElement.classList.contains("perfil");
    const imagem = isLight ? "./img/sherek.feliz.jpg" : "./img/sherek.emo.jpg";
    // const alt =  perfil ? "personagem shereck emo" : "personagem shereck feliz";

    document.querySelector("#perfil img").setAttribute("src", imagem);
    document.querySelector("#perfil img").setAttribute("src", alt);
}