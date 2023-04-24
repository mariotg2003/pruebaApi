function validarCamposCreados(){
    let campoNombre=document.getElementById("nombre")
    let campoContra=document.getElementById("contrasena")
    let campoRepe=document.getElementById("contrasenaRepe")
    llave=true

    if(campoContra.value!=campoRepe.value){
        alert("Las contraseñas no coinciden")
        llave=false
    }

    if(campoNombre.value==""){
        alert("El campo nombre es obligatorio")
        llave=false
    }

    if(campoContra.value==""){
        alert("El campo de la contraseña es obligatorio")
        llave=false
    }

    if(localStorage.getItem(campoNombre.value)!=null){
        alert("El usuario ya está registrado")
        llave=false
    }


    if(llave){
        localStorage.setItem(campoNombre.value,campoContra.value)
    }

    return llave
}
