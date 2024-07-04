# symfony-fm

## Install

Dependencies
```console
composer install
```

Compile assets
```console
php bin/console tailwind:build
```

Install database
```shell
php bin/console d:d:c -n
php bin/console d:m:m -n
```

Load fixtures
```shell
php bin/console d:f:l -n
```

Run Symfony server
```shell
symfony server:start -d
symfony open:local
```
