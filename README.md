# Proyecto MindFactory Automotores

## Como levantarlo con Docker?

docker-compose up -d --build

## Explicación y detalles

### Generales

- Al ejecutar el commando para levantar con Docker, se realizan migraciones y se inserta una seed con algunos datos mock.
- Se crea un docker-compose.yml que ejecuta los Dockerfile de Front, Back y DB.
- En el docker-compose se crea un volumen para la persistencia de datos de la DB y se usa un network para la comunicacion interna de
Front y Back.
- Se emplea un poco del flujo de git, donde de la rama master se parten ramas para crear features,
donde una vez terminadas, se integran a master de nuevo.
- Se deja una coleccion de POSTMAN con algunos endpoints utilizados (si tienen ** en el nombre no estan terminados esos endpoints).
- Se utiliza documentacion de los frameworks y algunas IA como ChatGPT y Gemini a modo de referencia en la construccion de algunos archivos,
sin embargo, NO se utilizan herramientas integradas con IA (Github Copilot, Cursor, Trae, etc).

### Backend

- Se crean dtos para las entidades, junto con una seed simple y una migracion correspondiente para los archivos dados.
- Se replica una estructura de archivos DDD (no tengo experiencia en esta parte).
- Se devuelve error 422 cuando la validacion de objeto esperado es falsa, con un simple mensaje de error, no se detalla
cual es el error concretamente para un poco mas de seguridad.
- Se crean endpoints GET y POST para automotores y sujetos.

### Frontend

- Se crea un Frontend muy sencillo, donde se muestran los listados de automotores y sujetos disponibles, con un breve titulo y
los creditos a mi persona.
- Se implementa bootstrap para algunos estilos.
- Unica pagina habilitada es /home y cualquier otra redirecciona a esta.
- Queda expuesto con Nginx.

### NO se hicieron por falta de tiempo

- No se hacen las validaciones de dominio.
- No se hacen tests.
- No creates, deletes o updates desde el front, solamente visualizacion de info.
- Sin estilos detallados en front.

### Notas Adicionales

Se levanta el proyecto (front, back y db):
- Front queda expuesto en el puerto 4200, alias front
- Back queda expuesto en el puerto 3000, alias api
- DB con POSTGRES queda expuesta en el puerto 5432, alias db

#### Versiones:

- Front, angular version 20.
- Back, nestjs version 11.
- DB con POSTGRES v16.
