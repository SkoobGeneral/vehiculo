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

$sql = "SELECT PK_Id, FK_VehicleId, Odometer, FuelType, FuelPrice, FuelAmount, TotalPurchase, Place, PurchaseDate FROM TBL_Fuel WHERE FK_VehicleId = 1 ORDER BY PurchaseDate DESC LIMIT 4";


$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        //echo $row["Odometer"]." ".$row["FuelPrice"]." ".$row["TotalPurchase"]."<br>";
        echo '<div class="dashboardfuelresume" style="position:relative;">
        
        <div class="stat-icon"> <i class="fa fa-caret-right"></i> </div>
        <div class="stat">
            <div class="value"> $'.number_format($row["TotalPurchase"],0,".",",").' '.' Pesos </div>
            <div class="name"> '.$row["Odometer"].' Km | '.substr($row["PurchaseDate"],0,-9). ' </div>
        </div>
        <div class="fa fa-plus mostrar" style="position:absolute; top:30%; right:3%; color:green; opacity:0.3;"></div>
        <progress class="progress stat-progress" value="100" max="100">
			<div class="progress">
				<span class="progress-bar" style="width: 75%;"></span>
			</div>
		</progress></div>';
    } echo '<div class="pull-right" style="margin-top:5px;"> <a href="#" style="text-decoration:none;"><i class="fa fa-caret-right"></i> Ver más </a></div>';
} else {
    echo "No hay registros";
}
$conn->close();
?>