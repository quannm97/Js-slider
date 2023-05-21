(function () {

    const elem = function (element) {
        if (element.charAt(0) === "#") {
            return document.querySelector(element);
        } else return document.querySelectorAll(element);
    };

    const slides = Array.from(elem(".slide"));
    const buttonArea = elem("#buttons-container");
    const eraser = elem("#eraser");
    let index = 0;
    let currentIndex;

    function detactSlide(id) {
        currentIndex = index;
        switch (id) {
            case "next":
                index += 1;
                if (index > slides.length - 1) {
                    index = 0;
                }
                break;

            case "previous":
                index -= 1;
                if (index < 0) {
                    index = slides.length - 1;
                }
                break;
            default:
                break;
        }
    }

    function scroll() {
        eraser.classList.add("active");
        setTimeout(() => {
            slides[currentIndex].classList.toggle("active");
            slides[index].classList.toggle("active");
            eraser.classList.toggle("active");
        }, 1000);
    }

    function handleClick(e) {
        const button = e.target;
        detactSlide(button.id);
        scroll();
    }
    buttonArea.addEventListener("click", handleClick);
})();
