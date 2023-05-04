<?php


$first_name = "a";
$last_name = "b";
$res_address = "g";
$zip_address = "s";
$email = "";
$number = "";

// Connect to the database
$host = "sdb-55.hosting.stackcp.net";
$user = "medical-form-35303131648d";
$password = "705cs5qq3p";
$dbname = "medical-form-35303131648d";

// $host = "localhost";
// $user = "root";
// $password = "";
// $dbname = "medicalform";
$mysqli = mysqli_connect($host, $user, $password, $dbname);

// Check for errors
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
}

// Prepare the SQL statement
$stmt = $mysqli->prepare("INSERT INTO medicalform (first_name, last_name, res_address, zip_address, email, number) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param($first_name, $last_name, $res_address, $zip_address, $email, $number);

// Execute the statement
if ($stmt->execute()) {
    echo "Data saved successfully.";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$mysqli->close();


?>