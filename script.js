const btnsaludar = document.getElementById('btn-saludar')

let mensajeMostrado = false;
console.log(btnsaludar)

btnsaludar.addEventListener('click', function () {


    console.log('click');
    if (!mensajeMostrado) {
        const seccionContacto = document.getElementById('contacto');


        const mensajes = document.createElement('p')
        mensajes.textContent = 'gracias por ver esto';
        mensajes.style.color = 'green';
        mensajes.style.fontWeight = 'bold';
        // alert('hola,bienvenido');

        seccionContacto.appendChild(mensajes);
        mensajeMostrado = true;
        btnsaludar.textContent = 'mensaje envido';
        btnsaludar.disabled = true;
        btnsaludar.style.backgroundColor = '#bdc3c7';
    }
})
