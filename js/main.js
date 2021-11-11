var timer = 0;
var timerMobile = 0;
function closeAllPopups() {
    $('.legend li').removeClass('poped');
    $('.legend li .extras').slideUp(300);
    $('.markers div').removeClass('clicked');
    $('.markers div').removeClass('hovered');
    timer = setTimeout(centerLegend, 301);
    timerMobile = setTimeout(resizeLegendSpace, 301);
}
function forEach(list, callback) {
    Array.prototype.forEach.call(list, callback);
}

function counter1() {
    var countdownbox = document.querySelector('#MardiGrasCountdown');
    if (countdownbox) {
        mgtime = countdownbox.getAttribute('data-mg-timestamp');
        var digits = countdownbox.querySelectorAll('.countdown-amount');
        setInterval(calculate, 1000);
        function calculate() {
            let currtime = parseInt((new Date()).getTime() / 1000);
            let delta = (mgtime - currtime);
            if (delta <= 0)
                delta = 0;
            digits[0].innerHTML = parseInt(delta / 86400);
            delta = (delta % 86400);
            digits[1].innerHTML = ("00" + parseInt(delta / 3600)).slice(-2);
            delta = (delta % 3600);
            digits[2].innerHTML = ("00" + parseInt(delta / 60)).slice(-2);
            delta = (delta % 60);
            digits[3].innerHTML = ("00" + parseInt(delta)).slice(-2);
        }
        calculate();
    }
}






   