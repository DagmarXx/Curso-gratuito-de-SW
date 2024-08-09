const formulario = document.getElementById('contact-form');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('https://sheet.best/api/sheets/7029e30c-7be4-4511-8f2e-03b832aacee3',{
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Nombre": "Ejemplo de nombre",
      "Apellido":"Ejemplo de Apellido",
      "Correo":"Ejemplo de Correo",
      "Numero":"Ejemplo de Numero",
      "WhatsApp":"Ejemplo de WhatsApp",
      "Telegram":"Ejemplo de Telegram",
      "Ninguno":"Ejemplo de Ninguno",
      "Acepto":"Ejemplo de Acepto" 
    })
  });
});
