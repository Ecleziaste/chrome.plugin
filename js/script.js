    'use strict';

    document.querySelector('.time').innerHTML = getTime();

// задаем время суток и имя пользователя для обращения вне ф-ии
    let userName = "Andrew";
    let timesOfDay = "test";

    showTimesOfDay();
    setInterval( showCurrentTime, 1000 );
    setInterval( showTimesOfDay, 1000 );
    

// функция добавления ведущих нулей (если число меньше десяти, перед числом добавляем ноль)
//TODO: попробовать переписать на стрелочные, чтобы сократить код, убрать return
    function zeroFirst(value) {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    };
// функция получения текущей даты и времени
    function getTime() {
        let currentTime = new Date();
        let hours = zeroFirst(currentTime.getHours());
        let minutes = zeroFirst(currentTime.getMinutes());
        // let day = getDate();
        return hours + ":" + minutes;
    };

//функция смены картинки в полночь

    function changePicture() {
        let currentTime = new Date();
        let day = currentTime.getDate();

        return day;
    };

    let dayz = changePicture();
    // let Days = getTime.day;
    // function getDay() {
    //     let day = getTime.currentTime.getDate();
    //     return day;
    // };

// каждую секунду получаем текущую дату и время и вставляем значение в нужный блок дял отображения текущего времени
    function showCurrentTime() {
        document.querySelector('.time').innerHTML = getTime();
        if (getTime() == "00:00") {
            // renderGalleryItem();
            setInterval( renderGalleryItem, 86400000 );
        };
    };

// мб внутри switch case подойдет?
    function showTimesOfDay() {
        //берем 1 и 2 'элемент из возвращаемого значения функции и превращаем полученную строку в число(этот метод убирает нули в начале). вообще нули в начале не используюся у чисел в строгом режиме и вызывают ошибку
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

    
    
  
      