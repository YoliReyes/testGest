-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 10-04-2018 a las 14:08:25
-- Versión del servidor: 5.7.21-0ubuntu0.16.04.1
-- Versión de PHP: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `testGest`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apartados`
--

CREATE TABLE `apartados` (
  `id_apartado` int(10) UNSIGNED NOT NULL,
  `titulo_apartado` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion_apartado` text COLLATE utf8_spanish_ci NOT NULL,
  `valor_porcentaje_apartado` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `comun` tinyint(1) NOT NULL DEFAULT '0',
  `idioma` varchar(3) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'es',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `apartados`
--

INSERT INTO `apartados` (`id_apartado`, `titulo_apartado`, `descripcion_apartado`, `valor_porcentaje_apartado`, `comun`, `idioma`, `created_at`, `updated_at`) VALUES
(1, 'Información General', 'En esta sección nos gustaría acceder a los datos principales de la empresa y el perfil de la persona que va a responder este cuestionario.', 0, 1, 'es', NULL, NULL),
(2, 'Simbiosis industrial', 'Esta sección se refiere a la relación que la empresa establece con la empresa del sector o la zona para reducir el impacto ambiental.', 20, 0, 'es', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encuestas`
--

CREATE TABLE `encuestas` (
  `id_encuesta` int(10) UNSIGNED NOT NULL,
  `titulo_encuesta` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `descripion_encuesta` text COLLATE utf8_spanish_ci NOT NULL,
  `estado_encuesta` tinyint(1) NOT NULL DEFAULT '0',
  `idioma` varchar(3) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'es',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `encuestas`
--

INSERT INTO `encuestas` (`id_encuesta`, `titulo_encuesta`, `descripion_encuesta`, `estado_encuesta`, `idioma`, `created_at`, `updated_at`) VALUES
(1, 'Encuesta de prueba', 'Esto es una encuesta de prueba', 0, 'es', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encuestas_apartados`
--

CREATE TABLE `encuestas_apartados` (
  `id_encuesta_rel` int(10) UNSIGNED NOT NULL,
  `id_apartado_rel` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `encuestas_apartados`
--

INSERT INTO `encuestas_apartados` (`id_encuesta_rel`, `id_apartado_rel`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, NULL),
(1, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomas`
--

CREATE TABLE `idiomas` (
  `id_idioma` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `idiomas`
--

INSERT INTO `idiomas` (`id_idioma`, `descripcion`, `created_at`, `updated_at`) VALUES
('en', 'Ingles', NULL, NULL),
('es', 'Español', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `id_pregunta` int(10) UNSIGNED NOT NULL,
  `id_apart_pregunta` int(10) UNSIGNED NOT NULL,
  `tipo_respuesta` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `obligatorio` tinyint(1) NOT NULL DEFAULT '1',
  `enunciado` text COLLATE utf8_spanish_ci NOT NULL,
  `Comentario` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `tipoDato` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `valor_porcentaje_pregunta` int(10) UNSIGNED NOT NULL,
  `idioma` varchar(3) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'es',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id_pregunta`, `id_apart_pregunta`, `tipo_respuesta`, `obligatorio`, `enunciado`, `Comentario`, `tipoDato`, `valor_porcentaje_pregunta`, `idioma`, `created_at`, `updated_at`) VALUES
(1, 1, 'texto', 1, 'Nombre Empresa', NULL, 'personal', 0, 'es', NULL, NULL),
(2, 1, 'opcion', 1, 'Comunidad autónoma', 'Si su empresa está fuera de España, esriba su ubicación al final', 'personal', 0, 'es', NULL, NULL),
(3, 1, 'opcion', 1, 'Cargo en la organización', 'Marca solo una opción', 'personal', 0, 'es', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recomendaciones`
--

CREATE TABLE `recomendaciones` (
  `id_recomendacion` int(10) UNSIGNED NOT NULL,
  `id_pregunta_recomendacion` int(10) UNSIGNED NOT NULL,
  `sector` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `recomendacion` text COLLATE utf8_spanish_ci NOT NULL,
  `max` int(10) UNSIGNED NOT NULL,
  `min` int(10) UNSIGNED NOT NULL,
  `idioma` varchar(3) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'es',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `recomendaciones`
--

INSERT INTO `recomendaciones` (`id_recomendacion`, `id_pregunta_recomendacion`, `sector`, `recomendacion`, `max`, `min`, `idioma`, `created_at`, `updated_at`) VALUES
(1, 3, 'Educación', 'El resultado obtenido en la sección corresponde a una actuación media. Revise el impacto medioambiental.', 5, 0, 'es', NULL, NULL),
(2, 3, 'Construcción', 'El resultado obtenido en la sección corresponde a una actuación alta. Enhorabuena.', 10, 6, 'es', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas_tipo_opcionals`
--

CREATE TABLE `respuestas_tipo_opcionals` (
  `id_resp_opt` int(10) UNSIGNED NOT NULL,
  `id_preg_resp` int(10) UNSIGNED NOT NULL,
  `texto_respuesta` text COLLATE utf8_spanish_ci NOT NULL,
  `valor_unidad` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `idioma` varchar(10) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'es',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `respuestas_tipo_opcionals`
--

INSERT INTO `respuestas_tipo_opcionals` (`id_resp_opt`, `id_preg_resp`, `texto_respuesta`, `valor_unidad`, `idioma`, `created_at`, `updated_at`) VALUES
(1, 3, 'Responsable de Gestión', 0, 'es', NULL, NULL),
(2, 3, 'Gerente', 0, 'es', NULL, NULL),
(3, 3, 'Cargos de dirección y afines', 0, 'es', NULL, NULL),
(4, 3, 'Analista y afines', 0, 'es', NULL, NULL),
(5, 3, 'Otras areas', 0, 'es', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas_usuarios`
--

CREATE TABLE `respuestas_usuarios` (
  `id_Usuario` int(10) UNSIGNED NOT NULL,
  `id_preg_usuario` int(10) UNSIGNED NOT NULL,
  `respuesta_seleccionada` text COLLATE utf8_spanish_ci NOT NULL,
  `puntuacion_obtenida` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `respuestas_usuarios`
--

INSERT INTO `respuestas_usuarios` (`id_Usuario`, `id_preg_usuario`, `respuesta_seleccionada`, `puntuacion_obtenida`, `created_at`, `updated_at`) VALUES
(1, 1, 'Spyro', 0, NULL, NULL),
(1, 2, 'Gerente', 0, NULL, NULL),
(1, 3, 'País Vasco', 0, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apartados`
--
ALTER TABLE `apartados`
  ADD PRIMARY KEY (`id_apartado`);

--
-- Indices de la tabla `encuestas`
--
ALTER TABLE `encuestas`
  ADD PRIMARY KEY (`id_encuesta`);

--
-- Indices de la tabla `encuestas_apartados`
--
ALTER TABLE `encuestas_apartados`
  ADD KEY `encuestas_apartados_id_encuesta_rel_id_apartado_rel_index` (`id_encuesta_rel`,`id_apartado_rel`);

--
-- Indices de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`id_idioma`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id_pregunta`),
  ADD KEY `preguntas_id_apart_pregunta_id_pregunta_index` (`id_apart_pregunta`,`id_pregunta`);

--
-- Indices de la tabla `recomendaciones`
--
ALTER TABLE `recomendaciones`
  ADD PRIMARY KEY (`id_recomendacion`),
  ADD KEY `recomendaciones_id_pregunta_recomendacion_foreign` (`id_pregunta_recomendacion`),
  ADD KEY `recomendaciones_id_recomendacion_id_pregunta_recomendacion_index` (`id_recomendacion`,`id_pregunta_recomendacion`);

--
-- Indices de la tabla `respuestas_tipo_opcionals`
--
ALTER TABLE `respuestas_tipo_opcionals`
  ADD PRIMARY KEY (`id_resp_opt`),
  ADD KEY `respuestas_tipo_opcionals_id_preg_resp_foreign` (`id_preg_resp`),
  ADD KEY `respuestas_tipo_opcionals_id_resp_opt_id_preg_resp_index` (`id_resp_opt`,`id_preg_resp`);

--
-- Indices de la tabla `respuestas_usuarios`
--
ALTER TABLE `respuestas_usuarios`
  ADD PRIMARY KEY (`id_Usuario`,`id_preg_usuario`),
  ADD KEY `respuestas_usuarios_id_pregunta_resp_usuario_foreign` (`id_preg_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `apartados`
--
ALTER TABLE `apartados`
  MODIFY `id_apartado` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `encuestas`
--
ALTER TABLE `encuestas`
  MODIFY `id_encuesta` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id_pregunta` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `recomendaciones`
--
ALTER TABLE `recomendaciones`
  MODIFY `id_recomendacion` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `respuestas_tipo_opcionals`
--
ALTER TABLE `respuestas_tipo_opcionals`
  MODIFY `id_resp_opt` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `preguntas_id_apart_pregunta_foreign` FOREIGN KEY (`id_apart_pregunta`) REFERENCES `apartados` (`id_apartado`) ON DELETE CASCADE;

--
-- Filtros para la tabla `recomendaciones`
--
ALTER TABLE `recomendaciones`
  ADD CONSTRAINT `recomendaciones_id_pregunta_recomendacion_foreign` FOREIGN KEY (`id_pregunta_recomendacion`) REFERENCES `preguntas` (`id_pregunta`) ON DELETE CASCADE;

--
-- Filtros para la tabla `respuestas_tipo_opcionals`
--
ALTER TABLE `respuestas_tipo_opcionals`
  ADD CONSTRAINT `respuestas_tipo_opcionals_id_preg_resp_foreign` FOREIGN KEY (`id_preg_resp`) REFERENCES `preguntas` (`id_pregunta`) ON DELETE CASCADE;

--
-- Filtros para la tabla `respuestas_usuarios`
--
ALTER TABLE `respuestas_usuarios`
  ADD CONSTRAINT `respuestas_usuarios_id_pregunta_resp_usuario_foreign` FOREIGN KEY (`id_preg_usuario`) REFERENCES `preguntas` (`id_pregunta`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
