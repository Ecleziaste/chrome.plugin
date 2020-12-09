    'use strict';

    const leftWidget = document.querySelector('.image__widget_row');
    const rightWidget = document.querySelector('.footer__todo');

//делаем ширину правого блока в футере такой же, как и у левого, чтоб Flex-box красиво отработал
    const takeWidth = leftWidget.clientWidth;
    let changeWidth = () => { rightWidget.style.width = `${takeWidth}px`};
    changeWidth();

//работает БЕЗ директивы use strict 
    // window.onload = function(){

    //     (function(){
    //         let date = new Date();
    //         let time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    //         document.querySelector('.time').innerHTML = time;
    //         window.setTimeout(arguments.callee, 1000);
    //     })();
    
    // };

//работает С use strict   
      /* функция добавления ведущих нулей */
    /* (если число меньше десяти, перед числом добавляем ноль) */
    //TODO: попробовать переписать на стрелочные, чтобы сократить код, убрать return
    function zeroFirst(value) {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    };

    /* функция получения текущей даты и времени */
    function getTime() {
        let currentTime = new Date();
        let hours = zeroFirst(currentTime.getHours());
        let minutes = zeroFirst(currentTime.getMinutes());
        // let seconds = zeroFirst(currentTime.getSeconds());
        // return hours+":"+minutes+":"+seconds;
        return hours+":"+minutes;
    };

    /* выводим текущую дату и время на сайт в нужный блок */
    // document.querySelector('.time').innerHTML = getTime();

    /* каждую секунду получаем текущую дату и время */
    /* и вставляем значение в нужный блок  */
    //TODO: сделать сетинтервал на минуту
    setInterval(function () {
        document.querySelector('.time').innerHTML = getTime();
    }, 1000);
        