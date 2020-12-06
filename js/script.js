'use strict';

const leftWidget = document.querySelector('.image__widget_row');
const rightWidget = document.querySelector('.footer__todo');

const takeWidth = leftWidget.clientWidth;

let changeWidth = () => { rightWidget.style.width = `${takeWidth}px`};
// console.log(changeWidth);

changeWidth();