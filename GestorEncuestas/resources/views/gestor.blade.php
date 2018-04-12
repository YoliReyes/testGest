<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Gestor Encuestas Tecnun</title>

  <!-- Bootstrap core CSS -->
  <link href="css/fuenteRoti.css" rel="stylesheet">

  <link href="css/bootstrap.min.css" rel="stylesheet">

  <link href="fonts/css/font-awesome.min.css" rel="stylesheet">
  <link href="css/animate.min.css" rel="stylesheet">

  <!-- Custom styling plus plugins -->
  <link href="css/custom.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/maps/jquery-jvectormap-2.0.3.css" />
  <link href="css/icheck/flat/green.css" rel="stylesheet" />
  <link href="css/floatexamples.css" rel="stylesheet" type="text/css" />

  <script src="js/jquery.min.js"></script>
  <script src="js/nprogress.js"></script>

</head>

<body class="nav-md">

  <div class="container body">

    <div class="main_container">

      <div class="col-md-3 left_col">

        <div class="left_col scroll-view">

          <div class="navbar nav_title" style="border: 0;">
            <a href="index.html" class="site_title"><img src="{{ asset('images/tecnun.png')}}" alt="logo tecnun" width=100px align="auto"></a></div>
          <div class="clearfix"></div>      

          <br />

          <!-- sidebar menu -->
          <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
              <ul class="nav side-menu">
                <h3>Gestor de Encuestas</h3>
                <li><a><i class="fa fa-plus-circle"></i> Nueva Encuesta <span class="fa fa-chevron-down"></span></a></li>
                
                <li><a><i class="fa fa-database"></i> Encuestas Actuales <span class="fa fa-chevron-down"></span></a>
                  
                  <ul class="nav child_menu" style="display: none">
                    <li><a href="chartjs.html">Todas</a></li>
                    <li><a href="chartjs.html">Activas</a></li>
                    <li><a href="chartjs.html">Finalizadas</a></li>
                  </ul>
                </li>

                <li><a><i class="fa fa-line-chart"></i> Administrar Resultados <span class="fa fa-chevron-down"></span></a></li>
              
              </ul>
            </div>
          </div>
          <!-- /sidebar menu -->

          <!-- /menu footer buttons -->
          <div class="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
              <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
              <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
              <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout">
              <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
          </div>
          <!-- /menu footer buttons -->
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


      <!-- page content -->
      <div class="right_col" role="main">
      <!--<p class="fuenteRoti"> Soy una nueva fuente</p>-->
      </div>
      <!-- /page content -->

    </div>

  </div>

  <div id="custom_notifications" class="custom-notifications dsp_none">
    <ul class="list-unstyled notifications clearfix" data-tabbed_notifications="notif-group">
    </ul>
    <div class="clearfix"></div>
    <div id="notif-group" class="tabbed_notifications"></div>
  </div>

  <script src="js/bootstrap.min.js"></script>

  <!-- chart js -->
  <script src="js/custom.js"></script>
  
</body>

</html>
