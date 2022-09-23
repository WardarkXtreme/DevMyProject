function changeClass(){
    document.querySelector('.container-group__loader').classList.add('dissolve');
    setTimeout(()=>{
        document.querySelector('.container-group__loader').style.zIndex = '-100';
    }, 2000);
    document.body.style.overflowY = "auto";
}
const btn = document.querySelectorAll('.btn')
btn.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        window.sessionStorage.setItem("service", `${e.target.id}`)
        document.location.href = 'contact.html';
    })
});

setTimeout(changeClass, 5500);