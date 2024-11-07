<?php
function hitungDiskon($total_belanja) {
    // Buat kondisi:
    // Jika total_belanja > 100000 dapat diskon 10%
    // Jika total_belanja > 50000 dapat diskon 5%
    // Selain itu tidak dapat diskon
    
    // Tulis kode di sini
}

$total_pembelian = 120000;
$hasil_diskon = hitungDiskon($total_pembelian);
echo "Total yang harus dibayar: Rp. " . number_format($hasil_diskon);
?>