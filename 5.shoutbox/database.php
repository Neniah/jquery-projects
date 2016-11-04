<?php

//Connect to Mysql
//$connection = mysql_connect('localhost', 'admin', 'admin', 'shouts');


$myConnection= mysqli_connect("localhost","admin","admin") or die ("could not connect to mysql");

mysqli_select_db($myConnection, "shouts") or die ("no database");

if(mysqli_connect_errno()){
  echo 'Failed to Connect' . mysqli_connect_error();
}

 ?>
