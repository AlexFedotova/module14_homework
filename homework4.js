const inputWidth = document.getElementById("width");
const inputHeight = document.getElementById("height");
const submitButton = document.querySelector("button");
const outputSpan = document.querySelector("span");
const photosContainer = document.querySelector("div");

submitButton.addEventListener("click", submitButtonHandle);

function submitButtonHandle() {
    const width = Number(inputWidth.value);
    const height = Number(inputHeight.value);

    if ((width < 100 || width > 300 || isNaN(width)) || (height < 100 || height > 300 || isNaN(height))) {
        write("Одно из чисел вне диапазона от 100 до 300.");
        return;
    }
    
    fetch(`https://picsum.photos/${width}/${height}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка загрузки изображения');
            }
            return response.url;
        })
        .then((result) => {
            loadPhoto(result);
            write("Фото загружено.");
        })
        .catch((reason) => {
            write("Ошибка: " + reason);
        });
}

function write(text) {
    outputSpan.innerHTML = text;
}

function loadPhoto(photoUrl) {
    const cardBlock = `<img src="${photoUrl}" style="margin-right: 30px" />`;
    photosContainer.innerHTML = cardBlock;
}
