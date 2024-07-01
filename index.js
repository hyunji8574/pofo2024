window.onload = function () {
    const worksLi = document.querySelectorAll("#works .list li");
    const worksWindow = document.querySelector("#popup-works");
    const worksPopupLi = document.querySelectorAll("#popup-works .list li");
    const worksBtnClose = document.querySelector("#popup-works .btn.close");

    const gallLi = document.querySelectorAll("#gallery .list li");
    const gallWindow = document.querySelector("#popup-gall");
    const gallPopupLi = document.querySelectorAll("#popup-gall .list li");
    const gallBtnClose = document.querySelector("#popup-gall .btn.close");


    worksLi.forEach((e, i) => {
        e.addEventListener("click", function () {
            worksPopupLi.forEach(e => {
                e.classList.remove("on");
            });
            worksWindow.classList.add("on");
            worksPopupLi[i].classList.add("on");
        });
    });

    worksBtnClose.addEventListener("click", function () {
        worksWindow.classList.remove("on");
    });

    gallLi.forEach((e, i) => {
        e.addEventListener("click", function () {
            gallPopupLi.forEach(e => {
                e.classList.remove("on");
            });
            gallWindow.classList.add("on");
            gallPopupLi[i].classList.add("on");
        });
    });

    gallBtnClose.addEventListener("click", function () {
        gallWindow.classList.remove("on");
    });

}