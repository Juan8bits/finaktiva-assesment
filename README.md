
# Finaktiva Assessment

Este repositorio contiene dos aplicaciones (frontend y backend) que pueden iniciarse fácilmente usando `docker-compose`. A continuación, se detallan los pasos para levantar ambas aplicaciones y realizar pruebas de rendimiento en el sistema.

Dentro de cada repositorio de aplicación encontrará más información respecto a cada App.

## Instrucciones para levantar el entorno

Para levantar el entorno completo, ejecute el siguiente comando:

```bash
docker-compose up
```

### Accesos a los servicios

- **Frontend**: Accesible en [http://localhost:3000](http://localhost:3000)
- **Backend**: Accesible en [http://localhost:4000/api/v1.0/](http://localhost:4000/api/v1.0/)
- **Base de datos PostgreSQL**: Disponible en `localhost:5432`

#### Nota:

No es necesario añadir un .env dentro del directorio de cada App. Por motivos prácticos se establecieron valores por defecto; Sin embargo, si desea agregarlos serán tomados.

## Pruebas de rendimiento (PPS)

Para evaluar la eficiencia del sistema, puedes realizar una prueba de rendimiento en el servicio de backend utilizando Apache Benchmark (ab). Este tipo de prueba permite enviar una gran cantidad de solicitudes de manera concurrente para medir la capacidad de respuesta del sistema.

### Instalación de Apache Benchmark

Si aún no tienes Apache Benchmark instalado, puedes hacerlo ejecutando:

```bash
sudo apt-get install apache2-utils
```

### Comando para probar la eficiencia de PPS

Para realizar la prueba de rendimiento en el servicio de backend, ejecuta el siguiente comando:

```bash
ab -n 200 -c 100 -p data.json http://localhost:4016/api/v1.0/logs
```

Donde:
- `-n 200`: Especifica el número total de solicitudes que se enviarán al servidor. Es el total de peticiones que se ejecutarán durante la prueba.
- `-c 100`: Especifica el número de conexiones concurrentes que se abrirán al mismo tiempo. Es el número de solicitudes que se enviarán simultáneamente.

Este comando le entregará una seríe de resultados. Podría interesarle el valor `Request per second` el cual indica cuántas solicitudes ha sido capaz de manejar por segundo el endpoint en promedio durante la prueba

Ejemplo:
```bash
Requests per second:    1279.65 [#/sec] (mean)
```

**Nota**: En el archivo `data.json` se encuentran los datos necesarios para la prueba de carga en el endpoint `/api/v1.0/logs/create`.