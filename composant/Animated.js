function changeClass(){
    document.querySelector('.container-group__loader').classList.add('dissolve')
    document.body.style.overflow="auto";
    console.log('pass')
}
setTimeout(changeClass, 5500);
