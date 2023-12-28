<template>
  <!--Cuerpo html-->
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-12 vcenter">
          <img src="../assets/logo.png" alt="" id="logo" class="logo">
        </div>
      </div>
    </div>
    <div class="linea-horizontal"></div>
  </header>
  <!--contenido principal-->
  <main>

    <div class="container2">
      <p>
      <h4>
        Bienvenido a la sucursal virtual de AFP Habitat.
      </h4>
      </p>
      <p>¿Nos confirmas si eres contacto de pagos de la empresa: Empleador?</p>
    </div>

    <div class="botones">
      <div class="btn-group" role="group" aria-label="Opciones de confirmación">
        <router-link to="/si">Sí</router-link>
        <router-link to="/registro">No, ya no trabajo en la empresa</router-link>
        <router-link to="/ultima">No conozco a la empresa</router-link>
      </div>
    </div>
  </main>

  <footer class="footer">
    <p class="navbar-text">® 2022 by FASTCO. Todos los Derechos Reservados.</p>
    <div class="icons">
      <v-icon>mdi-linkedin</v-icon>
      <v-icon>mdi-twitter</v-icon>
      <v-icon>mdi-youtube</v-icon>
      <v-icon>mdi-facebook</v-icon>
    </div>
  </footer>
</template>


<!--logica con Js-->
<script>
</script>
<!-- estilos Css-->
<style>
html,
body {
  height: 100%;
  /* Asegúrate de que el html y el body ocupen todo el alto disponible */
  margin: 0;
  /* Quita márgenes por defecto */
}

#app {
  display: flex;
  flex-direction: column;
  /* Ordena los hijos de #app en una columna */
  min-height: 100vh;
  /* Asegúrate de que #app sea como mínimo del alto del viewport */
}

header {
  background-color: white;
  padding: 10px;
  border-top: 26px solid rgba(7, 0, 104, 0.836);
  /* Borde azul en la parte superior */
}

.container {
  width: 50%;
  margin: 0 auto;
  /* Centra el contenedor */
}

.btn-group {
  text-align: center;
  padding: 10px;
  margin-top: 20px;

}

.btn-group a {
  text-decoration: none;
  color: white;
  background-color: rgb(235, 120, 25);
  padding: 10px 15px;
  border-radius: 5px;
  margin: 0 10px;
}

main {
  flex: 1;
  /* Permite que el main crezca y llene el espacio disponible */
  padding-bottom: 60px;
  /* Espacio adicional para asegurar que el footer no tape el contenido */
}

.footer {
  background-color: white;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}



.linea-horizontal {
  width: 100%;
  /* Ancho de la línea */
  height: 0.5px;
  /* Altura de la línea */
  background-color: #4b49495d;
  /* Color de la línea */
  margin-top: 2px;
  /* Espacio antes de la línea */
  margin-bottom: 2px;
  /* Espacio después de la línea */
}

/* Ajusta el tamaño y alineación de la imagen del logo */
.logo {
  width: 8%;
  display: block;
  /* Asegura que use todo el espacio de su contenedor */
  margin: 0 auto;
  /* Centra la imagen horizontalmente */
}

.container2 {
  text-align: left;
  padding-left: 150px;
}

img {
  width: 8%;
  float: left;
}</style>
