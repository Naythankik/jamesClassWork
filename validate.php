<?php

if(isset($_POST['check'])){
  //retrieve all data submitted by users
  $first_name = $_POST['fname']; //must be a textual content
  $last_name = $_POST['lname']; //must be a textual content
  $age = $_POST['age']; //must be a numerical content
  $phone = $_POST['telephone'];   //must be a numerical content

  //validate all inputs by users
  if(empty($first_name) || empty($last_name) || empty($age) || empty($phone)){
    header("Location: ./test.php?error=empty");
    die();
  }
}
?>