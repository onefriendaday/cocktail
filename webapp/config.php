<?php

$app['debug'] = true;
$app['config.twig.cache']       = false;
$app['baseUrl']                 = '/';
$app['config.paths.base']       = 'http://test.myproject.com';
$app['config.version']          = file_get_contents(PUBLIC_DIR . '/version.cache');
$app['config.availableLocales'] = array('de', 'en');

// URL paths
$app['config.paths.home'] = '/index';
