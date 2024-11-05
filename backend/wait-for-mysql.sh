#!/bin/sh
set -e

until mysqladmin ping -h"$MYSQL_HOST" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" --silent; do
    >&2 echo "MySQL is unavailable - sleeping"
    sleep 2
done

>&2 echo "MySQL is up - executing command"
exec "$@"
