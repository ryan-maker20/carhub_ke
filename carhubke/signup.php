<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    
    // Insert into MySQL
    $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    // Prepared statement execution...
    echo "Registration successful for: " . $name;
}
?>
<form method="POST" onsubmit="return validateLogin()">
    <input type="text" name="name" id="name" required>
    <input type="email" name="email" id="email" required>
    <input type="password" name="password" id="password" required>
    <button type="submit">Register</button>
</form>