<?php
session_start();

$_SESSION["user"] = "RAYOO";

echo "Welcome " .
$_SESSION["user"];
?>