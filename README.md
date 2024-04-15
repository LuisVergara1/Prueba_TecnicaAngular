# Proyecto Angular Prueba Técnica

Este proyecto es parte de una prueba técnica y consiste en un frontend desarrollado con Angular que interactúa con un backend mediante una API REST.

## Configuración del Entorno

- El FrotEnd se desplegó en un servidor VPS utilizando Docker y Docker Compose.
  - Sitio web : [pt.luisvergara.dev](https://pt.luisvergara.dev)
  - La web estará disponible hasta 30 de abril .
  - Repositorio GitHub del Backend: [GitHub Front URL](https://github.com/LuisVergara1/Prueba_TecnicaAngular)

Para ejecutar el proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local:
    ```bash
   git clone https://github.com/tu-usuario/proyecto-angular.git

2. Instala las Dependencias:
    ```bash
        npm install
3. Inicia la aplicacion :
 - el servicio debe levantarse en el puerto 4200 
    para coincidir con el Cors del backend
- En caso de levantar el backend en otro Puerto modificar el archivo enviromments/environments.ts
- Si el servicio se inicia en un puerto diferente al 4200
  debe modificar el Cors en el Backend con el nuevo puerto a usar
    ```bash
        ng serve

## Funcionalidades
- Listar y Paginar Features : Muestra una Lista entre 1 y 12 Features por pagina con la posibilidad de Filtrar datos
- Listar Comentarios: Muestra una lista de comentarios obtenidos desde el backend.
- Agregar Comentario: Permite agregar un nuevo comentario a través de un formulario.
- Modificar Comentario: Permite editar un comentario existente.
- Eliminar Comentario: Permite eliminar un comentario existente.


## Mejoras o Faltantes
- Mejor control de la experiencia de Usuario
- Mostrar mensajes de alerta para errores
- Hacer la web Responsive  


