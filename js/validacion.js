document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelectorAll(".needs-validation");

    Array.from(form).forEach(form => {
        form.addEventListener("submit", event => {
            if(!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            const pw1 = form.querySelector("#password1");
            const pw2 = form.querySelector("#password2");

            if(pw1.value.length < 6) {
                event.preventDefault();
                pw1.setCustomValidity("Debe ingresar una contraseña con al menos 6 caracteres.")
            } else {
                pw1.setCustomValidity("");
            }

            if(pw1.value !== pw2.value) {
                event.preventDefault();
                pw2.setCustomValidity('Debe ingresar igual a "contraseña".')
            } else {
                pw2.setCustomValidity("");
            }

            form.classList.add("was-validated")
        }, false);
    })
});