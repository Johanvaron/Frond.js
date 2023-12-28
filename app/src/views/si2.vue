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
             <b>
             Estimado,
             </b>
          </p>
          <p>
             ¿Cuándo podrás regularizar esta Situación?
          </p>
       </div>

         
       <div class="row controles pad-top-25px pad-bot-25px ">
                                <div class="col-md-12 text-center">
                                    <select name="cmbfecha" id="cmbfecha">
                                        <option value="proxima">En los próximos 3 días</option>
                                        <option value="findemes">Antes de fin de mes</option>                                    
                                        <option value="cancelado">Ya pagué</option>
                                        &lt;
								        <option value="nose">No pagaré este mes</option>
                                    </select>
                                </div>
                            </div>

    <div class="botones">
       <div class="btn-group" role="group" aria-label="Opciones de confirmación">
          <router-link to="/siP">Continuar</router-link>
       </div>
    </div>

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
 <script></script>
 <style>
    .container2 {
    text-align: left; /* Alinea el texto a la izquierda */
    margin-left: 0PX; /* Asegura que el contenedor comience al ras con el lado izquierdo */
    padding-left: 150PX; /* Opcional: si deseas que el contenido tenga un poco de espacio desde el borde izquierdo */
    }
    .controles {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%; /* Ajusta esto según tus necesidades */
}

 </style>