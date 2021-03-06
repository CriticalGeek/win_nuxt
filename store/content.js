export const state = () => ({
    "fab": "¡Actívate!",

    "navbar": {
      "logo": require("~/assets/img/WIN_logo_white.png"),
      "action": "INICIAR SESIÓN",
      "actionURL": "/login",
      "menuIcon": "/img/menu-icon.svg"
    },

    "menu": {
      "links": [{
          "name": "Inicio",
          "url": "/"
        },
        {
          "name": "Plan de compensación",
          "url": "/compensacion"
        },
        {
          "name": "Noticias",
          "url": "/noticias"
        },
        {
          "name": "Embajadores",
          "url": "/embajadores"
        },
        {
          "name": "Recursos",
          "url": "/recursos"
        },
        {
          "name": "Contacto",
          "url": "/contacto"
        }
      ],
      "social": [{
          "icon": require("~/assets/img/social_icons/facebook.svg"),
          "url": "https://www.facebook.com/WIN.WeenjoyIntelligentNetwork"
        },
        {
          "icon": require("~/assets/img/social_icons/twitter.svg"),
          "url": "https://twitter.com/WINWeenjoy"
        },
        {
          "icon": require("~/assets/img/social_icons/weenjoy.svg"),
          "url": "https://www.weenjoy.com/"
        }
      ]
    },

    "footer": {
      "links": [{
          "name": "Sitio Weenjoy",
          "url": "https://www.weenjoy.com/"
        },
        {
          "name": "Politicas de Privacidad",
          "url": "http://partners.weenjoy.com/politicas/aviso_privacidad.html"
        },
        {
          "name": "Mapa de Sitio",
          "url": "/mapa"
        },
        {
          "name": "Ayuda y FAQS",
          "url": "/recursos#faqs"
        }
      ],
      "logo": require("~/assets/img/WIN_logo_white.png"),
      "social": [{
          "icon": require("~/assets/img/social_icons/facebook.svg"),
          "url": "https://www.facebook.com/WIN.WeenjoyIntelligentNetwork"
        },
        {
          "icon": require("~/assets/img/social_icons/twitter.svg"),
          "url": "https://twitter.com/WINWeenjoy"
        },
        {
          "icon": require("~/assets/img/social_icons/weenjoy.svg"),
          "url": "https://www.weenjoy.com/"
        }
      ],
      "rights": "©/WIN, Weenjoy Intelligent Network S.C. - 2019 Todos los derechos reservados"
    },

    "form": {
      "title": "Forma parte de WIN",
      "subtitle": "También puedes enviarnos un mensaje por este medio. ¡Nos dará gusto leerte!",
      "fields": [{
          "label": "Nombre"
        },
        {
          "label": "Teléfono"
        },
        {
          "label": "Correo electrónico"
        },
        {
          "label": "Escribe tu mensaje aqui..."
        }
      ],
      "action": "ENVIAR"
    },

    "home": {
      "hero": {
        "title": `<h1 data-aos="fade-up">¡Bienvenido a WIN!</h1>`,
        "content": `
          <p>
            <em data-aos="fade-up" data-aos-delay="600">Diseñado a tu medida.</em>
            <span data-aos="fade" data-aos-delay="3000">Conoce nuestro plan 6x3 que es un innovador </span>
            <em data-aos="fade-up" data-aos-delay="1200">modelo de apalancamiento en red.</em></p>
          <p>
            <span data-aos="fade" data-aos-delay="3000">¡Afilia a Personas y Negocios para impulsar tu economía! Vincula Negocios en Weenjoy y</span>
            <em data-aos="fade-up" data-aos-delay="1800">genera ingresos adicionales</em>
            <span data-aos="fade" data-aos-delay="3000">de manera fácil, rápida y segura.</span></p>`,
        "background": require("~/assets/img/hero_01.png")
      },
      "section1": {
        "circles": [{
            "img": require("~/assets/img/circles_01.jpg")
          },
          {
            "img": require("~/assets/img/circles_02.jpg")
          },
          {
            "img": require("~/assets/img/circles_03.jpg")
          },
          {
            "img": require("~/assets/img/circles_04.jpg")
          },
          {
            "img": require("~/assets/img/circles_05.jpg")
          },
          {
            "img": require("~/assets/img/circles_06.jpg")
          },
          {
            "img": require("~/assets/img/circles_07.jpg")
          }
        ],
        "title": "¿Cuántas vidas quieres cambiar hoy?",
        "subtitle": "Estás en el lugar adecuado.",
        "content": "WIN es el Sistema de Vinculación de Negocios a Weenjoy, basado en un exitoso modelo de apalancamiento en red, donde obtienes ganancias residuales y exponenciales por apalancarte en otros Joyners como tú, para que, en conjunto, inviten a Negocios a esta gran comunidad.",
        "texture": require("~/assets/img/textures/fondo_01.svg")
      },
      "section2": {
        "title": "WIN",
        "subtitle": "SUCCESS STORIES",
        "background": require("~/assets/img/success_background.jpg"),
        "content": `
          <p>¡Conoce a los Joyners que están cambiando al mundo!</p> <br>
          <p>Trabajamos con personas que se atreven a cambiar el rumbo de la economía en su Comunidad.</p> <br>
          <p>Tú como ellos puedes tener un plan de compensación monetaria.</p>
        `,
        "gallery": [{
            "src": "https://player.vimeo.com/video/314064438"
          },
          {
            "src": "https://player.vimeo.com/video/314064361"
          },
          {
            "src": "https://player.vimeo.com/video/314064378"
          }
        ]
      },
      "section3": {
        "title": "<h1>yeah<strong>!</strong></h1>",
        "content": `
          <p>Te invitamos a ser parte de WIN donde eliminamos las debilidades comunes de los esquemas comerciales en red, es decir: <b>no tienes que pagar inscripción, comprar ni vender nada, no tienes que mantener o cargar redes,</b> lo único que tienes que hacer es Vincular a 6 Negocios y a 3 Personas. <br> ¡Así de fácil!</p> <br>
          <p>Lo mejor es que pueden afiliarse <b>todo tipo de Negocios</b> de productos y/o servicios</p> <br>
          <p><b>¡Si el dinero está en tu cabeza, Weenjoy lo pone en tus manos!</b></p>
        `
      },
      "section4": {
        "title": "4 principios fundamentales",
        "content": "Lo más valioso de WIN es que te permite generar de manera muy fácil un ingreso continuo, constante y que con el tiempo puede incrementarse.",
        "action": "Ver más",
        "texture": require("~/assets/img/textures/fondo_02.svg"),
        "principles": [{
            "name": "Principio #1",
            "description": "Ingresos Residuales",
            "icon": require("~/assets/img/principio_01.png"),
            "background": require("~/assets/img/principio_01-background.png"),
            "content": `
              <p>En los trabajos tradicionales y comunes, intercambias tu tiempo por dinero (quincena, honorarios, etc.) por eso a este tipo de ingresos se les llaman lineales.</p> <br>
              <p>En cambio, en los ingresos residuales, realizas un trabajo una sola vez y él mismo te reportará un flujo continuo de ganancias que se prolonga y puede perpetuarse con el tiempo.</p> <br>
              <p>Esta es la forma más inteligente de ganar dinero.</p>
              <p>Lo más valioso de WIN, es que te permite generar de manera muy fácil importantes ingresos residuales.</p>
            `
          },
          {
            "name": "Principio #2",
            "description": "Apalancamiento en personas",
            "icon": require("~/assets/img/principio_02.png"),
            "background": require("~/assets/img/principio_02-background.png"),
            "content": `
              <p>Quienes obtienen INGRESOS RESIDUALES se apalancan en personas, que al no ser tus empleados no te cuestan. Como ellos también son dueños de su propio Negocio, ponen el mismo interés y entusiasmo que tú en hacerlo crecer y al no ser comisionistas no hay competencia.</p> <br>
              <p>Este modelo de apalancamiento en personas busca que a ti te vaya bien porque <b>en la medida que tú ganes, ganan ellos también.</b></p>
            `
          },
          {
            "name": "Principio #3",
            "description": "Modelo de crecimiento exponencial",
            "icon": require("~/assets/img/principio_03.png"),
            "background": require("~/assets/img/principio_03-background.png"),
            "content": `
              <p>En WIN te apalancarás en el talento y trabajo de cientos de Joyners (Activadores), aunque tú solamente integres a tres conocidos.</p>
            `
          },
          {
            "name": "Principio #4",
            "description": "Sistema fácil y replicable",
            "icon": require("~/assets/img/principio_04.png"),
            "background": require("~/assets/img/principio_04-background.png"),
            "content": `
              <p>Al tener estos beneficios, serás el portavoz para difundir la buena noticia de Weenjoy a todas las personas.</p>
            `
          }
        ]
      },
      "section5": {
        "title": "Así como ellos,",
        "subtitle": "Conoce, actívate y genera",
        "content": "No tienes nada que perder y si mucho que ganar",
        "action": "ACTÍVATE",
        "images": [{
            "url": require("~/assets/img/activate-down-01.png")
          },
          {
            "url": require("~/assets/img/activate-down-02.png")
          },
          {
            "url": require("~/assets/img/activate-down-03.png")
          },
          {
            "url": require("~/assets/img/activate-up-01.png")
          },
          {
            "url": require("~/assets/img/activate-up-02.png")
          },
          {
            "url": require("~/assets/img/activate-up-03.png")

        }]
      },

      "video_carousel": [
        {
          "url": "https://player.vimeo.com/video/314064448"
        },
        {
          "url": "https://player.vimeo.com/video/314064427"
        },
        {
          "url": "https://player.vimeo.com/video/314064416"
        },
        {
          "url": "https://player.vimeo.com/video/314064403"
        },
        {
          "url": "https://player.vimeo.com/video/314064391"
        },
        {
          "url": "https://player.vimeo.com/video/314064342"
        },
        {
          "url": "https://player.vimeo.com/video/314064321"
        },
        {
          "url": "https://player.vimeo.com/video/327215643"
        },
        {
          "url": "https://player.vimeo.com/video/327215888"
        },
        {
          "url": "https://player.vimeo.com/video/327216140"
        },
        {
          "url": "https://player.vimeo.com/video/327216360"
        },
        {
          "url": "https://player.vimeo.com/video/327216515"
        }
      ],
      "activator_carousel": [{
        "name": "Germán Zamacona",
        "photo": require("~/assets/img/activadores/germanZamacona.png"),
        "speach": "Cuando no te guste lo que pasa disrumpe y crea, lo que a tus ojos es correcto.",
        "position": "Activador Líder"
      },
      {
        "name": "Tere Medina",
        "photo": require("~/assets/img/activadores/tereMedina.png"),
        "speach": "Para mí, Weenjoy es compartir oportunidades, ya que este es un gran movimiento que activará la economía de nuestro país.",
        "position": "Activadora Líder"
      },
      {
        "name": "Roberto Martínez",
        "photo": require("~/assets/img/activadores/robertoMartinez.png"),
        "speach": "Weenjoy es la solución más impactante e innovadora del futuro para solucionar la economía de las personas.",
        "position": "Asesor General Weenjoy"
      },
      {
        "name": "Octavio Rincón",
        "photo": require("~/assets/img/activadores/octavioRincon.png"),
        "speach": "Weenjoy viene a responder al reto de innovar de manera impactante en la economía a todos los niveles sociales, realmente una solución revolucionaria.",
        "position": "Asesor de T.I. Weenjoy"
      },
      {
        "name": "Nacho Pérez",
        "photo": require("~/assets/img/activadores/nachoPerez.png"),
        "speach": "La innovación es lo de hoy.",
        "position": "Activador Líder"
      },
      {
        "name": "Karla Lijermark",
        "photo": require("~/assets/img/activadores/karlaLijermark.png"),
        "speach": "Tu destino lo decides tú.",
        "position": "Activadora Líder"
      },
      {
        "name": "Domingo Ruiz",
        "photo": require("~/assets/img/activadores/domingoRuiz.png"),
        "speach": "Weenjoy es un vehículo innovador a favor de la distribución de la riqueza al conectar necesidades y soluciones a través de medios digitales.",
        "position": "Asesor Fiscal y Legal Weenjoy"
      },
      {
        "name": "Estefania Cortina",
        "photo": require("~/assets/img/activadores/estefaniaCortina.png"),
        "speach": "Con Weenjoy sabemos lo que queremos y lo vamos a obtener, nada nos va a detener.",
        "position": "Joyner"
      },
      {
        "name": "Enrique Chávez",
        "photo": require("~/assets/img/activadores/enriqueChavez.png"),
        "speach": "Si el dinero está en tu cabeza, Weenjoy lo pondrá en tus manos.",
        "position": "BPA"
      },
      {
        "name": "Gerardo Guzmán",
        "photo": require("~/assets/img/activadores/gerardoGuzman.png"),
        "speach": "Weenjoy es la forma de transformar el mundo económicamente a través de una comunidad sustentable y cooperativa.",
        "position": "BPA"
      },
      {
        "name": "Liliana Ruíz Montenegro",
        "photo": require("~/assets/img/activadores/lilianaRuiz.png"),
        "speach": "Weenjoy, economía colaborativa de alto sentido.",
        "position": "Activadora Lider"
      },
      {
        "name": "Tere Ambriz",
        "photo": require("~/assets/img/activadores/tereAmbriz.png"),
        "speach": "Weenjoy es una oportunidad de crecimiento personal y estabilidad económica.",
        "position": "Activadora Lider"
      }],
      "compensation_plan": {
        "title": "Plan de compensación",
        "subtitle": `
          <p><b>WIN</b> te pagará comisiones mensuales sobre el total de los ingresos de todos los Negocios que tu red genere mes tras mes a través de <b>Weenjoy.</b></p>
        `,
        "levels": [{
            "title": "Nivel #1",
            "subtitle": "Negocios Afiliados de manera directa",
            "content": `
              <p>WIN te pagará el 0.20% sobre el 100% de los ingresos que los Negocios Activos en la plataforma Weenjoy, hayan obtenido mensualmente derivados por las compras y/o consumos de los usuarios de Weenjoy. Puede llegar a ser del 0.30 % en el caso de cadenas * . </p>
              <p>0.20% al 0.30% de tus primeros 6 Negocios.</p>
            `,
            "background": require("~/assets/img/level_1.jpg"),
            "icon": require("~/assets/img/level_1-ico.png")
          },
          {
            "title": "Nivel #2 al #6",
            "subtitle": "Negocios Afiliados de manera indirecta",
            "content": `
              <p>Te pagará el 0.10% en cada nivel sobre el 100% de los ingresos que los Negocios Activos en la plataforma Weenjoy, hayan obtenido mensualmente derivados por las compras y/o consumos de los usuarios de Weenjoy.</p>
            `,
            "background": require("~/assets/img/level_2.jpg"),
            "icon": require("~/assets/img/level_2-ico.png")
          }
        ]
      },
      "highlighted_activator": {
        "name": "Lizbeth Delgado",
        "photo": require("~/assets/img/highlighted/highlighted.png"),
        "speach": "Weenjoy es una Red de Distribuidores donde todos pueden generar una mayor cantidad de ingresos, día a día con un residual extraordinario. ¡Compartir es vivir la vida!",
        "position": "Activadora Asociada",
        "texture": require("~/assets/img/textures/fondo_03.svg")
      }
    },

    "news": {
      "hero": {
        "title": `<h1 data-aos="fade-up">¡Juntos logramos más!</h1>`,
        "content": `
          <p data-aos="fade">Somos WIN y nos gusta trabajar en equipo para beneficiar a toda una <em>gran comunidad.</em></p>
        `,
        "background": require("~/assets/img/hero_02.png")
      },
      "news_banner": {
        "icon": require("~/assets/img/WIN_logo_dark.png"),
        "title": "Eventos especiales WIN",
        "content": "Crecemos día con día y nos interesa que estés informado de los acontecimientos."
      },
      "news": [{
          "title": "KICKOFF ACTIVACIÓN MLM",
          "content": "¡Entérate! Realizamos dos eventos el 10 y 29 de septiembre del 2018 en el Hotel Villa Montaña de Morelia Michoacán, para Activadores Líderes y Asociados; en él se dio a conocer Weenjoy y el esquema de Negocios de WIN para que se incorporaran a la plataforma WIN.",
          "date": "Septiembre del 2018",
          "images": {
            "main": require("~/assets/img/news/kickoff_01.jpg"),
            "landscape": require("~/assets/img/news/kickoff_02.jpg")
          }
        },
        {
          "title": "WIN CONNECTION MLM",
          "content": "El 27 de octubre del 2018, en el Centro Cultural y de Negocios Tres Marías, realizamos el lanzamiento de Vinculación de Negocios. Más de 300 personas fueron invitados por los Activadores Lideres y Pilares para convertirse en Joyners e integrarse a WIN. ¡Gracias por formar parte de este empresa!",
          "date": "27 de Octubre 2018",
          "images": {
            "main": require("~/assets/img/news/connection_01.jpg"),
            "landscape": require("~/assets/img/news/connection_02.jpg"),
            "gallery": [
              require('~/assets/img/news/connection_03.jpg'),
              require('~/assets/img/news/connection_04.jpg'),
              require('~/assets/img/news/connection_05.jpg'),
              require('~/assets/img/news/connection_06.jpg'),
              require('~/assets/img/news/connection_07.jpg'),
              require('~/assets/img/news/connection_08.jpg'),
              require('~/assets/img/news/connection_09.jpg'),
              require('~/assets/img/news/winweeks_10.jpg'),
              require('~/assets/img/news/winweeks_11.jpg'),
              require('~/assets/img/news/winweeks_12.jpg'),
              require('~/assets/img/news/winweeks_13.jpg'),
              require('~/assets/img/news/winweeks_14.jpg'),
              require('~/assets/img/news/winweeks_15.jpg'),
              require('~/assets/img/news/winweeks_16.jpg'),
              require('~/assets/img/news/winweeks_17.jpg'),
              require('~/assets/img/news/winweeks_18.jpg'),
              require('~/assets/img/news/winweeks_19.jpg'),
              require('~/assets/img/news/winweeks_20.jpg'),
              require('~/assets/img/news/winweeks_21.jpg'),
              require('~/assets/img/news/winweeks_22.jpg'),
              require('~/assets/img/news/winweeks_23.jpg'),
              require('~/assets/img/news/winweeks_24.jpg'),
              require('~/assets/img/news/winweeks_25.jpg'),
              require('~/assets/img/news/winweeks_26.jpg'),
            ]
          }
        },
        {
          "title": "WIN WEEKS",
          "content": "Las WIN Weeks son reuniones semanales en las que damos a conocer Weenjoy y WIN a prospectos de Joyners y Weenjoy Partners. Ofrecemos capacitación en temas diversos a todo el equipo respecto al seguimiento constante de su Red de Negocios y Organización de Joyners, así como resolver dudas e inquietudes. ¡Infórmate!",
          "images": {
            "main": require("~/assets/img/news/winweeks_01.jpg"),
            "landscape": require("~/assets/img/news/winweeks_02.jpg"),
            "gallery": [
              require('~/assets/img/news/winweeks_03.jpg'),
              require('~/assets/img/news/winweeks_04.jpg'),
              require('~/assets/img/news/winweeks_05.jpg'),
              require('~/assets/img/news/winweeks_06.jpg'),
              require('~/assets/img/news/winweeks_07.jpg'),
              require('~/assets/img/news/winweeks_08.jpg'),
              require('~/assets/img/news/winweeks_09.jpg'),
              require('~/assets/img/news/connection_10.jpg'),
              require('~/assets/img/news/connection_11.jpg'),
              require('~/assets/img/news/connection_12.jpg'),
              require('~/assets/img/news/connection_13.jpg'),
              require('~/assets/img/news/connection_14.jpg'),
              require('~/assets/img/news/connection_15.jpg'),
              require('~/assets/img/news/connection_16.jpg'),
              require('~/assets/img/news/connection_17.jpg'),
              require('~/assets/img/news/connection_18.jpg'),
              require('~/assets/img/news/connection_19.jpg'),
              require('~/assets/img/news/connection_20.jpg'),
              require('~/assets/img/news/connection_21.jpg'),
              require('~/assets/img/news/connection_22.jpg'),
              require('~/assets/img/news/connection_23.jpg'),
              require('~/assets/img/news/connection_24.jpg'),
              require('~/assets/img/news/connection_25.jpg'),
              require('~/assets/img/news/connection_26.jpg'),
            ]
          }
        }
      ],
      "partners": {
        "title": "¡Gracias por tu confianza!",
        "subtitle": "Nuestros Weenjoy Partners satisfechos",
        "list": [{
          "logo": require("~/assets/img/partners/tata.jpg"),
          "speach": "Si te vas a meter a bañar, salpica, creemos que eso es precisamente lo que hace WEENJOY, y cambiará el mundo.",
          "name": "Tata Mezcaleria"
        },
        {
          "logo": require("~/assets/img/partners/creditcar.jpg"),
          "speach": "WEENJOY es una idea disruptiva, tecnológica, con una gran dimensión social donde todos se benefician económicamente.",
          "name": "Creditcar"
        },
        {
          "logo": require("~/assets/img/partners/leomar.jpg"),
          "speach": "Weenjoy es una APP totalmente revolucionaria que va a cambiar la manera de hacer negocios.",
          "name": "Grupo Leomar"
        },
        {
          "logo": require("~/assets/img/partners/colchas_camelinas.jpg"),
          "speach": "Con WEENJOY incrementaremos nuestras ventas.",
          "name": "Colchas Camelinas"
        }]
      },
      "events": {
        "title": "Proximos Eventos",
        "images": [
          require("~/assets/img/events/connection_cdmx.png"),
          require("~/assets/img/events/connection_gto.png"),
          require("~/assets/img/events/connection_gdl.png"),
          require("~/assets/img/events/connection_qro.png"),
          require("~/assets/img/events/connection_pue.png"),
          require("~/assets/img/events/connection_mty.png"),
          require("~/assets/img/events/connection_sal.png")
        ]
      }
    },

    "compensation": {
      "hero": {
        "title": `<h1 data-aos="fade-up">Plan de compensación</h1>`,
        "content": `
          <p>
            WIN te pagará comisiones mensuales sobre el total
            de los ingresos de todos los Negocios que tu red
            genere mes tras mes a través de Weenjoy.
          <p>`,
        "background": require("~/assets/img/hero_05.png")
      },
      "plan": {
        "img": require("~/assets/img/plan.png"),
        "title": "WIN a diseñado",
        "subtitle": "un plan de trabajo fácil y poderoso",
        "content": `
          <p>Activar a 6 Negocios y con ello integrar a 3 Joyners directos a tu equipo de trabajo. <em>6 Negocios y 3 Joyners</em> son números muy fáciles de alcanzar.</p>
        `,
      },
      "nivel1": {
        "title": "Nivel #1",
        "subtitle": "Negocios Afiliados de manera directa",
        "content": `
          <p>WIN te pagará el 0.20% sobre el 100% de los ingresos que los Negocios Activos en la plataforma Weenjoy, hayan obtenido mensualmente derivados por las compras y/o consumos de los usuarios de Weenjoy.</p> <br>
          <p>
            Puede llegar a ser del 0.30% en el caso de cadenas*. <br>
            0.20% al 0.30% de tus primeros 6 Negocios.
          </p>
        `,
        "gallery": [
          require("~/assets/img/nivel1_01.png"),
          require("~/assets/img/nivel1_02.png")
        ],
        "tiles": [
          {
            "img": require("~/assets/img/negocios.svg"),
            "name": "NEGOCIOS",
            "quantity": "6",
            "description": "DIRECTOS"
          },
          {
            "img": require("~/assets/img/ganancias.svg"),
            "name": "GANANCIAS",
            "quantity": ".20%"
          },
        ]
      },
      "nivel2": {
        "title": "Nivel #2 al #6",
        "subtitle": "Negocios Afiliados de manera indirecta",
        "content": `
          <p>WIN te pagará el 0.10% en cada nivel sobre el 100%
          de los ingresos que los Negocios Activos en la
          plataforma Weenjoy, hayan obtenido
          mensualmente derivados por las
          compras y/o consumos de los
          usuarios de Weenjoy.</p> <br>
          <p>
            0.10% de cientos de Negocios Afiliados <br>
            por tu organización de Joyners.
          </p>
        `,
        "gallery": [
          require("~/assets/img/nivel2_01.png"),
          require("~/assets/img/nivel2_02.png")
        ]
      },
      "earnings": {
        "title": "Potencial de Ganancias",
        "description": "Ejemplo de un Negocio que genera diariamente un promedio de 10 ventas de $500 MXN:",
        "table": require("~/assets/img/table.png"),
        "text": `
          <p>El plan de compensación de WIN, está diseñado para que una vez que construyas tu plan 6x3 en un periodo
          no mayor a 4 meses y dedicando 2 a 3 horas de tu tiempo por semana <em>generes importantes ganancias mensuales.</em></p>
        `
      }
    },

    "ambassadors": {
      "title": "Embajadores Weenjoy",
      "description": `
        <p><b>Nuestros Embajadores de Marca</b>, son personas excepcionales que a lo largo de sus trayectorias han tenido importantes logros que se alinean con los objetivos y propósitos de Weenjoy: <b>prosperidad, equidad, comunidad, crecimiento y desarrollo de los potenciales individuales</b>. ¡Conócelos!</p>
      `,
      "list": [{
        "id": "lucy",
        "name": "Lucy Ponce Ávila",
        "position": "Embajadora",
        "photo": require("~/assets/img/embajadores/lucy_ponce/photo.jpg"),
        "url": "/perfiles/lucy",
        "cv": {
          "hero": {
            "image": require("~/assets/img/embajadores/lucy_ponce/hero.png"),
            "title": "Lucy Ponce Ávila",
            "subtitle": "Embajadora WIN"
          },
          "about": {
            "photo": require("~/assets/img/embajadores/lucy_ponce/cv.png"),
            "title": "Conoce más",
            "subtitle": "Lucy Ponce se ha dedicado a cambiar la vida de las personas.",
            "content": `
              <p>Para ello, ha apoyado la equidad de género y el empoderamiento de las mujeres; ya que, de acuerdo a muchas organizaciones a nivel internacional, para combatir la pobreza, es necesario que mujeres y niñas tengan mejores oportunidades en todos los ámbitos de la sociedad.</p> <br>
              <p>Gracias al Congreso Internacional, Mujer y Poder, del cual es Fundadora y Presidenta, se busca que se generen las mismas circunstancias y se instauren los mismos beneficios para hombres y mujeres en las empresas.</p> <br>
              <p>También preside la asociación Michoacán Conquista y la Asociación Internacional de Mujeres Empresarias, además de ser conferencista de la Cámara Internacional de Emprendedores (CAINEM).</p> <br>
              <p>Con una gran capacidad de búsqueda de oportunidades para todos, a Lucy le apasiona viajar, ello hace que conozca más a fondo la vida de personas, en particular, mujeres, que tienen el deseo de crecer, emprender y sobresalir.</p>
            `,
          },
          "phrase": "``La pasión con la que vives tus sueños, es lo que determina el nivel de tu éxito''",
          "weenjoyPhrase": "``Weenjoy, es más que una aplicación, es un modelo que va a mejorar la calidad de vida de las personas''",
          "social": {
            "thumbnail": require("~/assets/img/embajadores/lucy_ponce/thumbnail.png"),
            "user": require("~/assets/img/embajadores/lucy_ponce/user.png"),
            "networks": [{
                "url": "https://www.facebook.com/marialucyponce",
                "icon": require("~/assets/img/social_icons/facebook.svg")
              },
              {
                "url": "https://www.instagram.com/lucyponceavila",
                "icon": require("~/assets/img/social_icons/insta.svg")
              }
            ]
          }
        }
      },
      {
        "id": "ahmed",
        "name": "Ahmed Ozsu",
        "position": "Embajador WIN",
        "photo": require("~/assets/img/embajadores/ahmed_ozsu/photo.png"),
        "url": "/perfiles/ahmed",
        "cv": {
          "hero": {
            "image": require("~/assets/img/embajadores/ahmed_ozsu/hero.png"),
            "title": "Ahmed Ozsu",
            "subtitle": "Embajador WIN"
          },
          "about": {
            "photo": require("~/assets/img/embajadores/ahmed_ozsu/cv.png"),
            "title": "Conoce más",
            "subtitle": "Ahmed Ozsu se ha caracterizado por ser un gran emprendedor y agente de cambio.",
            "content": `
              <p>Ahmed tiene la motivación, pasión, creatividad y determinación para buscar soluciones sociales, ya sea en su comunidad, país o en el mundo.Fiel creyente del emprendimiento con visión social colectiva, siempre ha buscado generar una participación ciudadana más activa, así como una generación de beneficios para la ciudad de Morelia, el estado de Michoacán y México.</p> <br>
              <p>Fundador de varias empresas y asociaciones civiles, donde destaca su visión y participación social como: Prefiero Local AC, Fundación México 2050 AC, Amor por Morelia AC, en el estado de Michoacán; siempre intentando promover, difundir y respetar la diversidad cultural, artística, y gastronómica de Michoacán y México, siendo un constante impulsor de este estado a través de sus emprendimientos, asociaciones civiles y trabajo como representante y vocal consejero ciudadano en distintas instancias e instituciones públicas, descentralizadas y ciudadanas sin fines de lucro.</p> <br>
              <p>Actualmente se encuentra realizando nuevos proyectos con la meta de desarrollar fuertemente la parte socioeconómica de Michoacán a través de la investigación, desarrollo y aplicación de tecnología.</p>
            `,
          },
          "phrase": "``El emprendimiento con visión social es mi pasión''",
          "weenjoyPhrase": "``¡Si te vas a meter a bañar, salpica, yo creo que  eso, es precisamente lo que hace Weenjoy!''",
          "social": {
            "thumbnail": require("~/assets/img/embajadores/ahmed_ozsu/thumbnail.png"),
            "user": require("~/assets/img/embajadores/ahmed_ozsu/user.png"),
            "networks": [{
                "url": "https://www.facebook.com/ahmed.medina",
                "icon": require("~/assets/img/social_icons/facebook.svg")
              },
              {
                "url": "https://twitter.com/ahmedozsu",
                "icon": require("~/assets/img/social_icons/twitter.svg")
              },
              {
                "url": "https://www.instagram.com/ahmedozsu/ ",
                "icon": require("~/assets/img/social_icons/insta.svg")
              }
            ]
          }
        }
      }]
    },

    "resources": {
      "hero": {
        "title": `<h1><em>Recursos para Joyners</em></h1>`,
        "background": require("~/assets/img/hero_03.png")
      },
      "brochures": {
        "title": "Folletos informativos",
        "files": [{
          "background": require("~/assets/img/folleto_01.png"),
          "title": "WEENJOY PARTNER",
          "pdf": "/pdf/Folleto_Weenjoy_R1nov2018.pdf",
          "action": "DESCARGAR"
        },
        {
          "background": require("~/assets/img/folleto_02.png"),
          "title": "WIN",
          "pdf": "/pdf/Folleto_WIN_R1nov2018.pdf",
          "action": "DESCARGAR"
        },
        {
          "background": require("~/assets/img/folleto_03.png"),
          "title": "JOBBER",
          "pdf": "/pdf/Folleto_Jobber_R1nov2018.pdf",
          "action": "DESCARGAR"
        },
        {
          "background": require("~/assets/img/folleto_04.png"),
          "title": "INFO CONTABLE",
          "pdf": "/pdf/Info_contable_R5_04abril_2019.pdf",
          "action": "DESCARGAR"
        }],
      },
      "videos": {
        "title": "Videos",
        "files": [{
          "title": "¿Qué es Weenjoy?",
          "url": "https://player.vimeo.com/video/297434646"
        },
        {
          "title": "Caso de uso con Pinjoys",
          "url": "https://player.vimeo.com/video/315921387"
        },
        {
          "title": "Clientes con poder adquisitivo",
          "url": "https://player.vimeo.com/video/297434565"
        },
        {
          "title": "Plataforma ABCE",
          "url": "https://player.vimeo.com/video/297434611"
        }],
      },
      "entries": {
        "title": "Un vistazo a los tips de nuestros Joyners.",
        "related": "CONTINÚA LEYENDO",
        "articles": [{
          "id": "vistazo",
          "name": "Ventajas de hacer comunidad",
          "title": "¡Conoce las ventajas de formar parte de esta gran comunidad!",
          "thumbnail": require("~/assets/img/entries/01/thumbnail.jpg"),
          "entry": `
            <ol>
              <li>No tienes que invertir absolutamente nada más que 1 ó 2 horas a la semana durante poco tiempo.</li>
              <li>Nuestro sistema es fácil y totalmente replicable, por lo que cualquier persona puede entrar a nuestro Sistema de Activación WIN sin ser especialista en alguna materia.</li>
              <li>Los horarios tú los estableces.</li>
            </ol>
            <p>Estamos seguros de que ya las sabías, por eso te convenciste y ahora eres parte de esta gran comunidad; pero ahora viene lo bueno, seguramente te preguntas sobre las comisiones que vas a percibir por ser Joyner (Activador), ¡quédate atento a nuestros próximos artículos!</p> <br>
            <p><strong>¡Nos encanta que seas WIN!</strong></p>
          `,
          "url": "/entradas/vistazo"
        },
        {
          "id": "contigo",
          "name": "Weenjoy contigo",
          "title": "Weenjoy  te apoya para que todas tus dudas sean resueltas.",
          "thumbnail": require("~/assets/img/entries/02/thumbnail.jpg"),
          "entry": `
            <p><strong>¿Cuáles son los 4 pasos que debes seguir para armar tu Red de Negocios?</strong></p> <br>
            <p>Los pasos se desarrollan por medio de un proceso conocido como JOIN (antes VACA). Este es un sistema mediante el cual se activarán los Negocios de tus amigos o familiares para que ingresen y se conviertan en Weenjoy Partners.</p>
            <p>J=Job / Trabajo: Es el primer paso del proceso que te permitirá tener una reunión inicial con la persona que toma las decisiones del Negocio o Empresa. El objetivo de este acercamiento es que generes interés en el dueño sobre Weenjoy y lo convenzas de los beneficios de pertenecer a esta comunidad.</p>
            <img src="${require('~/assets/img/entries/02/job.jpg')}" alt="Job">
            <p>O=Operate / Opera: Ya que convenciste y lograste el sí de tus Negocios, lo que sigue es acompañarlo en su proceso de alta. Estos pasos los debe de hacer directamente el dueño del Negocio (Weenjoy Partner) ingresando a weenjoy.com. El dueño del Negocio deberá verificarte como Joyner (Activador) y generar su cuenta en Weenjoy.</p>
            <img src="${require('~/assets/img/entries/02/operate.png')}" alt="Operate">
            <p>I=Inspire / Capacita: Dentro del proceso JOIN la capacitación es la parte más importante y es aquí donde tú como Joyner (Activador) deberás dedicar la mayor atención y enfoque con tus Negocios para que juntos ganen con Weenjoy.</p>
            <img src="${require('~/assets/img/entries/02/inspire.jpg')}" alt="Inspire">
            <p>La capacitación a los Negocios y empleados es importante porque de ellos dependerá la adecuada funcionalidad de la APP de Weenjoy con los usuarios.</p>
            <p>N=Notify / Notifica: En este último paso, tu objetivo es dar acompañamiento para asegurar la calidad y servicio del funcionamiento de la APP en pro de los beneficios de la empresa y los usuarios.</p>
            <img src="${require('~/assets/img/entries/02/notify.jpg')}" alt="Notify">
            <p>No olvides invitar a tus amigos que ya tengan la APP a consumir en los Negocios que tú afiliaste, así ¡todos ganan!</p>
          `,
          "url": "/entradas/contigo"
        },
        {
          "id": "equipo",
          "name": "Arma tu equipo",
          "title": "¿Cuáles son los 3 pasos que debes seguir para armar tu Organización de Joyners (Activadores)?",
          "thumbnail": require("~/assets/img/entries/03/thumbnail.jpg"),
          "entry": `
            <p>L=Look / Busca: Tendrás que ser muy específico en el perfil de tus 3 Joyners, invita a amigos y conocidos que de preferencia tengan experiencia en redes de mercadeo o que conozcan a dueños de Negocios.</p>
            <img src=${require("~/assets/img/entries/03/look.jpg")} alt="placeholder">
            <p>IN=Integrate / Integrar: Comienza a armar tu Organización de Joyners, apóyalos en su capacitación y certificación para que replique el plan 6x3. Recuerda que por cada 2 negocios que afilies, tienes derecho a invitar a un nuevo Joyner.</p>
            <img src=${require("~/assets/img/entries/03/integrate.jpg")} alt="placeholder">
            <p>K=Keep / Mantener: Es muy importante que hagas un seguimiento de tu Red de Negocios y tu Organización de Joyners para que los ayudes con dudas, pero sobre todo para que mantengas tu red generando ingresos residuales exponenciales.</p>
            <img src=${require("~/assets/img/entries/03/keep.jpg")} alt="Keep">
            <p>Tienes un portal aquí, dentro de la plataforma WIN, que te ayudará a tener más orden y visualizar tus avances.</p>
            <ul>
              <li>Puedes crear equipo con otras personas para que ellos hagan lo mismo que tú y que también ganen de los negocios afiliados por ellos, siguiendo el proceso LINK.</li>
              <li>Recuerda que por cada 2 negocios afiliados se abre una posición de apalancamiento, es decir, podrás agregar a una nueva persona a tu equipo.</li>
              <li>Apoya a tu equipo y crezcan juntos siguiendo el proceso JOIN, sencillo y fácil de replicar.</li>
              <li>Después apoya a tus 3 Joyners para que estos afilien a 6 Negocios y su vez a 3 personas más.</li>
              <li>Tu Organización de Joyners y Red de Negocios crecerá día con día y ganarás de todas ellas hasta 5 niveles de profundidad.</li>
            </ul>`,
          "url": "/entradas/equipo"
        },
        {
          "id": "amigos",
          "name": "Acerca a tus amigos",
          "title": "Invita a tus amigos para que puedas tener al mejor equipo junto a ti.",
          "thumbnail": require("~/assets/img/entries/04/thumbnail.jpg"),
          "entry": `
            <ol>
              <li>Personas que están en la constante búsqueda de oportunidades.</li>
              <li>Que les guste pensar en grande.</li>
              <li>Que sean sociables.</li>
              <li>Que conozcan a dueños de Negocios.</li>
            </ol>
            <p>Es muy fácil afiliar, por lo que no es necesario que sean especialista en temas específicos, ¡todos tenemos contactos de Negocios!</p> <br>
            <p><strong>¡Invítalos a compartir Weenjoy!</strong></p>
          `,
          "url": "/entradas/amigos"
        }]
      },
      "faqs": {
        "title": "¿AÚN TIENES DUDAS? AQUÍ LAS SOLUCIONAMOS:",
        "qa": [{
            "question": "¿Qué es WIN?",
            "answer": `<p>Son las siglas de Weenjoy Intelligent Network, nuestro sistema de activación de Negocios a la plataforma de
              Marketing inteligente de Weenjoy donde los Joyners (Activadores) pueden generar ingresos adicionales de manera fácil,
              rápida y segura.</p>`
          },
          {
            "question": "¿Quiénes son los Joyners o Activadores?",
            "answer": `<p>Son personas que obtienen los beneficios de WIN al vincular a 6 Negocios y apalancarse de 3 Activadores a la plataforma Weenjoy.</p>`
          },
          {
            "question": "¿Qué es el plan 6x3?",
            "answer": `<p>El plan consiste como objetivo básico, activar a 6 Negocios y con ello integrar a 3 Activadores directos a tu equipo.</p>
              <p>6 negocios, así como 3 Activadores directos, son números muy fáciles de alcanzar. Todos conocemos 6 negocios,
                sin importar el género. Pueden ser desde pequeños hasta grandes negocios: como una lavandería o un salón de belleza,
                un restaurante, cafetería, pastelería. Un salón de eventos o fiestas infantiles. Una tienda de ropa, zapatería,
                colegio, escuela de idiomas, danza o música, tienda de electrónica, muebles, abarrotes o hasta despachos de servicios
                como contadores, abogados, arquitectos o inclusive veterinarios. Dentistas, Pediatras, Ginecólogos, Farmacias, etc.</p>`
          },
          {
            "question": "¿Qué es Weenjoy?",
            "answer": `<p>La primera APP del mundo que resuelve de manera efectiva, sencilla y creativa la economía de las personas.</p>`
          },
          {
            "question": "¿Cuál es el propósito de Weenjoy?",
            "answer": `<p>Ser la aplicación más empleada en México y el mundo, que mejore la economía de las personas y negocios,
              manteniéndose a la vanguardia, creando recompensas enfocadas a cumplir los objetivos de nuestros
              clientes e inspirando a nuestras comunidades a crear conexiones de apoyo mutuo.</p>`
          },
          {
            "question": "¿Cuál es el costo de la APP?",
            "answer": `<p>La APP es completamente gratuita para todos los usuarios de iOS y Android.</p>`
          },
          {
            "question": "¿Dónde se puede usar la app de Weenjoy?",
            "answer": `<p>Lo puedes usar en todos los negocios afiliados a la plataforma Weenjoy.</p>`
          },
          {
            "question": "¿Qué son los Weenjoy Partners?",
            "answer": ` <p>Los Weenjoy Partners son los negocios afiliados a la plataforma de Weenjoy, los cuales se dividen en
              géneros y subgéneros. Los géneros son las 12 clasificaciones de negocio que existen y los subgéneros
              son los tipos de negocio en específico que pertenecen a cada género.</p>`
          },
          {
            "question": "¿Qué son los jobbers?",
            "answer": `<p>Trabajador, dependiente o auxiliar dentro de la empresa registrada como Weenjoy Partner.
              El jobber debe ser a su vez y de forma obligada un usuario de Weenjoy.
              El jobber es la persona que brinda el producto o servicio al usuario de Weenjoy y que realiza las operaciones
              de bonificaciones y canjes desde la aplicación móvil.</p>`
          },
          {
            "question": "¿Quién capacita a los jobbers?",
            "answer": `<p>Los jobbers son capacitados por el activador que haya afiliado a su Weenjoy Partner.</p>`
          },
          {
            "question": "¿Qué son los Pinjoys?",
            "answer": `<p>Un pinjoy es una unidad en puntos que acumulan los usuarios, la empresa y los jobbers al realizar actividades
              de compras de productos y servicios en los establecimientos afiliados a Weenjoy a través de las bonificaciones
              que estos otorgan. Equivalen a MX $1 y no pude ser convertido a moneda circulante ni ser retirado por el usuario.</p>`
          },
          {
            "question": "¿Qué son los Geolayers?",
            "answer": `<p>Herramientas que permite a los usuarios crear consultas interactivas, analizar la información geográfica, editar datos, mapas y presentar los resultados.</p>`
          },
          {
            "question": "¿Qué es el código QR?",
            "answer": `<p>Matriz cuadrada que contiene información codificada. El código QR está diseñado para ser leído por dispositivos
              electrónicos y dar tratamiento posterior a la información codificada. El usuario desde la aplicación móvil puede
              codificar y leer códigos QR con la información necesaria para el proceso de identificación en la bonificación y/o
              cobro de Pinjoys o en proceso de registro con la invitación de una cuenta nueva.</p>`
          },
          {
            "question": "¿Qué es la ABCE Platform?",
            "answer": `<p>Es una plataforma mercadológica dirigida a los negocios afiliados con beneficios de procesos operativos, mercadológicos, publicitarios, de crecimientos, de apoyo al negocio, de incremento en clientes y ventas.</p>`
          },
          {
            "question": "¿Cuáles son los pasos del plan 6 x 3?",
            "answer": `<h5><b>Paso #1 ACTIVA:</b></h5>
              <p>Activa tus 6 primeros negocios (les llamamos Weenjoy Partners), de acuerdo al proceso que WIN establece.</p>
              <br>
              <h5><b>Paso #2 INTEGRA:</b></h5>
              <p>Integra tu equipo de 3 Activadores y ayúdalos en su capacitación y certificación para que puedan
                comenzar a activar negocios.</p>
              <br>
              <h5><b>Paso #3 AYUDA:</b></h5>
              <p>Ayuda a tus 3 primeros Activadores a activar a sus propios Weenjoy Partners de acuerdo al proceso establecido.</p>`
          },
          {
            "question": "¿En qué consiste el plan de compensación?",
            "answer": `<p>El plan de compensación de WIN, te pagará comisiones mensuales sobre el total de los ingresos que todos
              los negocios de tu red generen mes tras mes a través de los usuarios de Weenjoy.</p>`
          },
          {
            "question": "¿Cómo funcionan las comisiones?",
            "answer": `<h5><b>Nivel #1</b></h5>
              <p>Negocios afiliados de manera directa</p>
              <p>Te pagará el <b>0.20%</b> sobre el 100% de los ingresos que los negocios activos en la plataforma Weenjoy,
                hayan obtenido mensualmente derivados por las compras y/o consumos de los usuarios de Weenjoy</p>
              <p>Puede llegar a ser del <b>0.30%</b> en el caso de cadenas*</p>
              <p style="font-weight: 700; font-size: .8rem; font-style: italic;">* Por cadenas se consideran negocios
                con la misma marca que superen 30 establecimientos o tengan presencia en mínimo 5 ciudades.</p>
              <br>
              <h5><b>Niveles #2 al #6</b></h5>
              <p>Negocios afiliados de manera indirecta</p>
              <p>Te pagará el <b>0.10% en cada nivel</b> sobre el 100% de los ingresos que los negocios activos en la plataforma Weenjoy,
                hayan obtenido mensualmente derivados por las compras y/o consumos de los usuarios de Weenjoy.</p>`
          },
          {
            "question": "¿Cómo se contacta a los negocios?",
            "answer": `<p>Trabaja únicamente con tu “Hot List”</p>
              <p>Tu “Hot List” (Lista caliente) son aquellos negocios en los que conoces personalmente al dueño o
                la persona que tiene el poder de tomar la decisión de afiliarse a la plataforma Weenjoy. Los dueños
                de estos negocios pueden ser familiares tuyos, amigos o simplemente los conoces porque tú ya eres su cliente,
                pero es importante que te conozcan personalmente.</p>
              <p>Se trata justamente de eso, de que una vez que tu conozcas y te convenzas de que Weenjoy es una plataforma que
                incrementará las ventas y utilidades de tus 6 negocios conocidos, te acerques con toda la confianza los dueños (o las
                personas que pueden tomar la decisión de afiliarse) y los ACTIVES dentro de la plataforma Weenjoy.</p>`
          },
          {
            "question": "¿Cuánto se gana como activador?",
            "answer": `<p>La ganancia es potencial. El plan de compensación de W I N  /  Weenjoy Intelligent Network, está diseñado
              para que ganes mensualmente mucho dinero por un trabajo que realizarás solamente una vez y por un periodo de
              entre 3 a 6 meses como máximo sin invertir más que  2 o 3 horas en total por semana.</p>`
          },
          {
            "question": "¿Qué es una posición de apalancamiento?",
            "answer": `<p>El plan de compensación establece que por cada 2 negocios que directamente ACTIVES dentro de Weenjoy,
              podrás invitar a una persona que haga lo mismo que tu. Con tan solo 6 negocios que ACTIVES podrás integrar
              un equipo de 3 ACTIVADORES que como tu, harán lo mismo. A cada persona que integres a tu Red de Activadores,
              le llamamos “Posición de Apalancamiento”.</p>
              <p>Escoge solamente a 3 personas, no más. Piensa en familiares o amigos, pero sobre todo en las personas a las
              que más quieres beneficiar, porque es lo que va a sucederles con WIN.</p>`
          }
        ]
      }
    },

    "contact": {
      "hero": {
        "title": `<h1><em>Atención Weenjoy</em></h1>`,
        "content": `<p>¿Tienes dudas? Contáctanos para conocer más sobre nuestro Sistema de Activación de Negocios</p>`,
        "background": require("~/assets/img/hero_04.png")
      },
      "social": [{
          "icon": require("~/assets/img/contact_icons/smartphone.png"),
          "title": "Llámanos",
          "url": "javascript: void(0)",
          "contact": [{
              "name": `<p>Interior de la República <b>01 800 PINJOYS (746 5697)</b></p>`,
            },
            {
              "name": `<p>Morelia <b>(443) 340 69 44</b></p>`
            }
          ]
        },
        {
          "icon": require("~/assets/img/contact_icons/whatsapp.png"),
          "title": "WhatsApp Business",
          "url": "https://api.whatsapp.com/send?phone=5213323759183",
          "contact": [{
            "name": `<p>+52 1 332 375 9183</p>`,
          }]
        },
        {
          "icon": require("~/assets/img/contact_icons/email.png"),
          "title": "Escribenos a:",
          "url": "mailto:atencionwin@weenjoy.com",
          "contact": [{
            "name": `<p>atencionwin@weenjoy.com</p>`,
          }]
        },
        {
          "icon": require("~/assets/img/contact_icons/facebook.svg"),
          "title": "Redes sociales",
          "url": "https://www.facebook.com/WIN.WeenjoyIntelligentNetwork",
          "contact": [{
            "name": `<p>facebook</p>`,
          }]
        },
        {
          "icon": require("~/assets/img/contact_icons/twitter.svg"),
          "url": "https://twitter.com/WINWeenjoy",
          "contact": [{
            "name": `<p>twitter</p>`,
          }]
        }
      ],
      "addresses": [{
          "name": "Weenjoy USA",
          "icon": require("~/assets/img/contact_icons/ciudades_01.svg"),
          "address": `<p>1160 Battery Street East, Suite 100, <br> San Francisco, CA 94111, EE.UU.</p>`
        },
        {
          "name": "Weenjoy México",
          "icon": require("~/assets/img/contact_icons/ciudades_02.svg"),
          "address": `<p>Puerta de Hierro, Av. Real Acueducto 360, <br> 5 to piso, Col.Santa Margarita, <br> C.P.45116, Zapopan, Jal.Mx.</p>`
        },
        {
          "name": "Weenjoy Colombia",
          "icon": require("~/assets/img/contact_icons/ciudades_03.svg"),
          "address": `<p>Torre Protección, Carrera 43A <br> 1 - 50, Torre 1, Piso 6, Oficina 652, Medellín, Antq. Col.</p>`
        }
      ]
    }
})
