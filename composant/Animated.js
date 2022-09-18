function changeClass(){
    document.querySelector('.container-group__loader').classList.add('dissolve')
    document.body.style.overflow="auto";
    document.body.style.overflowX="hidden";
    console.log('pass')
}
setTimeout(changeClass, 5500);
