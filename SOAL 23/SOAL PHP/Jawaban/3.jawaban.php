<!-- Perhitungan Gaji -->
<?php
$gaji_pokok = 4000000;
$jam_lembur = 10;
$tarif_lembur = 50000;

$total_gaji = $gaji_pokok + ($jam_lembur * $tarif_lembur);

echo "Total gaji: Rp. " . number_format($total_gaji);
?>

