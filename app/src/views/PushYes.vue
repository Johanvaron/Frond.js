<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-md-15 vcenter">
                    <img src="../assets/logo.png" alt="Logo" class="logo">
                </div>
            </div>
        </div>
        <div class="linea-horizontal"></div>
    </header>
    <v-container>
        <v-row>
            <v-col>Algo</v-col>
            <v-col>pasp</v-col>
            <v-col>1</v-col>
            <v-col>1</v-col>
            <v-col>1</v-col>
        </v-row>
    </v-container>

    <main>
        <div id="general" class="container">
            <div class="row">
                <div id="MyCarousel" class="carousel slide margin-left-10 margin-right-10">
                    <div class="carousel-inner">
                        <!-- Contenido del carrusel -->
                        <div class="item pad-right-10px active">
                            <div class="row textoItem pad-top-55px pad-bot-55px">
                                <div class="col-md-15">
                                    <p class="h4 text-justify">Estimado(a), a continuación mostramos los tipos de deuda
                                        vigente (*) por periodo:</p>
                                </div>
                            </div>
                            <!-- Controles -->
                            <div class="row controles pad-top-55px pad-bot-55px">
                                <div class="col-md-15 text-center">
                                    <div id="dtbFactura_wrapper"
                                        class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="dataTables_length" id="dtbFactura_length">
                                                    <label>
                                                        Mostrar
                                                        <select>
                                                            <option value="1">1</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="0">0</option>
                                                            <option value="8">8</option>
                                                            <option value="-1">Todos</option>
                                                        </select>
                                                        registros
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div id="dtbFactura_filter" class="dataTables_filter">
                                                    <label>Filtrar:<input type="search" class="form-control input-sm"
                                                            placeholder="" aria-controls="dtbFactura"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Tabla de datos -->
                                        <div class="row">
                                            <div class="col-sm-15">
                                                <table id="dtbFactura"
                                                    class="table dataTable table-striped table-bordered nowrap responsive no-footer dtr-inline"
                                                    cellspacing="0" width="100%" role="grid"
                                                    aria-describedby="dtbFactura_info" style="width: 100%;">
                                                    <!-- Encabezados de la tabla -->
                                                    <thead>
                                                        <tr role="row">
                                                            <th class="text-center vcenter sorting" tabindex="0"
                                                                aria-controls="dtbFactura" rowspan="1" colspan="1"
                                                                style="width: 60px;"
                                                                aria-label="RUC: Activar para ordenar la columna de manera ascendente">
                                                                RUC</th>
                                                            <th class="text-center vcenter sorting_asc" tabindex="0"
                                                                aria-controls="dtbFactura" rowspan="1" colspan="1"
                                                                style="width: 75px;"
                                                                aria-label="Periodo: Activar para ordenar la columna de manera descendente"
                                                                aria-sort="ascending">Periodo</th>
                                                            <th class="text-center vcenter sorting" tabindex="0"
                                                                aria-controls="dtbFactura" rowspan="1" colspan="1"
                                                                style="width: 155px;"
                                                                aria-label="Tipo Deuda: Activar para ordenar la columna de manera ascendente">
                                                                Tipo Deuda</th>
                                                            <th class="text-center vcenter sorting" tabindex="0"
                                                                aria-controls="dtbFactura" rowspan="1" colspan="1"
                                                                style="width: 109px;"
                                                                aria-label="Nro. de afiliados: Activar para ordenar la columna de manera ascendente">
                                                                Nro. de afiliados</th>
                                                            <th class="text-center vcenter sorting" tabindex="0"
                                                                aria-controls="dtbFactura" rowspan="1" colspan="1"
                                                                style="width: 95px;"
                                                                aria-label="Total Nominal: Activar para ordenar la columna de manera ascendente">
                                                                Total Nominal</th>
                                                        </tr>
                                                    </thead>
                                                    <!-- Datos de la tabla -->
                                                    <tbody>
                                                        <tr role="row" class="even">
                                                            <td class="vcenter" tabindex="0">RUC001</td>
                                                            <td class="vcenter sorting_1">501809</td>
                                                            <td class="vcenter">DEUDA REAL 5</td>
                                                            <td class="vcenter">5</td>
                                                            <td class="vcenter">35.5</td>
                                                        </tr>
                                                        <tr role="row" class="even">
                                                            <td class="vcenter" tabindex="0">RUC001</td>
                                                            <td class="vcenter sorting_1">501809</td>
                                                            <td class="vcenter">DEUDA REAL 5</td>
                                                            <td class="vcenter">5</td>
                                                            <td class="vcenter">35.5</td>
                                                        </tr>
                                                        <tr role="row" class="even">
                                                            <td class="vcenter" tabindex="0">RUC001</td>
                                                            <td class="vcenter sorting_1">501809</td>
                                                            <td class="vcenter">DEUDA REAL 5</td>
                                                            <td class="vcenter">5</td>
                                                            <td class="vcenter">35.5</td>
                                                        </tr>
                                                        <tr role="row" class="even">
                                                            <td class="vcenter" tabindex="0">RUC001</td>
                                                            <td class="vcenter sorting_1">501809</td>
                                                            <td class="vcenter">DEUDA REAL 5</td>
                                                            <td class="vcenter">5</td>
                                                            <td class="vcenter">35.5</td>
                                                        </tr>
                                                        <tr role="row" class="even">
                                                            <td class="vcenter" tabindex="0">RUC001</td>
                                                            <td class="vcenter sorting_1">501809</td>
                                                            <td class="vcenter">DEUDA REAL 5</td>
                                                            <td class="vcenter">5</td>
                                                            <td class="vcenter">35.5</td>
                                                        </tr>
                                                        <tr role="row" class="even">
                                                            <td class="vcenter" tabindex="0">RUC001</td>
                                                            <td class="vcenter sorting_1">501809</td>
                                                            <td class="vcenter">DEUDA REAL 5</td>
                                                            <td class="vcenter">5</td>
                                                            <td class="vcenter">35.5</td>
                                                        </tr>
                                                        <tr role="row" class="even">
                                                            <td class="vcenter" tabindex="0">RUC001</td>
                                                            <td class="vcenter sorting_1">501809</td>
                                                            <td class="vcenter">DEUDA REAL 5</td>
                                                            <td class="vcenter">5</td>
                                                            <td class="vcenter">35.5</td>
                                                        </tr>
                                                        <tr role="row" class="even">
                                                            <td class="vcenter" tabindex="0">RUC001</td>
                                                            <td class="vcenter sorting_1">501809</td>
                                                            <td class="vcenter">DEUDA REAL 5</td>
                                                            <td class="vcenter">5</td>
                                                            <td class="vcenter">35.5</td>
                                                        </tr>
                                                        <tr role="row" class="even">
                                                            <td class="vcenter" tabindex="0">RUC001</td>
                                                            <td class="vcenter sorting_1">501809</td>
                                                            <td class="vcenter">DEUDA REAL 5</td>
                                                            <td class="vcenter">5</td>
                                                            <td class="vcenter">35.5</td>
                                                        </tr>
                                                        <tr role="row" class="even">
                                                            <td class="vcenter" tabindex="0">RUC001</td>
                                                            <td class="vcenter sorting_1">501809</td>
                                                            <td class="vcenter">DEUDA REAL 5</td>
                                                            <td class="vcenter">5</td>
                                                            <td class="vcenter">35.5</td>
                                                        </tr>
                                                        <!-- Filas de datos -->
                                                        <!-- Tu contenido de filas aquí -->
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <!-- Información a la izquierda -->
                                            <div class="col-sm-5 d-flex align-items-center">
                                                <div class="dataTables_info" id="dtbFactura_info" role="status"
                                                    aria-live="polite">
                                                    1 al 10 de 17 registros
                                                </div>
                                            </div>

                                            <!-- Paginación a la derecha -->
                                            <div class="col-sm-7 d-flex justify-content-end">
                                                <div class="dataTables_paginate paging_simple" id="dtbFactura_paginate">
                                                    <ul class="pagination">
                                                        <li class="paginate_button previous disabled"
                                                            id="dtbFactura_previous">
                                                            <a href="#" aria-controls="dtbFactura" data-dt-idx="0"
                                                                tabindex="0">Anterior</a>
                                                        </li>
                                                        <li class="paginate_button next" id="dtbFactura_next">
                                                            <a href="#" aria-controls="dtbFactura" data-dt-idx="1"
                                                                tabindex="0">Siguiente</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="botones">
                                        <div class="btn-group" role="group" aria-label="Opciones de confirmación">
                                            <router-link to="/#">Importar Exel</router-link>
                                            <router-link to="/si2">Continuar</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="footer">
        <p class="navbar-text">® 2022 by FASTCO. Todos los Derechos Reservados.</p>
        <div class="icons">
            <span class="navbar-btn negrita lb-font-size-1-5em icono-social" id="iconLinkedin"><i
                    class="fa fa-linkedin"></i></span>
            <span class="navbar-btn negrita lb-font-size-1-5em icono-social" id="iconTwitter"><i
                    class="fa fa-twitter"></i></span>
            <span class="navbar-btn negrita lb-font-size-1-5em icono-social" id="iconYoutube"><i
                    class="fa fa-youtube-play"></i></span>
            <span class="navbar-btn negrita lb-font-size-1-5em icono-social" id="iconFacebook"><i
                    class="fa fa-facebook"></i></span>
        </div>
    </footer>
</template>
  
<script setup >
import { onMounted, ref } from 'vue';
const datotabla = ref([]);
onMounted(() => {
    datotabla.value = [
        {
            "ruc": "RUC001",
            "periodo": 201809,
            "cuspp": 4,
            "tipo_deuda": "DEUDA REAL DSP",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        },
        {
            "ruc": "RUC001",
            "periodo": 201809,
            "cuspp": 22,
            "tipo_deuda": "DEUDA REAL DSP",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        },
        {
            "ruc": "RUC001",
            "periodo": 201809,
            "cuspp": 101,
            "tipo_deuda": "DEUDA REAL DSP",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        },
        {
            "ruc": "RUC001",
            "periodo": 201809,
            "cuspp": 29,
            "tipo_deuda": "DEUDA REAL DSP",
            "total_nominal": "131.5",
            "SEG_PAG": "18,42",
            "COM_PAG": "5.4"
        },
        {
            "ruc": "RUC001",
            "periodo": 201910,
            "cuspp": 32,
            "tipo_deuda": "PRESUNTA CON HISTORIA",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        },
        {
            "ruc": "RUC001",
            "periodo": 201809,
            "cuspp": 25,
            "tipo_deuda": "DEUDA REAL DSP",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        },
        {
            "ruc": "RUC002",
            "periodo": 201809,
            "cuspp": 76,
            "tipo_deuda": "DEUDA REAL DSP",
            "total_nominal": "131.5",
            "SEG_PAG": "18,42",
            "COM_PAG": "5.4"
        },
        {
            "ruc": "RUC002",
            "periodo": 201910,
            "cuspp": 36,
            "tipo_deuda": "PRESUNTA CON HISTORIA",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        },
        {
            "ruc": "RUC002",
            "periodo": 201809,
            "cuspp": 103,
            "tipo_deuda": "DEUDA REAL DSP",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        },
        {
            "ruc": "RUC003",
            "periodo": 201809,
            "cuspp": 10003,
            "tipo_deuda": "DEUDA REAL DSP",
            "total_nominal": "131.5",
            "SEG_PAG": "18,42",
            "COM_PAG": "5.4"
        },
        {
            "ruc": "RUC003",
            "periodo": 201910,
            "cuspp": 10004,
            "tipo_deuda": "PRESUNTA CON HISTORIA",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        },
        {
            "ruc": "RUC001",
            "periodo": 201809,
            "cuspp": 10002,
            "tipo_deuda": "DEUDA REAL DSP",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        },
        {
            "ruc": "RUC001",
            "periodo": 201809,
            "cuspp": 10003,
            "tipo_deuda": "DEUDA REAL DSP",
            "total_nominal": "131.5",
            "SEG_PAG": "18,42",
            "COM_PAG": "5.4"
        },
        {
            "ruc": "RUC001",
            "periodo": 201910,
            "cuspp": 10004,
            "tipo_deuda": "PRESUNTA CON HISTORIA",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        },
        {
            "ruc": "RUC001",
            "periodo": 201809,
            "cuspp": 10003,
            "tipo_deuda": "DEUDA REAL DSP",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        },
        {
            "ruc": "RUC001",
            "periodo": 201910,
            "cuspp": 10004,
            "tipo_deuda": "PRESUNTA CON HISTORIA",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        },
        {
            "ruc": "RUC001",
            "periodo": 201910,
            "cuspp": 10005,
            "tipo_deuda": "PRESUNTA CON HISTORIA",
            "total_nominal": "35.5",
            "SEG_PAG": "122",
            "COM_PAG": "15.4"
        }
    ];

    console.log(datotabla.value);

})

</script>
  

  
<style>
.footer {
    background-color: white;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 10px 0;
    width: 100%;
    position: relative;
    /* Cambio a posición relativa */
    clear: both;
    /* Limpiar flotadores */
    margin-top: 20px;
    /* Ajustar margen superior para separarlo del contenido */
    bottom: 0;
    float: left;

}

.btn {
    padding: 10px 50px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

/* Estilo específico para el botón con fondo naranja */
.btn-naranja {
    background-color: #f0ad4e;
    /* Color naranja */
    color: white;
}

/* Cambiar estilos al pasar el mouse sobre el botón */
.btn-naranja:hover {
    background-color: #ec971f;
    /* Color naranja más oscuro al pasar el mouse */
}

main {
    margin-bottom: 60px;
    /* Ajustar margen inferior del main */
}
.pagination {
  /* Ajusta el margen si los botones están demasiado cerca de los bordes */
  margin: 10px;

}

</style>