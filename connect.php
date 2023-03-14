<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$username = $_POST['username'];
$password = $_POST['password'];
$confirmpassword = $_POST['confirmpassword'];


$conn = new mysqli('localhost','root','','login');
if($conn->connect_error){
    echo "$conn->connect_error";
    die("Connection Failed :". $conn->connect_error);

} 

    $stmt = "insert into details(firstName, lastName, email, phone, address, city, state, zip, username, password, confirmpassword)VALUES('$firstName', '$lastName', '$email', '$phone', '$address', '$city', '$state', '$zip', '$username', '$password', '$confirmpassword')";
   $query=mysqli_query($conn,$stmt);
   if($query){
    echo "submitted";
    echo "<a href='index.html'>Go to home</a> ";
   }
    else{
        echo "unable to submit",$conn->error;
    }

?>