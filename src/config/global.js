export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Plan de atención integral para la primera infancia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Acciones de salud integral para los niños: plan de vacunación infantil, programa de crecimiento y desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Plan de vacunación infantil',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Programa de crecimiento y desarrollo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Acciones de protección social',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Programa “De Cero a Siempre”',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Atención a la primera infancia',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Programas de Estimulación Temprana',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Organización Panamericana de la Salud. (2025, 14 marzo). OPS/OMS. Salud del niño',
      link: 'https://www.paho.org/es/temas/salud-nino',
    },
    {
      referencia:
        'Ministerio de salud & Ministerio de protección social. (2016). Política de atención integral en salud. MINSALUD.',
      link:
        'https://www.minsalud.gov.co/sites/rid/lists/bibliotecadigital/ride/de/modelo-pais-2016.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s/f.). Atenciones salud y nutrición: Ruta cero a siempre – Unidos.',
      link:
        'https://www.minsalud.gov.co/sites/rid/1/atenciones%20salud%20y%20nutrici%C3%B3n_ruta%20cero%20a%20siempre-Unidos.pdf',
    },
    {
      referencia:
        'Balado Sansón, R. M. (2009). La vacunación en el niño: una vía de protección: (ed.). El Cid Editor | apuntes.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/31297?page=4',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020, octubre 7). Programa Ampliado de Inmunizaciones (PAI).',
      link:
        'https://www.minsalud.gov.co/salud/publica/Vacunacion/paginas/pai.aspx',
    },
    {
      referencia:
        'Minsalud. (2019). Esquema de vacunación de Colombia. Biblioteca digital.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ET/ficha-esquema-vacunacion-vf2.pdf',
    },
    {
      referencia:
        'Minsalud. (2014). Guía de práctica clínica. En Biblioteca Digital (Guía n 24).',
      link:
        'https://minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/gpc-alteraciones-crecimiento-ninos-menores-10-Anos.pdf',
    },
    {
      referencia:
        "Instituto Colombiano de Bienestar Familiar. (2018). Guía para la Implementación Territorial de la Política de Estado para el Desarrollo Integral de la Primera Infancia 'De Cero a Siempre. En ICBF.",
      link: 'https://deceroasiempreterritorial.icbf.gov.co/images/cartilla.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2006). ¿Qué es la atención integral? - Primera infancia.',
      link:
        'https://www.mineducacion.gov.co/primerainfancia/1739/article-177827.html',
    },
    {
      referencia:
        'Puerta, A. R. (2023, 26 mayo). Estimulación temprana. Lifeder.',
      link: 'https://www.lifeder.com/estimulacion-temprana/',
    },
    {
      referencia:
        'Cofrem. (2024). Programas saludables: Estimulación temprana.',
      link:
        'https://www.cofrem.com.co/recreacion-y-deportes/programas-saludables/estimulacion-temprana',
    },
    {
      referencia:
        'Compensar. (2025). Plan de estimulación y desarrollo integral.',
      link:
        'https://www.tiendacompensar.com/bienestar-integral/plan-de-estimulacion-y-desarrollo-integral',
    },
    {
      referencia:
        'Mi Señal. (2021, agosto 3). 22 deportes para niños de 6 a 12 años.',
      link: 'https://www.misenal.tv/noticias/deportes-para-ninos',
    },
    {
      referencia:
        'Unicef. (s/f). Los derechos del niño y por qué son importantes.',
      link:
        'https://www.unicef.org/es/convencion-derechos-nino/por-que-son-importantes',
    },
    {
      referencia:
        'Instituto Colombiano de Bienestar Familiar ICBF. (2017). Derechos y deberes. Portal ICBF.',
      link: 'https://www.icbf.gov.co/publicaciones/derechos-y-deberes',
    },
    {
      referencia: 'Mindeporte. (2021). Haz parte de nuestro portal de niños.',
      link: 'https://www.portalninosmindeporte.gov.co/',
    },
    {
      referencia: 'Comfenalco Antioquia. (2025). Deportes.',
      link:
        'https://www.comfenalcoantioquia.com.co/personas/servicios/recreacion/deportes',
    },
    {
      referencia: 'Inder. (2025). Primera infancia: 0 a 5 años.',
      link:
        'https://www.inder.gov.co/programas-institucionales/primera-infancia-0-a-5-anos/',
    },
    {
      referencia:
        'Tecplay. (2025, 9 enero). El Impacto del Deporte en la Inclusión de Personas con Discapacidad. Fundación CREINSER.',
      link:
        'https://fundacioncreinser.com/impacto-deporte-inclusion-discapacidad/',
    },
    {
      referencia:
        'Instituto Colombiano de Bienestar Familiar ICBF. (2018). Programas y estrategias. Portal ICBF -.',
      link: 'https://www.icbf.gov.co/bienestar',
    },
    {
      referencia:
        'ICBF lanza estrategia nacional para fortalecer la prevención y erradicación del trabajo infantil. (2021, 16 julio). Portal ICBF - Instituto Colombiano de Bienestar Familiar ICBF.',
      link:
        'https://www.icbf.gov.co/noticias/icbf-lanza-estrategia-nacional-para-fortalecer-la-prevencion-y-erradicacion-del-trabajo',
    },
    {
      referencia:
        'Instituto Colombiano de Bienestar Familiar ICBF. (2018). Proceso administrativo de restablecimiento de derechos. Portal ICBF -',
      link:
        'https://www.icbf.gov.co/programas-y-estrategias/proteccion/proceso-administrativo-de-restablecimiento-de-derechos-1b312af4-cf5f-415f-b853-133f7f643711',
    },
    {
      referencia:
        'Secretaría de Educación de Medellín, (2023, 19 octubre). Entorno Escolar Protector, una estrategia de atención y prevención - Secretaría de Educación. Secretaría de Educación.',
      link:
        'https://www.medellin.edu.co/entorno-escolar-protector-una-estrategia-de-atencion-y-prevencion/',
    },
  ],
  glosario: [
    {
      termino: 'Crianza',
      significado:
        'Conjunto de prácticas y cuidados que los padres o cuidadores ofrecen a los niños para garantizar su desarrollo físico, emocional y social en un entorno seguro y protector.',
    },
    {
      termino: 'Desarrollo',
      significado:
        'Proceso de crecimiento y cambio físico, cognitivo, emocional y social que los niños experimentan desde el nacimiento hasta la adolescencia, influido por factores biológicos, sociales y culturales.',
    },
    {
      termino: 'Derechos',
      significado:
        'Conjunto de principios y normas legales que garantizan el bienestar, la protección y el acceso a oportunidades equitativas para niños y niñas.',
    },
    {
      termino: 'Educación',
      significado:
        'Proceso sistemático de enseñanza y aprendizaje destinado a formar capacidades cognitivas, emocionales y sociales, especialmente desde la primera infancia.',
    },
    {
      termino: 'Estímulo',
      significado:
        'Acciones o actividades diseñadas para potenciar las habilidades motoras, cognitivas, sociales y emocionales de los niños mediante el juego, la interacción y el aprendizaje.',
    },
    {
      termino: 'Interinstitucional',
      significado:
        'Colaboración entre diversas entidades y organizaciones (gubernamentales, no gubernamentales y civiles) con el fin de garantizar la protección integral de los derechos de los niños.',
    },
    {
      termino: 'Prevención',
      significado:
        'Estrategias y programas destinados a evitar riesgos que puedan afectar el bienestar y desarrollo de los niños, como el trabajo infantil, el abandono escolar o el maltrato.',
    },
    {
      termino: 'Protección',
      significado:
        'Acciones y políticas que buscan garantizar la seguridad, el cuidado y el bienestar de los niños en entornos libres de violencia y riesgos.',
    },
    {
      termino: 'Restablecimiento',
      significado:
        'Proceso administrativo y judicial llevado a cabo por instituciones como el ICBF para garantizar que los derechos vulnerados de los niños sean restaurados.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Situaciones o condiciones que ponen en riesgo el bienestar, desarrollo o derechos de los niños, como la pobreza, la violencia o el abandono.',
    },
  ],
}
