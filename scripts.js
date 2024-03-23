let h1 = document.querySelector('h1');
let imgBox = document.querySelector('.js-img-item');
let prevBtn = document.querySelector('.js-previous-btn');
let nextBtn = document.querySelector('.js-next-btn');
let imgs = document.querySelectorAll('.col > .img-box > .img');
let exitBtn = document.querySelector('.js-exit-btn');

// kattintás az albumon egy képre
function album() {
    imgs.forEach((element, index) => {
        element.addEventListener('click', () => {
            let src = element.getAttribute("src");
            imgBox.innerHTML = `<img class="img"
            src="${src}" data-id="${index}" alt="demo">`;

            document.querySelector(".js-img-viewer").classList.add("img-viewer-flex");
        });
    });
}

// kilépés a képnézegetőből
function exit() {
    document.querySelector(".js-img-viewer").classList.remove("img-viewer-flex");
}

// előző képet töltse be
function prevImgBtn() {
    let img = document.querySelector('.js-img-item > .img');
    // van-e eleme, ha van akkor hajtsa végre
    if (document.querySelector('.js-img-item').contains(img) === true) {
        let dataId = img.getAttribute("data-id");
        imgs.forEach((element, index) => {
            let imgsLength = imgs.length;
            if (element.getAttribute("data-id") === dataId) {
                if (index === 0) {
                    let srcLast = imgs[imgsLength - 1].getAttribute("src");
                    let dataIdLast = imgs[imgsLength - 1].getAttribute("data-id");

                    imgBox.innerHTML = `<img class="img"
                src="${srcLast}" data-id="${dataIdLast}" alt="demo">`;
                }
                else {
                    let srcPrev = imgs[index - 1].getAttribute("src");
                    let dataIdPrev = imgs[index - 1].getAttribute("data-id");

                    imgBox.innerHTML = `<img class="img"
            src="${srcPrev}" data-id="${dataIdPrev}" alt="demo">`;
                }
            }
        });
    }
}

// következő képet töltse be
function nextImgBtn() {
    let img = document.querySelector('.js-img-item > .img');
    // van-e eleme, ha van akkor hajtsa végre
    if (document.querySelector('.js-img-item').contains(img) === true) {
        let dataId = img.getAttribute("data-id");
        imgs.forEach((element, index) => {
            let imgsLength = imgs.length;
            if (element.getAttribute("data-id") === dataId) {
                if (index === (imgsLength - 1)) {
                    let srcFirst = imgs[0].getAttribute("src");
                    let dataIdFirst = imgs[0].getAttribute("data-id");

                    imgBox.innerHTML = `<img class="img"
                src="${srcFirst}" data-id="${dataIdFirst}" alt="demo">`;
                }
                else {
                    let srcNext = imgs[index + 1].getAttribute("src");
                    let dataIdNext = imgs[index + 1].getAttribute("data-id");

                    imgBox.innerHTML = `<img class="img"
            src="${srcNext}" data-id="${dataIdNext}" alt="demo">`;
                }
            }
        });
    }
}

function render() {
    h1.style.backgroundColor = 'lime';
    h1.style.textAlign = 'center';
    album();
    exitBtn.addEventListener("click", exit);
    prevBtn.addEventListener("click", prevImgBtn);
    nextBtn.addEventListener("click", nextImgBtn);
}

render();
