<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registros";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Procesar el formulario si se ha enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $groupIntegrationWhats =  isset($_POST['group-integrationWhats']) ? 1 : 0;
    $groupIntegrationTeleg =  isset($_POST['group-integrationTeleg']) ? 1 : 0;
    $groupIntegrationNone =  isset($_POST['group-integrationNone']) ? 1 : 0;
    $acceptEmails = isset($_POST['subscribe']) ? 1 : 0;

    // Preparar y ejecutar consulta SQL
    $sql = "INSERT INTO contactos (first_name, last_name, email, phone, group_integrationWhats, group_integrationTeleg, group_integrationNone, accept_emails) VALUES ('$firstName', '$lastName', '$email', '$phone', '$groupIntegrationWhats','$groupIntegrationTeleg','$groupIntegrationNone', '$acceptEmails')";

    $header = "From: noreply@example.com" . "\r\n";
    $header.= "Reply-To: noreply@example.com" . "\r\n";
    $header.= "X-Mailer: PHP/". phpversion();
    $mail = @mail($email,$firstName,$phone); 


    if ($conn->query($sql) == TRUE) {
        header("Location: index-2.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Cerrar conexión
$conn->close();
?>
