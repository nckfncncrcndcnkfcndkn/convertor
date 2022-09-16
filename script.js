const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");
const select = document.querySelector('#valyuta');

const kursdollar = 11020;
const kurseuro = 10905;
const kursrubl = 179.56;

select.addEventListener('change',myFunction)

function myFunction() {
    if(select.value == "DOLLLAR"){
        input2.value = input1.value / kursdollar;
    }else if(select.value = "kurseuro"){
        input2.value = input1.value / kurseuro;
    }else if(select.value === "kursrubl"){
        input2.value = input1.value / kursrubl;
    }
}

input1.addEventListener("focus",select.value = null);
