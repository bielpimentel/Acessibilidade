document.addEventListener("DOMContentLoaded", function() {

    let scrollContainer = document.querySelector(".container2");
    let setaEsquerda = document.querySelector(".seta-esquerda");
    let setaDireita = document.querySelector(".seta-direita");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

    setaDireita.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 330;
    });

    setaEsquerda.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 330;
    });

    let scrollContainerAv = document.querySelector(".rolagem-av");
    let setaEsquerdaAv = document.querySelector(".seta-esquerda-av-demo");
    let setaDireitaAv = document.querySelector(".seta-direita-av-demo");

    scrollContainerAv.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainerAv.scrollLeft += evt.deltaY;
    });

    setaDireitaAv.addEventListener("click", () => {
        scrollContainerAv.style.scrollBehavior = "smooth";
        scrollContainerAv.scrollLeft += 380;
    });

    setaEsquerdaAv.addEventListener("click", () => {
        scrollContainerAv.style.scrollBehavior = "smooth";
        scrollContainerAv.scrollLeft -= 380;
    });
    
});