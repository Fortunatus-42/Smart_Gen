<?php
// Connection

$host = "localhost";
$user = "root";
$password = "";
$database = "simple_db";

// Method for connection
$conn = mysqli_connect($host,$user,$password,$database);

// Test connection
if(!$conn){
    die(mysqli_connect_error());
}