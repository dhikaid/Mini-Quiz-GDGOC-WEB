<?php

/**
 * 
 *? Perbaiki kode agar mengembalikan "Hello, my love" ketika method greet menerima nama "Johnny"
 *
 *! Contoh :
 ** print greet("Emma") => "Hello, Emma"
 ** print greet("Johnny") => "Hello, my love"
 * 
 */

function greet($name)
{
  return "Hello, $name";
}

print greet("Emma");
print greet("Johnny");
