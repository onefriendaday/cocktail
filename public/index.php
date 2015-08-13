<?php

if (file_exists($_SERVER["DOCUMENT_ROOT"] . $_SERVER["REQUEST_URI"])) {
    return false;
}

date_default_timezone_set('UTC');

define('PUBLIC_DIR', realpath(__DIR__ . '/'));

require_once __DIR__ . '/../webapp/bootstrap.php';
require_once __DIR__ . '/../webapp/app.php';