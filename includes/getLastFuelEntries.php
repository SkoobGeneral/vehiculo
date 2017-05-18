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

$sql = "SELECT PK_Id, FK_VehicleId, Odometer, FuelType, FuelPrice, FuelAmount, TotalPurchase, Place, PurchaseDate, PurchaseTime FROM TBL_Fuel WHERE FK_VehicleId = 1 ORDER BY PurchaseDate DESC LIMIT 4";


$result = $conn->query($sql);
$SlideNumber = 0;
$TotalSlides = 0;
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $TotalPurchaseThousands = $row["TotalPurchase"];
        $OdometerThousands = $row["Odometer"];
        $FuelPriceThousands = $row["FuelPrice"];
		$SlideNumber ++;
		$TotalSlides = $result->num_rows;
        echo '<a href="#" style="text-decoration:none;">
        <div class="dashboardfuelresume" data-toggle="modal" data-target="#fuelmore-modal" id="dashboardfuelentrieslink'.$SlideNumber.'" style="position:relative;" onclick="lastfuelentriesmodal(`'.$TotalPurchaseThousands.'`, `'.$OdometerThousands.'`, `'.$row["FuelType"].'`, `'.$FuelPriceThousands.'`, `'.$row["FuelAmount"].'`, `'.$row["PurchaseDate"].'`, `'.$row["PurchaseTime"].'`, `'.$row["Place"].'`, `'.$SlideNumber.'`, `'.$TotalSlides.'`);";>
        
        <div class="stat-icon"> <i class="fa fa-caret-right"></i> </div>
        <div class="stat">
            <div class="value" style="color:#78bd2e;"> $'.$TotalPurchaseThousands.' '.' Pesos </div>
            <div class="name" style="color:#ffa500;"> '.$OdometerThousands.' Km <span style="color:#DBDBDB;">|</span> <span style="color:#339cc3;">'.$row["PurchaseDate"].' '.$row["PurchaseTime"]. '</span></div>
        </div>
        <div class="fa fa-plus mostrar" style="position:absolute; top:30%; right:3%; color:green; opacity:0.3;"></div>
        <progress class="progress stat-progress" value="100" max="100">
			<div class="progress">
				<span class="progress-bar" style="width: 75%;"></span>
			</div>
		</progress></div></a>';
    } if ($SlideNumber == 4) {echo '<div class="pull-right" style="margin-top:5px;"> <a href="#" style="text-decoration:none;" onclick="$(`.section`).hide(); $(`#sidebar-menu li`).removeClass(`active`); fuelsection();"> Ver más </a></div>';}
} else {
    echo "No hay registros";
}
$conn->close();
?>