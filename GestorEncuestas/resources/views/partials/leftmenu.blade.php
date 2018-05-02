<body class="nav-md">

  <div class="container body">

    <div class="main_container">

      <div class="col-md-3 left_col">

        <div class="left_col scroll-view">

          <div class="navbar nav_title" style="border: 0;">
            <a href="{{'/gestionarencuestas'}}" class="site_title">
            <img src="{{ asset('images/logo_icono.png')}}" alt="icono tecnun" >
            <img class="letras" src="{{ asset('images/logo_texto.png')}}" alt="icono tecnun" > 
            </a>
          </div>

          <div class="clearfix"></div>      

          <br />

          <!-- sidebar menu -->
          <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
            <h3 class=".nav_titular">Gestor de Encuestas</h3>

              <ul class="nav side-menu">
                <li><a href="{{'/iniciocrearencuesta'}}"><i class="fa fa-plus-circle"></i> Nueva Encuesta </a></li>
                
                <li><a href="{{'/gestionarencuestas'}}"><i class="fa fa-database"></i> Encuestas Actuales </a>
                  
                  <!--
                  <ul class="nav child_menu" style="display: none">
                    <li><a href="chartjs.html">Todas</a></li>
                    <li><a href="chartjs.html">Activas</a></li>
                    <li><a href="chartjs.html">Finalizadas</a></li>
                  </ul>
                  -->
                </li>

                <li><a href="{{'/iniciogestionarresultados'}}"><i class="fa fa-line-chart"></i> Administrar Resultados </a></li>
             
              </ul>
            </div>
          </div>
          <!-- /sidebar menu -->

        </div>
      </div>

      <!-- top navigation -->
      <div class="top_nav">

        <div class="nav_menu">
          <nav class="" role="navigation">
            <div class="nav toggle">
              <a id="menu_toggle"><i class="fa fa-bars"></i></a>
            </div>
                   
            <ul class="nav navbar-nav navbar-right">
              
              <li class="">
                <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <img src="images/img.jpg" alt="">Administrador
                  <span class=" fa fa-angle-down"></span>
                </a>

                <ul class="dropdown-menu dropdown-usermenu animated fadeInDown pull-right">
                  <li><a href="login.html"><i class="fa fa-sign-out pull-left"></i>Cerrar Sesión</a></li>
                </ul>
              </li>
            </ul> 
          </nav>
        </div>
      </div>

      <!-- /top navigation -->