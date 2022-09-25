const getString = window.sessionStorage.getItem("service")
const setString = document.querySelector('.text-form').innerHTML = `Vous avez choisie "${getString}"`
const getFile = document.getElementById('file')
const btnDel = document.getElementById('delFile')
const imgPdf = "../stylesheets/asset/pdf.png"
let addArrayFile=[]


function displayFile(){
    let verify = document.querySelectorAll('.all-file');
    if(verify != null){
        const del = document.querySelectorAll('.all-file')
        del.forEach(div => {
            div.remove()
        });
    };

    addArrayFile.push(getFile.files[0]);
    let newArrayFile = [...new Set(addArrayFile)];
    console.log(newArrayFile)
    newArrayFile.map(files => {
        let container = document.querySelector('.preview-all__file');
        let containerAll = document.createElement('div');
        containerAll.setAttribute('class', 'all-file');
        let containerAllFilePreview = document.createElement('div');
        containerAllFilePreview.setAttribute('class', 'all-file__preview');
        let pictureFilePreview = document.createElement('img');
        pictureFilePreview.setAttribute('class', 'picture-preview');
        switch(files.type){
            case "application/pdf":
                console.log("test pdf");
                pictureFilePreview.src = './stylesheets/asset/pdf.png'
            break;
            case "video/mp4":
                console.log("test mp4");
                pictureFilePreview.src = './stylesheets/asset/mp4.png'
            break;
            default: 
                pictureFilePreview.src = URL.createObjectURL(files);
            break;
        }
        let nameFilePreview = document.createElement('p');
        nameFilePreview.setAttribute('class', 'name-preview');
        nameFilePreview.innerHTML = files.name;
        containerAllFilePreview.appendChild(pictureFilePreview);
        containerAllFilePreview.appendChild(nameFilePreview);
        
        containerAll.appendChild(containerAllFilePreview);
        container.appendChild(containerAll);
    });
    console.log(newArrayFile)
}

function delFile() {
    addArrayFile = []
    getFile.files.lenght = 0;
    let verify = document.querySelectorAll('.all-file');
    if(verify != null){
        const del = document.querySelectorAll('.all-file')
        del.forEach(div => {
            div.remove()
        });
    };
}
getFile.addEventListener('change', () => {
    displayFile();
});
btnDel.addEventListener('click', () => {
    delFile()
})
document.querySelector('.btn-send').addEventListener('click', (e)=>{
    e.preventDefault();
    let verify = document.querySelectorAll('.group-input');

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
    
    ball.appendChild(validIcon);
    container.appendChild(ball);
})