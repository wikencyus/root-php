<?php
// Mendefinisikan nama file JSON
$dataFile = 'database.json';

// Mendapatkan data dari form
$email = $_POST['email'];
$password = $_POST['password'];

// Membuat array data baru
$newData = array(
    'email' => $email,
    'password' => $password
);

// Membaca data yang sudah ada di file JSON
if (file_exists($dataFile)) {
    $currentData = file_get_contents($dataFile);
    $jsonData = json_decode($currentData, true);
    
    // Jika file JSON kosong, inisialisasi array
    if (!is_array($jsonData)) {
        $jsonData = array();
    }
} else {
    // Jika file tidak ada, buat array kosong
    $jsonData = array();
}

// Menambahkan data baru ke array yang sudah ada
$jsonData[] = $newData;

// Menulis kembali data ke file JSON
file_put_contents($dataFile, json_encode($jsonData, JSON_PRETTY_PRINT));

// Redirect kembali ke halaman login setelah data disimpan
header('Location: index.html');
exit();
?>
