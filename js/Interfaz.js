'user strict'
export class Interfaz{
    addRegistro(registro){
        const listado = document.getElementById('Listado');
        const elemento = document.createElement('div');
        elemento.innerHTML = `
        <div class="card text-center mb-4">
          <div class="bg-dark card-body">
                    <strong>Nombre: </strong>: ${registro.Nombre}
                    <strong>Apellidos: </strong>: ${registro.Apellido} 
                    <strong>Documento: </strong>: ${registro.Documento}
                    <strong>Correo: </strong>: ${registro.Correo}
                    <strong>Usuario: </strong>: ${registro.Usuario}
                    <strong>Observaciones: </strong>: ${registro.Observ}
                    <a href="#" class="btn btn-danger" name="Eliminar">Eliminar</a>
            </div>
        </div>        
        `;
        listado.appendChild(elemento);
    }
    resetRegistro(){
        document.getElementById('Registro').reset();
    }
    deleteRegistro(elemento){
        if (elemento.name === 'Eliminar') {
            elemento.parentElement.parentElement.parentElement.remove();
            this.Mensaje('Registro Eliminado Exitosamente', 'danger');
        }
    }
    Mensaje(Mensaje, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(Mensaje));

        const container = document.querySelector('.container');
        const form = document.querySelector("#Formulario");
        container.insertBefore(div, form);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        },3000);

    }
}