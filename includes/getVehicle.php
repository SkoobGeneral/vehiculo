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

$sql = "SELECT PK_Id, Name, Model, Description FROM TBL_Vehicle WHERE PK_Id = 'f9655cbbcabae0df047715e3d60c26ec'";


$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo $row["Name"];
    }
} else {
    echo "";
}
$conn->close();
?>