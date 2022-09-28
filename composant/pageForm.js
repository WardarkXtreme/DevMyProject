const getString = window.sessionStorage.getItem("service")
const setString = document.querySelector('.text-form').innerHTML = `Vous avez choisie "${getString}"`

//verify
const verifyName = document.querySelector('#name');
const regexName = /^(([a-zA-Z0-9._\s-']{3,25}))$/;
const verifyMail = document.querySelector('#mail');
const regexMail = /^(([a-z0-9._-]+@[a-z0-9.]+[.][a-z]{2,6}))$/;
const verifyNumber = document.querySelector('#number');
const regexNumber = /^(([0-9]{10}))$/;

verifyName.addEventListener('input', (e)=> {
    let validName = e.target.value.match(regexName)
    console.log(e.target.value)
    let annonce = document.querySelector('.obligation__name');
    annonce.innerHTML = ""
    if (!validName){
        
        annonce.innerHTML = "E-mail non valide"
    }
    if(e.target.value.length <= 3){
        
        annonce.innerHTML = `${e.target.value.length}/3 caractères minimums autorisés`
    }
    if( e.target.value.length >= 25){
        
        annonce.innerHTML = `${e.target.value.length}/25 caractères maximums autorisés`
    }
})
verifyMail.addEventListener('input', (e)=> {
    let validMail = e.target.value.match(regexMail)
    console.log(e.target.value)
    let annonce = document.querySelector('.obligation__mail');
    annonce.innerHTML = ""
    if (!validMail){
        
        annonce.innerHTML = "Attention, caractères spéciaux interdits."
    }
    if(e.target.value.length <= 3){
        
        annonce.innerHTML = `${e.target.value.length}/3 caractères minimums autorisés`
    }
    if( e.target.value.length >= 25){
        
        annonce.innerHTML = `${e.target.value.length}/25 caractères maximums autorisés`
    }
})
verifyNumber.addEventListener('input', (e)=> {
    let validNumber = e.target.value.match(regexNumber)
    console.log(e.target.value)
    let annonce = document.querySelector('.obligation__number');
    annonce.innerHTML = ""
    if (!validNumber){

        annonce.innerHTML = "Attention, Valeure numerique uniquement."
    }
    if(e.target.value.length != 10){
        
        annonce.innerHTML = `${e.target.value.length}/10 caractères minimums autorisés`
    }
})



//send
document.querySelector('.btn-send').addEventListener('click', (e)=>{
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const mail = document.getElementById('mail').value;
    const number = document.getElementById('number').value;
    const message = document.getElementById('message').value;
    
    let formData = {
        raison: getString,
        name: name,
        mail: mail,
        number: number,
        message: message
    }
    
    fetch('http://localhost:3000/api/contact/', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    })
    .then((res) => {
        let verify = document.querySelectorAll('.group-input');
        console.log("ok")
        if(verify != null){
            const del = document.querySelectorAll('.group-input')
            let btn = document.querySelector('.btn-input');
            del.forEach(div => {
                div.remove()
            });
            btn.remove()
        };
        const container = document.querySelector(".card-form");
        const ball = document.createElement('div');
        ball.setAttribute('class', 'ball');
        const validIcon = document.createElement('i');
        validIcon.setAttribute('class', 'fa-solid fa-check valid-ico')
        const info = document.createElement('h2');
        info.innerHTML = "Félicitations !"
        const infoTwo = document.createElement('p');
        infoTwo.innerHTML = "Nous vous répondrons dans les meilleurs délais"
        ball.appendChild(validIcon);
        container.appendChild(ball);
        container.appendChild(info);
        container.appendChild(infoTwo);
    })
    .catch((err) => {
        console.log(err)
        let verify = document.querySelectorAll('.group-input');
        console.log("ko")
        if(verify != null){
            const del = document.querySelectorAll('.group-input')
            let btn = document.querySelector('.btn-input');
            del.forEach(div => {
                div.remove()
            });
            btn.remove()
        };
        const container = document.querySelector(".card-form");
        const ball = document.createElement('div');
        ball.setAttribute('class', 'ball');
        const validIcon = document.createElement('i');
        validIcon.setAttribute('class', 'fa-solid fa-xmark noValid-ico')
        const info = document.createElement('h2');
        info.innerHTML = "Oups !"
        const infoTwo = document.createElement('p');
        infoTwo.innerHTML = "Une erreur est survenue, veuillez attendre la redirection..."
        ball.appendChild(validIcon);
        container.appendChild(ball);
        container.appendChild(info);
        container.appendChild(infoTwo);
    })
})