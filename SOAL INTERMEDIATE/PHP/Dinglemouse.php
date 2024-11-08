<?php

/**
 * 
 *? Perbaiki kode agar dapat mengembalikan nama lengkap.. dan jika value nya kosong kembalikan hanya 1 variabel
 *
 *! Contoh :
 ** $d = new Dinglemouse("Clint", "");
 ** print $d->getFullName();
 ** Expected => "Clint"
 ** Actual => "Clint "
 * 
 */

class Dinglemouse
{
  public string $firstName, $lastName;
  public function __construct(string $firstName, string $lastName) {}

  public function getFullName(): string
  {
    return "$this->firstName $this->lastName";
  }
}

$d = new Dinglemouse("Clint", "");
print  $d->getFullName();
