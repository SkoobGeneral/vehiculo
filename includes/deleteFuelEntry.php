<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "System";

//Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_set_charset($conn,"utf8");

$VehicleId = mysqli_real_escape_string($conn, $_POST['vehicleId']);
$EntryId = mysqli_real_escape_string($conn, $_POST['fuelEntryId']);


$sql = "DELETE FROM TBL_Fuel WHERE FK_VehicleId = '".$VehicleId."' AND PK_Id = '".$EntryId."'";


$result = $conn->query($sql);
if ($conn->query($sql) === TRUE) {
    echo "Success!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>