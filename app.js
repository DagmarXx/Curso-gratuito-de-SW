const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch('https://sheet.best/api/sheets/7029e30c-7be4-4511-8f2e-03b832aacee3', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Nombre": formulario['first-name'].value,
      "Apellido": formulario['last-name'].value,
      "Correo": formulario['email'].value,
      "Numero": formulario['phone'].value,
      "WhatsApp": formulario['group-integrationWhats'].checked ? formulario['group-integrationWhats'].value : '',
      "Telegram": formulario['group-integrationTeleg'].checked ? formulario['group-integrationTeleg'].value : '',
      "Ninguno": formulario['group-integrationNone'].checked ? formulario['group-integrationNone'].value : '',
      "Acepto": formulario['subscribe'].checked
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert('Datos enviados exitosamente! Revisa tu correo electronico!');
    window.location.href = 'index-2.html';  // Redirecciona a index-2.html
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Hubo un error al enviar los datos.');
  });
});
