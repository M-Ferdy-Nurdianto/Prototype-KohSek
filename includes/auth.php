<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

function checkAdmin() {
    if (!isset($_SESSION['admin_logged_in'])) {
        header('Location: ../login.php');
        exit();
    }
}

function isAdminLoggedIn() {
    return isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true;
}
?>
