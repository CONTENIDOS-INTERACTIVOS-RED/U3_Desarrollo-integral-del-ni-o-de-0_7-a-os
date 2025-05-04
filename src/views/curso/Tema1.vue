<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Acciones de salud integral para los niños: plan de vacunación infantil, programa de crecimiento y desarrollo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Según la <b>Organización Panamericana de la Salud (OPS, 2025)</b>, las acciones de salud integral para los niños constituyen un conjunto de estrategias diseñadas para asegurar su bienestar físico, mental y social. Este enfoque trasciende la mera ausencia de enfermedades, promoviendo un desarrollo óptimo desde el nacimiento hasta la adolescencia. La salud infantil es vista de manera holística, reconociendo al niño como un ser en crecimiento constante.
        .d-flex.align-items-start.bg-rosa.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-3.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 En la Región de las Américas, los avances han sido significativos en la reducción de la <b>mortalidad y morbilidad infantil</b>, gracias a intervenciones basadas en evidencia y nuevas tecnologías. Se ha logrado disminuir muertes por neumonía, malnutrición y enfermedades prevenibles mediante vacunación. Sin embargo, estas mejoras no se distribuyen equitativamente entre los países, persistiendo <b>desigualdades sociales, de género, clase y </b>etnia que elevan el riesgo de mortalidad en la niñez (OPS, 2025).
        span Estas desigualdades impactan también el <b>desarrollo cognitivo, emocional y educativo</b>, representando un desafío crítico para la región. Invertir en la infancia es una obligación estatal para garantizar derechos fundamentales como vivir, desarrollarse y participar, y además es una inversión en el capital humano del futuro (OPS, 2025). Los componentes clave de las acciones de salud integral son: 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')

    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-5.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='53%' y='31%' numero='+')
        .h5.mb-2 Promoción de la salud
        p Campañas educativas sobre alimentación saludable, higiene, actividad física y prevención de accidentes.
      .tarjeta.bg-white.p-4(x='64%' y='37.5%' numero='+')
        .h5.mb-2 Prevención de enfermedades
        p Programas de vacunación infantil, controles médicos periódicos y detección temprana de afecciones.
      .tarjeta.bg-white.p-4(x='60%' y='80%' numero='+')
        .h5.mb-2 Atención médica integral
        p Acceso a servicios médicos de calidad, incluyendo apoyo psicológico.
      .tarjeta.bg-white.p-4(x='48%' y='72.4%' numero='+')
        .h5.mb-2 Entornos saludables
        p Creación de espacios físicos y emocionales seguros que estimulen el desarrollo infantil.
      .tarjeta.bg-white.p-4(x='39%' y='37%' numero='+')
        .h5.mb-2 Apoyo familiar y comunitario
        p Participación activa de familias y comunidades, fortaleciendo redes de cuidado y protección.

    h2 Principales programas en Colombia
    p.mb-4 El <b>Ministerio de Salud y Protección Social de Colombia (2016; s/f)</b> destaca diversas estrategias dentro de la política de atención integral en salud, enmarcadas en la iniciativa <i>Ruta Cero a Siempre – Unidos</i>. Estas buscan garantizar el desarrollo completo del niño, desde la primera infancia.

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Plan de vacunación infantil
              p Asegurar la inmunización contra enfermedades prevenibles desde los primeros meses de vida.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Programa de crecimiento y desarrollo
              p Monitorear el desarrollo físico, emocional y cognitivo del niño, detectando factores de riesgo e interviniendo a tiempo.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Promoción de la lactancia materna
              p Favorecer una nutrición óptima desde el nacimiento y fortalecer el vínculo afectivo madre-hijo.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Control prenatal
              p Acompañar la salud materna para influir positivamente en el desarrollo fetal y prevenir complicaciones.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Prevención de anemia infantil
              p Implementación de alimentos fortificados con micronutrientes esenciales para el desarrollo cognitivo y físico.
    .row.mb-4
      .col-12.col-xl-8
        h2 Importancia de invertir en salud infantil
        p.mb-4 Invertir en salud infantil es clave no solo para prevenir enfermedades, sino también para <b>promover un crecimiento saludable</b>, un mejor desempeño escolar y social, y la construcción de sociedades más equitativas. Una adecuada nutrición y vacunación temprana <b>reduce el riesgo de enfermedades crónicas</b>, mientras que el acceso a servicios de salud mental <b>fortalece las habilidades emocionales</b> del niño.
        .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-11.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Según la OPS (2025) y Minsalud (2016), estas intervenciones tienen un impacto positivo a largo plazo, reduciendo desigualdades estructurales y fomentando un desarrollo sostenible para futuras generaciones.
      .col-12.col-xl-4
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Plan de vacunación infantil

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 La <b>vacunación infantil</b> es una estrategia esencial para prevenir enfermedades infecciosas en la niñez. Según <b>Balado Sansón (2009)</b>, este proceso consiste en la administración de vacunas que estimulan el sistema inmunológico del niño, preparándolo para combatir infecciones futuras mediante inmunización activa. Esta protección inicia desde las primeras horas de vida, contribuyendo tanto a la salud individual como colectiva al reducir la propagación de enfermedades transmisibles.
        .bg-rosa.p-4(data-aos='fade-up')
          span El <b>esquema de vacunación infantil</b> abarca enfermedades como tuberculosis, hepatitis B, difteria, tos ferina, tétanos, <i>Haemophilus influenzae</i>, poliomielitis, paperas, rubéola, sarampión, meningococo y fiebre tifoidea. <b>La alta cobertura de vacunación</b> ha logrado disminuir considerablemente la morbilidad y mortalidad por enfermedades prevenibles (Balado Sansón, 2009).

    h2 El Programa Ampliado de Inmunizaciones (PAI) en Colombia

    .row.bg-morado.bg-full-width.p-4.py-xl-0.mb-4
      .col-12.col-xl-8.d-flex
        .my-auto.py-xl-4
          p.mb-4 En Colombia, el <b>Ministerio de Salud y Protección Social</b> lidera el <b>Programa Ampliado de Inmunizaciones (PAI)</b>, una estrategia gratuita y obligatoria que busca proteger a la población infantil mediante un esquema completo de vacunación. Este programa, según <b>Minsalud (2020)</b>, incluye:
          span ●	Vacunas contra poliomielitis, sarampión, rubéola, hepatitis B, difteria, tétanos, tos ferina, entre otras.<br>●	Acceso gratuito a las vacunas en puntos habilitados en todo el país.<br>●	Campañas masivas para alcanzar poblaciones vulnerables.<br>●	Estrategias de vacunación extramurales y jornadas de sensibilización ante la desinformación.

      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    p.mb-4 La vacunación es una de las <b>intervenciones de salud pública más costo-eficientes</b>, ya que:
    .row.mb-4.justify-content-center
      .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
        .custom-image-card.d-flex.flex-column.p-4.py-md-5
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-15.svg', style='width: 80px')
          p.text-bold.mb-4.text-center Primero
          p.px-1.text-small.mb-0.text-center Protege al individuo y genera inmunidad colectiva.
      .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
        .custom-image-card.d-flex.flex-column.p-4.py-md-5
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-16.svg', style='width: 80px')
          p.text-bold.mb-4.text-center Segundo
          p.px-1.text-small.mb-0.text-center Previene complicaciones graves.
      .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
        .custom-image-card.d-flex.flex-column.p-4.py-md-5
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-17.svg', style='width: 80px')
          p.text-bold.mb-4.text-center Tercero
          p.px-1.text-small.mb-0.text-center Reduce la carga económica en salud.
      .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
        .custom-image-card.d-flex.flex-column.p-4.py-md-5
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style='width: 80px')
          p.text-bold.mb-4.text-center Cuarto
          p.px-1.text-small.mb-0.text-center Fortalece el sistema inmunológico para toda la vida.
    
    .d-flex.align-items-start.bg-morado.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-19.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Gracias al PAI, Colombia ha erradicado la poliomielitis y ha logrado una notable disminución de enfermedades como el sarampión y la rubéola (Minsalud, 2020).

    h2 Desafíos actuales del programa

    p.mb-4 A pesar de los logros, el PAI enfrenta retos importantes:
    .row.mb-4
      .col-10.col-md-6.col-xl-4.mx-auto.d-flex
        .d-flex.align-items-start.bg-verde.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-20.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Baja cobertura en zonas rurales o de difícil acceso.
      .col-10.col-md-6.col-xl-4.mx-auto.d-flex
        .d-flex.align-items-start.bg-verde.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-21.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Desinformación sobre la seguridad de las vacunas.
      .col-10.col-md-6.col-xl-4.mx-auto.d-flex
        .d-flex.align-items-start.bg-verde.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-22.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Necesidad de actualización frente a nuevas enfermedades emergentes.
    
    p.mb-4 El Ministerio continúa reforzando estrategias de <b>sensibilización comunitaria</b>, jornadas móviles de vacunación y alianzas intersectoriales para cerrar brechas en cobertura (Minsalud, 2020).

    p.mb-4 <b>Tabla 1. </b> Esquema de vacunación infantil en Colombia

    .tabla-a
      table
        thead
          tr
            th(width="15%").text-bold.bg-morado Edad
            th(width="35%").text-bold.bg-morado Vacuna
            th(width="50%").text-bold.bg-morado Enfermedades que previene
        tbody
          tr
            td.text-bold Recién nacido
            td BCG, Hepatitis B
            td Tuberculosis (meningitis tuberculosa), Hepatitis B
          tr
            td.text-bold 2 meses
            td Pentavalente (DPT, Hib, Hep. B), Polio, Rotavirus, Neumococo
            td Difteria, tos ferina, tétanos, <i>Haemophilus influenzae</i>, hepatitis B, poliomielitis, diarrea por rotavirus, neumonía, otitis, meningitis bacteriana
          tr
            td.text-bold 4 meses
            td Pentavalente, Polio, Rotavirus, Neumococo
            td Igual que a los 2 meses
          tr
            td.text-bold 6 meses
            td Pentavalente, Polio, Influenza estacional
            td Igual que a los 2 meses + enfermedades respiratorias por influenza
          tr
            td.text-bold 7 meses
            td Influenza estacional
            td Enfermedades respiratorias por influenza
          tr
            td.text-bold 12 meses
            td Triple viral (SRP), Varicela, Neumococo, Hepatitis A
            td Sarampión, rubéola, paperas, varicela, neumonía, otitis, meningitis bacteriana, hepatitis A
          tr
            td.text-bold 18 meses
            td DPT (refuerzo), Polio (refuerzo), Fiebre amarilla
            td Difteria, tos ferina, tétanos, poliomielitis, fiebre amarilla
          tr
            td.text-bold 5 años
            td DPT (refuerzo), Polio (refuerzo), Triple viral, Varicela
            td Igual que a los 18 meses
          tr
            td.text-bold 9 años (niñas)
            td Virus del Papiloma Humano (VPH)
            td Cáncer de cuello uterino causado por el VPH

    .d-flex.align-items-start.bg-morado.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-23.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Este esquema <b>es gratuito, obligatorio y accesible</b> en todo el territorio nacional, garantizando la protección de la niñez contra enfermedades prevenibles y asegurando su desarrollo físico y social.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Programa de crecimiento y desarrollo

    .row.mb-4
      .col-12.col-xl-8
        .mb-4.bg-verde.p-4(data-aos='fade-up')
          span El Programa de Crecimiento y Desarrollo, liderado por el Ministerio de Salud y Protección Social en Colombia, es una estrategia clave de salud pública destinada a monitorear el desarrollo físico, emocional y social de los niños desde su nacimiento hasta los 10 años (Minsalud, 2014). Su objetivo central es detectar de forma oportuna cualquier alteración o riesgo, y garantizar intervenciones adecuadas que promuevan un desarrollo integral y equitativo. 
        span Este enfoque preventivo es fundamental para reducir la morbilidad y mortalidad infantil, así como para fortalecer el bienestar familiar y comunitario. Los componentes del programa son: 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Evaluaciones periódicas")
            p Controles médicos regulares para monitorear peso, talla, desarrollo motor, lenguaje y habilidades sociales. Permiten <b>detección temprana</b> de alteraciones.
          .div(titulo="Orientación a los padres")
            p Talleres y sesiones informativas sobre <b>crianza saludable, estimulación temprana y nutrición</b>. Empoderan a los padres como protagonistas del desarrollo infantil.
          .div(titulo="Acceso a servicios especializados")
            p Remisión a fonoaudiología, psicología, fisioterapia, pediatría, etc., según las necesidades del niño, garantizando una atención <b>integral y oportuna</b>.
    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Promoción de hábitos saludables")
            p Fomento de la <b>lactancia materna exclusiva</b>, alimentación balanceada, actividad física e higiene personal. Prevención de enfermedades a largo plazo.
          .div(titulo="Prevención de enfermedades")
            p Educación sobre <b>lavado de manos, prevención de accidentes y anemia</b>, y promoción de salud bucal. Reduce la carga de enfermedades comunes en la infancia.
          .div(titulo="Detección de riesgos psicoemocionales")
            p Identificación de <b>estrés, ansiedad o retrasos emocionales</b>. Evaluación del entorno familiar y apoyo psicológico para fortalecer la salud mental infantil.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
        
    h2 Impacto del programa
    p.mb-4 El Programa de Crecimiento y Desarrollo es un <b>pilar esencial del bienestar infantil</b>, ya que promueve:

    .row.bg-rosa.p-4.py-xl-0.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex
        .my-auto.py-xl-4
          p.mb-4 ●	Un enfoque <b>preventivo e integral</b>, centrado en las necesidades individuales del niño.<br><br>●	La <b>igualdad en el acceso</b> a servicios de salud, sin importar condición socioeconómica o geográfica.<br><br>●	El fortalecimiento de <b>ambientes familiares afectivos y seguros</b>, favoreciendo vínculos sólidos y entornos estimulantes.<br><br>●	Una <b>mejor calidad de vida presente y futura</b>, al prevenir complicaciones y potenciar habilidades físicas, cognitivas y emocionales.<br><br>●	La <b>formación de adultos saludables y productivos</b>, al sentar bases sólidas desde la infancia.

          span Además, el programa <b>disminuye desigualdades estructurales</b>, fortalece los <b>derechos fundamentales de los niños</b> y contribuye a los <b>objetivos de desarrollo sostenible</b> (Minsalud, 2014).

    h2 Desafíos y proyecciones
    p.mb-4 A pesar de sus avances, el programa enfrenta <b>retos importantes</b>:

    .row.mb-4
      .col-10.col-md-6.d-flex
        .d-flex.align-items-start.bg-verde.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-28.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Primero
            span Limitaciones de <b>cobertura en zonas rurales y de difícil acceso</b>.
      .col-10.col-md-6.d-flex
        .d-flex.align-items-start.bg-verde.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-29.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Segundo
            span Falta de conciencia en algunas familias sobre la importancia de los <b>controles periódicos</b>.
    
    p.mb-4 Para superarlos, el Ministerio ha implementado acciones como:

    .row.mb-4
      .col-10.col-md-6.d-flex
        .d-flex.align-items-start.bg-morado.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-30.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Capacitación al personal de salud para mejorar la atención.
      .col-10.col-md-6.d-flex
        .d-flex.align-items-start.bg-morado.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-31.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Uso de tecnologías digitales para el monitoreo remoto del desarrollo infantil.
    
    p.mb-5 Este programa representa no solo una inversión en la infancia, sino también una apuesta por el desarrollo social, ya que una niñez sana es la base para una sociedad más equitativa, justa y productiva.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="http://www.scielo.org.pe/scielo.php?pid=S2308-05312022000200287&script=sci_arttext&tlng=es") Percepción de los padres sobre la vacunación infantil
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=TaG5ctlPKk8") [Vídeo] Lo que debes saber sobre la vacunación
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

    p

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
