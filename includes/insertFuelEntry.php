<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "System";
$dt = new DateTime($utc);
$tz = new DateTimeZone('America/Bogota');
$dt->setTimezone($tz);
$FechaReserva = $dt->format('Y-m-d H:i:s');
//Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_set_charset($conn,"utf8");

// Escape user inputs for security
$TipoCelebracion = mysqli_real_escape_string($conn, $_POST['tipoCelebracion']);
$GeneroMusical = mysqli_real_escape_string($conn, $_POST['generoMusical']);
$Duracion = mysqli_real_escape_string($conn, $_POST['duracion']);
$Invitados = mysqli_real_escape_string($conn, $_POST['invitados']);
$Formato = mysqli_real_escape_string($conn, $_POST['formato']);
$FechaEvento = mysqli_real_escape_string($conn, $_POST['fecha']);
$HoraEvento = mysqli_real_escape_string($conn, $_POST['horaCompleta']);
$CiudadEvento = mysqli_real_escape_string($conn, $_POST['ciudad']);
$DireccionEvento = mysqli_real_escape_string($conn, $_POST['direccion']);
$Nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
$Apellido = mysqli_real_escape_string($conn, $_POST['apellido']);
$Telefono = mysqli_real_escape_string($conn, $_POST['telefono']);
$Email = mysqli_real_escape_string($conn, $_POST['email']);

$Token = mysqli_real_escape_string($conn, $_POST['token']);
$CelebracionId = mysqli_real_escape_string($conn, $_POST['celebracionId']);
$FormatoId = mysqli_real_escape_string($conn, $_POST['formatoId']);
$GeneroId = mysqli_real_escape_string($conn, $_POST['generoId']);
$HorasId = mysqli_real_escape_string($conn, $_POST['horasId']);
$InvitadosId = mysqli_real_escape_string($conn, $_POST['invitadosId']);
$Valor = mysqli_real_escape_string($conn, $_POST['valor']);


$sql = "INSERT INTO TBL_Reservas (TipoCelebracion, GeneroMusical, Duracion, Invitados, Formato, Fecha, Hora, Ciudad, Direccion, Nombre, Apellido, Telefono, Email, FechaHoraReserva, Valor, Token)
VALUES ('$TipoCelebracion', '$GeneroMusical', '$Duracion', '$Invitados', '$Formato', '$FechaEvento', '$HoraEvento', '$CiudadEvento', '$DireccionEvento', '$Nombre', '$Apellido', '$Telefono', '$Email', '$FechaReserva', '$Valor', '$Token')";

//$sql = "INSERT FK_VehicleId, Odometer, FuelType, FuelPrice, FuelAmount, TotalPurchase, Place, PurchaseDate VALUES XXX FROM TBL_Fuel WHERE FK_VehicleId = 1 ORDER BY PurchaseDate DESC";


$result = $conn->query($sql);
if ($conn->query($sql) === TRUE) {
    echo "Success!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>