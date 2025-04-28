let nombre = document.getElementById('name');
let correo = document.getElementById('email');
let usuario = document.getElementById('username');

let datoNombre;
let datoCorreo;
let datoUsuario

nombre.addEventListener('input', () => {
    datoNombre = nombre.value;
})

correo.addEventListener('input', () => {
    datoCorreo = correo.value;
})

usuario.addEventListener('input', () => {
    datoUsuario = usuario.value;
})

let pagina = document.getElementById('header');

function saveValue( ) {
    if(nombre.value==''){
        alert("Hay Campos Vacios");
    } else if(correo.value==''){
        alert("Hay Campos Vacios");
    } else if(usuario.value==''){
        alert("Hay Campos Vacios");
    } else{
        // nombre1.setCustomValidity('');


    console.log(datoNombre);
    console.log(datoCorreo);
    console.log(datoUsuario);

    pagina.classList.add("deleteB");

    setTimeout(function() {
        pagina.innerHTML = `
        <style>

        .abrirB {
            animation: borrar;
            animation-duration: 1s;
        }
        
        @keyframes borrar {
            0% {
                opacity: 0%;
            }
            100% {
                opacity: 100%;
            }
        }

        .ticket-container {
            width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        }

        .ticket-container img {
            margin: 0 0 20px 0;
        }

        .ticket-container h1 {
            font-size: 50px;
            line-height: 65px;
            margin: 0 30px;
            text-align: center;
        }

        .ticket-container h3 {
            margin: 20px 20px 30px 20px;
            max-width: 420px;
            font-weight: 500;
            text-align: center;
        }

        .ticket {
            display: flex;
            padding: 20px;
            flex-direction: column;
            border-radius: 8px;
            border: 2px solid rgb(196, 196, 196) ;
            width: max-content;
            min-width: 500px;
            justify-content: center;
            align-items: center;
            background-color: rgba(110, 112, 240, 0.226);
        }

        .ticket .title {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
        }

        .ticket .ti {
            display: flex;
            flex-direction: column;
        }

        .ticket .til {
            display: flex;
            flex-direction: column; 
            justify-content: center;
            align-items: center;
        }

        .ticket .til h1 {
            margin: 10px 0;
        }

        .ticket .user-info {
            display: flex;
        }

        .ticket .git {
            display: flex;
        } 

        .ticket .git img {
            margin: 0 5px 0 0;
        }

        @media (max-width: 425px){
            .ticket-container h1 {
                font-size: 25px;
                line-height: 35px;
            }

            .ticket {
                min-width: 70%;
                width: max-content;
            }
        }  

    </style>

        <div class="ticket-container abrirB">
        <img width="150" src="./images/logo-full.svg" alt="logo">
        <h1>Congrats, ${datoNombre}! </h1>
        <h1>Your ticket is ready</h1>
        <h3>We have emailed your ticket to ${datoCorreo} and will send updates in the run up to the event.</h3>
    
        <div class="ticket">
            <div class="title">
                <img style="margin: 15px 15px 0px 0;" height="30" width="30px" src="./images/logo-mark.svg" alt="">
                <div class="ti">
                    <h2>Coding Conf</h2>
                    <h4>Jan 31, 2025 / Austin, TX</h4>
                </div>
            </div>
            <div class="user-info">
                <div class="til">
                    <h1>${datoNombre}</h1>
                    <div class="git">
                        <img src="./images/icon-github.svg" alt="">
                        <h4>${datoUsuario}</h4>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
        `
    }, 1000)
    
    // pagina.innerHTML = ""
}
}
