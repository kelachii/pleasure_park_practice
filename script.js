let age;
let nameEL;
let input;
let comment;
let calculate;
let discount;
let discountEL;
let ticket = document.getElementById("contain");
const price = 1500;

// let identity = localStorage.setItem("Name", nameEL);
function app() {
    document.getElementById("inpute").style.display = "block";
    document.getElementById("hero_section").style.display = "none";
}



function calculation() {
    age = document.getElementById("age").value;
    calculate = (price / 100);
    if (age < 10) {
        calculate *= 100;
        calculate -= price;
        discount = '100 %';
        comment = `Your Gate Fee is ₦${calculate} : FREE`;
    }
    else if (age < 18 && age >= 10) {
        calculate *= 50;
        calculate -= price;
        discount = '50 %'
        comment = `Your Gate Fee is ₦${calculate}`;

    }
    else if (age < 27 && age >= 18) {
        calculate *= 20;
        calculate -= price;
        discount = '20 %'
        comment = `Your Gate Fee is ₦${calculate}`;
    }
    else if (age < 46 && age >= 27) {
        calculate *= 5;
        calculate -= price;
        discount = '5 %'
        comment = `Your Gate Fee is ₦${calculate}`;
    }
    else if (age < 65 && age >= 46) {
        calculate *= 60;
        calculate -= price;
        discount = '60 %'
        comment = `Your Gate Fee is ₦${calculate}`;
    }
    else if (age === 65) {
        comment = "Abeg go beer parlour";

    }

    else {
        document.write("Sir/Ma please kindly leave the environment , nor be here you go take die");
    }
    document.getElementById("inpute").style.display = "none";
    document.getElementById("contain").style.display = "block";
    nameEL = document.getElementById("name").value;
    let Name = document.getElementById("nameel");
    Name.innerHTML += nameEL;
    discountEL = document.getElementById("discount");
    discountEL.innerHTML += discount;
    calculate -= price;
    let amountEL = document.getElementById("amount");
    amountEL.innerHTML += calculate;
    let commentEL = document.getElementById("comment");
    commentEL.innerHTML += comment;
    let time = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    let timeEL = document.getElementById("date");
    timeEL.innerHTML += time;
}
function cancel() {
    document.getElementById("contain").style.display = "none";
    document.getElementById("hero_section").style.display = "block";
}

