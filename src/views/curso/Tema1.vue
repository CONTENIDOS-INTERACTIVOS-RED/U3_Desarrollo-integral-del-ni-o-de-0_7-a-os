<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Teoría del desarrollo de Sigmund Freud'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Según <b>Corral Íñigo (2013)</b>, la psicología evolutiva estudia cómo cambian y se desarrollan las personas a lo largo de su vida. Esta disciplina analiza tanto el desarrollo individual desde el nacimiento (ontogenético) como la evolución de la especie (filogenético). Por ejemplo, mientras un niño aprende a hablar, la psicología evolutiva explora tanto cómo surge esa capacidad en la humanidad como cómo se manifiesta en ese niño específico.
        .d-flex.align-items-start.bg-rosa.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-3.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Aunque es una disciplina joven, ha crecido rápidamente. A diferencia de otras áreas de la psicología, siempre mantiene una perspectiva de cambio a lo largo del tiempo. Por ejemplo, la psicología social analiza la influencia entre personas en un momento dado, mientras que la psicología evolutiva estudia cómo esas influencias cambian con la edad. También se nutre de otras disciplinas como la filosofía, biología y, especialmente, el psicoanálisis, que aporta ideas sobre cómo las experiencias tempranas afectan el desarrollo posterior.
        span Un ejemplo sería estudiar cómo el apego infantil influye en las relaciones adultas, considerando conceptos como el complejo de Edipo o la teoría del apego (Corral Íñigo, 2013).
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
    
    h2 Fundamentos de la teoría de Freud
    p.mb-4 García Trejos (2020) retoma el pensamiento freudiano indicando que los terapeutas de la escuela psicoanalítica ven a los niños como seres sexuales en potencia, y que las formas en que estos impulsos se manifiestan en la adultez están condicionadas por cómo fueron vividos en la infancia. Freud formuló su teoría en la época victoriana, un periodo caracterizado por la represión sexual. Sus dos pilares fundamentales son:
    .row.mb-4
      .col-12.col-xl-6
        .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-5.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-3.text-bold Primero
            span  Desarrollo de la personalidad	
      .col-12.col-xl-6
        .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-6.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-3.text-bold Segundo
            span Etapas del desarrollo psicosexual	
    h2 La libido como energía vital

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-morado.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Según <b>Triglia (2016)</b>, Freud considera que la libido es la energía vital que impulsa al ser humano. Esta energía aparece desde las primeras semanas de vida y va más allá de la función sexual reproductiva: abarca todas las motivaciones que tienden a ser reprimidas por razones sociales o morales. La represión de la libido influye directamente en el desarrollo de la personalidad.
    
    h2 Etapas del desarrollo psicosexual

    p.mb-4 Las etapas del desarrollo psicosexual son cinco y cada una está asociada a una zona de gratificación distinta. El manejo de estas fases determina aspectos clave de la personalidad.
    p.mb-3 <b>Tabla 1.</b> Etapas del desarrollo psicosexual según Freud

    .tabla-a
      table
        thead
          tr
            th(width="10%").bg-morado-oscuro.text-bold Etapa
            th(width="25%").bg-morado-oscuro.text-bold Edad aproximada
            th(width="20%").bg-morado-oscuro.text-bold Zona erógena
            th(width="45%").bg-morado-oscuro.text-bold Características principales
        tbody
          tr
            td.text-bold Oral
            td 0 – 18 meses
            td Boca
            td Gratificación por succión; dependencia total; si hay privación, puede generar fijaciones como fumar o comer en exceso.
          tr
            td.text-bold Anal
            td 1 – 3 años
            td Control de esfínteres
            td El placer se halla en la expulsión/retención; relacionada con la autonomía y la disciplina; fijaciones: orden o desorden.
          tr
            td.text-bold Fálica
            td 3 – 6 años
            td Genitales
            td Aparece el complejo de Edipo/Electra, y se exploran las diferencias de género.
          tr
            td.text-bold Latencia
            td 6 – 11 años
            td -
            td La libido se reprime; se desarrollan habilidades sociales, el superyó, y el sentido moral.
          tr
            td.text-bold Genital
            td Desde los 11 años en adelante
            td Genitales
            td Sexualidad adulta; relaciones afectivas maduras; consolidación de la identidad sexual y social.

    h2 Complejo de Edipo y Electra
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Durante la etapa fálica, Freud plantea que los niños varones desarrollan el <b>complejo de Edipo</b>, sintiendo atracción inconsciente hacia su madre y rivalidad con su padre. Este conflicto se resuelve al identificarse con el progenitor del mismo sexo. En el caso de las niñas, <b>Jung</b> propone el <b>complejo de Electra</b>, donde la atracción se dirige al padre y la rivalidad a la madre.
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-9.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Sin embargo, Freud no adoptó plenamente esta visión femenina, introduciendo en su lugar la polémica idea de la "envidia del pene", ampliamente criticada posteriormente.
    
    h2 Etapa de latencia y consolidación del superyó
    p.mb-4 Durante la etapa de <b>latencia</b>, la energía sexual se reprime. El niño se enfoca en lo académico y social, y empieza a internalizar normas, lo que da lugar al desarrollo del <b>superyó</b>, instancia que junto al ello y el yo, constituye la estructura de la mente según Freud.
    .row.mb-4
      .col-12.col-xl-6
        .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-10.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-3.text-bold Ideal del Yo	
            span Representa aspiraciones, ideales y metas del individuo.
      .col-12.col-xl-6
        .d-flex.align-items-start.bg-verde.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-11.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-3.text-bold Conciencia moral	
            span Permite distinguir entre el bien y el mal; genera sentimientos como culpa, orgullo o vergüenza.

    p.mb-4 Castellanos Urrego (2013) señala que esta etapa permite al niño consolidar su identidad moral mediante procesos como:

    .row.mb-4.bg-rosa.px-4.py-4.py-xl-0
      .col-12.col-xl-8.d-flex
        .my-auto
          p.mb-4 <br>●	Identificación con el progenitor del mismo sexo.<br>●	Socialización escolar y normas culturales.<br>●	Represión voluntaria de los impulsos del ello.
          span El resultado es un mayor autocontrol y la base para una vida en sociedad ética y equilibrada.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
    
    h2 La etapa genital: madurez sexual y emocional

    .row.bg-fondo-2.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8
            p.mb-4 Esta etapa inicia con la pubertad y se prolonga durante la adolescencia. La energía sexual regresa con fuerza, centrada nuevamente en los genitales, pero ahora acompañada por una capacidad de establecer relaciones afectivas maduras, basadas en el consenso, el apego y el compromiso emocional.
            .bg-amarillo.p-4(data-aos='fade-up').mb-4
              span A diferencia de la etapa fálica, donde los vínculos estaban marcados por el deseo y la curiosidad, la etapa genital implica la integración de lo emocional, lo simbólico y lo social en la expresión sexual.
            span Como expresa <b>García Trejos (2020)</b>, la teoría psicosexual de Freud ofrece una visión profunda del desarrollo humano, aunque debe analizarse en su contexto histórico. Sus conceptos siguen siendo objeto de debate, revisión y reinterpretación. Hoy en día, la psicología contemporánea enfatiza también los factores <b>sociales, culturales y biológicos</b> en la construcción de la identidad, lo que complementa —y en algunos casos cuestiona— la propuesta original del psicoanálisis.

        .row.mb-4
          .col-10.col-xl-8.mx-auto
            .bg-white.rounded.shadow.p-3.py-lg-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-4.col-sm-3.col-lg-2
                  img(src="@/assets/componentes/video-icon-circle.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.text-bold.mb-3 Etapas del desarrollo psicosexual de Freud
                      p.text-small En el siguiente vídeo podrán clarificar dudas con respecto al tema aquí expuesto.
                    .col-sm-auto
                      a.download-btn.px-3.py-2.bg-morado(href="https://www.youtube.com/watch?v=OVDr31_rWqw" target="_blank")
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
                      p.text-bold.mb-3 Sexualidad infantil en la teoría de Freud
                      p.text-small También les dejamos la siguiente tesis donde pueden revisar la página 12 que habla de la sexualidad infantil.
                    .col-sm-auto
                      a.download-btn.px-3.py-2.bg-morado(href="https://repository.unab.edu.co/handle/20.500.12749/15817" target="_blank")
                        span.text-small Ir al sitio
                        i.fas.fa-arrow-right

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://repository.unab.edu.co/bitstream/handle/20.500.12749/15817/2001_Tesis_Lis_Edith_P%C3%A9rez_Colmenares.pdf?sequence=1") Revisión documental sobre la evolución de la teoría sexual en la obra de Sigmund Freud
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://repository.unab.edu.co/") Repositorio Universidad Autónoma de Bucaramanga
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=OVDr31_rWqw") [Vídeo] Las 5 etapas del desarrollo psicosexual de Freud
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')



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
