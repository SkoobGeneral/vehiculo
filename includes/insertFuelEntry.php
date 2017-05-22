<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "System";
//$dt = new DateTime($utc);
//$tz = new DateTimeZone('America/Bogota');
//$dt->setTimezone($tz);
//$FechaReserva = $dt->format('Y-m-d H:i:s');
//Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_set_charset($conn,"utf8");

// Escape user inputs for security
$FuelPurchase = mysqli_real_escape_string($conn, $_POST['fuelPurchase']);
$FuelOdometer = mysqli_real_escape_string($conn, $_POST['fuelOdometer']);
$FuelType = mysqli_real_escape_string($conn, $_POST['fuelType']);
$FuelPrice = mysqli_real_escape_string($conn, $_POST['fuelPrice']);
$FuelAmount = mysqli_real_escape_string($conn, $_POST['fuelAmount']);
$FuelDate = mysqli_real_escape_string($conn, $_POST['fuelDate']);
$FuelTime = mysqli_real_escape_string($conn, $_POST['fuelTime']);
$FuelPlace = mysqli_real_escape_string($conn, $_POST['fuelPlace']);
$VehicleId = mysqli_real_escape_string($conn, $_POST['vehicleId']);
//$Token = mysqli_real_escape_string($conn, $_POST['token']);




$sql = "INSERT INTO TBL_Fuel (FK_VehicleId, Odometer, FuelType, FuelPrice, FuelAmount, TotalPurchase, PurchaseDate, PurchaseTime, Place) VALUES ('$VehicleId', '$FuelOdometer', '$FuelType', '$FuelPrice', '$FuelAmount', '$FuelPurchase', '$FuelDate', '$FuelTime', '$FuelPlace')";


$result = $conn->query($sql);
if ($conn->query($sql) === TRUE) {
    echo "Success!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>