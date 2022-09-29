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
        let nameService;
        switch (e.target.id){
            case "Sitevitrine": 
                nameService = "site vitrine"
                break;
            case "SiteE-Commerce":
                nameService = "Site E-Commerce"
                break;
            case "Applicationweb":
                nameService = "Application web"
                break;
            case "SEO":
                nameService = "SEO"
                break;
            case "Refontedesite":
                nameService = "Refonte de site"
            break; 
        }
        window.sessionStorage.setItem("service", `${nameService}`);
        document.location.href = 'contact.html';
    })
});
console.warn("⛔️⚠️Cette console n'est pas faite pour les utilisateurs non-avertis, prudence.👀")
console.warn("😈 je vous vois 😈")
setTimeout(changeClass, 5500);