let title = document.createElement('title');
title.innerHTML = 'HW8';
document.head.appendChild(title);

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let link = document.createElement('link');
link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap');
link.setAttribute('rel', 'stylesheet');
document.head.append(link);

let style = document.createElement('style');
document.head.append(style);

let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

let pageTitle = document.createElement('h1');
pageTitle.innerHTML = 'Choose Your Option';
container.append(pageTitle);

let subTitle = document.createElement('p');
subTitle.classList.add('subtitle');
subTitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
container.append(subTitle);

let itemList = document.createElement('div');
itemList.classList.add('itemlist');
container.append(itemList);

let item = document.createElement('div');
item.classList.add('item');
itemList.append(item);

let h3 = document.createElement('h3');
h3.innerHTML = 'Freelancer';
item.append(h3);

let h2 = document.createElement('h2');
h2.innerHTML = 'Initially designed to';
item.append(h2);

let description = document.createElement('p');
description.classList.add('description');
description.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
item.append(description);

let button = document.createElement('button');
button.innerHTML = 'start here';
button.classList.add('button');
item.append(button);

let item2 = item.cloneNode(true);
itemList.append(item2);

style.innerHTML = `

    * {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-family: Arvo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 48px;
        text-align: center;
    }

    .subtitle {
        font-family: Open Sans;
        font-size: 14px;
        line-height: 26px;
        text-align: center;
        margin-bottom: 55px;
        color: #9FA3A7;
    }

    .itemlist {
        display: flex;
        justify-content: center;
        border: 2px solid #E5E5E5;
        border-radius: 5px;
        width : 35%;
        margin: 0 auto;
    }

    .item {
        padding: 30px;
        text-align: center;
    }

    .item:last-child {
        border-left: 2px solid #E5E5E5;
    }

    h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        color: #9FA3A7;
        margin-bottom: 20px;
    }

    h2 {
        font-family: Arvo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 46px;
        margin-bottom: 25px;
    }

    .description {
        font-family: OpenSans;
        font-size: 12px;
        line-height: 22px;
        color: #9FA3A7;
        margin-bottom: 50px;
    } 

    .button {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        padding: 20px 30px;
        background-color: transparent;
        border: 3px solid #FFC80A;
        border-radius: 30px;
        text-transform: uppercase;
        cursor: pointer;
    }

    .item:hover {
        background-color: #8F75BE;
    }

    .item:hover h3 {
        color: #FFC80A;
    } 

    .item:hover h2,
    .item:hover .description,
    .item:hover .button {
        color: white;
    }

`;


