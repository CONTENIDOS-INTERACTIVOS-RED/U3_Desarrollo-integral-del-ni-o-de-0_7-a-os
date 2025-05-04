<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Teoría de la visión sistémica de Chomsky.'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row
            .col-12.col-xl-10
              span Noam Chomsky (Filadelfia, 1928), lingüista, filósofo y activista, es una de las figuras más influyentes del siglo XX. Doctor en Lingüística por la Universidad de Pensilvania, desarrolló su carrera en el MIT y actualmente enseña en la Universidad de Arizona. A pesar de no ser psicólogo, sus ideas han dejado una huella profunda en la psicología cognitiva y la lingüística moderna. (Pérez y Jiménez, 2023) Su impacto se concentra en dos grandes áreas, como se muestra a continuación:
            .col-2.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
            
          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-34.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Lingüística
                p.px-1.text-small.mb-0.d-flex.text-center Teoría de la gramática generativa y el concepto de gramática universal, revolucionando el estudio del lenguaje.
            .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-35.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Psicología cognitiva
                p.px-1.text-small.mb-0.d-flex.text-center Explicación del lenguaje como capacidad mental innata, considerando factores biológicos, sociales y culturales.
      
      h2 Enfoque sistémico-ecológico del lenguaje
      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-morado.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-37.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 El enfoque sistémico-ecológico de Chomsky, según Restrepo (2022), considera que el lenguaje humano es un sistema complejo que surge de la interacción entre componentes biológicos, culturales y ecológicos. Este modelo rechaza la idea de estudiar el lenguaje como un fenómeno aislado, proponiendo en su lugar una visión integradora del desarrollo lingüístico.
          span Para ilustrar esta idea, Martínez del Castillo (2013) ofrece una metáfora didáctica: con un número limitado de bloques de construcción (herramientas mentales), podemos generar infinitas combinaciones. Así funciona el lenguaje: con pocas estructuras mentales, los seres humanos construyen un número ilimitado de oraciones. Esta es la base del concepto de infinitud del lenguaje. Chomsky sostiene que el lenguaje es parte del cerebro, como un órgano especializado que “emerge” naturalmente, al igual que el vapor surge del agua. Por lo tanto, estudiar el lenguaje es estudiar una parte estructural de la mente humana.
      h2 Sistemas interconectados que explican el lenguaje
      p.mb-4 La teoría sistémica-ecológica se estructura en torno a tres grandes sistemas que interactúan en la adquisición y uso del lenguaje. A continuación, se presenta  la síntesis de sus componentes y funciones:
      
      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          .row.mb-4
            .col-12.col-lg-7.col-xl-8
              AcordionA(tipo="b")
                .div(titulo="Biológico")(data-aos="fade-up") 
                  p Propone un Dispositivo de Adquisición del Lenguaje (LAD) y una gramática universal como bases innatas del aprendizaje lingüístico. <br><b>Ejemplo:</b> Un niño japonés y uno inglés adquieren sus lenguas maternas con igual facilidad, gracias a esta capacidad innata.
                .div(titulo="Cultural y social")(data-aos="fade-up")
                  p El lenguaje se desarrolla en <b>interacción con otros;</b> las dinámicas culturales determinan qué aspectos del lenguaje se priorizan. <br><b>Ejemplo:</b> En culturas con tradición oral, los niños desarrollan habilidades narrativas complejas.

                .div(titulo="Ecológico")(data-aos="fade-up")
                  p El lenguaje <b>refleja y se adapta</b> al entorno físico y social de una comunidad, evolucionando con él. <br><b>Ejemplo:</b> Las lenguas inuit tienen múltiples palabras para describir distintos tipos de nieve, adaptándose a su entorno ártico.

            .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

          h2 Fundamentos conceptuales de su teoría lingüística
          p.mb-4 Chomsky introdujo conceptos clave que explican cómo el ser humano es capaz de adquirir lenguaje rápidamente y con escasa instrucción formal. A continuación, se presentan los principales fundamentos teóricos de su propuesta:
          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-39.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Gramática generativa
                p.px-1.text-small.mb-0.d-flex.text-center Reglas mentales que permiten generar oraciones ilimitadas en una lengua.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-40.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Gramática universal
                p.px-1.text-small.mb-0.d-flex.text-center Principios estructurales comunes a todas las lenguas humanas.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-41.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Lenguaje como órgano mental
                p.px-1.text-small.mb-0.d-flex.text-center El lenguaje es una capacidad biológica, no solo un producto cultural ni resultado de la imitación.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-42.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Lenguaje como emergencia
                p.px-1.text-small.mb-0.d-flex.text-center El lenguaje "emerge" del cerebro, como propiedad natural, reflejo del diseño innato del sistema nervioso.

      h2 Aplicaciones en diversos campos
      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 La teoría de Chomsky ha influido profundamente en la inteligencia artificial, la psicología cognitiva y la educación. A continuación, se resumen sus aportes en cada uno de estos ámbitos:
          p.mb-4.text-bold Aplicaciones en inteligencia artificial y procesamiento del lenguaje natural (PLN)
          span El impacto de la teoría de Chomsky se ha extendido al ámbito de la inteligencia artificial y el procesamiento del lenguaje natural (PLN). La idea de que el lenguaje posee una estructura jerárquica, gobernada por reglas internas, ha permitido diseñar sistemas computacionales capaces de comprender y generar lenguaje humano. A partir de la gramática generativa, se han desarrollado herramientas que simulan la comunicación, mejorando la interacción entre humanos y máquinas. A continuación, se describen algunas aplicaciones clave:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Algoritmos de PLN', :icon="require('@/assets/curso/unidad/img-44.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-45.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Algoritmos de PLN
              p(data-aos='fade-up') <i>Chatbots</i> y asistentes virtuales como Siri o Alexa.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Modelos lingüísticos', :icon="require('@/assets/curso/unidad/img-44.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-46.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Modelos lingüísticos
              p(data-aos='fade-up') Traductores automáticos como Google Translate.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Reconocimiento del habla', :icon="require('@/assets/curso/unidad/img-44.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-47.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Reconocimiento del habla
              p(data-aos='fade-up') Sistemas que convierten voz en texto y generan respuestas coherentes.

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4.text-bold Aplicaciones en psicología cognitiva y desarrollo infantil
          span En el campo de la psicología cognitiva, Chomsky ha sido una figura clave para replantear cómo se entiende la mente humana. Su visión de que el lenguaje está profundamente enraizado en la biología cerebral ha influido en estudios sobre el desarrollo infantil, las etapas críticas del aprendizaje lingüístico y la localización de funciones cognitivas. Esta teoría ha permitido comprender cómo se forma el lenguaje en el cerebro y cómo puede verse afectado por daños neurológicos. A continuación, se detallan sus principales aportes en este campo:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
      
      .row.bg-fondo-2.bg-full-width.py-4.mb-0
        div.px-5.pb-md-3

          .row.mb-4
            .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
            .col-12.col-lg-7.col-xl-8
              AcordionA(tipo="b")
                .div(titulo="Estructuras mentales innatas")(data-aos="fade-up")
                  p El lenguaje está enraizado en estructuras cerebrales específicas (como el área de Broca).
                .div(titulo="Ventanas críticas del lenguaje")(data-aos="fade-up")
                  p Períodos óptimos en la infancia donde el cerebro es más receptivo al lenguaje.
                .div(titulo="Neurolingüística")(data-aos="fade-up")
                  p Estudio del impacto de lesiones cerebrales en el lenguaje y su procesamiento cerebral.

          p.text-bold.mb-4 Aplicaciones en educación y enseñanza de idiomas
          p.mb-4 En el ámbito educativo, las ideas de Chomsky han tenido un papel fundamental en el diseño de metodologías para la enseñanza de lenguas. Su distinción entre competencia (conocimiento interno de las reglas) y desempeño (uso efectivo del lenguaje) ha reformulado la manera en que se enseña la gramática y se desarrolla la comprensión lingüística. Estas ideas han inspirado enfoques que privilegian la exposición, el análisis estructural y la intuición gramatical sobre la memorización mecánica. A continuación, se resumen los conceptos aplicados y su impacto en la enseñanza:

          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-50.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Competencia vs desempeño lingüístico
                p.px-1.text-small.mb-0.d-flex.text-center Distingue entre el conocimiento implícito de reglas gramaticales y su uso práctico.
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-51.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Aprendizaje inductivo
                p.px-1.text-small.mb-0.d-flex.text-center Métodos que promueven la exposición a patrones para que los estudiantes los internalicen de forma natural.
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-52.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Análisis contrastivo
                p.px-1.text-small.mb-0.d-flex.text-center Identificación de similitudes estructurales entre lenguas para facilitar la enseñanza basada en la gramática universal.

          .row.mb-4
            .col-10.col-xl-8.mx-auto
              .bg-white.rounded.shadow.p-3.py-lg-4.px-lg-5
                .row.justify-content-around.align-items-center
                  .col-4.col-sm-3.col-lg-2
                    img(src="@/assets/componentes/link-icon-circle.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.text-bold.mb-3 Teoría Lingüística de Noam Chomsky
                        p.text-small Para finalizar, los invitamos a leer la siguiente investigación:
                      .col-sm-auto
                        a.download-btn.px-3.py-2.bg-morado(href="http://www.scielo.org.co/pdf/leng/v42n2/v42n2a08.pdf" target="_blank")
                          span.text-small Ir al sitio
                          i.fas.fa-arrow-right
      .row.bg-verde.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Teoría del aprendizaje social de Bandura
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Teoría del aprendizaje social de Bandura , donde se presenta el enfoque del psicólogo Albert Bandura sobre cómo las personas adquieren conductas mediante la observación de modelos en su entorno social.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Teoría del aprendizaje social de Bandura
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
  
      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://ciencialatina.org/index.php/cienciala/article/download/3365/5114") Aplicación de un Programa de Inteligencia emocional y desarrollo moral en los niños y niñas de educación primaria
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://ciencialatina.org/") Ciencia Latina Revista Científica Multidisciplinar
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=eWoP3OHqzF8") [Vídeo] Las 6 Etapas del Desarrollo Moral de Kohlberg
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
