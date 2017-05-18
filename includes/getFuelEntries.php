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

$sql = "SELECT PK_Id, FK_VehicleId, Odometer, FuelType, FuelPrice, FuelAmount, TotalPurchase, Place, PurchaseDate, PurchaseTime FROM TBL_Fuel WHERE FK_VehicleId = 1 ORDER BY PurchaseDate DESC";


$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $TotalPurchaseThousands = $row["TotalPurchase"];
        $OdometerThousands = $row["Odometer"];
        $FuelPriceThousands = $row["FuelPrice"];
        echo '<tr><td>$'.$TotalPurchaseThousands.'</td><td>'.$OdometerThousands.'</td><td>'.$row["FuelType"].'</td><td>'.$FuelPriceThousands.'</td><td>'.$row["FuelAmount"].'</td><td>'.$row["PurchaseDate"].' '.$row["PurchaseTime"].'</td><td>'.$row["Place"].'</td></tr>';
    }
} else {
    echo "";
}
$conn->close();
?>