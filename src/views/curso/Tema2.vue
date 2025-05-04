<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Modelo sociocultural Lev Vygotsky.'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Según Carrera y Mazzarella (2001), el interés por la obra de Lev Vygotsky ha aumentado notablemente en el campo de la psicología y la educación. Su enfoque histórico y filosófico, sustentado en el materialismo histórico-dialéctico, permitió el desarrollo de un nuevo sistema psicológico en el cual la educación es parte fundamental del desarrollo psicológico.
          .d-flex.align-items-start.bg-rosa.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-15.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Vygotsky planteó que el desarrollo humano debe entenderse en contexto social y cultural. En su teoría, <b>la pedagogía se convierte en el eje central</b>, ya que el aprendizaje en interacción con otros es el motor del desarrollo cognitivo.


      .row.bg-fondo-2.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          h2 Funciones mentales y rol del lenguaje
          p.mb-4 García Trejos (2020) explica que Vygotsky diferenciaba entre:
          .row.mb-4
            .col-12.col-xl-6
              .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-16.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-3.text-bold Funciones mentales elementales
                  span Comunes entre humanos y animales (e.g., percepción, atención involuntaria).
            .col-12.col-xl-6
              .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-17.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-3.text-bold Funciones mentales superiores	
                  span Exclusivas del ser humano, se desarrollan mediante la interacción social y el lenguaje.
          p.mb-4 El <b>lenguaje</b> ocupa un lugar central, no solo como medio de comunicación, sino como <b>herramienta mediadora del pensamiento</b> y la transmisión cultural. Vygotsky propone que pensamiento y lenguaje tienen orígenes diferentes, pero se unifican en el desarrollo del niño, transformando el lenguaje en pensamiento racional.
          h2 Herramientas y signos como mediadores
          p.mb-4 Vygotsky distingue entre:

          .row.mb-4
            .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Herramientas <i>(tools)</i>	
                  p.text-small.px-4.text-center.pb-2 Orientadas externamente, modifican objetos del entorno físico (e.g., un martillo, una calculadora).
            .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Signos <i>(signs)</i>	
                  p.text-small.px-4.text-center.pb-2 Orientación interna, modifican procesos mentales (e.g., el lenguaje, los números, los símbolos culturales).

      p.mb-4 Ambos son fundamentales para comprender cómo el ser humano transforma su realidad y su propia mente. Por ejemplo, el lenguaje actúa como mediador cuando un adulto ayuda a un niño a comprender el equilibrio construyendo una torre de bloques. El niño interioriza conceptos abstractos como "grande", "pequeño" o "estable", gracias a la mediación verbal.
      h2 Desarrollo del lenguaje infantil
      p.mb-4 García Trejos (2020) identifica tres formas progresivas de lenguaje en el niño:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Habla social
                p Desde los 3 años. Se usa para comunicarse con otros y controlar su conducta. Es clave para la socialización y las interacciones.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Habla egocéntrica
                p 3 a 7 años. El niño se habla a sí mismo para guiar sus acciones. No busca comunicación, pero regula la conducta.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Habla interna
                p A partir de los 7 años. Silenciosa y mental. Permite el pensamiento abstracto, la reflexión y la autorregulación cognitiva.

      p.mb-4 Estas formas no son independientes, sino etapas de un proceso evolutivo. El lenguaje <b>se interioriza</b>, transformándose en una herramienta cognitiva esencial para la resolución de problemas.
      h2 Métodos de análisis genético
      p.mb-4 Vygotsky propone que para comprender los procesos psicológicos es necesario analizar su <b>origen y evolución</b>. De allí surgen cuatro niveles de análisis, conocidos como su método genético:
      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-23.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='20%' y='20%' numero='+')
          .h5.mb-2 01. Filogenético
          p Desarrollo de la especie humana y de las funciones psicológicas superiores.
        .tarjeta.bg-white.p-4(x='67%' y='20%' numero='+')
          .h5.mb-2 02. Histórico-sociocultural
          p Desarrollo de sistemas artificiales (como el lenguaje o las normas sociales) que regulan el comportamiento.
        .tarjeta.bg-white.p-4(x='67%' y='76%' numero='+')
          .h5.mb-2 03. Ontogenético
          p Desarrollo individual: interacción entre biología y cultura en el ciclo vital.
        .tarjeta.bg-white.p-4(x='20%' y='76%' numero='+')
          .h5.mb-2 04. Microgenético
          p Cambios en procesos psicológicos específicos observados en tiempo real (in vivo).
      
      h2 Pensamiento y lenguaje: dos trayectorias que convergen
      p.mb-4 Según <b>Carrera y Mazzarella (2001):</b> 

      .row.mb-4.bg-verde-claro.px-4.py-4.py-xl-0
        .col-12.col-xl-8.d-flex
          .my-auto
            p.mb-0 ●	El pensamiento y el lenguaje tienen orígenes distintos.<br><br>●	El niño pasa por una etapa preintelectual del lenguaje y una prelingüística del pensamiento.<br><br>●	Eventualmente, ambas líneas se integran, dando lugar al pensamiento verbal, donde la palabra adquiere un significado interno que refleja el razonamiento.

        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')

      .row.bg-fondo-2.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          p.mb-4 Este proceso evidencia cómo <b>el lenguaje estructura el pensamiento</b>, transformando la experiencia en conocimiento.
          h2 Aprendizaje, desarrollo y la Zona de Desarrollo Próximo (ZDP)
          p.mb-4 Para Vygotsky, el <b>aprendizaje impulsa el desarrollo</b>. A partir de esta idea, introduce dos niveles evolutivos:

          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Real
                p.px-1.text-small.mb-0.d-flex.text-center Funciones y habilidades que el niño ya domina y puede ejecutar de forma independiente.
            .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Potencial
                p.px-1.text-small.mb-0.d-flex.text-center Habilidades en proceso de maduración que el niño puede desarrollar con ayuda de un adulto o compañero más capaz.

          .row.mb-4
            .col-12.col-xl-8
              p.mb-4 La diferencia entre ambos niveles da lugar al concepto de: <b>Zona de Desarrollo Próximo (ZDP)</b> “Distancia entre el nivel real de desarrollo (lo que el niño puede hacer solo) y el nivel potencial (lo que puede hacer con ayuda).”
              .bg-verde.p-4(data-aos='fade-up')
                span Este concepto destaca la importancia de <b>la interacción social y el <i>andamiaje</i></b> (apoyo temporal) como facilitadores del aprendizaje. <b>Carrera y Mazzarella (2001)</b> señalan que los educadores deben identificar estas zonas para intervenir eficazmente y potenciar el desarrollo.
            .col-4.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
          h2 Ley de la doble formación
          p.mb-4 Vygotsky formuló esta ley para explicar cómo se desarrollan las funciones psicológicas superiores:
          .row.mb-4
            .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Interpsicológico (social)	
                  p.text-small.px-4.text-center.pb-2 Las habilidades aparecen primero en la interacción con otros (padres, docentes, compañeros).
            .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Intrapsicológico (psicológico)
                  p.text-small.px-4.text-center.pb-2 Estas habilidades son internalizadas y se convierten en funciones cognitivas propias del niño.

      .d-flex.align-items-start.bg-amarillo-oscuro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-30.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Este proceso de <b>internalización</b> convierte las herramientas culturales en parte del repertorio mental del individuo. El aprendizaje, por tanto, <b>no es solo adquisición de conocimientos</b>, sino transformación del pensamiento.

      h2 Ejemplo aplicado: la ZDP en acción
      p.mb-4 Un niño intenta resolver un rompecabezas. Con la ayuda de un adulto que le sugiere “busca las piezas con bordes”, logra completar el desafío. Al repetir la actividad, internaliza la estrategia y puede usarla de manera independiente en futuras ocasiones. Este ejemplo muestra cómo el <b>aprendizaje mediado</b> dentro de la ZDP permite que el niño <b>avance en su desarrollo cognitivo.</b>

      .row.bg-fondo-2.bg-full-width.py-4
        div.px-5.pb-md-3

          .row.bg-verde.bg-full-width.px-4.py-4.py-xl-0.mb-4
            .col-12.col-xl-8.d-flex
              .my-auto
                p.mb-4 La teoría sociocultural de Lev Vygotsky nos muestra que:
                p.mb-0 ●	El desarrollo psicológico está condicionado por factores <b>históricos, sociales y culturales</b>.<br>●	El <b>lenguaje</b> es una herramienta mediatizadora del pensamiento.<br>●	La <b>interacción social</b> y el contexto son fundamentales en el aprendizaje.<br>●	La <b>Zona de Desarrollo Próximo</b> permite entender cómo se produce el cambio cognitivo y cómo puede ser guiado estratégicamente.

            .col-4.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

          p.mb-4 Esta visión ha influido profundamente en la educación contemporánea y sigue vigente como marco teórico para comprender la relación entre enseñanza, cultura y desarrollo.

          .row.mb-4
            .col-10.col-xl-8.mx-auto
              .bg-white.rounded.shadow.p-3.py-lg-4.px-lg-5
                .row.justify-content-around.align-items-center
                  .col-4.col-sm-3.col-lg-2
                    img(src="@/assets/componentes/video-icon-circle.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.text-bold.mb-3 Desarrollo cognitivo desde la perspectiva de Vygotsky 
                        p.text-small A continuación, les compartimos el siguiente video, donde explican el desarrollo cognitivo desde la perspectiva de Vygotsky:
                      .col-sm-auto
                        a.download-btn.px-3.py-2.bg-morado(href="https://www.youtube.com/watch?v=fHdQWmbhfdE" target="_blank")
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
                        p.text-bold.mb-3 Implementación de la teoría de Vygotsky en básica primaria
                        p.text-small También les compartimos la implementación de esta teoría en básica primaria:
                      .col-sm-auto
                        a.download-btn.px-3.py-2.bg-morado(href="http://repositoriodspace.unipamplona.edu.co/jspui/bitstream/20.500.12744/5078/1/Osorio_2021_TG.pdf" target="_blank")
                          span.text-small Ir al sitio
                          i.fas.fa-arrow-right

      .row.bg-verde.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Teoría del desarrollo moral
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Teoría del desarrollo moral , donde se aborda el enfoque de Lawrence Kohlberg sobre cómo las personas desarrollan su capacidad para razonar sobre dilemas éticos a lo largo de la vida. Este documento ofrece explicaciones detalladas, análisis comparativos entre autores como Piaget y Kohlberg, y ejemplos ilustrativos de cada etapa del desarrollo moral, con el fin de comprender la evolución del juicio moral desde la niñez hasta la adultez. 
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Teoría del desarrollo moral

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="http://repositoriodspace.unipamplona.edu.co/jspui/bitstream/20.500.12744/5078/1/Osorio_2021_TG.pdf") Implementación de una estrategia Webquest con base en la teoría de Lev S. Vygotsky para la producción de textos escritos
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="http://repositoriodspace.unipamplona.edu.co/") Repositorio Universidad de Pamplona
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=fHdQWmbhfdE") [Vídeo] La Teoría del Desarrollo Cognitivo a Través de las Relaciones Sociales de Vygotsky
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
