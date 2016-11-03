<?php include 'database.php';

if(isset($_POST['name']) && isset($_POST['shout'])){
  $name = mysqli_real_escape_string($connection, $_POST['name']);
  $shout = mysqli_real_escape_string($connection, $_POST['shout']);
  $date = mysqli_real_escape_string($connection, $_POST['date']);

  // Set Timezone
  date_default_timezone_set('Europe/Madrid');
  $date = date('h:i:s a',time());

  $query = "Insert into shouts (name, shout, date) values ('$name','$shout', '$date')";

  if(!mysqli_query($connection, $query)){
    echo 'Error'. mysqli_error($connection);
  } else{
    echo '<li>'. $name.': '.$shout.' ['.$date.'] </li>';
  }
}

?>
