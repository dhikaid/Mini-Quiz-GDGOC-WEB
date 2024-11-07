Pengecekan Kelulusan
<?php
$nama_siswa = "Budi";
$nilai_ujian = 75;
$nilai_minimum = 70;

if($nilai_ujian >= $nilai_minimum) {
    echo "Selamat $nama_siswa, Anda lulus!";
} else {
    echo "Maaf $nama_siswa, Anda tidak lulus.";
}
?>