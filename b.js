let campoUsuario=document.getElementById("campoUsuario")
let listaPokeFav=[]

let buscador=document.getElementById("buscador")


let valores=window.location.search
let nombre=new URLSearchParams(valores).get("nombre")

let informacion=localStorage.getItem(nombre)

let a=document.getElementById("campoNombre")
a.innerHTML="Hola "+ nombre

let botonRecoge=document.getElementById("recogePoke")
botonRecoge.addEventListener("click",recogerPoke)

let lista=document.getElementById("listaPoke")
let listaFav=document.getElementById("lista")

let ListaUsuario=localStorage.getItem(nombre+"Lista")


function borrarFav(elementoId){
    elementoId.remove()
    let indice=listaPokeFav.indexOf(elementoId)
    listaPokeFav.splice(indice,1)
    localStorage.setItem(nombre+"Lista",listaPokeFav)

    if(listaPokeFav==0){
        localStorage.removeItem(nombre+"Lista")
    }
}




function rellenarFav(){
    let ListaUsuario=localStorage.getItem(nombre+"Lista")



    let arrayFav=ListaUsuario.split(",")

    listaPokeFav=arrayFav

    console.log(ListaUsuario)

    arrayFav.forEach(element => {
        let favorito=document.createElement("p")
        favorito.id=element
        favorito.innerHTML=element
        listaFav.appendChild(favorito)
        let botonBorrar=document.createElement("button")
        botonBorrar.innerHTML="🗑"
        botonBorrar.addEventListener("click",()=>{
            borrarFav(favorito)
        })
        favorito.appendChild(botonBorrar)
    });



}



function recogerPoke(){
    lista.innerHTML=""
    let datos=fetch("https://pokeapi.co/api/v2/pokemon").then(response=>response.json()).then(datos=>{

        let pokes=datos["results"]   
    
        pokes.forEach(element => {
            let elementoLista=document.createElement("p")
            elementoLista.className="elemento"
            elementoLista.id=element["name"] 
            elementoLista.value=element["name"]
            elementoLista.innerHTML=element["name"]
            elementoLista.addEventListener("click",function(){
                if(!listaPokeFav.includes(elementoLista.value)){
                    listaPokeFav.push(elementoLista.value)
                    let favorito=document.createElement("p")
                    let botonBorrar=document.createElement("button")
                    botonBorrar.addEventListener("click",()=>{
                        borrarFav(favorito)
                    })
                    botonBorrar.id=element["name"]
                    botonBorrar.innerHTML="🗑"
                    favorito.id=element["name"] 
                    favorito.innerHTML=element["name"]
                    listaFav.appendChild(favorito)
                    favorito.appendChild(botonBorrar)
                    localStorage.setItem(nombre+"Lista",listaPokeFav)

                }
            })
            lista.appendChild(elementoLista)

        });
    })

}




rellenarFav()