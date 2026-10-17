<?php
include 'db_connection.php';

if (isset($_POST['submit'])){
    $fname = $_POST['fullName'];
    $email = $_POST['email'];
    $number = $_POST['phoneNumber'];
    $message = $_POST['message'];

    // Query to insert to the database
    $form_data = "INSERT INTO reviews(full_name,email,phone_number,message) VALUES('$fname','$email','$number','message')";

}