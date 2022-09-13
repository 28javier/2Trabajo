let form = document.querySelector('#form');
        let enviar = document.querySelector('#enviar');
        function validar() {
          let desabilitar = false;
          if (form.nombre === "") {
            desabilitar = true
          }
          if (form.telefono === "") {
            desabilitar = true
          }
          if (form.email === "") {
            desabilitar = true
          }
          if (form.mensaje === "") {
            desabilitar = true
          }
          if (desabilitar === true) {
            btn.disable = true
          } else {
            btn.disable = false
          }
        }
        form.addEventListener('keyup', validar);