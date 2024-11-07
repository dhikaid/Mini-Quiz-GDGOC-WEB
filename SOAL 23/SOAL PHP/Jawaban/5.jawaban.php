<!-- Function Hitung Diskon -->
<?php
function hitungDiskon($total_belanja) {
    if($total_belanja > 100000) {
        return $total_belanja - ($total_belanja * 0.1);
    } elseif($total_belanja > 50000) {
        return $total_belanja - ($total_belanja * 0.05);
    } else {
        return $total_belanja;
    }
}

$total_pembelian = 120000;
echo "Total bayar: Rp. " . number_format(hitungDiskon($total_pembelian));
?>