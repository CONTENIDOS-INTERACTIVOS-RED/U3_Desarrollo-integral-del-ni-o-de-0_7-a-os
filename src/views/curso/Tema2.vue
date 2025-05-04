<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Acciones de protección social'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p.mb-4 Las <b>acciones de protección social</b> comprenden estrategias, políticas y programas diseñados para <b>garantizar el bienestar, la equidad y la calidad de vida</b>, especialmente en poblaciones vulnerables. Estas acciones buscan <b>atender integralmente necesidades básicas</b> y promover el desarrollo infantil, articulando servicios de salud, educación, nutrición, cuidado y recreación (ICBF, 2018).
      .row.bg-rosa.bg-full-width.p-4.py-xl-0
        .col-12.col-xl-8.d-flex
          .my-auto.py-xl-4
            p.mb-4 En el caso de la infancia, estas acciones incluyen:

            span ●	Programas de atención integral a la primera infancia<br>●	Estimulación temprana<br>●	Promoción de hábitos saludables<br>●	Participación familiar y comunitaria
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

      .d-flex.align-items-start.bg-morado.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-33.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Organismos como el <b>ICBF</b>, las <b>cajas de compensación familiar</b>, las <b>EPS</b> y organizaciones sociales son responsables de su implementación, trabajando con un enfoque <b>inclusivo e intersectorial</b>.

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
      
          #t_2_1.titulo-segundo(data-aos="flip-up")
            div.d-flex
              span.me-3 2.1
              h2 Programa “De Cero a Siempre”

          p.mb-4 El <b>Programa De Cero a Siempre</b>, liderado por el <b>ICBF</b>, articula esfuerzos de múltiples sectores para garantizar el <b>desarrollo integral de niños y niñas desde la gestación hasta los cinco años</b>, integrando salud, nutrición, educación, cuidado, protección y participación comunitaria. Los objetivos del programa son: 

          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-34.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Primero
                p.px-1.text-small.mb-0.text-center Garantizar condiciones adecuadas para el desarrollo físico, cognitivo, emocional y social.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-35.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Segundo
                p.px-1.text-small.mb-0.text-center Asegurar el acceso equitativo a servicios esenciales sin importar el contexto socioeconómico.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-36.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Tercero
                p.px-1.text-small.mb-0.text-center Involucrar activamente a las familias y comunidades en el proceso de crianza.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-37.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Cuarto
                p.px-1.text-small.mb-0.text-center Reducir brechas de desigualdad desde la primera infancia.

      p.mb-4 Los componentes del Programa De Cero a Siempre son: 

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Salud y nutrición
                p Acceso a servicios de salud, controles de crecimiento, vacunación y programas para prevenir la desnutrición. Ejemplo: jornadas de vacunación en zonas rurales, seguimiento nutricional en centros de salud y distribución de suplementos de hierro y vitamina A para prevenir la anemia.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Educación inicial 
                p Programas de aprendizaje temprano para estimular el desarrollo cognitivo, emocional y social. Ejemplo: actividades en centros infantiles como juegos interactivos, arte, música y programas de prelectura y pre matemáticas en sectores de bajos recursos.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Cuidado y protección
                p Garantiza entornos seguros, libres de violencia, y atención prioritaria a niños en situación de riesgo. Ejemplo: capacitación en disciplina positiva para cuidadores y casas de acogida con atención psicológica para niños afectados por violencia.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Participación familiar y comunitaria
                p Promueve la corresponsabilidad de familias y comunidades mediante talleres y acciones educativas. Ejemplo: talleres sobre lactancia, rutinas saludables y el juego como herramienta de aprendizaje; creación de huertos comunitarios como espacios educativos y de seguridad alimentaria.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Inclusión y enfoque diferencial
                p Atención adaptada a contextos culturales y a niños con discapacidad, garantizando igualdad de condiciones. Ejemplo: materiales en lengua nativa para comunidades indígenas, inclusión de tecnología asistida y recursos táctiles para niños con discapacidad.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
      
      h2 Impacto y desafíos del programa
      p.mb-4 El programa ha generado <b>avances significativos</b> en salud, nutrición y educación infantil, especialmente en contextos vulnerables, contribuyendo a la <b>reducción de brechas sociales</b> y fortaleciendo las capacidades familiares. Ha sentado bases para un <b>desarrollo sostenible</b> al integrar esfuerzos institucionales con la participación comunitaria.
      .row.bg-morado.bg-full-width.p-4.py-xl-0.mb-4
        .col-12.col-xl-8.d-flex
          .my-auto.py-xl-4
            p.mb-4 Desafíos actuales incluyen:
            p.mb-4 ●	Cobertura limitada en zonas rurales y de difícil acceso.<br>●	Necesidad de mejorar la calidad de los servicios ofrecidos.<br>●	Articulación entre entidades implementadoras.

            span Pese a estos retos, el compromiso estatal y la participación activa de actores locales son clave para su sostenibilidad y expansión futura (ICBF, 2018).
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
      
      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Atención a la primera infancia

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-45.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 La atención a la primera infancia en Colombia, según el Ministerio de Educación Nacional (2006), es un enfoque integral e intersectorial que prioriza el desarrollo pleno de los niños desde la gestación hasta los seis años de edad. Reconociendo esta etapa como crítica para el desarrollo físico, emocional, cognitivo y social, el sistema de atención articula múltiples sectores para garantizar el acceso equitativo y oportuno a servicios esenciales. 
          span A continuación, se presentan los componentes clave que garantizan una atención integral a la primera infancia.

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4
            .col-12.col-xl-6.ms-auto
              TarjetaAudio.color-secundario.bg-white.mb-3(
                texto='Componentes clave'
                tiempo
                :audio="require('../../assets/componentes/audios/Podcast - componentes clave.mp3')"
                @audio-hover='mostrarIndicadorTarjetaAudio = false'
              )
            .col-4.d-none.d-xl-block.me-auto
              img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
          
          h2 Importancia de la atención integral
          p.mb-4 La <b>atención a la primera infancia</b> garantiza que todos los niños, independientemente de su origen o condición, puedan <b>desarrollarse en entornos seguros, saludables y estimulantes</b>. Gracias a la articulación intersectorial (salud, educación, nutrición y protección), se contribuye a:
          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-47.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Primero
                p.px-1.text-small.mb-0.text-center Reducir brechas sociales y económicas
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-48.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Segundo
                p.px-1.text-small.mb-0.text-center Prevenir enfermedades y problemas de desarrollo
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-49.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Tercero
                p.px-1.text-small.mb-0.text-center Fomentar la igualdad de oportunidades
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-50.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Cuarto
                p.px-1.text-small.mb-0.text-center Fortalecer el tejido social y familiar
      .d-flex.align-items-start.bg-morado.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-51.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Asegurar una base sólida para el aprendizaje futuro

      p.mb-4 A largo plazo, esta atención <b>construye una sociedad más equitativa, inclusiva y productiva</b>, al invertir en la etapa más sensible y decisiva del ciclo vital.

      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 Programas de Estimulación Temprana

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 Los programas de estimulación temprana están diseñados para potenciar el desarrollo cognitivo, emocional y físico de los niños desde las primeras etapas de la vida, incluyendo la etapa prenatal hasta los 4 o 6 años. Estos programas estimulan los sentidos y habilidades mentales, como la memoria, la atención, la curiosidad y el lenguaje, a través de actividades adaptadas a la edad (Puerta, 2023).
          .bg-rosa.p-4.mb-4(data-aos='fade-up')
            span Además de fomentar el aprendizaje, la estimulación temprana <b>promueve la autonomía</b>, fortalece la confianza en sí mismos e impulsa la interacción social. Su metodología combina <b>repetición estructurada y novedad gradual</b>, para mantener el interés del niño sin generar sobreestimulación.
          p.mb-4  La estimulación no debe verse como un proceso mecánico ni frustrante, sino como una experiencia adaptativa y natural, que <b>celebra el ritmo de desarrollo individual</b> (Puerta, 2023).
          span.text-bold Los tipos de programas de estimulación temprana en Colombia son: 
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Cajas de compensación familiar
                p Ofrecen programas lúdicos, recreativos y educativos para niños de 0 a 6 años, dirigidos por fisioterapeutas y profesionales en salud infantil. Actividades como música, juego, acuamotricidad, arte y desarrollo motor. Ejemplo: Cofrem (2024) realiza sesiones con juegos sensoriales y música. Compensar (2025) incluye acuamotricidad, iniciación musical y actividades físicas para desarrollar equilibrio y coordinación.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold  Entidades Promotoras de Salud (EPS)
                p Integran la estimulación temprana en sus programas de prevención, especialmente para niños con retrasos en el desarrollo. Se enfocan en habilidades sensoriales, motrices y lingüísticas. Ejemplo: el centro CADIS (2016) desarrolla actividades estructuradas para trabajar motricidad fina, gruesa e interacción social.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold  Organizaciones deportivas
                p Promueven el desarrollo físico y social a través de clases deportivas adaptadas. Estas actividades refuerzan la confianza, el trabajo en equipo y la disciplina. Ejemplo: Mi Señal (2021) ofrece clases de atletismo, voleibol y patinaje que
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
       
      h2 Impacto del enfoque integral de estimulación temprana
      p.mb-4 La estimulación temprana es <b>esencial para alcanzar los hitos del desarrollo</b> en tiempo adecuado. Cuando se aplica correctamente:
      .row.bg-morado.bg-full-width.p-4.py-xl-0.mb-4
        .col-12.col-xl-8.d-flex
          .my-auto.py-xl-4
            p.mb-4 ●	Mejora la inteligencia emocional y social del niño.<br><br>●	Potencia el desarrollo neurológico y las funciones ejecutivas.<br><br>●	Prepara al niño para la etapa escolar, facilitando el aprendizaje.<br><br>●	Favorece el fortalecimiento de la familia, al involucrarla activamente en el proceso de desarrollo.

            span Al <b>articular esfuerzos interinstitucionales</b> (cajas, EPS, instituciones deportivas), se promueve un desarrollo infantil <b>equitativo e inclusivo</b>, beneficiando a niños de diversos contextos socioeconómicos y territoriales.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-58.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Los programas de estimulación temprana son una <b>herramienta estratégica para el desarrollo integral</b> de la infancia. Su implementación por parte de <b>entidades públicas y privadas</b> asegura que los niños tengan acceso a experiencias enriquecedoras que fortalecen todas sus dimensiones: física, emocional, cognitiva y social.
          span Este enfoque, al ser preventivo, educativo y participativo, <b>contribuye al bienestar de las familias y al desarrollo sostenible del país</b>, asegurando que cada niño y niña tenga oportunidades reales de alcanzar su máximo potencial.
      .row.bg-verde.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Protección de derechos: programas deportivos, programas preventivos para la infancia, cuidado y restablecimiento de derechos desde ICBF
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Protección de derechos,  donde se aborda el compromiso del Estado colombiano y diversas instituciones en la garantía, prevención y restablecimiento de los derechos de la infancia y adolescencia.   
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Protección de derechos.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Protección de derechos: programas deportivos, programas preventivos para la infancia, cuidado y restablecimiento de derechos desde ICBF
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>
      
      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/63324?page=1") Estimulación temprana y psicomotricidad
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=UoqA0T9uVSY") [Vídeo] Fortaleciendo los vínculos con la primera infancia
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    cuestionario: {
      tema: 'Atención infantil integral',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo del plan de vacunación infantil?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir la mortalidad infantil de un grupo especial de niños',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prevenir enfermedades prevenibles por vacunas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantizar el bienestar integral del niño',
              esCorrecta: false,
            },
            { id: 'd', texto: 'b y c son correctas', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué acción se incluye en los programas de estimulación temprana?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividades lúdicas y recreativas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Terapias de lenguaje para niños con dificultades',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo desarrollo de habilidades motoras',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Desarrollo de habilidades motoras, cognitivas y de lenguaje',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'En el proceso administrativo de restablecimiento de derechos (PARD), el interés superior del menor implica que:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las decisiones siempre priorizan el bienestar del niño',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se evalúan las condiciones de la comunidad',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se busca un entorno protector en otro país',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se hace un llamado de atención a la familia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué organización lidera el programa "De Cero a Siempre"?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Educación Nacional',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Entidades Promotoras de Salud (EPS)',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cajas de compensación familiar',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué objetivos tienen los programas deportivos para la infancia?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer valores como la disciplina y el trabajo infantil',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promover entornos seguros para el desarrollo infantil',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fomentar la inclusión social y la salud física',
              esCorrecta: false,
            },
            { id: 'd', texto: 'b y c son correctas', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
