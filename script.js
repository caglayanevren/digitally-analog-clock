const sec1 = document.querySelector('.second1');
const sec2 = document.querySelector('.second2');
const min1 = document.querySelector('.minutes1');
const min2 = document.querySelector('.minutes2');
const hour1 = document.querySelector('.hour1');
const hour2 = document.querySelector('.hour2');

function setDate() {
    const now = new Date();

    function getString(get, coef1, coef2, place1, place2) {
        let degree1, degree2;
        if (get[1] == undefined) {
            degree1 = parseFloat(get[0]) * coef1;
            degree2 = 0;
        } else {
            degree1 = parseFloat(get[1]) * coef1;
            degree2 = parseFloat(get[0]) * coef2;
        }
        place1.style.transform = `rotate(-${degree1}deg)`;
        place2.style.transform = `rotate(-${degree2}deg)`;
    }

    let sec = now.getSeconds().toString();
    let min = now.getMinutes().toString();
    let hour = now.getHours().toString();

    getString(sec, 10, 12, sec1, sec2);
    getString(min, 18, 20, min1, min2);
    getString(hour, 36, 45, hour1, hour2);
}
setInterval(setDate, 1000);
setDate();
