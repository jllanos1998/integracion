
const div = document.getElementById("contenedor")
const contenedorTitle = document.getElementById("contenedor__title");
const link = "https://mindicador.cl/api";


const buildTemplate = (key,data)=>{
    return `
        <h2>${key}</h2>
        <p>${data[key]}</p>
    `;
}
const buildTemplate2 = (key,data) =>{
    console.log(key,data)
    return `
        <h2>${data[key].codigo}</h2>
        <p>${data[key].fecha}</p>
        <p>${data[key].nombre}</p>
        <p>${data[key].unidad_medida}</p>
    `;
}

fetch(link)
    .then(re=>re.text())
    .then((res)=>{
        data = JSON.parse(res)
        console.log(data) 

        for (const key in data) {
            const section = document.createElement("section");
            if(key == "version" || key =="autor"||key=="fecha"){
                section.innerHTML= buildTemplate(key, data);
                div.appendChild(section)
            }else{
                section.innerHTML= buildTemplate2(key, data);
                div.appendChild(section)
            }
        }


    })
    .catch(err=> console.log(err));
