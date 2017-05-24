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

$sql = "SELECT PK_Id, FK_VehicleId, Odometer, FuelType, FuelPrice, FuelAmount, TotalPurchase, Place, PurchaseDate, PurchaseTime FROM TBL_Fuel WHERE FK_VehicleId = 'f9655cbbcabae0df047715e3d60c26ec' ORDER BY PurchaseDate DESC";


$DataArray = array();

$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $Date = ($row["PurchaseDate"]);
        $OdometerThousandsDotless = str_replace('.','',$row["Odometer"]);
        $FuelAmountThousandsCommaless = str_replace(',','.',$row["FuelAmount"]);
        $DataArray[] = array('Date' => $Date, 'Odometer' => $OdometerThousandsDotless, 'FuelAmount' => $FuelAmountThousandsCommaless);
        //$DataArray([$OdometerThousandsDotless], [$FuelAmountThousandsCommaless]);
        //$TotalSlides = $result->num_rows;
    }
    echo json_encode($DataArray);

} //else {
    //echo "No hay registros";
//}
$conn->close();
?>