-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 31-05-2018 a las 14:58:30
-- Versión del servidor: 5.7.22-0ubuntu0.16.04.1
-- Versión de PHP: 7.0.30-0ubuntu0.16.04.1

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
  `clave_encuesta` varchar(8) COLLATE utf8_spanish_ci NOT NULL,
  `n_apartado` int(11) NOT NULL,
  `titulo_apartado` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion_apartado` text COLLATE utf8_spanish_ci,
  `valor_porcentaje_apartado` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `comun` tinyint(1) NOT NULL DEFAULT '0',
  `idioma` varchar(3) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'es',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encuestas`
--

CREATE TABLE `encuestas` (
  `id_encuesta` int(10) UNSIGNED NOT NULL,
  `titulo_encuesta` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripion_encuesta` text COLLATE utf8_spanish_ci,
  `estado_encuesta` tinyint(1) NOT NULL DEFAULT '0',
  `idioma` varchar(3) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'es',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `clave_encuesta` varchar(8) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomas`
--

CREATE TABLE `idiomas` (
  `id_orden` int(11) NOT NULL,
  `id_idioma` varchar(3) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `idiomas`
--

INSERT INTO `idiomas` (`id_orden`, `id_idioma`, `descripcion`, `created_at`, `updated_at`) VALUES
(1, 'en', 'INGLES', NULL, NULL),
(0, 'es', 'ESPAÑOL', NULL, NULL);

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
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apartados`
--
ALTER TABLE `apartados`
  ADD PRIMARY KEY (`id_apartado`),
  ADD KEY `idioma` (`idioma`);

--
-- Indices de la tabla `encuestas`
--
ALTER TABLE `encuestas`
  ADD PRIMARY KEY (`id_encuesta`,`idioma`),
  ADD UNIQUE KEY `id_encuesta_2` (`id_encuesta`),
  ADD KEY `idioma` (`idioma`),
  ADD KEY `id_encuesta` (`id_encuesta`),
  ADD KEY `id_encuesta_3` (`id_encuesta`);

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
  ADD KEY `preguntas_id_apart_pregunta_id_pregunta_index` (`id_apart_pregunta`,`id_pregunta`),
  ADD KEY `idioma` (`idioma`);

--
-- Indices de la tabla `recomendaciones`
--
ALTER TABLE `recomendaciones`
  ADD PRIMARY KEY (`id_recomendacion`),
  ADD KEY `recomendaciones_id_pregunta_recomendacion_foreign` (`id_pregunta_recomendacion`),
  ADD KEY `recomendaciones_id_recomendacion_id_pregunta_recomendacion_index` (`id_recomendacion`,`id_pregunta_recomendacion`),
  ADD KEY `idioma` (`idioma`);

--
-- Indices de la tabla `respuestas_tipo_opcionals`
--
ALTER TABLE `respuestas_tipo_opcionals`
  ADD PRIMARY KEY (`id_resp_opt`),
  ADD KEY `respuestas_tipo_opcionals_id_resp_opt_id_preg_resp_index` (`id_resp_opt`,`id_preg_resp`),
  ADD KEY `idioma` (`idioma`),
  ADD KEY `respuestas_tipo_opcionals_id_preg_resp_foreign` (`id_preg_resp`);

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
  MODIFY `id_apartado` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de la tabla `encuestas`
--
ALTER TABLE `encuestas`
  MODIFY `id_encuesta` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id_pregunta` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `recomendaciones`
--
ALTER TABLE `recomendaciones`
  MODIFY `id_recomendacion` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `respuestas_tipo_opcionals`
--
ALTER TABLE `respuestas_tipo_opcionals`
  MODIFY `id_resp_opt` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `apartados`
--
ALTER TABLE `apartados`
  ADD CONSTRAINT `apartados_ibfk_1` FOREIGN KEY (`idioma`) REFERENCES `idiomas` (`id_idioma`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `encuestas`
--
ALTER TABLE `encuestas`
  ADD CONSTRAINT `encuestas_ibfk_1` FOREIGN KEY (`idioma`) REFERENCES `idiomas` (`id_idioma`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`idioma`) REFERENCES `idiomas` (`id_idioma`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `preguntas_id_apart_pregunta_foreign` FOREIGN KEY (`id_apart_pregunta`) REFERENCES `apartados` (`id_apartado`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `recomendaciones`
--
ALTER TABLE `recomendaciones`
  ADD CONSTRAINT `recomendaciones_ibfk_1` FOREIGN KEY (`idioma`) REFERENCES `idiomas` (`id_idioma`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recomendaciones_id_pregunta_recomendacion_foreign` FOREIGN KEY (`id_pregunta_recomendacion`) REFERENCES `preguntas` (`id_pregunta`) ON DELETE CASCADE;

--
-- Filtros para la tabla `respuestas_tipo_opcionals`
--
ALTER TABLE `respuestas_tipo_opcionals`
  ADD CONSTRAINT `respuestas_tipo_opcionals_ibfk_1` FOREIGN KEY (`idioma`) REFERENCES `idiomas` (`id_idioma`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `respuestas_tipo_opcionals_id_preg_resp_foreign` FOREIGN KEY (`id_preg_resp`) REFERENCES `preguntas` (`id_pregunta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `respuestas_usuarios`
--
ALTER TABLE `respuestas_usuarios`
  ADD CONSTRAINT `respuestas_usuarios_id_pregunta_resp_usuario_foreign` FOREIGN KEY (`id_preg_usuario`) REFERENCES `preguntas` (`id_pregunta`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
