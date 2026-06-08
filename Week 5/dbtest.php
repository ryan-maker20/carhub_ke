<?php
$db_server = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "carhub_ke";
$conn = "";
$conn = mysqli_connect($db_server, $db_username, $db_password, $db_name);

if ($conn) {
    echo "Database connected successfully!";
} else {
    echo "Connection failed: " . mysqli_connect_error();
}
?>