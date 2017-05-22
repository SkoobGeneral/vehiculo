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

$VehicleId = 'f9655cbbcabae0df047715e3d60c26ec';
$dt = new DateTime($utc);
$tz = new DateTimeZone('America/Bogota');
$dt->setTimezone($tz);
$Now = $dt->format('m/Y');
$sql = "SELECT PK_Id, FK_VehicleId, Odometer, FuelType, FuelPrice, FuelAmount, TotalPurchase, Place, PurchaseDate, PurchaseTime, REVERSE(PurchaseDate) AS ReverseDate FROM TBL_Fuel WHERE FK_VehicleId = 'f9655cbbcabae0df047715e3d60c26ec' ORDER BY Odometer DESC";


$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $TotalPurchaseThousands = $row["TotalPurchase"];
        $OdometerThousands = $row["Odometer"];
        $FuelPriceThousands = $row["FuelPrice"];
        if(substr(($row["PurchaseDate"]),3)==$Now){
        	echo '<tr style="background: rgba(133,206,54,0.1);"><td>$'.$TotalPurchaseThousands.'</td><td>'.$OdometerThousands.'</td><td>'.$row["FuelType"].'</td><td>'.$FuelPriceThousands.'</td><td>'.$row["FuelAmount"].'</td><td>'.$row["PurchaseDate"].' '.$row["PurchaseTime"].'</td><td>'.$row["Place"].'</td><td><a href="#" title="Editar Registro" data-toggle="modal" data-target="#add-fuel-modal" onclick="updateFuelEntryModal(`'.$row["PK_Id"].'`,`'.$TotalPurchaseThousands.'`, `'.$OdometerThousands.'`, `'.$row["FuelType"].'`, `'.$FuelPriceThousands.'`, `'.$row["FuelAmount"].'`, `'.$row["PurchaseDate"].'`, `'.$row["PurchaseTime"].'`, `'.$row["Place"].'`);"><i class="fa fa-pencil text-info" style="margin:0 5px;"></i></a><a href="#" title="Eliminar Registro" data-toggle="modal" data-target="#fuelmore-modal" onclick="deleteFuelEntryModal(`'.$row["PK_Id"].'`,`'.$TotalPurchaseThousands.'`, `'.$OdometerThousands.'`, `'.$row["FuelType"].'`, `'.$FuelPriceThousands.'`, `'.$row["FuelAmount"].'`, `'.$row["PurchaseDate"].'`, `'.$row["PurchaseTime"].'`, `'.$row["Place"].'`);"><i class="fa fa-trash text-danger" style="margin:0 5px;"></i></a></td></tr>';
        }else{
        	echo '<tr><td>$'.$TotalPurchaseThousands.'</td><td>'.$OdometerThousands.'</td><td>'.$row["FuelType"].'</td><td>'.$FuelPriceThousands.'</td><td>'.$row["FuelAmount"].'</td><td>'.$row["PurchaseDate"].' '.$row["PurchaseTime"].'</td><td>'.$row["Place"].'</td><td><a href="#" title="Editar Registro" data-toggle="modal" data-target="#add-fuel-modal" onclick="updateFuelEntryModal(`'.$row["PK_Id"].'`,`'.$TotalPurchaseThousands.'`, `'.$OdometerThousands.'`, `'.$row["FuelType"].'`, `'.$FuelPriceThousands.'`, `'.$row["FuelAmount"].'`, `'.$row["PurchaseDate"].'`, `'.$row["PurchaseTime"].'`, `'.$row["Place"].'`);"><i class="fa fa-pencil text-info" style="margin:0 5px;"></i></a><a href="#" title="Eliminar Registro" data-toggle="modal" data-target="#fuelmore-modal" onclick="deleteFuelEntryModal(`'.$row["PK_Id"].'`,`'.$TotalPurchaseThousands.'`, `'.$OdometerThousands.'`, `'.$row["FuelType"].'`, `'.$FuelPriceThousands.'`, `'.$row["FuelAmount"].'`, `'.$row["PurchaseDate"].'`, `'.$row["PurchaseTime"].'`, `'.$row["Place"].'`);"><i class="fa fa-trash text-danger" style="margin:0 5px;"></i></a></td></tr>';
        }
    }
} else {
    echo "";
}
$conn->close();
?>