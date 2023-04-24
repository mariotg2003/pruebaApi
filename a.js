function validarCampos(){
    let campoNombre=document.getElementById("nombre")
    let campoContrasena=document.getElementById("contrasena")
    let llave=true


    if(campoNombre.value==""){
        alert("El nombre no puede estar vacío")
        llave=false
    }

    if(campoContrasena.value==""){
        alert("La contraseña no puede estar vacía")
        llave=false
    }

    if(localStorage.getItem(campoNombre.value)!=campoContrasena.value){
        alert("Contraseña incorrecta")
        llave=false
    }
    

    if(llave){
        let campos=[]
        campos.push(campoContrasena.value)
        localStorage.setItem(campoNombre.value,campos)
    }


    

    return llave
}






let botonEntrar=document.getElementById("boton")

