const getString = window.sessionStorage.getItem("service")
const setString = document.querySelector('.text-form').innerHTML = `Vous avez choisie "${getString}"`
const getFile = document.getElementById('file')
const btnDel = document.getElementById('delFile')
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
    
    newArrayFile.map(files => {
        let container = document.querySelector('.preview-all__file');
        let containerAll = document.createElement('div');
        containerAll.setAttribute('class', 'all-file');
        let containerAllFilePreview = document.createElement('div');
        containerAllFilePreview.setAttribute('class', 'all-file__preview');
        let pictureFilePreview = document.createElement('img');
        pictureFilePreview.setAttribute('class', 'picture-preview');
        pictureFilePreview.src = URL.createObjectURL(files);
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