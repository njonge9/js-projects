const countdownDate = new Date('29 Sep 2022 07:33:20').getTime();

const updateTime = setInterval(function () {
    let timeNow = new Date().getTime();
    let difference = countdownDate - timeNow;
    

    //time calculation for days, hours, minutes and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / (1000));

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (difference < 0) {
        clearInterval(updateTime);
        document.getElementById('days').innerHTML = 00;
        document.getElementById('hours').innerHTML = 00;
        document.getElementById('minutes').innerHTML = 00;
        document.getElementById('seconds').innerHTML = 00;
        const end = document.getElementById('end')
        end.style.color = 'yellow'
        end.innerText = 'Congratulation Babe. May this be another year of happiness and more love!!';
        const body = document.querySelector('body');
        body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1596583164564-5d6e7a9e0c68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZ3JhdHVsYXRpb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")'
    }

}, 1000)

