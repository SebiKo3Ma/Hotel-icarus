<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<link rel="icon" href="Assets/images/icon.png">
      <title>Rezervări</title>
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <script type="text/javascript" src="Assets/scripts/jquery-3.4.1.min.js"></script>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="Assets/css/styles.css">
      <script src="https://kit.fontawesome.com/9344dd445e.js" crossorigin="anonymous"></script>

	<style>
.results{
	width: 50%;
	margin-left: auto;
	margin-right: auto;
	padding: 60px;
	margin-top: 30vh;
	border-radius: 10px;
	background-color: #fff;
	font-family: "Josefin Sans";
	font-size: 18pt;
			
}
	</style>

</head>
	<body>

<div class="header">
        <div class="headerItems">
          <div class="icons">
            <div class="title">
              <a href="index.html"><img class="logo" src="Assets/images/logo.png"</a>
          </div>
            <div class="dropdown">
              <a class="btn" href="#" id="dropdown"><i class="fas fa-chevron-circle-down"></i></a>
            </div>
          </div>
      <div id="menuSelectors" class="menuSelectors showMenuFalse">
        <a href="camere.html" class="menuItem"><h2>Camere</h2></a>
        <a href="conferinte.html" class="menuItem"><h2>Conferințe</h2></a>
        <a href="evenimente.html" class="menuItem"><h2>Evenimente</h2></a>
        <a href="restaurant.html" class="menuItem"><h2>Restaurant</h2></a>
        <a href="rezervari.html" class="menuItem"><h2><u>Rezervări</u></h2></a>
        <a href="contact.html" class="menuItem"><h2>Contact</h2></a>
      </div>
      </div>
    </div>

<div class="results">
<?php
$servername = "localhost";
$username = "";
$password = "";
$dbname = "";
$conn = new mysqli($servername, $username, $password, $dbname);

$nume = $_POST['lastName'];
$prenume = $_POST['firstName'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$adresa = $_POST['adress'];
$tip = $_POST['tip'];
$arrDate = $_POST['Date'];
$tipEvent = $_POST['events'];

if($conn->connect_error)
{
die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO REZERVARE (tipRezervare, dataSosire, dataPlecare, nume, prenume, adresa, telefon, email, tipEvent) values('$tip', '$arrDate', '$arrDate', '$nume', '$prenume', '$adresa', '$tel', '$email', '$tipEvent')";
$sql2 = "SELECT COUNT(idRezervare) FROM `REZERVARE` WHERE tipRezervare = '$tip' AND dataSosire = '$arrDate'";
$sql3 = "SELECT numar FROM OFERTA WHERE tipRezervare = '$tip'";
$occupancyResult = $conn->query($sql2);
$maxOccupancyResult = $conn->query($sql3);

$occupancy = $occupancyResult->fetch_assoc();
$maxOccupancy = $maxOccupancyResult->fetch_assoc();


if($occupancy["COUNT(idRezervare)"] >= $maxOccupancy["numar"])
{
echo '<center>'."Data selectată nu este disponibilă!".'</center>';
}
else{
	$result = $conn->query($sql);
	if($result == TRUE){echo '<center>'."Rezervare Trimisă!".'</center>';}
	else
	{
	echo $conn->error;
	}
}


$conn->close();
?>

</div>

	</body>
</html>
