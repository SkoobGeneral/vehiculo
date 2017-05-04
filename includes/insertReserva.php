<?php
$servername = "localhost";
$username = "dagudelo";
$password = "J4Px?zIcm%vF";
$dbname = "masmusica";

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


/*
$sql = "SELECT Premium FROM TBL_Celebracion WHERE Value = $CelebracionId";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $Premium = $row["Premium"];
    }
}

$sql = "SELECT ValorAdicional FROM TBL_Formatos WHERE GeneroFormatoId = $FormatoId AND GeneroId = $GeneroId";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $Adicional = $row["ValorAdicional"];
    }
}
//
$sql = "SELECT Tarifa, Descuento, (Tarifa*Descuento) AS TarifaFinal FROM TBL_Tarifas WHERE FormatoId = $FormatoId AND GeneroId = $GeneroId AND Horas = $HorasId AND PublicoId = $InvitadosId";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        if ($Premium == 1){
            $Valor = ($row["TarifaFinal"]*1.7)+$Adicional;
        } else {
            $Valor = $row["TarifaFinal"]+$Adicional;
        }

    }
}
*/

$sql = "INSERT INTO TBL_Reservas (TipoCelebracion, GeneroMusical, Duracion, Invitados, Formato, Fecha, Hora, Ciudad, Direccion, Nombre, Apellido, Telefono, Email, FechaHoraReserva, Valor, Token)
VALUES ('$TipoCelebracion', '$GeneroMusical', '$Duracion', '$Invitados', '$Formato', '$FechaEvento', '$HoraEvento', '$CiudadEvento', '$DireccionEvento', '$Nombre', '$Apellido', '$Telefono', '$Email', '$FechaReserva', '$Valor', '$Token')";
$ValorSeparado = number_format($Valor,0,",",".");

if ($conn->query($sql) === TRUE) {
    echo "Success!";
    $to      = 'eventos@masmusica.co, reservas@masmusica.co, jsdelvastoa@gmail.com';
    $subject = 'Nueva Reserva MasMusica';
    $message = '<html>
<body id="page-top" class="index">
    <div style="margin:0px;padding:0px">


<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
    <tbody>
        <tr>
            <td align="center">
                <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" style="table-layout:fixed"><tbody><tr>
               <td valign="middle" align="center" height="60" bgcolor="#752e33"><a href="http://masmusica.co" style="color:white; font-family: Montserrat, Helvetica; text-decoration: none; font-size: 20px;" target="_blank">masmusica.co</a></td>
                </tr>
            <tr>
               <td valign="top" bgcolor="#ffffff">
                  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" class="m_-5725425934381452298m_-3642751382089087126em_wrapper">
                     <tbody><tr>
                        <td valign="top">
                           
                           <table width="598" border="0" cellspacing="0" cellpadding="0" align="center" class="m_-5725425934381452298m_-3642751382089087126em_wrapper">
    <tbody><tr>
        <td valign="top">
            <table width="598" border="0" cellspacing="0" cellpadding="0" align="center" class="m_-5725425934381452298m_-3642751382089087126em_wrapper">
                <tbody><tr>
                    <td valign="top">
                        <table width="548" border="0" cellspacing="0" cellpadding="0" align="center" class="m_-5725425934381452298m_-3642751382089087126em_wrapper">
                            <tbody><tr>
                                <td height="22">&nbsp;</td>
                            </tr>

                            <tr>
                                <td valign="top">
                                    <table width="548" border="0" cellspacing="0" cellpadding="0" align="center" class="m_-5725425934381452298m_-3642751382089087126em_wrapper">
                                        <tbody>
                                         <tr>
                                            <td height="22">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                                    <tbody><tr>

                                                        <td valign="top" align="center" width="71"><img src="http://masmusica.co/img/logo.png" width="71" height="71" alt="logo" style="display:block; margin:10px;" border="0" class="CToWUd"></td>
                                                        <td width="12">&nbsp;</td>
                                                        <td valign="top">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" align="left">
                                                                <tbody><tr>
                                                                    <td align="left" style="font-family:Open Sans,Trebuchet MS,sans-serif;font-size:15px;line-height:19px;font-weight:700;color:#000000">'.$Nombre.' '.$Apellido.'</td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="7" style="font-size:1px;line-height:1px">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" style="font-family:Open Sans,Trebuchet MS,sans-serif;font-size:15px;line-height:19px;color:#929292">¡A un solo paso de celebrar juntos! Tu reserva ha sido aceptada y nuestros músicos se alistan para tu evento. Si tienes alguna duda comunícate al <a href="tel:3003712481" style="color:#a9b56e;font-size:18px" target="_blank">300-371-2481</a>.</td>
                                                                </tr>
                                                                </tbody></table>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="16" style="font-size:1px;line-height:1px">&nbsp;</td>
                                        </tr>
                                    
                                        





                                        <tr>
                                            <td valign="top">
                                                <table width="100%" cellspacing="0" cellpadding="0" align="center">
                                                    <tbody><tr>
                                                        <td width="13">&nbsp;</td>
                                                        <td valign="top">




                                                            <table width="100%" cellspacing="0" cellpadding="0" align="center">
                                                                <tbody>
                                                                <tr>
                                                                    <td valign="middle" height="33" bgcolor="#752e33" align="center" style="font-family:Open Sans,Trebuchet MS,sans-serif;font-size:18px;line-height:20px;font-weight:700;color:#ffffff">Resumen del Evento</td>
                                                                </tr>
                                                                                                                                <tr>
                                                                <td align="left" style="font-family:Open Sans,Trebuchet MS,sans-serif;font-size:14px;line-height:20px;padding:10px; color:#929292">Tipo de Celebración: <span style="color:#000000">'.$TipoCelebracion.'</span><br>
                                                                    Género Musical: <span style="color:#000000">'.$GeneroMusical.'</span><br>
                                                                    Duración: <span style="color:#000000">'.$Duracion.'</span><br>
                                                                    Invitados: <span style="color:#000000">'.$Invitados.'</span><br>
                                                                    Formato: <span style="color:#000000">'.$Formato.'</span><br>
                                                                    Fecha: <span style="color:#000000">'.$FechaEvento.'</span><br>
                                                                    Hora: <span style="color:#000000">'.$HoraEvento.'</span><br>
                                                                    Ciudad: <span style="color:#000000">'.$CiudadEvento.'</span><br>
                                                                    Dirección: <span style="color:#000000">'.$DireccionEvento.'</span><br>
                                                                    Teléfono de Contacto: <span style="color:#000000">'.$Telefono.'</span><br>
                                                                    Email de Contacto: <span style="color:#000000">'.$Email.'</span><br>
                                                                </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="m_-5725425934381452298m_-3642751382089087126em_font2" align="right" style="font-family:Open Sans,Trebuchet MS,sans-serif;font-size:18px; padding:0 10px; line-height:23px;color:#a9b56e;font-weight:700"><span style="vertical-align: top;">Total a pagar: </span><span style="color:black; font-size: 30px;"> $'.$ValorSeparado.'</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="15" style="font-size:1px;line-height:1px;">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                <td class="m_-5725425934381452298m_-3642751382089087126em_height_10" height="10">&nbsp;</td>
                                             </tr>
                                             <tr>
                                                <td class="m_-5725425934381452298m_-3642751382089087126em_align_cent" valign="top" align="right"><a href="http://google.com" style="color: #fff; font-size: 31px !important; border:1px solid #252525; border-radius: 5px; padding:8px 18px; background: #9c9c31; text-decoration: none; margin-right: 10px;" target="_blank" data-saferedirecturl="http://google.com">Pagar</a></td>
                                             </tr>
                                                                </tbody></table>
                                                        </td>
                                                        <td width="13">&nbsp;</td>
                                                    </tr>
                                                    </tbody></table>

                                            </td>
                                        </tr>
                                </td>
                            </tr>
                     <tr>
                        <td class="m_-5725425934381452298m_-3642751382089087126em_height_10" height="28">&nbsp;</td>
                     </tr>
                     <tr>
                        <td class="m_-5725425934381452298m_-3642751382089087126em_pad_aside" valign="top" align="left" style="font-family:Helvetica,Arial,sans-serif;font-size:8px;line-height:12px;color:#9f9f9f;text-align:center">
                        <p>Este e-mail ha sido enviado por <a href="http://masmusica.co" style="color:black; font-family: Montserrat, Helvetica;" target="_blank">masmusica.co</a> , Bogota D.C, Colombia </p>
                          <p><a href="http://masmusica.co/terminosycondiciones.html" style="color:black; font-family: Montserrat, Helvetica; font-size: 10px;" target="_blank">Términos y Condiciones</a></p>
                        </td>
                     </tr>
                     <tr>
                     <td class="m_-5725425934381452298m_-3642751382089087126em_height_10" height="28">&nbsp;</td>
                     </tr>
                     
                     </tbody></table>
               </td>
            </tr>
            
            
            </tbody></table>
         
      </td>
   </tr>
   </tbody></table>
</body>

</html>';
    $headers = 'Content-Type: text/HTML; charset=utf-8' . "\r\n" .
        'From: reservas@masmusica.co' . "\r\n" .
        'Reply-To: reservas@masmusica.co' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>