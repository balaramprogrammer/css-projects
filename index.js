var sliderNumber = 1;
var translateValue=0;

document.querySelector('.left').addEventListener('click', function () {
    if (sliderNumber <6) {
        translateValue-=800;
        document.querySelector('.slider').style.transform = `translateX(${translateValue}px)`;
        sliderNumber++;
    } else {
        alert('click right arrow');

    }
});

document.querySelector('.right').addEventListener('click', function () {
    if (sliderNumber >1) {
        translateValue+=800;
        sliderNumber--;
        document.querySelector('.slider').style.transform = `translateX(${(translateValue)}px)`;
    } else {
        alert('click left arrow')
    }
});