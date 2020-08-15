<?php

// I create the connection with my database using the information from ionic4_CRUD.LOGINREGIS:PHP_MYSQL
define('DB_NAME', 'db_dataapp'); // DATABASE
define('DB_USER', 'root'); // ROOT DEFAULT MYSQL
define('DB_PASSWORD', '');  // PASSOWORD
define('DB_HOST', 'localhost'); // LOCAL IF YOU USE LOCAL.

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);


?>