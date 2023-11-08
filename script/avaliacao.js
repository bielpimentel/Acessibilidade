
document.addEventListener("DOMContentLoaded", function() {

    let scrollContainerAv = document.querySelector(".caixa-comentarios");
    let setaEsquerdaAv = document.querySelector(".seta-esquerda-av");
    let setaDireitaAv = document.querySelector(".seta-direita-av");

    scrollContainerAv.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainerAv.scrollLeft += evt.deltaY;
    });

    setaDireitaAv.addEventListener("click", () => {
        scrollContainerAv.style.scrollBehavior = "smooth";
        scrollContainerAv.scrollLeft += 370;
    });

    setaEsquerdaAv.addEventListener("click", () => {
        scrollContainerAv.style.scrollBehavior = "smooth";
        scrollContainerAv.scrollLeft -= 370;
    });

    
    let scrollContainerAv2 = document.querySelector(".caixa-comentarios2");
    let setaEsquerdaAv2 = document.querySelector(".seta-esquerda-av2");
    let setaDireitaAv2 = document.querySelector(".seta-direita-av2");

    scrollContainerAv2.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainerAv2.scrollLeft += evt.deltaY;
    });

    setaDireitaAv2.addEventListener("click", () => {
        scrollContainerAv2.style.scrollBehavior = "smooth";
        scrollContainerAv2.scrollLeft += 370;
    });

    setaEsquerdaAv2.addEventListener("click", () => {
        scrollContainerAv2.style.scrollBehavior = "smooth";
        scrollContainerAv2.scrollLeft -= 370;
    });

    let scrollContainerAv3 = document.querySelector(".caixa-comentarios3");
    let setaEsquerdaAv3 = document.querySelector(".seta-esquerda-av3");
    let setaDireitaAv3 = document.querySelector(".seta-direita-av3");

    scrollContainerAv3.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainerAv3.scrollLeft += evt.deltaY;
    });

    setaDireitaAv3.addEventListener("click", () => {
        scrollContainerAv3.style.scrollBehavior = "smooth";
        scrollContainerAv3.scrollLeft += 370;
    });

    setaEsquerdaAv3.addEventListener("click", () => {
        scrollContainerAv3.style.scrollBehavior = "smooth";
        scrollContainerAv3.scrollLeft -= 370;
    });

});