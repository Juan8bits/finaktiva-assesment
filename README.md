# finaktiva-assesment

El frontend accesible en http://localhost:3000.
El backend accesible en http://localhost:4000.
PostgreSQL disponible en localhost:5432.
Redis disponible en localhost:6379.


## How to test PPS efficiency
### sudo apt-get install apache2-utils
Command to test PPS
ab -n 200 -c 100 -p data.json http://localhost:4016/api/v1.0/logs
-n means amount of request
-c means amount of parallels requests per second