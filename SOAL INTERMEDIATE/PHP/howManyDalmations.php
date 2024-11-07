<?php

/**
 * 
 *? Perbaiki kode agar dapat mengembalikan string sesuai angka yang dikirim dari parameter, jika angka kurang dari 10 maka kembalikan “Hardly any”, jika angka kurang dari 50 maka kembalikan “More than a handful!”, jika angka kurang dari 100 maka kembalikan “Woah that’s a lot of dogs!”, dan jika angka nya 101 maka kembalikan “101 DAILMATIANS!!!”
 *
 *! Contoh :
 ** howManyDailmations(26) => "More than a handful!"
 ** howManyDailmations(8) => "Hardly any"
 ** howManyDailmations(14) => "More than a handful!"
 ** howManyDailmations(80) => "Woah that's a lot of dogs!"
 ** howManyDailmations(100) => "Woah that's a lot of dogs!"
 ** howManyDailmations(101) => "101 DAILMATIANS!!!"
 * 
 */

function howManyDailmations(int $number)
{
  $dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dog!",
    "101 DAILMATIANS"
  ];

  return $dogs[0];
}

print howManyDailmations(26);
print howManyDailmations(8);
print howManyDailmations(14);
print howManyDailmations(80);
print howManyDailmations(100);
print howManyDailmations(101);
