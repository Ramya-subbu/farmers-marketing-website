<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $user_type = $_POST["user-type"];
    $address_line_1 = $_POST["address-line-1"];
    $address_line_2 = $_POST["address-line-2"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $pincode = $_POST["pincode"];

    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, password, user_type, address_line_1, address_line_2, city, state, pincode) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssss", $username, $password_hash, $user_type, $address_line_1, $address_line_2, $city, $state, $pincode);
    $stmt->execute();

    if ($stmt->affected_rows == 1) {
        echo "Registration successful!";
    } else {
        echo "Registration failed!";
    }
}
?>
