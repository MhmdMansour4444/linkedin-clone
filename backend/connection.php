<?php

header("Access-Control-Allow-Origin: http:localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "linkedin_clone_db";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);

if ($mysqli->connect_error) {
    die ("Connection failed: " . $mysqli->connect_error);
}
