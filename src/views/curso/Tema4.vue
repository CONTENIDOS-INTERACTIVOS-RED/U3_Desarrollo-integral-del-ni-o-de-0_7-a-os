<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Aprendizaje significativo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-54.png', alt='Imagen de David Paul Ausubel')
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-55.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 David Paul Ausubel es uno de los referentes clave en la psicología educativa y el aprendizaje cognitivo. Su Teoría del Aprendizaje Significativo, formulada en los años sesenta, cambió radicalmente la forma de entender la enseñanza, situando al estudiante como centro del proceso y enfatizando la importancia de conectar los nuevos aprendizajes con el conocimiento previo del alumno. (Rodríguez Palmero, 2013)
          span En su obra <i>The Psychology of Meaningful Verbal Learning</i> (1963), Ausubel plantea que el aprendizaje ocurre de forma más efectiva cuando los nuevos conceptos son <b>anclados</b> a estructuras cognitivas existentes. Esta teoría sigue vigente como base del <b>constructivismo moderno</b>, influyendo en múltiples campos de la educación y la psicología cognitiva.
      .row.mb-4
        .col-12.col-xl-8
          h2 Enfoque cognitivo y naturaleza del aprendizaje significativo
          p.mb-4 Ausubel considera el aprendizaje como una <b>reorganización activa de estructuras mentales</b>. Aprender no es simplemente memorizar, sino <b>modificar y enriquecer</b> lo que ya sabemos. Por ejemplo, cuando un alumno ya entiende qué es un ecosistema, podrá comprender más fácilmente las cadenas alimentarias si el docente establece una relación lógica entre ambos conceptos.
          .bg-amarillo.p-4(data-aos='fade-up').mb-4
            span Este enfoque se clasifica como una <b>teoría psicológica cognitiva de reestructuración</b>, en la que el aprendizaje significativo no solo implica adquisición de información, sino una <b>modificación cualitativa</b> del conocimiento existente.
          span Para introducir el concepto de forma sencilla, Rodríguez Palmero (2013) propone imaginar que el conocimiento funciona como una <b>biblioteca mental</b>. Cada nuevo aprendizaje es como un libro que debe ubicarse en la estantería correcta. Esta ubicación se logra cuando se relaciona con contenidos ya existentes.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-56.png', alt='Representación del aprendizaje significativo')

      .row.mb-4.bg-morado.px-4.py-xl-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-57.png', alt='Ventajas del aprendizaje significativo')
        .col-12.col-xl-8.d-flex
          .my-auto
            p.mb-3 El aprendizaje significativo tiene ventajas claras:
            p.mb-3 - Genera comprensión profunda
            p.mb-3 - Favorece la retención a largo plazo
            p.mb-3 - Permite la transferencia de conocimiento a nuevos contextos
      h2 Condiciones necesarias para que ocurra el aprendizaje significativo
      p.mb-4 Ausubel señala que para que el aprendizaje significativo se produzca, deben cumplirse dos condiciones esenciales. Estas condiciones se relacionan tanto con el estudiante como con el contenido que se le presenta.
      .row.mb-4
        .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-58.png', alt='Motivación del estudiante')
            div.mb-4
              p.text-bold.text-center Motivación del estudiante
              p.text-small.px-4.text-center.pb-2 El alumno debe tener una actitud positiva hacia el aprendizaje, mostrando predisposición y voluntad para relacionar el nuevo material con su estructura cognitiva.
        .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-59.png', alt='Material potencialmente significativo')
            div.mb-4
              p.text-bold.text-center Material potencialmente significativo
              p.text-small.px-4.text-center.pb-2 El contenido debe tener significado lógico y ser presentado de manera que pueda conectarse con los conceptos relevantes que el estudiante ya posee ("subsumidores").

      .d-flex.align-items-start.bg-amarillo-oscuro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-60.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Una estructura cognitiva organizada, con conceptos previos claros y accesibles, aumenta la probabilidad de un aprendizaje verdaderamente significativo. Sin motivación o sin "ideas de anclaje", el aprendizaje será memorístico y pasajero.

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Representacional
                p Se da en la infancia; se aprende a asociar un símbolo (como una palabra) con su referente concreto.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-61.png', alt='Tipo de aprendizaje representacional')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold De conceptos
                p Implica generalizar atributos comunes; por ejemplo, entender que "perro" representa a una categoría, no a un ejemplar.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-62.png', alt='Tipo de aprendizaje de conceptos')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Proposicional
                p Se refiere a comprender ideas completas, formadas por varios conceptos; requiere entender tanto los elementos como su relación lógica.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-63.png', alt='Tipo de aprendizaje proposicional')
      p.mb-4 Además, Ausubel clasifica el aprendizaje según cómo se organiza jerárquicamente en la mente:
      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Subordinado")(data-aos="fade-up")
              p El nuevo contenido se relaciona con conceptos <b>más generales</b> ya existentes (e.g., aprender "gato" bajo el concepto general "mamífero").
            .div(titulo="Superordenado")(data-aos="fade-up")
              p El alumno incorpora un concepto <b>más amplio</b> que engloba a otros conocidos (e.g., aprender "frutas" luego de conocer "manzana", "pera", "uva").
            .div(titulo="Combinatorio")(data-aos="fade-up")
              p Se establecen conexiones <b>laterales</b> entre ideas sin que una sea subordinada a la otra (e.g., asociar "sol" con "energía" o "vida").
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-64.png', alt='Organización jerárquica del aprendizaje')

      h2 Proceso de asimilación: cómo se integra lo nuevo
      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-65.png', alt='Proceso de asimilación')
        .col-12.col-xl-8
          p.mb-4 El concepto de <b>asimilación</b> es central en la teoría de Ausubel. Aprender es, básicamente, <b>integrar lo nuevo con lo conocido</b>, modificando ambos elementos. La nueva información se vuelve significativa solo si puede vincularse a un <b>subsumidor</b> —una idea o concepto ya presente en la mente del estudiante.
          .bg-morado.p-4(data-aos="fade-up").mb-4
            span Por ejemplo, si ya sabes qué es un mamífero, al aprender sobre los invertebrados puedes ampliar tu concepto de "animal" para incluir categorías más diversas.
          span <b>Importante:</b> Cuando la nueva información se mezcla muy profundamente con el conocimiento previo, puede dificultarse la recuperación aislada de esa información, generando <b>olvido por asimilación</b>.

      .row.bg-rosa.px-4.py-xl-4
        .col-12.col-xl-8.d-flex
          .my-auto
            p.mb-3 El <b>lenguaje</b> cumple una función esencial en este modelo. No solo es un medio para expresar ideas, sino que <b>facilita la organización y reestructuración del pensamiento</b>.
            p.mb-3 A través del lenguaje, verbalizamos conceptos, los categorizamos y los hacemos conscientes.
            span <ul><li>- Nos permite nombrar y definir conceptos</li><li>- Favorece el discurso interno</li><li>- Es clave tanto en el aprendizaje receptivo como en el descubrimiento</li></ul> El aprendizaje representacional y conceptual, por ejemplo, depende del uso adecuado del lenguaje para formar símbolos mentales y establecer significados duraderos.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-66.png', alt='Rol del lenguaje en el aprendizaje significativo')
      
      .row.bg-fondo-2.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          h2 Estrategias de facilitación del aprendizaje significativo
          p.mb-4 Para que este aprendizaje ocurra efectivamente, el <b>docente debe intervenir activamente</b> en dos dimensiones clave: el contenido que se enseña y la estructura cognitiva del estudiante. Ausubel propone el uso de <b>organizadores previos</b> para activar conocimientos anteriores y preparar la mente para el nuevo contenido.

          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-67.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Estructura cognitiva del alumno
                p.px-1.text-small.mb-0.d-flex.text-center Conocer cómo organiza el alumno sus saberes permite al docente enlazar conceptos nuevos con los existentes.
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-68.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Organizadores previos
                p.px-1.text-small.mb-0.text-center Material introductorio que <strong>activa los conocimientos relevantes</strong> antes de presentar nueva información.
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-69.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Análisis del contenido
                p.px-1.text-small.mb-0.d-flex.text-center Selección y organización lógica del contenido, identificando conceptos clave y conexiones posibles para facilitar la asimilación.
          
          .d-flex.align-items-start.bg-amarillo-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-70.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 El objetivo no es solo transmitir información, sino ayudar al estudiante a <b>reconstruir su conocimiento</b> de manera más sólida, flexible y duradera. La <b>Teoría del Aprendizaje Significativo</b> de Ausubel nos recuerda que <b>aprender no es llenar una mente vacía, sino conectar, reorganizar y enriquecer lo que ya sabemos</b>. 
          
          p.mb-4 Para lograrlo, se requiere: motivación del estudiante, material potencialmente significativo y estrategias de enseñanza adecuadas. Cuando todos estos elementos se alinean, el aprendizaje deja de ser mecánico y se convierte en <b>significativo, duradero y aplicable</b> a nuevos contextos.
          
          .row.mb-4
            .col-10.col-xl-8.mx-auto
              .bg-white.rounded.shadow.p-3.py-lg-4.px-lg-5
                .row.justify-content-around.align-items-center
                  .col-4.col-sm-3.col-lg-2
                    img(src="@/assets/componentes/video-icon-circle.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.text-bold.mb-3 Preparación de una clase con aprendizaje significativo
                        p.text-small Los invitamos a ver el siguiente video sobre cómo preparar una clase en función del aprendizaje significativo:
                      .col-sm-auto
                        a.download-btn.px-3.py-2.bg-morado(href="https://www.youtube.com/watch?v=r0N30Vuvrtw " target="_blank")
                          span.text-small Ver video
                          i.fas.fa-arrow-right
          .row.mb-4
            .col-10.col-xl-8.mx-auto
              .bg-white.rounded.shadow.p-3.py-lg-4.px-lg-5
                .row.justify-content-around.align-items-center
                  .col-4.col-sm-3.col-lg-2
                    img(src="@/assets/componentes/link-icon-circle.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.text-bold.mb-3 Aprendizaje significativo como estrategia didáctica
                        p.text-small También les dejamos el siguiente artículo sobre el aprendizaje significativo como estrategia didáctica:
                      .col-sm-auto
                        a.download-btn.px-3.py-2.bg-morado(href="https://dialnet.unirioja.es/descarga/articulo/7927035.pdf " target="_blank")
                          span.text-small Ir al sitio
                          i.fas.fa-arrow-right
      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="http://www.scielo.org.co/pdf/leng/v42n2/v42n2a08.pdf") La Teoría Lingüística de Noam Chomsky: del Inicio a la Actualidad
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="http://www.scielo.org.co/") Scielo Colombia
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=xIBQs1s1VAI&t=44s") [Vídeo] Noam Chomsky language cognition and deep learning (theory of language development)
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    cuestionario: {
      tema: 'Teorías del desarrollo',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Según la teoría del desarrollo de Freud, ¿cómo se denominan las etapas relacionadas con los conflictos internos en el desarrollo psicosexual?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Etapas de aprendizaje significativo',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Etapas psicosexuales', esCorrecta: true },
            {
              id: 'c',
              texto: 'Niveles de desarrollo moral',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Estadios cognitivos', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué concepto clave introdujo Lev Vygotsky en su teoría sociocultural?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desarrollo moral postconvencional',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Zona de desarrollo próximo', esCorrecta: true },
            { id: 'c', texto: 'Condicionamiento operante', esCorrecta: false },
            { id: 'd', texto: 'Autoeficacia', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Según Kohlberg, ¿cuál es el enfoque central de su teoría del desarrollo moral?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La interacción social como base del aprendizaje',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las experiencias tempranas como moldeadoras del comportamiento',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El razonamiento sobre dilemas éticos en distintos niveles',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La relación entre los sistemas ecológicos y el individuo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Según Noam Chomsky, ¿cuál es el concepto que explica la capacidad innata de los seres humanos para adquirir el lenguaje?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Zona de desarrollo próximo', esCorrecta: false },
            { id: 'b', texto: 'Aprendizaje por imitación', esCorrecta: false },
            {
              id: 'c',
              texto: 'Dispositivo de adquisición del lenguaje (LAD)',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Sistemas ecológicos', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'En la teoría del aprendizaje social de Bandura, ¿qué concepto clave describe la creencia de una persona en su capacidad para lograr objetivos?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Autoeficacia', esCorrecta: true },
            { id: 'b', texto: 'Razonamiento moral', esCorrecta: false },
            { id: 'c', texto: 'Zona de desarrollo próximo', esCorrecta: false },
            { id: 'd', texto: 'Etapas psicosexuales', esCorrecta: false },
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
