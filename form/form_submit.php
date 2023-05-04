<?php
require('connection.inc.php');

// Get the data sent from the JavaScript
$data = json_decode(file_get_contents("php://input"));

// Extract the text1 and text2 values from the data
$first_name = $data->first_name;
$last_name = $data->last_name;
$res_address = $data->res_address;
$zip_address = $data->zip_address;
$email = $data->email;
$number = $data->number;

// Save the data to the database or do whatever you need to do with it
// ...
// $file = 'data.txt';
// $data = $first_name . ',' . $last_name . "\n"; // Separate the data with a comma and newline
// file_put_contents($file, $data, FILE_APPEND);


// Connect to the database
$host = "sdb-55.hosting.stackcp.net";
$user = "medical-form-35303131648d";
$password = "705cs5qq3p";
$dbname = "medical-form-35303131648d";
$mysqli = mysqli_connect($host, $user, $password, $dbname);

// Check for errors
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
}

// Prepare the SQL statement
$stmt = $mysqli->prepare("INSERT INTO medicalform (first_name, last_name, res_address, zip_address, email, number) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ss", $first_name, $last_name, $res_address, $zip_address, $email, $number);

// Execute the statement
if ($stmt->execute()) {
    echo "Data saved successfully.";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$mysqli->close();

// Return a response to the JavaScript
$response = array("success" => true);
echo json_encode($response);
?>
