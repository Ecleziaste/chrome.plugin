'use strict';

document.querySelector('.time').innerHTML = getTime();

// задаем время суток и имя пользователя для обращения вне ф-ии
let userName = "Andrew";
let timesOfDay = "test";

showTimesOfDay();
setInterval( showCurrentTime, 1000 );
setInterval( showTimesOfDay, 1000 );
setInterval( changeImageAt, 500);
// setInterval( changeImageAt, 1000 );
// переделать на async\await или юзать промисы
// changeImageAt();
    
// функция добавления ведущих нулей (если число меньше десяти, перед числом добавляем ноль)
//TODO: попробовать переписать на стрелочные, чтобы сократить код, убрать return
function zeroFirst(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
};
// функция получения текущей даты и времени в виде строки 
function getTime() {
    let currentTime = new Date();
    let hours = zeroFirst(currentTime.getHours());
    let minutes = zeroFirst(currentTime.getMinutes());
    return hours + ":" + minutes;
};
// получаем секунды для ф-ии changeImageAt()
function getSecs() {
    let currentTime = new Date();
    let seconds = zeroFirst(currentTime.getSeconds());
    return ":" + seconds;
}

// каждую секунду получаем текущую дату и время и вставляем значение в нужный блок дял отображения текущего времени
function showCurrentTime() {
    document.querySelector('.time').innerHTML = getTime();
    return getTime();
};
// ф-ия показа времени суток(слово)
function showTimesOfDay() {
    //берем 1 и 2 'элемент из возвращаемого значения функции и превращаем полученную строку в число(этот метод убирает нули в начале).
    //  вообще нули в начале не используюся у чисел в строгом режиме и вызывают ошибку
    let getString = getTime()[0] + getTime()[1];
    let showTime = Number(getString);
        if ( showTime >= 6 && showTime < 12 ) {
            timesOfDay = "morning";
        } else if ( showTime >=12 && showTime < 17  ) {
            timesOfDay = "afternoon";
        } else if ( showTime >= 17 && showTime < 23 ) {
            timesOfDay = "evening";
        } else {
            timesOfDay = "night";
        }
    // склеиваем строку для отображения в обращении к пользователю
    document.querySelector('.appeal').innerHTML = "Good " + timesOfDay + ", " + userName + ".";
};
// ф-ия смены картинки в определенное время
function changeImageAt() {
    let value = getTime() + getSecs();
    if (value == "11:05:00") {
    renderGalleryItem();
    value +=1;
    };
};
// async function changeImageAt() {
//     if (getTime() == "08:49") {
//         await renderGalleryItem();
//     }; 
// }; 

// const requestUrl = 'https://api.unsplash.com/collections/61610929/?query=&client_id=WfGwo2pcCl5SpnvONKFQnbG90Sp9lF3cGSOud6xQlzk';
// const getImagesButton = document.querySelector('.getImagesButton');
// const imageToDisplay = document.querySelector('.imageToDisplay');

// getImagesButton.addEventListener('click', async () => {
//     let randomImage = await getNewImage();
//     imageToDisplay.src = randomImage;
// });

// async function getNewImage() {
//     let randomNumber = Math.floor(Math.random() * 10);
//     return fetch(requestUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         let allImages = data.results[randomNumber];
//         return allImages.urls.regular;
//     });
// }




const numImagesAvailable = 48;  //how many photos are total in the collection
const imageWidth = 2400;    //image width in pixels
const imageHeight = 1500;   //image height in pixels
const collectionID = 61610929;  //the collection ID from the original url
const galleryContainer = document.querySelector('.image');

function renderGalleryItem(){
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomImageIndex}`)
    .then((response) => {
    // console.log(response.url);
    galleryContainer.src = `${response.url}`;
    return;
    // galleryContainer.innerHTML = `<img class="image" src="${response.url}" alt="photo" base="img/moraine_lake.jpg">`;
    // document.body.style.backgroundImage = `url(${response.url})`;
    // document.body.style.backgroundRepeat = "no-repeat"
    // document.body.style.backgroundPosition = "top center"
    // document.body.style.backgroundSize = "cover"
    })
};

renderGalleryItem()

    
    
  
      