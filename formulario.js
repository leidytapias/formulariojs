  function formulario(formulario){
 var formulario = document.getElementsById('formulario'),
     nombre = formulario.nombre,
     correo = formulario.correo,
     sexo = formulario.sexo,
     terminos = formulario.terminos,
     error = document.getElementById('error');

     function validarNombre(e){
         if(nombre.value == '' || nombre.value == null){
             console.log('por favor completa el nombre');
             error.style.display = 'block';
             error.innerHTML += '<li>por favor completa el nombre </li>';


             e.preventDefault();

         } else {
             error.style.display = "none";
         }
     }
     function validarCorreo(e){
        if(correo.value == '' || correo.value == null){
            console.log('por favor completa el correo');
            error.style.display = 'block';
            error.innerHTML += '<li>por favor completa el correo </li>';


            e.preventDefault();

           
        }else {
            error.style.display = "none";
        }

     }
     function validarSexo(e){
           if (sexo.value == "" || sexo.value == null){
           console.log("por favor completa el sexo");
           error.style.display = "block";
           error.innerHTML += '<li>por favor completa el sexo</li>';

           e.preventDefault();

        }else {
            error.style.display = 'none';
        }
    }

     function validarTerminos(e){
        if (terminos.checked ==false){
            console.log("por favor completa los terminos");
            error.style.display = "block";
            error.innerHTML += '<li>por favor completa los terminos</li>';
 
            e.preventDefault();
     } else {
         error.style.display = "none";
     }
    }
     function validarFormulario(e){
         error.innerHTML = '';

         validarNombre(e);
         validarCorreo(e);
         validarSexo(e);
        validarTerminos(e);
        alert("valido el formulario");
     }


     formulario.addEventListener('submit', validarFormulario);
    }
