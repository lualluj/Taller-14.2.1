document.addEventListener("DOMContentLoaded", function() {
    // Buscamos el formulario
    const form = document.querySelectorAll(".needs-validation");

    //Convertimos el NodeList del formulario en un Array e iteramos sobre la misma
    Array.from(form).forEach(form => {
        form.addEventListener("submit", event => {
            //Obtenemos los elementos a utilizar
            const pw1 = form.querySelector("#password1");
            const pw2 = form.querySelector("#password2");
            const email = form.querySelector("#email");
            const termsText = form.querySelector("#termsText");
            const terminos = document.getElementById("terminos");
            const termsError = document.getElementById("termsError");

            //Validación de la longitud de la contraseña
            if(pw1.value.length < 6) {
                pw1.setCustomValidity("Debe ingresar una contraseña con al menos 6 caracteres.")
            } else {
                pw1.setCustomValidity("");
            }

            //Validación de que coincidan ambas contraseñas
            if(pw1.value !== pw2.value) {
                pw2.setCustomValidity('Debe ingresar igual a "contraseña".')
            } else {
                pw2.setCustomValidity("");
            }

            //Validación del email, usando una expresión regular
            const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            //Comprobamos que el email cupla el formato especificado por la expresión
            if(!regEx.test(email.value)) {
                email.setCustomValidity("Debe ingresar un email.")
            } else {
                email.setCustomValidity("");
            }
            
            //Validación de términos del servicio
            if(!terminos.checked) {
                termsText.setCustomValidity("Debe aceptar los términos del servicio.")
                termsError.style.display = "inline";
                termsError.style.verticalAlign = "middle";
            } else {
                termsText.setCustomValidity("");
                termsError.style.display = "none";
            }

            //Comprobación de la validez del formulario, haciendo que en caso de que no sea válido, se evite el envío del formulario y se detenga la propagación del evento
            if(!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            //Agregamos la clase "was-validated" para aplicar estilos de validación visual
            form.classList.add("was-validated");
        }, false);
    })
});