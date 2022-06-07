El proyecto React JS trata acerca del desarrollo de un e-commerce que vende productos para el hogar. Los mismos están organizados en 4 secciones (cocina, fitness, electro, belleza).
 
Las librerías utilizadas fueron:
    -React Router Dom:
        Esta librería la utilizo para moverme mediante urls y pasar información a distintos componentes con el "UseParams".
    Font Awesome:
        Esta librería la utilice para poder tener los iconos de la página (cartWidget, el angular en el botón categoría del navbar).
    SweetAlert:
        Esta librería la utilice para dar alertas más estilizadas cuando el usuario agrega un ítem al carrito.
    Firebase:
        Esta librería hace de backend para que la página tenga donde obtener la información de los productos y a donde mandar las ordenes.
 
El proyecto de momento cuenta con 21 productos ingresados en mi base de datos Firebase. Los mismos se renderizan en el componente "ItemListContainer". Los productos a renderizar se pueden condicionar según el usuario seleccione una categoría en especial.
El usuario podrá acceder a un detalle del producto, donde podrá ver adicionalmente la descripción y controladores para sumar ítems al carrito. De ahí un botón le permitirá regresar a la tienda y otro ir al carrito por si ya desea finalizarla. Una vez en el carrito el usuario podrá retirar pedidos o terminar su compra, en dicho caso será enviado al componente "CheckOut".
En el componente "CheckOut" el usuario tendrá que ingresar datos personales (nombre, teléfono, email) los cuales serán enviados, junto al carrito (que se vaciará automáticamente una vez resuelta la promise) a la Firebase como una Order. El usuario verá información de la compra y la opción de continuar comprando.

Link de youtube donde se puede ver el funcionamiento de la pagina (las direcciones url, etc):
    - https://youtu.be/LdODdnTd6NI
Link al repositorio de github del proyecto:
    - https://github.com/matiasgimenezagustin/React-JS-Proyect
link a la pagina hosteada en Vercel:
    - https://react-js-proyect-five.vercel.app


