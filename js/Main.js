'user strict'

import{ Registro} from "./Registro.js";
import{ Interfaz} from "./Interfaz.js";


document.getElementById('Registro')
        .addEventListener('submit', function (e){
            const nombre=document.getElementById('Nombre').value;
            const apellido=document.getElementById('Apellido').value;
            const documento=document.getElementById('Documento').value;
            const correo=document.getElementById('Correo').value;
            const usuario=document.getElementById('Usuario').value;
            const observ=document.getElementById('Observ').value;
            
            const registro = new Registro(nombre.toUpperCase(), apellido.toUpperCase(), documento.toUpperCase(), correo.toLowerCase(), usuario.toUpperCase(), observ.toUpperCase());

            const interfaz = new Interfaz();
            if (nombre === '' || apellido === '' || documento === '' || correo === '' || usuario === '' || observ === '') {
                return interfaz.Mensaje('Información incompleta', 'info');
            }
            interfaz.addRegistro(registro);
            interfaz.resetRegistro();
            interfaz.Mensaje('Registro Exitoso', 'success');

            e.preventDefault();
        });
        document.getElementById('Listado').addEventListener('click', function(e){
            const interfaz = new Interfaz();
            interfaz.deleteRegistro(e.target);
        });