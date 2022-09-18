function changeClass(){
    document.querySelector('.container-group__loader').classList.add('dissolve')
    document.body.style.overflowY = "auto";
    console.log('pass')
}
setTimeout(changeClass, 5500);
