<?php
require('connection.inc.php');
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$query = "insert into user(name, email, message) values('$name', '$email', '$message')";

mysqli_query($conn, $query);

header("location: table.php");
?>