<?php

/**
 * 
 *? Perbaiki kode agar dapat mengecek huruf akhir dari variabel $body, apakah sama dengan huruf dari variabel $char, jika sama kembalikan true, jika salah kembalikan false
 *
 *! Contoh :
 ** print equivalent("batata", "a") => true
 ** print equivalent("batate", "a") => false
 * 
 */

function equivalent($body, $char)
{
  return $body === $char ? true : false;
}

print equivalent("batata", "a");
