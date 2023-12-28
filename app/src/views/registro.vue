<template>
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
    <main>
       <div class="container2">
          <p>
             Si tienes los datos del actual contacto de pagos de Empleador por favor ingresalos a continuación.
          </p>
       </div>
       <form>
          <div class="row g-3 align-items-center">
             <div class="col-md-2">
                <label for="contactName" class="col-form-label">Nombre Contacto</label>
             </div>
             <div class="col-md-2">
                <input type="text" class="form-control" id="contactName" placeholder="Nombre">
             </div>
             <div class="col-md-2">
                <label for="contactNumber" class="col-form-label">Nro. contacto</label>
             </div>
             <div class="col-md-2">
                <input type="tel" class="form-control" id="contactNumber" placeholder="Número">
             </div>
             <div class="col-md-2">
                <label for="contactEmail" class="col-form-label">Email</label>
             </div>
             <div class="col-md-2">
                <input type="email" class="form-control" id="contactEmail" placeholder="Email">
             </div>
          </div>
          <div class="btn-group" role="group" aria-label="Opciones de confirmación">
             <router-link to="/confirmacion">Confirmar</router-link>
             <router-link to="/confirmacion">No tengo sus datos</router-link>
          </div>
       </form>
    </main>
    <footer class="footer" style="display: flex; justify-content: space-between; align-items: center; padding: 10px;">
  <p class="navbar-text" style="margin-bottom: 0;">® 2022 by FASTCO. Todos los Derechos Reservados.</p>
  <div class="icons">
 <!-- Íconos al lado derecho -->
  <v-icon>mdi-linkedin</v-icon>
  <v-icon>mdi-twitter</v-icon>
  <v-icon>mdi-youtube</v-icon>
  <v-icon>mdi-facebook</v-icon>
  </div>
</footer>
 </template>
 <style>
    .container2 {
    text-align: left; /* Alinea el texto a la izquierda */
    margin-left: 0PX; /* Asegura que el contenedor comience al ras con el lado izquierdo */
    padding-left: 150PX; /* Opcional: si deseas que el contenido tenga un poco de espacio desde el borde izquierdo */
    }
 </style>
 <script></script>