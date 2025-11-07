# Proyecto Final - Backend 3 - Testing y Escalabilidad.

## API de Adopciones


API REST para la gestión de **usuarios**, **mascotas** y **adopciones**.  
Incluye documentación con Swagger, tests automatizados y soporte para ejecución mediante **Docker**.

---

## 🚀 Tecnologías Usadas
- **Node.js**
- **Express**
- **MongoDB**
- **Swagger**
- **Docker**
- **Jest / Supertest** (para testing)

---

## Instalación Local

### 1. Clonar repositorio
```bash
git clone https://github.com/Franqito73/Backend3_Picini_C74610.git
cd Backend3_Picini_C74610
```

### 2. Instalar dependencias
```bash
npm install
```
### 3. Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:
```bash
PORT=8080
MONGO_URI=mongodb://localhost:27017/adopcionesDB
```
### 4. Ejecutar el servidor:
```bash
npm run dev
```
 Luego acceder a: http://localhost:8080/api/docs


## Ejecución con Docker
La imagen del proyecto está disponible públicamente en Docker Hub:

https://hub.docker.com/r/franqito73/adop-mascotas

 **Ejecución rápida**: 
 ```bash
docker pull franqito73/adop-mascotas:final
docker run -p 8080:8080 --env-file .env franqito73/adop-mascotas:final
```
## Documentación Swagger
La documentación de la API está disponible en:  

http://localhost:8080/api/docs

**Endpoints principales**:
| Módulo  | Método  |  Ruta |  Descripción |
|------------|------------|------------|------------|
| Users    | GET    | `/api/users` | Obtiene todos los usuarios|
| Users    | POST    | `/api/users`    |Crea un nuevo usuario    |
| Pets    | GET    | `/api/pets`    | Lista todas las mascotas   |
| Pets    | POST    | `/api/pets`   |Agrega una nueva mascota   |
| Adoptions   | GET    | `/api/adoptions`    | Lista las adopciones realizadas  |
| Adoptions    | POST    | `/api/adoptions`    |Registra una nueva adopción    |

## Tests automatizados

Los tests se encuentran en la carpeta `test/` y están escritos con **Jest** y **Supertest**.

**Ejecutar tests:**
```bash
npm test
```
*Ejemplo:* `adoption.test.js` valida la creación, obtención y eliminación de adopciones.

### Ejemplo de peticiones:

**Crear un usuario**
```bash
POST /api/users
Content-Type: application/json

{
  "first_name": "Franco",
  "last_name": "Picini",
  "email": "franqito@example.com"
}
```
**Crear una mascota**
```bash
POST /api/pets
Content-Type: application/json

{
  "name": "Firulais",
  "specie": "Perro",
  "adopted": false
}

```
**Crear una adopción**
```bash
POST /api/adoptions
Content-Type: application/json

{
  "userId": "6541abc123f0e3f97a5c2b9d",
  "petId": "6541abc123f0e3f97a5c2b9f"
}

```
## Troubleshooting
|Problema  | Posible solucion | 
|------------|------------|
| MongooseServerSelectionError: connect ECONNREFUSED    | Verificar que la URI de MongoDB sea correcta (`MONGO_URI`) y que la base de datos esté levantada.    |
| No operations defined in spec!    | Confirmar que los archivos `.yaml` estén referenciados correctamente en `swagger.js` (`../docs/*.yaml`). |
|La documentación o rutas no se actualizan en Docker     | Reconstruir la imagen con `docker build -t franqito73/adop-mascotas:final .` y volver a ejecutar `docker run ...`. A veces los cambios no se reflejan porque la imagen anterior queda en caché. |



##  Mejoras futuras
- Optimizar la estructura de carpetas separando la capa de servicios y controladores para facilitar la escalabilidad.
- Desplegar la aplicación en una cloud pública (por ejemplo, Render, Railway o AWS).
- Agregar variables de entorno seguras mediante un servicio de gestión de secretos (como Vault o AWS Secrets Manager).
- Implementar monitoreo básico de logs o métricas para detectar errores en producción.

## Autor
**Franco Picini** 
*Curso Backend 3 — Comisión 74610*