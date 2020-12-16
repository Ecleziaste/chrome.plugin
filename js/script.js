    'use strict';

// функция добавления ведущих нулей (если число меньше десяти, перед числом добавляем ноль)
//TODO: попробовать переписать на стрелочные, чтобы сократить код, убрать return
    function zeroFirst(value) {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    };
//работает С use strict 
// функция получения текущей даты и времени
    function getTime() {
        let currentTime = new Date();
        let hours = zeroFirst(currentTime.getHours());
        let minutes = zeroFirst(currentTime.getMinutes());
   
        return hours + ":" + minutes;
    };

    document.querySelector('.time').innerHTML = getTime();
      
// каждую секунду получаем текущую дату и время и вставляем значение в нужный блок дял отображения текущего времени
    function showCurrentTime() {
        document.querySelector('.time').innerHTML = getTime();
    };

    setInterval(showCurrentTime, 1000);

// задаем время суток и имя пользователя для обращения вне ф-ии
    let userName = "Andrew";
    let timesOfDay = "test";
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
    
    showTimesOfDay();
    setInterval(showTimesOfDay, 1000);
    
  
      