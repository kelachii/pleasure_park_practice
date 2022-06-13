let age;
let nameEL;
let input;
let comment;
let calculate;
let discount;
let discountEL;
let total;
let inputEL = document.getElementById("inpute");
let heroEL = document.getElementById("hero_section");
let ticket = document.getElementById("contain");
const price = 1500;

function app() {
    inputEL.style.display = "block";
    heroEL.style.display = "none";
}



function calculation() {
    age = document.getElementById("age").value;
    calculate = (price / 100);
    if (age < 10) {
        calculate *= 100;
        total = price - calculate;
        discount = '100 %';
        comment = `Your Gate Fee is ₦${total} : FREE`;
    }
    else if (age < 18 && age >= 10) {
        calculate *= 50;
        total = price - calculate;
        discount = '50 %'
        comment = `Your Gate Fee is ₦${total} have fun!`;

    }
    else if (age < 27 && age >= 18) {
        calculate *= 20;
        total = price - calculate;
        discount = '20 %'
        comment = `Your Gate Fee is ₦${total} enjoy!`;
    }
    else if (age < 46 && age >= 27) {
        calculate *= 5;
        total = price - calculate;
        discount = '5 %'
        comment = `Your Gate Fee is ₦${total} you sef don dey old oo`;
    }
    else if (age < 65 && age >= 46) {
        calculate *= 60;
        total = price - calculate;
        discount = '60 %'
        comment = `Your Gate Fee is ₦${total} you suppose dey club`;
    }
    else if (age === 65) {
        comment = "Abeg go beer parlour";

    }

    else {
        comment = "Sir/Ma please kindly leave the environment , nor be here you go take die";
    }
    inputEL.style.display = "none";
    ticket.style.display = "block";
    nameEL = document.getElementById("name").value;
    let Name = document.getElementById("nameel");
    Name.innerHTML += nameEL;
    discountEL = document.getElementById("discount");
    discountEL.innerHTML += discount;
    total = price - calculate;
    let amountEL = document.getElementById("amount");
    amountEL.innerHTML += total;
    let commentEL = document.getElementById("comment");
    commentEL.innerHTML += comment;
    let time = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    let timeEL = document.getElementById("date");
    timeEL.innerHTML += time;
}
function cancel() {
    ticket.style.display = "none";
    heroEL.style.display = "block";
}
function printPageArea() {
    let printContent = document.getElementById("contain");
    let WinPrint = window.open();
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}
