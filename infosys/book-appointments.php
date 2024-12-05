<?php
$agent = $_POST['agent'];
$date = $_POST['date'];

// Connect to the database and insert the appointment
$connection = new mysqli('localhost', 'root', '', 'Insurance');
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$query = "INSERT INTO appointments (user_id, agent_id, appointment_date, status) VALUES (1, $agent, '$date', 'scheduled')";
if ($connection->query($query) === TRUE) {
    echo "Appointment booked successfully!";
} else {
    echo "Error: " . $connection->error;
}
$connection->close();
?>
