## Install composer packages

```

php -r "readfile('https://getcomposer.org/installer');" | php
sudo mkdir /usr/local/bin/
sudo mv composer.phar /usr/local/bin/composer

cd webapp
composer install

```

## Install PHPUnit for Testing

```

composer global require "phpunit/phpunit=4.6.*"
touch ~/.bash_profile
echo "export PATH="$HOME/.composer/vendor/bin/:$PATH"" >> ~/.bash_profile
phpunit

```

## Build assets

```

npm install && bower install

```

## Dependencies

```

gem install compass && gem install sass-globbing

```

## Start the server

```

grunt

```
