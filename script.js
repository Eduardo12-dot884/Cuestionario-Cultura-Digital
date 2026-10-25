'use strict';

/* Aula Digital · Semana 05
   Banco de estudio redactado únicamente a partir del PDF adjunto. */

const M = (level, prompt, options, answer, explanation) => ({ type: 'mc', level, prompt, options, answer, explanation });
const T = (level, prompt, truth, explanation) => ({ type: 'tf', level, prompt, options: ['Verdadero', 'Falso'], answer: truth ? 'Verdadero' : 'Falso', explanation });

const units = [
  { id: 'u2', label: 'UNIDAD 2', title: 'Licencias y acceso a tecnologías digitales', icon: '⌘', desc: 'Copyleft, software libre, cultura hacker y GNU/Linux.' },
  { id: 'u3', label: 'UNIDAD 3', title: 'Impacto social de las tecnologías digitales', icon: '◎', desc: 'Corporaciones tecnológicas, datos, brecha digital y contaminación.' },
  { id: 'u4a', label: 'UNIDAD 4 · PARTE 1', title: 'Software libre y herramientas de oficina', icon: '▦', desc: 'LibreOffice Writer y Calc: textos, tablas, fórmulas y gráficas.' },
  { id: 'u4b', label: 'UNIDAD 4 · PARTE 2', title: 'Presentaciones y plataformas libres', icon: '▤', desc: 'LibreOffice Impress y opciones digitales de uso cotidiano.' },
  { id: 'u5', label: 'UNIDAD 5', title: 'Normatividad y seguridad digital', icon: '⬡', desc: 'Normas, privacidad, ciberseguridad, datos personales e IA.' }
];

const topics = [
  {
    id:'copyleft', unitId:'u2', section:'2.3', title:'Licenciamientos Copyleft', icon:'↻',
    intro:'El copyleft permite usar, estudiar, modificar y compartir una obra, con la condición de conservar esas libertades en las versiones derivadas.',
    points:[
      'Es un tipo de licenciamiento que permite utilizar, estudiar, modificar y compartir una obra, como un programa informático.',
      'Las versiones derivadas deben conservar libertades semejantes: no pueden volverse privadas ni impedir que otras personas las utilicen y modifiquen.',
      'Usa los derechos de autor para proteger la circulación libre de la obra, en lugar de restringir por completo su uso.',
      'Ejemplo del documento: otro colegio puede adaptar un programa de horarios escolares y compartir sus mejoras bajo las mismas condiciones.',
      'La finalidad es que el conocimiento se comparta, mejore y enriquezca mediante la colaboración.'
    ], keywords:['Usar','Estudiar','Modificar','Compartir','Conservar libertades'],
    cards:[['¿Qué es el copyleft?','Una forma de licenciamiento que permite usar, estudiar, modificar y compartir una obra manteniendo esas libertades en las versiones derivadas.'],['¿Qué debe pasar con una versión modificada?','Debe conservar libertades semejantes; no debe convertirse en una versión privada que impida su uso o modificación por otras personas.'],['¿Para qué utiliza los derechos de autor?','Para proteger la circulación libre de la obra.']],
    questions:[
      M(1,'¿Qué permite hacer una licencia copyleft?', ['Usar, estudiar, modificar y compartir una obra','Solo leer el programa sin ejecutarlo','Usar el programa únicamente en una escuela','Modificarlo, pero ocultar todas las mejoras'],'Usar, estudiar, modificar y compartir una obra','El documento define el copyleft mediante esas cuatro posibilidades.'),
      M(1,'¿Qué condición debe conservar una versión derivada con copyleft?', ['Las mismas libertades bajo condiciones semejantes','La propiedad privada exclusiva','La prohibición de compartir copias','El acceso exclusivo al creador'],'Las mismas libertades bajo condiciones semejantes','El copyleft exige conservar las libertades en las versiones derivadas.'),
      T(2,'El copyleft utiliza los derechos de autor para proteger la circulación libre de una obra.',true,'El documento lo contrasta con las restricciones que impiden usar o modificar una creación.'),
      M(2,'¿Qué diferencia al copyleft de convertir un programa en privado?', ['La versión modificada sigue disponible para uso y modificación','La versión nueva debe borrar el código fuente','Solo el autor original puede ejecutar el programa','Las mejoras deben mantenerse secretas'],'La versión modificada sigue disponible para uso y modificación','La condición es mantener las libertades en las versiones derivadas.'),
      M(3,'Una escuela adapta un programa de horarios con copyleft. ¿Qué debe permitir al compartir su versión?', ['Que otros colegios la usen, adapten y compartan bajo condiciones semejantes','Que solo la dirección escolar pueda usarla','Que nadie pueda revisar las modificaciones','Que la versión adaptada se vuelva secreta'],'Que otros colegios la usen, adapten y compartan bajo condiciones semejantes','El ejemplo escolar del documento señala que se pueden adaptar y compartir mejoras, sin volver el programa privado.'),
      T(3,'El copyleft busca que las creaciones compartidas puedan mejorarse mediante la colaboración.',true,'El documento vincula copyleft con compartir, mejorar y enriquecer el conocimiento.'),
      M(4,'¿Cuál acción contradice la condición descrita para una obra copyleft?', ['Publicar una mejora y prohibir que otros la utilicen o modifiquen','Adaptar el programa a nuevas necesidades','Compartir la nueva versión','Permitir que otros estudien la obra'],'Publicar una mejora y prohibir que otros la utilicen o modifiquen','La nueva versión debe conservar las libertades originales.'),
      M(5,'¿Qué idea resume mejor el propósito del copyleft?', ['Mantener abiertas las libertades de uso y modificación en las versiones derivadas','Reservar el conocimiento para quien lo creó','Impedir que una obra pueda cambiar','Eliminar los derechos de autor'],'Mantener abiertas las libertades de uso y modificación en las versiones derivadas','Según el documento, el copyleft emplea los derechos de autor para mantener libre la obra y sus versiones derivadas.')
    ]
  },
  {
    id:'libre-open', unitId:'u2', section:'2.4', title:'Software libre vs. Open Source', icon:'⇄',
    intro:'Ambos se relacionan con el código abierto, pero el documento distingue sus enfoques: la libertad del usuario y la ética en el software libre, frente al método técnico y colaborativo del open source.',
    points:[
      'El software libre parte de una filosofía de libertad y del control de los usuarios sobre los programas.',
      'El open source se presenta como una metodología de desarrollo centrada en eficiencia, transparencia, colaboración, calidad y seguridad.',
      'El documento afirma que todo software libre es open source porque su código está abierto, pero no todo open source es software libre.',
      'La tabla del documento asocia GPL y AGPL con software libre, y MIT, Apache y BSD con open source.',
      'Ejemplos que aparecen en la tabla: GNU/Linux para software libre y Android para open source.'
    ], keywords:['Ética','Libertad del usuario','Método de desarrollo','GPL','MIT / Apache / BSD'],
    cards:[['¿En qué se enfoca el software libre?','En la libertad del usuario, el control del programa y una filosofía ética y social.'],['¿En qué se enfoca el open source?','En el desarrollo técnico, la eficiencia y la colaboración para construir software de calidad.'],['¿Qué relación establece el documento entre ambos?','Todo software libre es open source, pero el documento advierte que no todo open source es software libre.']],
    questions:[
      M(1,'¿Cuál es el enfoque principal del software libre según la tabla?', ['Ético y social','Solo comercial','Exclusivamente visual','Únicamente administrativo'],'Ético y social','La tabla compara el enfoque ético y social del software libre con el técnico y colaborativo del open source.'),
      M(1,'¿Qué ejemplo aparece en el documento para el software libre?', ['GNU/Linux','Android','Mercado Libre','WhatsApp'],'GNU/Linux','La tabla de diferencias menciona GNU/Linux como ejemplo de software libre.'),
      T(2,'Software libre y open source significan exactamente lo mismo en todos los casos.',false,'El documento dice que se usan como sinónimos a veces, pero no significan exactamente lo mismo.'),
      M(2,'¿Qué busca destacar el movimiento open source?', ['La eficiencia y la colaboración en el desarrollo','La prohibición de revisar el código','La libertad de ocultar las mejoras','El control exclusivo de una empresa'],'La eficiencia y la colaboración en el desarrollo','El documento presenta open source como una metodología técnica y colaborativa.'),
      M(3,'¿Qué lista de licencias aparece asociada al open source en la tabla del documento?', ['MIT, Apache y BSD','GPL y AGPL únicamente','LFDA y Ley Olimpia','ARCO y LFPDPPP'],'MIT, Apache y BSD','Es la lista que figura en la columna Open Source de la tabla.'),
      T(3,'Según el texto, todo software libre es open source porque su código está abierto.',true,'Esa relación se explica explícitamente en el apartado.'),
      M(4,'¿Cuál comparación coincide con el documento?', ['Software libre: libertad del usuario; open source: método técnico y colaborativo','Software libre: solo pago; open source: siempre cerrado','Software libre: sin código; open source: sin colaboración','Ambos prohíben modificar el programa'],'Software libre: libertad del usuario; open source: método técnico y colaborativo','La diferencia se basa en el énfasis ético y social frente al técnico y colaborativo.'),
      M(5,'Una persona quiere distinguir ambos enfoques. ¿Qué criterio es el más fiel al documento?', ['Preguntar si el énfasis es la libertad del usuario o el proceso técnico de desarrollo','Decidir solo por el nombre del programa','Suponer que ambas etiquetas siempre garantizan las mismas libertades','Determinar si el programa tiene imágenes'],'Preguntar si el énfasis es la libertad del usuario o el proceso técnico de desarrollo','El cuadro comparativo del documento utiliza las libertades y el enfoque principal para diferenciarlos.')
    ]
  },
  {
    id:'libertades', unitId:'u2', section:'2.5', title:'Las 4 libertades del software libre', icon:'✳',
    intro:'Las cuatro libertades descritas en el documento permiten usar un programa, estudiar cómo funciona, compartir copias y distribuir mejoras.',
    points:[
      'Libertad 0: ejecutar el programa para cualquier propósito.',
      'Libertad 1: estudiar cómo funciona el programa y acceder a su código fuente para poder modificarlo.',
      'Libertad 2: hacer copias y distribuirlas a otras personas.',
      'Libertad 3: mejorar el programa y distribuir la versión modificada para que otros se beneficien.',
      'Las libertades promueven una comunidad de conocimiento compartido y una evolución constante.'
    ], keywords:['0 · Usar','1 · Estudiar','2 · Compartir','3 · Mejorar'],
    cards:[['Libertad 0','Usar el programa para cualquier propósito.'],['Libertad 1','Estudiar cómo funciona y acceder al código fuente para modificarlo.'],['Libertad 2','Hacer copias y distribuirlas.'],['Libertad 3','Mejorar el programa y distribuir la versión mejorada.']],
    questions:[
      M(1,'¿Qué permite la libertad 0?', ['Usar el programa para cualquier propósito','Solo distribuir copias','Únicamente ver el código fuente','Modificarlo y ocultar la versión'],'Usar el programa para cualquier propósito','La libertad 0 se refiere a ejecutar el programa para cualquier fin.'),
      M(1,'¿Qué libertad permite hacer copias y distribuirlas?', ['Libertad 0','Libertad 1','Libertad 2','Libertad 3'],'Libertad 2','La libertad 2 se refiere a compartir copias.'),
      T(2,'La libertad 1 incluye estudiar cómo funciona el programa y acceder a su código fuente.',true,'El documento la relaciona con explorar y aprender sobre el programa.'),
      M(2,'¿Cuál es el objetivo de la libertad 3?', ['Mejorar el programa y distribuir la versión mejorada','Ejecutarlo para cualquier propósito','Impedir las copias','Ocultar el código fuente'],'Mejorar el programa y distribuir la versión mejorada','La libertad 3 permite compartir las mejoras con otras personas.'),
      M(3,'Una estudiante quiere aprender cómo está hecho un programa. ¿Qué libertad corresponde?', ['Libertad 0','Libertad 1','Libertad 2','Libertad 3'],'Libertad 1','Estudiar cómo funciona y acceder al código fuente corresponde a la libertad 1.'),
      T(3,'La libertad 2 consiste principalmente en modificar el código y compartir esa versión mejorada.',false,'Eso corresponde a la libertad 3; la libertad 2 trata de copiar y distribuir.'),
      M(4,'¿Qué secuencia coincide con las libertades 0 a 3?', ['Usar, estudiar, compartir copias, mejorar y distribuir mejoras','Estudiar, prohibir, vender, ocultar','Compartir, usar solo en casa, borrar, cerrar','Mejorar, ocultar, usar, impedir copias'],'Usar, estudiar, compartir copias, mejorar y distribuir mejoras','El orden reproduce los cuatro pilares descritos en el documento.'),
      M(5,'Una persona puede ejecutar el programa y compartir copias, pero no estudiar su código. ¿Qué libertad descrita sigue sin poder ejercer?', ['Libertad 0','Libertad 1','Libertad 2','Libertad 3'],'Libertad 1','La libertad 1 se refiere a estudiar el funcionamiento y acceder al código fuente.')
    ]
  },
  {
    id:'hacker-diy', unitId:'u2', section:'2.6', title:'Cultura hacker y DIY', icon:'⚙',
    intro:'El documento describe al hacker, en su sentido original, como alguien curioso que explora la tecnología para entenderla, experimentar y compartir conocimiento. DIY significa “hazlo tú mismo”.',
    points:[
      'La imagen de que todo hacker realiza actividades maliciosas proviene en gran medida del cine y los medios, según el texto.',
      'La cultura hacker se relaciona con pensamiento crítico, creatividad, aprendizaje continuo, investigación y experimentación.',
      'DIY (Do It Yourself) significa “hazlo tú mismo”: construir, reparar o modificar objetos por cuenta propia.',
      'En tecnología puede ser ensamblar una computadora, programar un robot, reparar un dispositivo o adaptar software.',
      'El movimiento maker impulsa talleres, laboratorios y comunidades que comparten herramientas, conocimientos y proyectos.',
      'La actividad de debate propone distinguir hackers éticos de personas que realizan actos dañinos, llamadas crackers en el documento.'
    ], keywords:['Curiosidad','Pensamiento crítico','DIY','Maker','Colaboración'],
    cards:[['¿Qué describe al hacker en su sentido original?','Una persona curiosa que explora la tecnología para comprenderla, mejorarla o resolver problemas.'],['¿Qué significa DIY?','Do It Yourself: hazlo tú mismo. Consiste en construir, reparar o modificar objetos por cuenta propia.'],['¿Qué es el movimiento maker?','Una expresión contemporánea del DIY con talleres, laboratorios y comunidades colaborativas.']],
    questions:[
      M(1,'¿Qué significa DIY?', ['Do It Yourself: hazlo tú mismo','Digital Internet Year','Datos Internos y Redes','Desarrollo Industrial y Yacimientos'],'Do It Yourself: hazlo tú mismo','El documento traduce DIY como “hazlo tú mismo”.'),
      M(1,'¿Qué actividad representa el DIY en tecnología?', ['Reparar un dispositivo por cuenta propia','Evitar aprender cómo funciona un equipo','Usar tecnología sin cuestionarla','Prohibir los proyectos en equipo'],'Reparar un dispositivo por cuenta propia','El texto da la reparación de dispositivos como ejemplo de DIY.'),
      T(2,'El documento afirma que un hacker, en su sentido original, es necesariamente una persona que actúa ilegalmente.',false,'El apartado aclara que esa imagen procede en gran medida del cine y los medios.'),
      M(2,'¿Con qué valores se relaciona la cultura hacker?', ['Pensamiento crítico, creatividad y aprendizaje continuo','Pasividad y secreto absoluto','Consumo sin investigación','Rechazo a compartir conocimientos'],'Pensamiento crítico, creatividad y aprendizaje continuo','Estos valores se enumeran en el apartado.'),
      M(3,'¿Cuál situación se parece al ejemplo escolar de cultura maker del documento?', ['Un club construye robots con piezas recicladas y aprende a programarlos','Un grupo se limita a comprar robots terminados','Los alumnos no comparten lo que aprenden','Una clase prohíbe experimentar con sensores'],'Un club construye robots con piezas recicladas y aprende a programarlos','El documento menciona un club de robótica con piezas recicladas y programación en Arduino.'),
      T(3,'El movimiento maker incluye comunidades que comparten herramientas, conocimientos y proyectos.',true,'El documento lo describe mediante talleres, laboratorios y comunidades colaborativas.'),
      M(4,'¿Qué diferencia refleja mejor el documento entre cultura hacker y DIY?', ['La cultura hacker enfatiza explorar y comprender; DIY, construir, reparar o modificar por cuenta propia','La cultura hacker solo trata de reparar objetos físicos y DIY solo de redes sociales','Ambos significan únicamente comprar software','DIY significa compartir contraseñas'],'La cultura hacker enfatiza explorar y comprender; DIY, construir, reparar o modificar por cuenta propia','Son los enfoques que describen los apartados respectivos.'),
      M(5,'¿Qué conducta encaja mejor con los principios descritos?', ['Experimentar con un dispositivo, aprender de los resultados y compartir el conocimiento','Usar herramientas sin comprenderlas y ocultar lo aprendido','Evitar modificar o reparar cualquier objeto','Asumir que toda exploración técnica es maliciosa'],'Experimentar con un dispositivo, aprender de los resultados y compartir el conocimiento','El documento vincula la cultura hacker con investigación, experimentación y conocimiento compartido.')
    ]
  },
  {
    id:'gnu-linux', unitId:'u2', section:'2.7', title:'GNU/Linux en el ámbito académico y social', icon:'▤',
    intro:'El documento presenta GNU/Linux como una herramienta accesible para aprender tecnología y como una alternativa que promueve autonomía, colaboración y libertad digital.',
    points:[
      'En educación, el código abierto permite que estudiantes de informática, programación y ciberseguridad estudien el funcionamiento del sistema.',
      'El documento señala que su gratuidad reduce la barrera económica para las instituciones educativas.',
      'En el ámbito social, ofrece una alternativa a los sistemas operativos de grandes empresas y promueve la privacidad y la libertad digital.',
      'El código transparente favorece que la comunidad colabore, detecte errores y los corrija.',
      'Ejemplo del texto: una preparatoria instala Ubuntu y los estudiantes usan Python y software de diseño sin pagar licencias.'
    ], keywords:['Código abierto','Educación','Acceso gratuito','Privacidad','Ubuntu'],
    cards:[['¿Qué ventaja académica destaca el documento?','Permite estudiar cómo funciona el sistema y experimentar con programación y ciberseguridad sin la barrera de una licencia de pago.'],['¿Qué promueve socialmente GNU/Linux según el texto?','Privacidad, libertad digital, colaboración y autonomía tecnológica.'],['¿Cuál es el ejemplo escolar?','Instalar Ubuntu en los laboratorios y utilizar Python y software de diseño sin pagar licencias.']],
    questions:[
      M(1,'¿Qué sistema se menciona en el ejemplo de una preparatoria?', ['Ubuntu','iOS','Windows Server','Photoshop'],'Ubuntu','El caso práctico habla de instalar Ubuntu en laboratorios.'),
      M(1,'¿Qué permite el código abierto en el ámbito académico?', ['Estudiar cómo funciona el sistema','Impedir la experimentación','Ocultar todo el código','Usarlo únicamente para videojuegos'],'Estudiar cómo funciona el sistema','El documento destaca el aprendizaje del funcionamiento interno del sistema.'),
      T(2,'El documento indica que GNU/Linux puede reducir barreras económicas en escuelas por ser gratuito.',true,'La gratuidad se presenta como una forma de facilitar el acceso a tecnología.'),
      M(2,'¿Qué favorece que el código sea transparente?', ['La colaboración y la detección y corrección de errores','Que solo una empresa revise los errores','Que los estudiantes no puedan aprender del sistema','Que desaparezca el trabajo de comunidad'],'La colaboración y la detección y corrección de errores','El texto conecta código abierto y transparente con la participación de la comunidad.'),
      M(3,'¿Qué combinación aparece en el ejemplo de uso académico?', ['Ubuntu, Python y software de diseño','Android, WhatsApp y redes sociales','Impress, videojuegos y torrents','Google Drive, apuestas y correo personal'],'Ubuntu, Python y software de diseño','Es la combinación que menciona el ejemplo práctico.'),
      T(3,'El uso social descrito para GNU/Linux se relaciona con privacidad y libertad digital.',true,'Así se describe su aportación social en el documento.'),
      M(4,'Una escuela busca enseñar programación sin pagar licencias y permitir estudiar el sistema. ¿Qué argumento del texto apoya su elección?', ['GNU/Linux es gratuito y de código abierto','El código debe permanecer oculto','Solo los expertos pueden utilizarlo','No permite aprendizaje de programación'],'GNU/Linux es gratuito y de código abierto','El texto destaca la gratuidad y la posibilidad de estudiar el sistema por dentro.'),
      M(5,'¿Qué resumen integra los beneficios académicos y sociales descritos?', ['Aprendizaje técnico accesible, colaboración, privacidad y libertad digital','Exclusividad económica y menor transparencia','Solo entretenimiento sin uso educativo','Restricción de la participación comunitaria'],'Aprendizaje técnico accesible, colaboración, privacidad y libertad digital','Estos son los beneficios que se mencionan en los ámbitos académico y social.')
    ]
  },
  {
    id:'corporaciones', unitId:'u3', section:'3.1', title:'Corporaciones de innovación tecnológica', icon:'◉',
    intro:'El texto describe a las grandes corporaciones tecnológicas como actores centrales de la innovación, con influencia sobre servicios digitales y sobre la información que recibe la población.',
    points:[
      'El documento nombra Google, Apple, Amazon, Microsoft y Meta como grandes corporaciones tecnológicas.',
      'Su inversión en investigación y desarrollo contribuye a crear sistemas operativos, aplicaciones y servicios de computación en la nube.',
      'El texto atribuye a Google el acceso a información, a Meta cambios en la comunicación, a Amazon cambios en comercio y logística y a Microsoft mejoras de productividad laboral.',
      'La competencia entre empresas impulsa desarrollos en inteligencia artificial, realidad virtual y análisis de big data.',
      'Los algoritmos de plataformas como Google y Meta seleccionan contenido e influyen en opiniones y decisiones de consumo; el texto advierte sobre polarización y cámaras de eco.'
    ], keywords:['Investigación y desarrollo','Algoritmos','Big data','Cámaras de eco','Control de información'],
    cards:[['¿Qué papel tienen las corporaciones tecnológicas según el documento?','Invierten en investigación y desarrollo y crean herramientas digitales de uso cotidiano.'],['¿Qué hacen los algoritmos de las plataformas?','Seleccionan y ordenan contenido, influyendo en la información que ve el usuario.'],['¿Qué riesgo se relaciona con las cámaras de eco?','Pueden polarizar y afectar la calidad del debate democrático.']],
    questions:[
      M(1,'¿Cuál empresa aparece en la lista de corporaciones tecnológicas del documento?', ['Meta','CECyTEG','The Document Foundation','Free Software Foundation'],'Meta','Meta forma parte de la lista de empresas citadas en el apartado.'),
      M(1,'¿Qué significa I+D en el contexto del texto?', ['Investigación y desarrollo','Internet y distribución','Identidad digital','Información y derechos'],'Investigación y desarrollo','El documento atribuye a estas empresas inversión en investigación y desarrollo.'),
      T(2,'Según el texto, los algoritmos de Google y Meta pueden influir en qué información se presenta a los usuarios.',true,'El apartado explica que estas plataformas actúan como curadoras del contenido.'),
      M(2,'¿Qué actividad se relaciona con Amazon en el apartado?', ['Comercio y logística','Solo educación escolar','Protección legal de datos','Diseño de sistemas libres exclusivamente'],'Comercio y logística','El documento asocia Amazon con transformaciones en el comercio y la logística.'),
      M(3,'¿Qué es una “cámara de eco” en el contexto del documento?', ['Un riesgo de filtrado de contenido que puede polarizar opiniones','Un programa para organizar archivos','Una herramienta de copia de seguridad','Un tipo de licencia de software'],'Un riesgo de filtrado de contenido que puede polarizar opiniones','El texto advierte que el filtrado algorítmico puede crear cámaras de eco y polarización.'),
      T(3,'El documento presenta la competencia empresarial como un factor que impulsa desarrollos en IA, realidad virtual y big data.',true,'La competencia entre las corporaciones se vincula con el desarrollo acelerado de esas áreas.'),
      M(4,'¿Qué tensión señala el texto sobre las plataformas dominantes?', ['Facilitan gestionar información, pero también pueden influir en opiniones y consumo','No organizan ningún contenido','Solo almacenan datos sin analizarlos','No participan en la economía mundial'],'Facilitan gestionar información, pero también pueden influir en opiniones y consumo','El texto reconoce la utilidad del filtrado y advierte sobre sus consecuencias sociales.'),
      M(5,'¿Qué combinación describe mejor el poder de estas corporaciones según el apartado?', ['Innovan con inversión tecnológica y también controlan la selección de información visible','Solo fabrican equipos sin servicios digitales','No influyen en la interacción social','Su función se limita a crear documentos escolares'],'Innovan con inversión tecnológica y también controlan la selección de información visible','El texto trata tanto su papel innovador como el control sobre el contenido en línea.')
    ]
  },
  {
    id:'colonialismo-datos', unitId:'u3', section:'3.2', title:'Colonialismo de datos', icon:'◌',
    intro:'El colonialismo de datos se describe como la concentración de los datos generados globalmente en manos de unos pocos actores poderosos.',
    points:[
      'Se refiere a la concentración desproporcionada de los datos generados en el mundo en manos de grandes actores tecnológicos.',
      'Los datos extraídos incluyen clics, búsquedas, ubicación y preferencias personales.',
      'La huella digital se convierte en una fuente de riqueza y poder para quienes recolectan, agregan y analizan la información.',
      'El documento señala que los beneficios económicos se acumulan en centros de poder digital, mientras muchas personas que generan los datos tienen poco control y reciben pocos beneficios.',
      'Las plataformas pueden imponer condiciones de servicio que obligan a ceder control sobre los datos; estos pueden influir en precios y distribución de recursos sin consentimiento informado.'
    ], keywords:['Datos personales','Extracción','Concentración','Asimetría de poder','Consentimiento informado'],
    cards:[['¿Qué es el colonialismo de datos?','La concentración desproporcionada de datos globales en manos de unos pocos actores poderosos.'],['¿Qué datos se mencionan como ejemplo?','Clics, búsquedas, ubicación y preferencias.'],['¿Qué es la asimetría de poder en este tema?','Una situación en la que las plataformas dominantes establecen condiciones y los usuarios tienen poco control sobre sus datos.']],
    questions:[
      M(1,'¿Cuál de estos datos aparece como ejemplo de información extraída?', ['Ubicación','Solo el color de la pantalla','El tamaño físico del teclado','La marca de una libreta'],'Ubicación','El documento enumera clics, búsquedas, ubicación y preferencias.'),
      M(1,'¿En manos de quién se concentra una gran parte de los datos, según la definición?', ['Pocos actores poderosos, principalmente grandes tecnológicas','Cada usuario exclusivamente','Solo las escuelas públicas','Únicamente bibliotecas locales'],'Pocos actores poderosos, principalmente grandes tecnológicas','Así define el texto el colonialismo de datos.'),
      T(2,'El documento afirma que las personas que generan datos siempre reciben los beneficios económicos principales.',false,'El texto dice que las personas generadoras rara vez reciben beneficios o control real sobre su uso.'),
      M(2,'¿Qué puede ocurrir con los datos que recolectan las plataformas?', ['Se analizan para predecir y potencialmente manipular comportamientos','Se destruyen necesariamente al instante','No tienen ningún valor económico','Solo se imprimen en documentos'],'Se analizan para predecir y potencialmente manipular comportamientos','El documento describe modelos de negocio basados en predicción y posible manipulación del comportamiento.'),
      M(3,'¿Qué describe la “asimetría de poder” del apartado?', ['Las plataformas fijan condiciones y las personas tienen poco control sobre sus datos','Todos los usuarios deciden por igual cada condición','Los datos no salen del dispositivo','Las empresas no pueden establecer términos de servicio'],'Las plataformas fijan condiciones y las personas tienen poco control sobre sus datos','El texto señala que las plataformas dominantes dictan los términos de servicio.'),
      T(3,'El documento menciona que los datos pueden utilizarse para decisiones sobre precios o distribución de recursos.',true,'Estos usos aparecen en el apartado sobre el control global de datos.'),
      M(4,'¿Por qué se compara la extracción de datos con la extracción de recursos?', ['Porque la huella digital funciona como materia prima que genera riqueza y poder','Porque los datos son minerales','Porque los usuarios reciben siempre pago directo','Porque no hay diferencia entre datos y ubicación física'],'Porque la huella digital funciona como materia prima que genera riqueza y poder','La comparación del texto explica cómo los datos personales se vuelven una fuente de valor para actores dominantes.'),
      M(5,'¿Qué situación refleja con mayor precisión el colonialismo de datos descrito?', ['Una plataforma concentra datos de usuarios y decide sus condiciones mientras las personas tienen poco control','Un estudiante guarda un documento solo en su computadora','Un equipo de clase comparte una presentación con permiso','Una persona modifica un programa libre localmente'],'Una plataforma concentra datos de usuarios y decide sus condiciones mientras las personas tienen poco control','La definición combina concentración de datos y desigualdad en la capacidad de decidir sobre ellos.')
    ]
  },
  {
    id:'dependencia', unitId:'u3', section:'3.3', title:'Dependencia tecnológica', icon:'⟳',
    intro:'La dependencia tecnológica es la dificultad de realizar actividades esenciales sin un dispositivo digital o una conexión a internet.',
    points:[
      'Abarca actividades laborales, educativas y sociales que dependen de dispositivos o internet.',
      'Trámites como solicitudes de subsidios, matriculación, impuestos y citas médicas pueden gestionarse en línea.',
      'La falta de acceso, habilidades o dispositivos puede generar exclusión social.',
      'El texto plantea la necesidad de resiliencia y alfabetización digital.',
      'El objetivo indicado es que la tecnología sirva a la sociedad de forma sostenible y equitativa, y que las personas mantengan capacidad de funcionar autónomamente cuando sea necesario.'
    ], keywords:['Actividades esenciales','Digitalización','Exclusión social','Alfabetización digital','Autonomía'],
    cards:[['¿Qué es la dependencia tecnológica?','La incapacidad de realizar actividades básicas o esenciales sin un dispositivo digital o conexión a internet.'],['¿Qué ejemplos de trámites se gestionan en línea?','Solicitudes de subsidios, matriculación, impuestos y citas médicas.'],['¿Qué objetivo menciona el documento para reducir vulnerabilidad?','Promover resiliencia y alfabetización digital, manteniendo capacidad de actuar de forma autónoma.']],
    questions:[
      M(1,'¿Qué situación describe la dependencia tecnológica?', ['No poder realizar una actividad esencial sin dispositivo o internet','Usar una computadora para una tarea concreta','Aprender a reparar un equipo','Compartir un documento por decisión propia'],'No poder realizar una actividad esencial sin dispositivo o internet','Corresponde a la definición de dependencia tecnológica del documento.'),
      M(1,'¿Cuál trámite aparece como ejemplo de digitalización?', ['Cita médica','Reparación de una bicicleta','Preparar una comida','Imprimir un dibujo a mano'],'Cita médica','El texto incluye las citas médicas entre los servicios gestionados en línea.'),
      T(2,'La falta de acceso, habilidades o dispositivos puede generar exclusión social.',true,'El texto afirma que quienes no pueden conectarse quedan marginados de partes de la vida cívica y económica.'),
      M(2,'¿Qué se entiende por alfabetización digital en el contexto de este apartado?', ['Promover las capacidades para desenvolverse en un entorno digital','Eliminar toda actividad presencial','Depender de una sola plataforma','Evitar aprender a usar dispositivos'],'Promover las capacidades para desenvolverse en un entorno digital','La alfabetización digital se menciona como una vía para mitigar la dependencia.'),
      M(3,'¿Qué combinación de servicios ilustra que la tecnología se ha vuelto un requisito social?', ['Matriculación, impuestos y citas médicas','Solo videojuegos y entretenimiento','Únicamente mensajería entre amigos','Solo edición de imágenes'],'Matriculación, impuestos y citas médicas','Esos trámites aparecen en el documento como interacciones esenciales en línea.'),
      T(3,'El objetivo del apartado es que las personas dependan de la tecnología para toda actividad y no puedan actuar sin ella.',false,'El texto propone mantener la capacidad humana de funcionar de manera autónoma cuando sea necesario.'),
      M(4,'Una persona no tiene internet y no logra completar un trámite que solo se ofrece en línea. ¿Qué problema del documento se ilustra?', ['Exclusión social vinculada con la digitalización','Copyleft','Código abierto','Contaminación por residuos electrónicos'],'Exclusión social vinculada con la digitalización','El apartado relaciona la falta de acceso con la marginación de servicios cívicos y económicos.'),
      M(5,'¿Qué respuesta coincide mejor con la meta del apartado?', ['Combinar alfabetización digital con capacidad de actuar autónomamente cuando haga falta','Eliminar todo servicio digital','Hacer que cada trámite requiera conexión permanente','Sustituir las habilidades por dispositivos más nuevos'],'Combinar alfabetización digital con capacidad de actuar autónomamente cuando haga falta','El documento propone resiliencia y alfabetización digital para que la tecnología sirva de forma sostenible y equitativa.')
    ]
  },
  {
    id:'brecha', unitId:'u3', section:'3.4', title:'Desigualdad en el acceso a tecnologías digitales', icon:'⇧',
    intro:'La brecha digital es la diferencia entre quienes pueden acceder y utilizar herramientas digitales eficazmente y quienes no pueden hacerlo.',
    points:[
      'Incluye diferencias en acceso a internet de alta velocidad, computadoras, teléfonos inteligentes y habilidades para utilizarlos.',
      'La disparidad agrava desigualdades socioeconómicas existentes.',
      'El acceso tecnológico influye en oportunidades educativas, laborales y en el ejercicio de la ciudadanía.',
      'El documento propone ampliar la banda ancha asequible en zonas desatendidas.',
      'También propone programas de alfabetización digital centrados en el uso, el pensamiento crítico y el empoderamiento personal y comunitario.'
    ], keywords:['Acceso','Habilidades','Infraestructura','Banda ancha','Alfabetización digital'],
    cards:[['¿Qué es la brecha digital?','La diferencia entre quienes pueden acceder y usar eficazmente herramientas digitales y quienes no.'],['¿Qué dos estrategias plantea el documento?','Ampliar la infraestructura de banda ancha asequible y promover la alfabetización digital.'],['¿Qué desigualdades puede agravar?','Diferencias en oportunidades educativas, laborales y participación ciudadana.']],
    questions:[
      M(1,'¿Qué describe la brecha digital?', ['La diferencia entre quienes pueden acceder y usar herramientas digitales y quienes no','La separación entre dos carpetas de una computadora','La velocidad de un procesador únicamente','La cantidad de redes sociales de una persona'],'La diferencia entre quienes pueden acceder y usar herramientas digitales y quienes no','Es la definición del apartado.'),
      M(1,'¿Qué infraestructura propone ampliar el documento?', ['Banda ancha asequible en áreas desatendidas','Solo salas de videojuegos','Únicamente redes privadas escolares','Cableado sin acceso a internet'],'Banda ancha asequible en áreas desatendidas','El texto plantea priorizar la expansión de banda ancha asequible.'),
      T(2,'La brecha digital puede afectar la educación, el trabajo y el ejercicio de la ciudadanía.',true,'El documento relaciona el acceso tecnológico con esas tres áreas.'),
      M(2,'¿Qué debe incluir la alfabetización digital que propone el texto?', ['Uso, pensamiento crítico y empoderamiento','Solo memorizar marcas de teléfonos','Evitar que las personas usen datos','Aprender únicamente a comprar equipos'],'Uso, pensamiento crítico y empoderamiento','Son los enfoques mencionados en las estrategias de inclusión digital.'),
      M(3,'¿Qué combinación de factores perpetúa la desigualdad digital según el documento?', ['Barreras de acceso y capacidades para utilizar herramientas','Solo el diseño de los teclados','Únicamente el color de las pantallas','La disponibilidad de hojas de papel'],'Barreras de acceso y capacidades para utilizar herramientas','La definición y las estrategias tratan tanto el acceso como las habilidades.'),
      T(3,'El documento trata la conectividad como un asunto relacionado con inclusión social y económica.',true,'El apartado señala que la falta de acceso puede traducirse en exclusión social y económica.'),
      M(4,'Una comunidad tiene señal de internet, pero sus habitantes no saben usar servicios digitales con criterio. ¿Qué medida del texto aborda directamente esa dificultad?', ['Programas de alfabetización digital','Solo ampliar la señal sin formación','Reemplazar los teléfonos cada año','Restringir el acceso a la información'],'Programas de alfabetización digital','La educación propuesta incluye uso y pensamiento crítico.'),
      M(5,'¿Qué estrategia refleja la propuesta de inclusión digital justa?', ['Mejorar infraestructura asequible y enseñar habilidades digitales críticas','Concentrar la conectividad en zonas ya atendidas','Suponer que entregar dispositivos resuelve todos los problemas','Reducir las oportunidades de acceso'],'Mejorar infraestructura asequible y enseñar habilidades digitales críticas','El documento combina expansión de infraestructura y programas de alfabetización digital.')
    ]
  },
  {
    id:'contaminacion', unitId:'u3', section:'3.5', title:'Contaminación digital y tecnológica', icon:'♲',
    intro:'La contaminación digital incluye los impactos ambientales del ciclo de vida de las TIC: desde extraer materias primas hasta consumir energía y desechar equipos.',
    points:[
      'Incluye la extracción de materias primas, el consumo energético de centros de datos y los residuos electrónicos (e-waste).',
      'Los residuos pueden contener plomo, mercurio y cadmio; si no se gestionan bien, contaminan suelo y agua y afectan la salud.',
      'El documento menciona el traslado de residuos desde países desarrollados hacia países en desarrollo.',
      'Los centros de datos y las redes consumen energía continuamente; el consumo contribuye a emisiones de gases de efecto invernadero.',
      'Las medidas propuestas son reducir, reutilizar, reparar, prolongar la vida de los equipos, limpiar datos innecesarios y migrar centros de datos a energías renovables.'
    ], keywords:['E-waste','Plomo / mercurio / cadmio','Centros de datos','GEI','Reducir · Reutilizar · Reparar'],
    cards:[['¿Qué es el e-waste?','Residuo electrónico generado por dispositivos como teléfonos, tabletas y computadoras.'],['¿Qué sustancias tóxicas menciona el documento?','Plomo, mercurio y cadmio.'],['¿Qué enfoque propone para la sostenibilidad digital?','Economía circular: reducir, reutilizar y reparar, prolongar la vida de los dispositivos y cuidar el consumo digital.']],
    questions:[
      M(1,'¿Qué significa e-waste en el apartado?', ['Residuos electrónicos','Red de datos abierta','Energía solar','Software libre'],'Residuos electrónicos','El documento utiliza e-waste para hablar de desechos electrónicos.'),
      M(1,'¿Cuál sustancia aparece entre las que pueden contener los residuos electrónicos?', ['Mercurio','Oxígeno puro','Azúcar','Sal de mesa'],'Mercurio','El texto menciona plomo, mercurio y cadmio.'),
      T(2,'La contaminación digital incluye el consumo de energía de los centros de datos.',true,'El consumo energético de los centros de datos es parte del ciclo de vida descrito.'),
      M(2,'¿Qué puede ocurrir si los residuos electrónicos no se gestionan adecuadamente?', ['Contaminar el suelo y el agua y afectar la salud','Desaparecer sin impacto','Reducir automáticamente las emisiones','Convertirse en equipos nuevos sin proceso'],'Contaminar el suelo y el agua y afectar la salud','El documento destaca sustancias tóxicas y daño ambiental.'),
      M(3,'¿Qué práctica personal recomienda el texto para la sostenibilidad digital?', ['Prolongar la vida útil de los dispositivos','Reemplazar cada equipo cuanto antes','Guardar copias innecesarias indefinidamente','Evitar reparar dispositivos'],'Prolongar la vida útil de los dispositivos','El texto propone extender la vida útil y priorizar reparación y reutilización.'),
      T(3,'El documento explica que la “nube” depende de una infraestructura física con consumo de energía.',true,'Centros de datos y redes consumen energía y contribuyen a la huella de carbono.'),
      M(4,'¿Qué conjunto resume el enfoque de economía circular que menciona el apartado?', ['Reducir, reutilizar y reparar','Comprar, reemplazar y desechar','Almacenar, imprimir y olvidar','Actualizar, desechar y repetir'],'Reducir, reutilizar y reparar','El documento prioriza estas tres acciones sobre el reemplazo constante.'),
      M(5,'¿Qué conjunto reúne medidas de sostenibilidad descritas en el documento?', ['Reparar equipos, prolongar su vida útil, limpiar datos innecesarios y usar energía renovable en centros de datos','Aumentar el reemplazo y mantener equipos encendidos sin necesidad','Enviar residuos a comunidades vulnerables sin control','Ignorar el consumo energético de los servicios digitales'],'Reparar equipos, prolongar su vida útil, limpiar datos innecesarios y usar energía renovable en centros de datos','Estas medidas aparecen en el apartado de sostenibilidad digital y responsabilidad.')
    ]
  },
  {
    id:'writer', unitId:'u4a', section:'4.1–4.2', title:'LibreOffice y procesadores de texto libres', icon:'▤',
    intro:'Un procesador de textos permite crear y editar documentos escritos. LibreOffice reúne herramientas de oficina gratuitas y de código abierto; Writer está destinado al texto.',
    points:[
      'Un procesador de textos permite crear, corregir, ordenar y dar formato a documentos escritos.',
      'LibreOffice es una suite ofimática gratuita y de código abierto, creada en 2010 por una comunidad internacional y mantenida por The Document Foundation.',
      'LibreOffice Writer es el programa de la suite destinado a crear y editar documentos de texto.',
      'Writer permite cambiar tipo y tamaño de letra, insertar imágenes y tablas, numerar páginas, crear portadas y generar índices automáticos.',
      'La actividad del documento pide un título de 18 puntos, negritas, centrado, al menos tres párrafos, dos tipos de letra, párrafos justificados e insertar una imagen.'
    ], keywords:['Suite ofimática','Writer','Formato de texto','Imágenes y tablas','Índices automáticos'],
    cards:[['¿Qué es un procesador de textos?','Un programa para crear, editar, corregir y dar formato a documentos escritos.'],['¿Para qué se usa Writer?','Para crear y editar textos; permite dar formato, insertar imágenes y tablas y preparar documentos.'],['¿Quién mantiene LibreOffice?','The Document Foundation. El documento indica que la suite fue creada en 2010 por una comunidad internacional.']],
    questions:[
      M(1,'¿Cuál es el procesador de textos de LibreOffice?', ['Writer','Calc','Impress','Ubuntu'],'Writer','El documento identifica LibreOffice Writer como la herramienta para documentos de texto.'),
      M(1,'¿Qué organización mantiene LibreOffice según el documento?', ['The Document Foundation','Meta','Free Software Foundation','CECyTEG'],'The Document Foundation','Ese nombre aparece en el apartado de LibreOffice.'),
      T(2,'Un procesador de textos permite editar un documento después de escribirlo.',true,'El documento menciona que se puede corregir y cambiar el estilo cuantas veces sea necesario.'),
      M(2,'¿Cuál función se atribuye a Writer?', ['Insertar imágenes y tablas','Calcular exclusivamente promedios','Crear sistemas operativos','Gestionar redes de una escuela'],'Insertar imágenes y tablas','El apartado enumera imágenes, tablas, numeración, portadas e índices.'),
      M(3,'¿Qué descripción corresponde a LibreOffice?', ['Una suite ofimática gratuita y de código abierto','Un único editor de imágenes de pago','Una plataforma de mensajería','Un sistema exclusivo para teléfonos'],'Una suite ofimática gratuita y de código abierto','Así describe el texto a la suite.'),
      T(3,'La actividad de Writer pide justificar los párrafos e insertar una imagen relacionada con los intereses del estudiante.',true,'Ambas tareas aparecen en las instrucciones de la presentación personal.'),
      M(4,'En la actividad del documento, ¿qué formato se pide para el título “Mi Presentación Personal”?', ['Tamaño 18, negritas y centrado','Tamaño 8, cursivas y a la derecha','Tamaño 24, sin formato','Tamaño 12 y justificado'],'Tamaño 18, negritas y centrado','La lista de instrucciones da esos formatos y permite elegir el color.'),
      M(5,'Un estudiante necesita redactar una tarea, insertar una imagen, crear una portada y numerar páginas. ¿Qué herramienta descrita se ajusta mejor?', ['LibreOffice Writer','LibreOffice Calc','LibreOffice Impress únicamente','OpenStreetMap'],'LibreOffice Writer','Esas funciones se enumeran para Writer en el documento.')
    ]
  },
  {
    id:'calc', unitId:'u4a', section:'4.3', title:'Hojas de cálculo libres · Calc', icon:'▦',
    intro:'Las hojas de cálculo organizan y analizan datos en filas y columnas. LibreOffice Calc permite usar fórmulas, crear gráficas y ordenar o filtrar información.',
    points:[
      'Calc forma parte de LibreOffice y permite realizar operaciones matemáticas y organizar bases de datos sencillas.',
      'Las hojas de cálculo disponen los datos en tablas de filas y columnas.',
      'Las fórmulas y funciones automatizan sumas, promedios, porcentajes y otros cálculos, lo que ahorra tiempo y reduce errores.',
      'Las gráficas pueden representar datos mediante barras, líneas o pasteles.',
      'El documento muestra las funciones SUMA, PROMEDIO, MAX, MIN y MODA, aplicadas al rango C2:C16. Calc también permite ordenar, filtrar y analizar datos.'
    ], keywords:['Filas y columnas','Fórmulas','Gráficas','Ordenar y filtrar','SUMA · PROMEDIO · MAX · MIN · MODA'],
    cards:[['¿Para qué sirve Calc?','Para organizar, analizar y representar datos; también permite realizar cálculos y crear gráficas.'],['¿Qué calcula PROMEDIO?','La media de los valores indicados. En la actividad se usa =promedio(c2:c16).'],['¿Qué devuelve MODA?','La edad o valor que más se repite en el conjunto de datos.']],
    questions:[
      M(1,'¿Cuál programa de LibreOffice está diseñado para hojas de cálculo?', ['Calc','Writer','Impress','Signal'],'Calc','El documento identifica Calc como herramienta de hojas de cálculo.'),
      M(1,'¿Cómo se organizan los datos en una hoja de cálculo?', ['Filas y columnas','Solo párrafos','Diapositivas y transiciones','Carpetas y enlaces exclusivamente'],'Filas y columnas','El texto explica que los datos se distribuyen en tablas de filas y columnas.'),
      T(2,'Calc permite crear gráficas de barras, líneas o pasteles.',true,'Los tres tipos se mencionan en el apartado.'),
      M(2,'¿Qué función identifica el valor que más se repite?', ['MODA','MAX','MIN','SUMA'],'MODA','El documento define MODA como la edad que aparece con mayor frecuencia.'),
      M(3,'¿Qué función se utiliza para encontrar la edad más alta de la lista?', ['=max(c2:c16)','=min(c2:c16)','=promedio(c2:c16)','=moda(c2:c16)'],'=max(c2:c16)','MAX identifica el valor máximo en el rango indicado.'),
      M(3,'¿Qué fórmula permite encontrar la edad mínima en el rango C2:C16?', ['=min(c2:c16)','=max(c2:c16)','=suma(c2:c16)','=moda(c2:c16)'],'=min(c2:c16)','La función MIN identifica el valor más bajo del rango.'),
      M(4,'Una clase quiere obtener el promedio de edades del grupo usando el rango indicado en el cuadernillo. ¿Qué fórmula corresponde?', ['=promedio(c2:c16)','=suma(c2:c16)','=min(c2:c16)','=max(c2:c16)'],'=promedio(c2:c16)','La actividad asigna PROMEDIO al cálculo de la edad promedio.'),
      M(5,'¿Qué fórmula calcula la suma total de las edades del rango C2:C16?', ['=suma(c2:c16)','=promedio(c2:c16)','=max(c2:c16)','=moda(c2:c16)'],'=suma(c2:c16)','La actividad del cuadernillo indica =suma(c2:c16) para sumar las edades.')
    ]
  },
  {
    id:'impress', unitId:'u4b', section:'4.3', title:'Presentaciones electrónicas libres', icon:'▧',
    intro:'Las presentaciones electrónicas comparten información mediante textos, imágenes, gráficos, videos y recursos visuales. El documento da especial atención a LibreOffice Impress.',
    points:[
      'Las presentaciones permiten exponer información de forma clara, creativa y organizada.',
      'El documento menciona LibreOffice Impress, OnlyOffice Presentation, Apache OpenOffice Impress y Google Presentaciones como alternativas.',
      'LibreOffice Impress es gratuito, fácil de utilizar y compatible con distintos sistemas operativos, según el texto.',
      'Impress permite insertar imágenes, tablas, diagramas, animaciones y transiciones.',
      'La actividad propone crear una presentación de 5 a 7 diapositivas y exponerla durante 3 a 5 minutos.'
    ], keywords:['Diapositivas','Impress','Imágenes y gráficos','Animaciones','Transiciones'],
    cards:[['¿Para qué sirve una presentación electrónica?','Para compartir información mediante texto, imágenes, gráficos, videos y otros recursos visuales.'],['¿Qué herramienta destaca el documento?','LibreOffice Impress.'],['¿Qué recursos puede insertar Impress?','Imágenes, tablas, diagramas, animaciones y transiciones.']],
    questions:[
      M(1,'¿Cuál programa recibe especial énfasis para crear presentaciones?', ['LibreOffice Impress','LibreOffice Writer','LibreOffice Calc','Joplin'],'LibreOffice Impress','El documento señala que se dará especial énfasis a Impress.'),
      M(1,'¿Cuál elemento puede formar parte de una presentación electrónica?', ['Gráficos','Solo fórmulas de hoja de cálculo','Únicamente código fuente','Contraseñas personales obligatorias'],'Gráficos','El apartado menciona texto, imágenes, gráficos, videos y recursos visuales.'),
      T(2,'LibreOffice Impress permite insertar tablas, diagramas, animaciones y transiciones.',true,'Esas funciones aparecen descritas en el apartado.'),
      M(2,'¿Cuál otra alternativa aparece nombrada en el documento?', ['Apache OpenOffice Impress','Windows Defender','Google Authenticator','Arduino IDE'],'Apache OpenOffice Impress','Se enumera junto con otras herramientas de presentación.'),
      M(3,'¿Cuántas diapositivas propone la actividad práctica?', ['Entre 5 y 7','Exactamente 2','Entre 15 y 20','Una sola'],'Entre 5 y 7','Las instrucciones indican una presentación de entre cinco y siete diapositivas.'),
      T(3,'La actividad pide exponer el trabajo de forma breve, durante 3 a 5 minutos.',true,'El tiempo aparece en las instrucciones.'),
      M(4,'¿Qué conjunto coincide con recursos que Impress puede usar para comunicar ideas?', ['Imágenes, tablas, diagramas, animaciones y transiciones','Solo texto sin formato','Únicamente filtros de datos','Cookies, rastreadores y algoritmos'],'Imágenes, tablas, diagramas, animaciones y transiciones','La lista reproduce las posibilidades que presenta el texto.'),
      M(5,'Un equipo debe presentar un proyecto escolar con texto e imágenes y apoyar su exposición con transiciones sencillas. ¿Qué herramienta del apartado corresponde?', ['LibreOffice Impress','LibreOffice Calc','DuckDuckGo','Joplin'],'LibreOffice Impress','Impress está destinado a crear presentaciones y ofrece recursos visuales y transiciones.')
    ]
  },
  {
    id:'plataformas', unitId:'u4b', section:'4.4', title:'Plataformas digitales libres de uso cotidiano', icon:'⌁',
    intro:'El documento presenta opciones para distintas necesidades diarias y plantea que conocerlas permite elegir herramientas con mayor criterio.',
    points:[
      'DuckDuckGo se propone como alternativa de búsqueda; el documento afirma que no guarda búsquedas ni persigue al usuario con anuncios.',
      'Signal aparece como alternativa de mensajería con mensajes cifrados.',
      'CryptPad se presenta para guardar documentos en la nube y editarlos en equipo.',
      'GIMP se menciona para diseño; VLC para reproducir archivos sin anuncios ni rastreo; OpenStreetMap y OrganicMaps para mapas; Joplin para notas.',
      'El texto destaca la libertad de elegir, conocer diferencias y tomar decisiones conscientes sobre el uso de la tecnología.'
    ], keywords:['DuckDuckGo','Signal','CryptPad','GIMP / VLC','OpenStreetMap / Joplin'],
    cards:[['¿Qué alternativa de mensajería nombra el documento?','Signal, descrita como una aplicación con mensajes cifrados.'],['¿Para qué sirve CryptPad en el ejemplo?','Guardar archivos en la nube y editar documentos en equipo.'],['¿Qué herramienta se propone para notas?','Joplin, como alternativa libre a Google Keep en el documento.']],
    questions:[
      M(1,'¿Qué herramienta aparece como alternativa para tomar notas?', ['Joplin','GIMP','VLC','Signal'],'Joplin','El documento presenta Joplin como alternativa para notas y pendientes.'),
      M(1,'¿Qué herramienta se presenta para diseño gráfico?', ['GIMP','DuckDuckGo','OpenStreetMap','CryptPad'],'GIMP','El texto menciona GIMP como alternativa para diseño.'),
      T(2,'El documento presenta Signal como una app de mensajería con mensajes cifrados.',true,'Así se describe en el ejemplo de uso cotidiano.'),
      M(2,'¿Qué servicio se propone para crear y editar documentos en equipo en la nube?', ['CryptPad','VLC','Joplin','OrganicMaps'],'CryptPad','CryptPad se describe para guardar archivos y editarlos de forma colaborativa.'),
      M(3,'¿Qué relación herramienta-uso coincide con el documento?', ['VLC: reproducir archivos multimedia','GIMP: mensajería cifrada','Signal: diseño gráfico','Joplin: mapas y rutas'],'VLC: reproducir archivos multimedia','VLC se menciona como reproductor de archivos de video y música.'),
      T(3,'OpenStreetMap y OrganicMaps aparecen como opciones para consultar mapas sin seguimiento descrito en el texto.',true,'El documento los plantea como alternativas a Google Maps para encontrar direcciones.'),
      M(4,'Una persona necesita buscar información para una tarea y quiere probar la alternativa de búsqueda citada en el PDF. ¿Cuál elegiría?', ['DuckDuckGo','CryptPad','GIMP','Impress'],'DuckDuckGo','El apartado propone DuckDuckGo como alternativa para buscar información.'),
      M(5,'¿Qué idea general acompaña la lista de plataformas libres?', ['Conocer alternativas permite elegir de manera consciente cómo usar la tecnología','Todas las personas deben abandonar inmediatamente cualquier servicio conocido','Todas las herramientas cumplen exactamente la misma función','Las opciones libres solo sirven para tareas escolares'],'Conocer alternativas permite elegir de manera consciente cómo usar la tecnología','El documento aclara que no hay que dejar de usar todo de golpe, sino conocer opciones y elegir con criterio.')
    ]
  },
  {
    id:'normatividad', unitId:'u5', section:'5.1', title:'Normatividad del ciberespacio y servicios digitales', icon:'§',
    intro:'El ciberespacio no es un espacio sin consecuencias. El documento describe normas legales mexicanas y reglas institucionales que rigen el uso de servicios y equipos digitales.',
    points:[
      'La Ley Federal del Derecho de Autor protege software y contenidos digitales contra reproducción no autorizada, piratería y distribución ilícita.',
      'El Código Penal Federal y los códigos estatales contemplan delitos informáticos como acceso ilícito, alteración o destrucción de datos, suplantación de identidad y violencia digital.',
      'La Ley Olimpia reconoce y sanciona la difusión de contenido íntimo sexual sin consentimiento expreso por medios digitales.',
      'La Ley General de Educación promueve el uso responsable y ético de las TICCAD en establecimientos educativos.',
      'Las reglas escolares distinguen usos permitidos de Wi-Fi, correo y equipos, frente a acciones prohibidas como acoso, spam, instalación sin licencia o intentos de vulnerar servidores.'
    ], keywords:['LFDA','Código Penal','Ley Olimpia','Ley General de Educación','Reglamento escolar'],
    cards:[['¿Qué protege la LFDA según el texto?','Software, obras literarias, imágenes, videos y contenidos digitales frente a reproducción no autorizada y piratería.'],['¿Qué conducta aborda la Ley Olimpia según el documento?','La difusión, compilación o publicación de contenido íntimo sexual sin consentimiento expreso por medios digitales.'],['¿Qué regula el reglamento escolar?','Los derechos y obligaciones al usar equipos, redes y cuentas institucionales.']],
    questions:[
      M(1,'¿Qué ley menciona el documento para proteger software y contenidos digitales contra la reproducción no autorizada?', ['Ley Federal del Derecho de Autor','Ley Olimpia','Ley General de Educación','LFPDPPP'],'Ley Federal del Derecho de Autor','La LFDA aparece asociada a la protección de obras digitales y contra la piratería.'),
      M(1,'¿Qué tipo de conducta relaciona el documento con la Ley Olimpia?', ['Difundir contenido íntimo sexual sin consentimiento','Crear una tabla de cálculo','Usar software de código abierto','Realizar una copia de seguridad'],'Difundir contenido íntimo sexual sin consentimiento','Esa es la conducta descrita en el apartado.'),
      T(2,'El documento sostiene que las acciones dentro del ciberespacio pueden tener consecuencias reales.',true,'El apartado explica que el entorno digital y el físico están entrelazados.'),
      M(2,'¿Cuál conducta aparece como uso permitido de la red Wi-Fi escolar?', ['Investigación académica y acceso a plataformas educativas','Intentos de vulnerar servidores escolares','Consumo de contenidos para adultos','Descarga P2P de torrents según la tabla'],'Investigación académica y acceso a plataformas educativas','La tabla institucional lista investigación académica y plataformas educativas como usos fomentados.'),
      M(3,'¿Cuál conducta aparece como prohibida en el uso del correo institucional?', ['Envío de spam y acoso','Comunicación con docentes','Envío de tareas','Acceso a licencias estudiantiles oficiales'],'Envío de spam y acoso','La tabla distingue esos usos prohibidos de los académicos permitidos.'),
      T(3,'Según el caso práctico del documento, intentar acceder al sistema escolar para modificar faltas puede constituir una falta institucional y un delito informático.',true,'El caso lo vincula con el reglamento escolar y el acceso ilícito a sistemas.'),
      M(4,'¿Qué ordenamiento se menciona junto con los códigos penales para tratar delitos informáticos?', ['Código Penal Federal y códigos estatales','Solo reglamento de biblioteca','Reglas de formato de Writer','Licencia MIT'],'Código Penal Federal y códigos estatales','El texto menciona ambos para delitos informáticos.'),
      M(5,'Un estudiante intenta entrar al sistema administrativo escolar para modificar sus faltas. ¿Qué principio del apartado se aplica?', ['El ciberespacio está sujeto a normas y las acciones pueden tener consecuencias institucionales y legales','Las acciones digitales nunca tienen consecuencias','Cualquier uso de un programa es legal','Los reglamentos solo se aplican fuera de internet'],'El ciberespacio está sujeto a normas y las acciones pueden tener consecuencias institucionales y legales','El caso práctico del documento usa precisamente esa situación para explicar las consecuencias.')
    ]
  },
  {
    id:'privacidad', unitId:'u5', section:'5.2', title:'Privacidad de la información y huella digital', icon:'◍',
    intro:'La privacidad digital trata sobre la capacidad de decidir cuándo, cómo y en qué medida se comparte la información personal. Las interacciones en línea dejan una huella digital.',
    points:[
      'La privacidad incluye información sobre hábitos, ubicación, relaciones y datos biométricos.',
      'Publicar en exceso o sin pensar se relaciona con oversharing o hiperexposición digital.',
      'Me gusta, comentarios, búsquedas e historias dejan rastros recopilados mediante cookies, rastreadores y algoritmos.',
      'Los riesgos citados incluyen ingeniería social, extorsión, doxxing y posibles efectos futuros en los ámbitos académico y laboral.',
      'El documento recomienda la regla de los cinco segundos, usar perfiles privados para fotos institucionales y evitar etiquetas de geolocalización activa y pruebas virales que piden acceso a datos.'
    ], keywords:['Privacidad digital','Huella digital','Oversharing','Doxxing','Regla de 5 segundos'],
    cards:[['¿Qué es la huella digital?','El rastro que dejan las interacciones en línea, como búsquedas, comentarios, “me gusta” e historias.'],['¿Qué es el doxxing?','Recopilar y publicar información privada o de identificación de alguien sin su consentimiento para humillarlo o amedrentarlo.'],['¿Qué propone la regla de los cinco segundos?','Pensar si una publicación sería adecuada para que la vieran familiares, profesores o un futuro empleador dentro de cinco años.']],
    questions:[
      M(1,'¿Qué es la huella digital según el documento?', ['El rastro que dejan las interacciones en línea','Una contraseña para ingresar','Un tipo de licencia copyleft','Una herramienta para editar imágenes'],'El rastro que dejan las interacciones en línea','El texto menciona comentarios, búsquedas, “me gusta” e historias como rastros.'),
      M(1,'¿Qué significa oversharing en el apartado?', ['Hiperexposición digital','Copia de seguridad','Cifrado de mensajes','Actualización de software'],'Hiperexposición digital','El documento lo traduce como hiperexposición digital.'),
      T(2,'Las cookies, los rastreadores y los algoritmos pueden recopilar información sobre interacciones en línea.',true,'El texto explica que esos mecanismos se usan para construir perfiles de usuarios.'),
      M(2,'¿Qué es el doxxing?', ['Publicar información privada o de identificación sin consentimiento','Crear una contraseña larga','Realizar una copia de documentos','Usar una hoja de cálculo'],'Publicar información privada o de identificación sin consentimiento','Esa es la definición incluida en el documento.'),
      M(3,'¿Cuál recomendación propone el texto antes de publicar una foto o historia?', ['Aplicar la regla de los cinco segundos y pensar en la exposición futura','Publicar siempre con ubicación en tiempo real','Dejar la cuenta abierta para cualquier persona','Dar acceso a todas las aplicaciones que lo pidan'],'Aplicar la regla de los cinco segundos y pensar en la exposición futura','El documento recomienda preguntarse si la publicación sería aceptable en cinco años.'),
      T(3,'La exposición pública de la escuela, la credencial y la ubicación puede revelar datos sobre rutinas y transporte.',true,'El caso escolar muestra cómo esos detalles pueden revelar información sensible sobre la persona.'),
      M(4,'¿Cuál es un riesgo de pérdida de privacidad que cita el documento?', ['Ingeniería social y extorsión','Un promedio incorrecto en Calc','Una transición de diapositivas','Una copia local de un documento'],'Ingeniería social y extorsión','Los riesgos citados incluyen ingeniería social y extorsión.'),
      M(5,'Una aplicación de filtros pide acceso a fotos y redes sociales para una prueba viral. ¿Qué recomendación del documento se aplica?', ['Evitarla si exige acceso a esos datos','Aceptar siempre por tratarse de una prueba','Publicar el resultado con ubicación exacta','Enviar también los datos de la escuela'],'Evitarla si exige acceso a esos datos','El documento advierte sobre aplicaciones y pruebas virales que solicitan acceso a fotos o perfiles.')
    ]
  },
  {
    id:'seguridad', unitId:'u5', section:'5.3', title:'Seguridad digital', icon:'⬡',
    intro:'La seguridad digital protege la integridad, confidencialidad y disponibilidad de información en dispositivos y redes frente a amenazas informáticas.',
    points:[
      'La seguridad digital reúne procedimientos, hábitos y herramientas para proteger información y redes.',
      'Phishing: engaño mediante mensajes que suplantan a una institución o empresa para obtener información.',
      'Malware y spyware: software malicioso que puede infiltrarse para dañar o espiar; el ransomware cifra archivos y exige un pago para liberarlos.',
      'Los ataques de fuerza bruta prueban muchas combinaciones para adivinar contraseñas.',
      'El documento recomienda autenticación de dos factores, frases de paso de más de 12 caracteres y la regla de respaldo 3-2-1: tres copias, dos medios distintos y una fuera de casa.'
    ], keywords:['Phishing','Malware / spyware','Fuerza bruta','Ransomware','2FA · 3-2-1'],
    cards:[['¿Qué es el phishing?','Un engaño por correo o mensaje donde el atacante suplanta a una institución o empresa.'],['¿Qué hace el ransomware?','Cifra o bloquea archivos y exige un pago para liberarlos.'],['¿Qué significa la regla 3-2-1?','Guardar 3 copias de los archivos, en 2 medios distintos, y 1 copia fuera de casa.']],
    questions:[
      M(1,'¿Qué es el phishing según el documento?', ['Un engaño que suplanta a una institución o empresa','Un sistema de presentación','Una copia de seguridad','Una función de una hoja de cálculo'],'Un engaño que suplanta a una institución o empresa','El texto lo define como técnica de ingeniería social mediante correos o mensajes engañosos.'),
      M(1,'¿Qué amenaza cifra los archivos y exige un pago para liberarlos?', ['Ransomware','Phishing','Fuerza bruta','Doxxing'],'Ransomware','Esa es la definición de ransomware incluida en el apartado.'),
      T(2,'Un ataque de fuerza bruta intenta adivinar contraseñas mediante muchas combinaciones.',true,'El documento lo describe como un método automatizado para probar combinaciones.'),
      M(2,'¿Qué aporta la autenticación de dos factores?', ['Un segundo paso además de la contraseña','Una contraseña más corta','La publicación automática de datos','El borrado de las copias de seguridad'],'Un segundo paso además de la contraseña','El documento define 2FA como un segundo paso de autenticación.'),
      M(3,'¿Qué recomienda el texto sobre las frases de paso?', ['Que tengan más de 12 caracteres','Que sean iguales al cumpleaños','Que sean de cuatro números','Que se compartan con los contactos'],'Que tengan más de 12 caracteres','El texto recomienda frases de paso de más de 12 caracteres.'),
      T(3,'La regla 3-2-1 pide tres copias, dos medios distintos y una copia fuera de casa.',true,'Esa es la regla de respaldo que presenta el documento.'),
      M(4,'Un mensaje de un supuesto compañero pide reenviar un código de seis dígitos recibido por SMS. ¿Qué riesgo explica el documento?', ['El código puede usarse para tomar control de la cuenta','Es una forma de hacer una gráfica','Permite identificar la función MODA','Es necesario para recibir cualquier tarea escolar'],'El código puede usarse para tomar control de la cuenta','El caso explica que entregar el código de verificación permite apoderarse de WhatsApp.'),
      M(5,'¿Qué conjunto forma una estrategia de defensa descrita en el texto?', ['2FA, frases de paso robustas y copias de seguridad 3-2-1','Contraseñas predecibles y un único archivo','Reutilizar claves y enviar códigos a desconocidos','Instalar aplicaciones modificadas para comprobarlas'],'2FA, frases de paso robustas y copias de seguridad 3-2-1','Las tres medidas se presentan como hábitos y defensas contra ciberataques.')
    ]
  },
  {
    id:'proteccion-datos', unitId:'u5', section:'5.4', title:'Protección de datos personales', icon:'▣',
    intro:'El documento distingue la privacidad —decidir qué aspectos personales mostrar— de la protección de datos, que regula cómo instituciones y empresas recolectan y procesan información.',
    points:[
      'Los datos personales son información sobre una persona física identificada o identificable.',
      'Datos ordinarios: nombre, domicilio, teléfono, correo, CURP y trayectoria académica.',
      'Datos sensibles: salud, tipo de sangre, ideología política, religión, origen étnico y datos genéticos o biométricos.',
      'El documento menciona el artículo 16 constitucional, la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
      'El aviso de privacidad debe informar quién recolecta los datos, para qué, con quién se comparten y cómo ejercer control. Los derechos ARCO son Acceso, Rectificación, Cancelación y Oposición.'
    ], keywords:['Datos ordinarios','Datos sensibles','Aviso de privacidad','ARCO','Artículo 16'],
    cards:[['¿Cómo distingue el documento privacidad y protección de datos?','La privacidad es el control personal sobre lo que se muestra; la protección de datos es el marco que regula a quienes recolectan, almacenan y procesan información.'],['¿Qué son los datos sensibles?','Datos íntimos cuyo uso indebido puede causar discriminación o riesgos graves, como salud, religión, origen étnico y datos biométricos.'],['¿Qué significa ARCO?','Acceso, Rectificación, Cancelación y Oposición.']],
    questions:[
      M(1,'¿Cuál es un ejemplo de dato personal ordinario según el texto?', ['Domicilio','Reconocimiento facial','Dato genético','Tipo de sangre'],'Domicilio','El domicilio aparece en la lista de datos personales ordinarios.'),
      M(1,'¿Qué significan las siglas ARCO?', ['Acceso, Rectificación, Cancelación y Oposición','Autenticación, Revisión, Contraseña y Organización','Archivo, Registro, Código y Orden','Acceso, Reproducción, Copia y Ocultación'],'Acceso, Rectificación, Cancelación y Oposición','El documento enumera esos cuatro derechos.'),
      T(2,'La protección de datos regula la actuación de organizaciones que recolectan, almacenan y procesan información personal.',true,'Esa es la definición conceptual del apartado.'),
      M(2,'¿Cuál de estos datos se considera sensible en el documento?', ['Estado de salud','Correo electrónico','Trayectoria académica','Número telefónico'],'Estado de salud','El estado de salud aparece en la lista de datos sensibles.'),
      M(3,'¿Qué derecho ARCO permite corregir información inexacta o desactualizada?', ['Rectificación','Acceso','Cancelación','Oposición'],'Rectificación','Rectificación permite solicitar la corrección de datos erróneos, incompletos o desactualizados.'),
      T(3,'El aviso de privacidad debe explicar quién recoge los datos y para qué fines se utilizarán.',true,'Esos puntos forman parte de la información que el documento exige en el aviso de privacidad.'),
      M(4,'¿Qué ley del cuadro aplica a entidades públicas y dependencias de gobierno?', ['Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados','Ley Federal de Protección de Datos Personales en Posesión de los Particulares','Ley Olimpia','Ley Federal del Derecho de Autor'],'Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados','El cuadro aplica esta ley a entidades públicas, dependencias y escuelas públicas.'),
      M(5,'Una institución solicita datos de estudiantes. ¿Qué mecanismo del documento debe informar quién los recolecta, los fines y las formas de control?', ['Aviso de privacidad','Licencia copyleft','Regla 3-2-1','Barra de progreso'],'Aviso de privacidad','El aviso de privacidad comunica el responsable, fines, destinatarios y vías de control de los datos.')
    ]
  },
  {
    id:'ia-etica', unitId:'u5', section:'5.5', title:'Uso responsable y ético de la Inteligencia Artificial', icon:'✧',
    intro:'La IA generativa puede producir texto, código, imágenes, audio y video a partir de instrucciones o prompts. El documento distingue usos de apoyo, plagio y usos malintencionados.',
    points:[
      'La IA generativa procesa grandes volúmenes de datos y genera contenido en respuesta a prompts expresados en lenguaje natural.',
      'Nivel 1 de integridad: pedir explicaciones, estructurar calendarios de estudio o generar ideas; el documento lo considera ético y recomendado.',
      'Nivel 2: redactar un borrador propio y pedir correcciones de ortografía o estilo; es aceptable con declaración, manteniendo la autoría del estudiante.',
      'Nivel 3: copiar una generación completa y entregarla como propia se califica como inaceptable, fraudulenta y sancionable según el reglamento escolar.',
      'Nivel 4: clonar la voz de un profesor o crear imágenes falsas comprometedoras se presenta como malintencionado y puede implicar sanciones e intervención legal.',
      'El decálogo propuesto incluye cinco compromisos de seguridad y privacidad y cinco de ética en IA: cuidar datos y contraseñas, prevenir phishing, revisar privacidad y huella digital, verificar información, declarar el uso de IA y respetar derechos de autor.',
      'El documento nombra las secciones PIENSA, VERIFICA, PROTEGE, RESPETA, DECIDE y Uso consciente de recursos, y remite a una lectura complementaria para su desarrollo.'
    ], keywords:['Prompts','Apoyo al aprendizaje','Declaración de uso','Plagio','Verificar y respetar'],
    cards:[['¿Qué puede generar la IA generativa?','Texto, código de programación, imágenes, audio y video en respuesta a prompts.'],['¿Qué se considera nivel 1 de integridad?','Usar IA para pedir explicaciones, organizar un calendario de estudio o generar ideas.'],['¿Qué diferencia el nivel 2 del nivel 3?','En el nivel 2 el trabajo original sigue siendo del alumno y se declara la ayuda; en el nivel 3 se copia la generación completa como si fuera propia.']],
    questions:[
      M(1,'¿Qué es un prompt según el apartado?', ['Una petición expresada en lenguaje natural a la IA','Una copia de seguridad externa','Una licencia de software','Un derecho ARCO'],'Una petición expresada en lenguaje natural a la IA','El texto describe los prompts como las peticiones expresadas en lenguaje natural.'),
      M(1,'¿Cuál contenido puede producir la IA generativa según el documento?', ['Texto, código, imágenes, audio y video','Solo hojas de cálculo','Únicamente contraseñas','Solo archivos físicos'],'Texto, código, imágenes, audio y video','Es la lista de tipos de contenido incluida en el apartado.'),
      T(2,'Pedir a la IA explicaciones de conceptos para aprender aparece como uso ético y recomendado.',true,'La matriz lo presenta como Nivel 1: Tutoría e Investigación.'),
      M(2,'¿Qué condición acompaña el nivel 2 de asistencia de redacción?', ['Declarar la ayuda y conservar como propio el trabajo intelectual original','Copiar todo el contenido y firmarlo como propio','Usar IA para suplantar a otra persona','Evitar revisar las correcciones'],'Declarar la ayuda y conservar como propio el trabajo intelectual original','El nivel 2 se considera aceptable con declaración.'),
      M(3,'¿Qué conducta se describe como Nivel 3: Generación Completa (Plagio)?', ['Copiar el texto generado por IA y entregarlo como propio','Pedir una explicación de matemáticas','Solicitar revisión ortográfica de un borrador propio y declararlo','Organizar un calendario de estudio'],'Copiar el texto generado por IA y entregarlo como propio','La matriz califica esa conducta como inaceptable y fraudulenta.'),
      T(3,'El documento recomienda verificar la información generada por IA antes de usarla en un reporte técnico.',true,'El caso de electromecánica muestra el riesgo de copiar especificaciones inventadas y destaca la verificación humana.'),
      M(4,'¿Qué ejemplo se incluye en el nivel 4 de uso malintencionado?', ['Clonar la voz de un profesor o crear imágenes falsas comprometedoras','Pedir una explicación de un concepto','Solicitar corrección de estilo sobre un borrador propio','Hacer un calendario de estudio'],'Clonar la voz de un profesor o crear imágenes falsas comprometedoras','Es el ejemplo descrito para el nivel 4 de integridad.'),
      M(5,'Un estudiante usa IA para redactar un reporte técnico, lo copia como propio y lo aplica sin verificarlo; la herramienta inventó especificaciones de seguridad. ¿Qué aprendizajes del documento se relacionan con el caso?', ['Evitar el plagio y verificar la información generada antes de aplicarla','Entregar todo contenido de IA sin revisión','Usar IA para sustituir el aprendizaje propio','Ignorar las normas de seguridad del taller'],'Evitar el plagio y verificar la información generada antes de aplicarla','El caso del documento señala problemas éticos por plagio y riesgo técnico por no verificar los datos.')
    ]
  }
];

const LEVELS = ['','Básico','Intermedio','Avanzado','Experto','Dominio'];
const STORAGE_KEY = 'aulaDigitalSemana05_v1';
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function freshState(){
  return {theme:'dark', topics:{}, history:[], currentTopicId:topics[0]?.id || null, currentTab:'summary', currentQuiz:null, lastResume:null, lastResult:null};
}
function loadState(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return freshState();
    const parsed = JSON.parse(raw);
    const base = freshState();
    return {...base,...parsed,topics:parsed.topics || {},history:Array.isArray(parsed.history)?parsed.history:[]};
  } catch(err){ storageAvailable=false; return freshState(); }
}
let storageAvailable=true;
let state=loadState();
let currentTopicId=state.currentTopicId || topics[0].id;
let flashcardIndex=0;
let flashcardBack=false;
let activeQuiz=state.currentQuiz || null;
let currentResult=null;
let currentUnitFilter=null;

function persist(){
  try {
    state.currentTopicId=currentTopicId;
    state.currentQuiz=activeQuiz;
    localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
    $('#saveStatus').textContent='Progreso guardado';
  } catch(err){
    storageAvailable=false;
    $('#saveStatus').textContent='Sesión sin guardado';
  }
  if(!storageAvailable) $('#saveStatus').textContent='Sesión sin guardado';
}
function topicById(id){return topics.find(t=>t.id===id) || topics[0];}
function unitById(id){return units.find(u=>u.id===id) || units[0];}
function topicState(id){
  if(!state.topics[id]) state.topics[id]={attempts:0,best:0,lastScore:null,totalCorrect:0,totalWrong:0,level:1,seenQ:[],wrongQ:[],summarySeen:false,cardsSeen:false,lastAttempt:null};
  const s=state.topics[id];
  for(const [k,v] of Object.entries({attempts:0,best:0,lastScore:null,totalCorrect:0,totalWrong:0,level:1,seenQ:[],wrongQ:[],summarySeen:false,cardsSeen:false,lastAttempt:null})) if(s[k]===undefined) s[k]=v;
  return s;
}
function topicAccuracy(id){const s=topicState(id),n=s.totalCorrect+s.totalWrong;return n?Math.round(s.totalCorrect/n*100):0;}
function topicStatus(id){const s=topicState(id),n=s.totalCorrect+s.totalWrong;if(!n)return {label:'Pendiente',cls:'pending'};const a=topicAccuracy(id);if(a>=80)return {label:'Dominado',cls:'mastered'};if(a>=50)return {label:'En proceso',cls:'learning'};return {label:'Por reforzar',cls:'pending'};}
function escaped(str){return String(str).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function shuffle(arr){const out=arr.slice();for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
function levelText(level){return `Nivel ${level} · ${LEVELS[level] || 'Básico'}`;}
function showView(name){
  $$('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));
  $$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===(name==='study'||name==='quiz'||name==='results'?'syllabus':name)));
  if(name==='home') renderHome();
  if(name==='syllabus') renderSyllabus($('#topicSearch').value||'');
  if(name==='progress') renderProgress();
  window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}
function goHome(){state.lastResume={view:'home',topicId:currentTopicId};persist();showView('home');}
function topicButtonText(id){return topicState(id).attempts ? 'Seguir practicando' : 'Practicar';}

function renderHome(){
  const done=topics.filter(t=>topicState(t.id).attempts>0).length;
  const attempted=topics.reduce((sum,t)=>sum+topicState(t.id).totalCorrect+topicState(t.id).totalWrong,0);
  const correct=topics.reduce((sum,t)=>sum+topicState(t.id).totalCorrect,0);
  const average=attempted?Math.round(correct/attempted*100):0;
  $('#homeStats').innerHTML=[
    statCard('Temas disponibles',topics.length,'Organizados por unidad'),
    statCard('Temas practicados',done,`de ${topics.length} temas`),
    statCard('Preguntas respondidas',attempted,'En todos tus intentos'),
    statCard('Acierto general',`${average}%`,'Según tus respuestas')
  ].join('');
  $('#homeUnits').innerHTML=units.map(u=>{
    const list=topics.filter(t=>t.unitId===u.id),doneCount=list.filter(t=>topicState(t.id).attempts>0).length,pct=list.length?Math.round(doneCount/list.length*100):0;
    return `<button type="button" class="unit-card" data-unit="${u.id}"><div class="unit-card-top"><span class="unit-number">${escaped(u.label)}</span><span class="unit-icon" aria-hidden="true">${u.icon}</span></div><h3>${escaped(u.title)}</h3><p>${escaped(u.desc)}</p><div class="unit-bottom"><div class="tiny-track"><span style="width:${pct}%"></span></div><span class="unit-percent">${doneCount}/${list.length}</span></div></button>`;
  }).join('');
  const res=state.lastResume||{};
  const pending=state.currentQuiz;
  if(pending){$('#resumeText').textContent=`Tienes una práctica sin terminar: ${topicById(pending.topicId).title}. Puedes continuar con la siguiente pregunta.`;$('#resumeButton').textContent='Continuar quiz';}
  else if(res.topicId){$('#resumeText').textContent=`Continúa con ${topicById(res.topicId).title}.`;$('#resumeButton').textContent='Abrir tema';}
  else{$('#resumeText').textContent='Elige un tema para comenzar a estudiar.';$('#resumeButton').textContent='Abrir temario';}
  $('#continueLearning').textContent=pending?'Continuar quiz':res.topicId?'Continuar donde me quedé':'Explorar temas';
  $('#resumePanel').classList.toggle('hidden',!pending&&!res.topicId);
}
function statCard(label,value,foot){return `<div class="stat-card"><span class="stat-label">${escaped(label)}</span><div class="stat-value">${escaped(value)}</div><div class="stat-foot">${escaped(foot)}</div></div>`;}

function renderSyllabus(search=''){
  const needle=search.trim().toLocaleLowerCase('es');
  $('#syllabusList').innerHTML=units.map(unit=>{
    const list=topics.filter(t=>t.unitId===unit.id&&(!currentUnitFilter||t.unitId===currentUnitFilter)&&(!needle||`${t.section} ${t.title} ${t.intro} ${t.points.join(' ')}`.toLocaleLowerCase('es').includes(needle)));
    if(!list.length)return '';
    return `<section class="unit-section"><header class="unit-section-head"><div><h2>${escaped(unit.label)} · ${escaped(unit.title)}</h2><p>${escaped(unit.desc)}</p></div><span class="unit-section-count">${list.length} ${list.length===1?'tema':'temas'}</span></header><div class="topic-list">${list.map(t=>{
      const progress=topicAccuracy(t.id),s=topicState(t.id),status=topicStatus(t.id);
      return `<article class="topic-row"><span class="topic-icon" aria-hidden="true">${t.icon}</span><div><h3>${escaped(t.section)} · ${escaped(t.title)}</h3><p>${escaped(t.intro)}</p></div><div class="topic-row-progress"><div class="mini-track"><span style="width:${s.attempts?progress:0}%"></span></div><small>${s.attempts?progress+'%':'Nuevo'}</small></div><div class="topic-actions"><button type="button" data-open-topic="${t.id}">Estudiar</button><button type="button" data-quiz-topic="${t.id}">Quiz</button></div></article>`;
    }).join('')}</div></section>`;
  }).join('');
  $('#noResults').classList.toggle('hidden',!!$('#syllabusList').innerHTML);
}

function openStudy(id,tab='summary'){
  currentTopicId=id;state.currentTopicId=id;state.currentTab=tab;state.lastResume={view:'study',topicId:id};
  flashcardIndex=0;flashcardBack=false;
  renderStudy(tab);persist();showView('study');
}
function renderStudy(tab='summary'){
  const t=topicById(currentTopicId),u=unitById(t.unitId),s=topicState(t.id);
  $('#studyBreadcrumb').textContent=`${u.label} / ${t.section}`;
  $('#studyUnitLabel').textContent=`${u.label} · ${t.section}`;
  $('#studyTitle').textContent=t.title;
  $('#studyIntro').textContent=t.intro;
  const progress=s.attempts?topicAccuracy(t.id):0;
  $('#topicCompletion').textContent=s.attempts?`${progress}% de acierto`:'Aún sin intentos';
  $('#topicCompletionBar').style.width=(s.attempts?progress:0)+'%';
  $$('.study-tab').forEach(b=>{const active=b.dataset.studyTab===tab;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));});
  state.currentTab=tab;
  if(tab==='summary') renderSummary(t);
  else if(tab==='cards') renderCards(t);
  else renderPractice(t);
  persist();
}
function renderSummary(t){
  const s=topicState(t.id);
  $('#studyPanel').innerHTML=`<div class="study-layout"><article class="summary-card"><p class="eyebrow">GUÍA RÁPIDA</p><h2>Ideas que debes recordar</h2><p class="summary-lead">${escaped(t.intro)}</p><ul class="summary-points">${t.points.map(p=>`<li>${escaped(p)}</li>`).join('')}</ul><div class="keyword-wrap">${t.keywords.map(k=>`<span class="keyword">${escaped(k)}</span>`).join('')}</div><div class="study-actions"><button class="button primary" type="button" data-start-topic-quiz="${t.id}">Practicar preguntas →</button><button class="button secondary" type="button" data-study-tab="cards">Repasar con tarjetas</button>${activeQuiz&&activeQuiz.topicId===t.id?'<button class="button secondary" type="button" id="resumePendingQuiz">Continuar quiz pendiente</button>':''}</div></article><aside class="key-card"><p class="eyebrow">MEMORIZA</p><h2>Claves del tema</h2>${t.cards.slice(0,3).map((c,i)=>`<div class="callout"><strong>${escaped(c[0])}</strong><p>${escaped(c[1])}</p></div>`).join('')}<div class="study-actions"><button class="button secondary small" id="markSummary" type="button">${s.summarySeen?'Resumen revisado ✓':'Marcar resumen revisado'}</button></div></aside></div>`;
}
function renderCards(t){
  const cards=t.cards||[];
  if(!cards.length){$('#studyPanel').innerHTML='<p class="empty-state">No hay tarjetas para este tema.</p>';return;}
  const c=cards[flashcardIndex%cards.length];
  $('#studyPanel').innerHTML=`<div class="flashcard-stage"><span class="flashcard-counter">TARJETA ${flashcardIndex+1} DE ${cards.length}</span><div class="flashcard" id="flashcardFlip" role="button" tabindex="0" aria-label="Voltear tarjeta"><span class="face-label">${flashcardBack?'RESPUESTA':'PREGUNTA'}</span><div class="face-content">${escaped(flashcardBack?c[1]:c[0])}</div><div class="face-hint">Pulsa la tarjeta para ${flashcardBack?'ver la pregunta':'revelar la respuesta'}</div></div><div class="flashcard-nav"><button class="button secondary" id="prevCard" type="button">← Anterior</button><button class="button primary" id="flipCard" type="button">${flashcardBack?'Ver pregunta':'Mostrar respuesta'}</button><button class="button secondary" id="nextCard" type="button">Siguiente →</button></div><div class="study-actions" style="justify-content:center"><button class="button secondary" type="button" data-study-tab="summary">Volver al resumen</button><button class="button primary" type="button" data-start-topic-quiz="${t.id}">Practicar tema</button></div></div>`;
}
function renderPractice(t){
  const s=topicState(t.id),n=s.totalCorrect+s.totalWrong,acc=n?Math.round(s.totalCorrect/n*100):0;
  $('#studyPanel').innerHTML=`<div class="practice-card"><p class="eyebrow">PREGUNTAS ADAPTATIVAS</p><h2>Comprueba lo que recuerdas</h2><p>En cada intento recibirás seis preguntas. La aplicación seleccionará preguntas distintas cuando haya opciones disponibles y ajustará el nivel según tus respuestas recientes. El intento nunca supera las 20 preguntas de este tema.</p><div class="practice-stat-row"><div class="practice-stat"><span>Intentos terminados</span><strong>${s.attempts}</strong></div><div class="practice-stat"><span>Mejor resultado</span><strong>${s.attempts?s.best+'%':'—'}</strong></div><div class="practice-stat"><span>Nivel actual</span><strong>${LEVELS[s.level]}</strong></div></div><div class="study-actions"><button class="button primary" type="button" data-start-topic-quiz="${t.id}">Iniciar práctica →</button>${s.wrongQ.length?`<button class="button secondary" type="button" data-wrong-topic-quiz="${t.id}">Reforzar errores (${s.wrongQ.length})</button>`:''}<button class="button secondary" type="button" data-study-tab="summary">Repasar el resumen</button></div></div>`;
}

function beginQuiz(topicId, options={}){
  const t=topicById(topicId); currentTopicId=topicId;state.currentTopicId=topicId;
  const s=topicState(topicId);
  let bank=t.questions.map((q,i)=>({...q,id:`${t.id}-q${i+1}`,topicId:t.id}));
  if(options.wrongOnly){
    const wrongSet=new Set(s.wrongQ);
    bank=bank.filter(q=>wrongSet.has(q.id));
    if(!bank.length){openStudy(topicId,'practice');return;}
  }
  activeQuiz={topicId,targetLength:Math.min(options.wrongOnly?bank.length:6,20,bank.length),asked:[],results:[],currentQid:null,currentOptions:[],selectedAnswer:null,level:Math.min(5,Math.max(1,s.level||1)),recent:[],wrongOnly:!!options.wrongOnly,bankIds:bank.map(q=>q.id)};
  state.currentQuiz=activeQuiz;state.lastResume={view:'quiz',topicId};
  selectNextQuestion();persist();showView('quiz');renderQuizQuestion();
}
function bankForActive(){
  const t=topicById(activeQuiz.topicId);let bank=t.questions.map((q,i)=>({...q,id:`${t.id}-q${i+1}`,topicId:t.id}));
  if(activeQuiz.wrongOnly){const ids=new Set(activeQuiz.bankIds);bank=bank.filter(q=>ids.has(q.id));}
  return bank;
}
function selectNextQuestion(){
  const bank=bankForActive();
  let candidates=bank.filter(q=>!activeQuiz.asked.includes(q.id));
  if(!candidates.length){finishQuiz();return;}
  const s=topicState(activeQuiz.topicId);
  // En nuevos intentos se priorizan preguntas nunca vistas y las que aún figuran como errores.
  const globallyNew=candidates.filter(q=>!s.seenQ.includes(q.id));
  if(globallyNew.length)candidates=globallyNew;
  const wrongAgain=candidates.filter(q=>s.wrongQ.includes(q.id));
  if(wrongAgain.length)candidates=wrongAgain;
  const minDist=Math.min(...candidates.map(q=>Math.abs(q.level-activeQuiz.level)));
  candidates=candidates.filter(q=>Math.abs(q.level-activeQuiz.level)===minDist);
  const q=candidates[Math.floor(Math.random()*candidates.length)];
  activeQuiz.currentQid=q.id;activeQuiz.currentOptions=shuffle(q.options);activeQuiz.selectedAnswer=null;
  persist();
}
function getCurrentQuestion(){return bankForActive().find(q=>q.id===activeQuiz.currentQid);}
function renderQuizQuestion(){
  if(!activeQuiz){showView('syllabus');return;}
  const q=getCurrentQuestion();
  if(!q){finishQuiz();return;}
  const t=topicById(activeQuiz.topicId),u=unitById(t.unitId),index=activeQuiz.results.length+1,total=activeQuiz.targetLength;
  $('#quizTopicLabel').textContent=`${u.label} · ${t.section}`;
  $('#quizTopicTitle').textContent=t.title;
  $('#quizLevelTag').textContent=levelText(activeQuiz.level);
  $('#questionCounter').textContent=`${index} / ${total}`;
  $('#remainingCount').textContent=`${total-index+1} ${total-index+1===1?'pregunta restante':'preguntas restantes'}`;
  $('#quizProgressBar').style.width=`${Math.round(activeQuiz.results.length/total*100)}%`;
  $('#quizSubtopic').textContent=q.type==='tf'?'Verdadero o falso':q.level>=4?'Pregunta integradora':'Repaso del tema';
  $('#correctLive').textContent=activeQuiz.results.filter(r=>r.correct).length;
  $('#wrongLive').textContent=activeQuiz.results.filter(r=>!r.correct).length;
  $('#questionType').textContent=q.type==='tf'?'VERDADERO O FALSO':'OPCIÓN MÚLTIPLE';
  $('#questionText').textContent=q.prompt;
  $('#questionLevel').textContent=`Dificultad: ${LEVELS[q.level]}`;
  $('#feedbackBox').className='feedback-box hidden';$('#feedbackBox').innerHTML='';
  $('#submitAnswer').classList.remove('hidden');$('#nextQuestion').classList.add('hidden');$('#submitAnswer').disabled=!activeQuiz.selectedAnswer;
  $('#answerArea').innerHTML=activeQuiz.currentOptions.map((option,i)=>`<button class="answer-option ${activeQuiz.selectedAnswer===option?'selected':''}" type="button" data-answer="${escaped(option)}"><span class="option-key">${String.fromCharCode(65+i)}</span><span>${escaped(option)}</span></button>`).join('');
  $('#answerArea').querySelectorAll('[data-answer]').forEach(btn=>btn.addEventListener('click',()=>{
    if(activeQuiz.results.some(r=>r.qid===q.id))return;
    activeQuiz.selectedAnswer=btn.dataset.answer;
    $$('#answerArea .answer-option').forEach(b=>b.classList.toggle('selected',b.dataset.answer===activeQuiz.selectedAnswer));
    $('#submitAnswer').disabled=false;persist();
  }));
  const answered=activeQuiz.results.find(r=>r.qid===q.id);
  if(answered){
    $$('#answerArea .answer-option').forEach(btn=>{btn.disabled=true;if(btn.dataset.answer===answered.answer)btn.classList.add('correct');else if(btn.dataset.answer===answered.selected&&!answered.correct)btn.classList.add('incorrect');});
    const fb=$('#feedbackBox');fb.className=`feedback-box ${answered.correct?'good':'bad'}`;
    fb.innerHTML=`<div class="feedback-title">${answered.correct?'¡Correcto!':'Respuesta incorrecta'}</div><p>${answered.correct?'La respuesta coincide con el contenido del documento.':`La respuesta correcta es: <strong>${escaped(answered.answer)}</strong>.`}</p><p>${escaped(answered.explanation)}</p><p class="feedback-reference">Repaso recomendado: ${escaped(t.section)} · ${escaped(t.title)}</p><button type="button" class="text-button" id="feedbackStudy">Ver resumen de este tema →</button>`;
    $('#feedbackStudy').addEventListener('click',()=>openStudy(t.id,'summary'));
    $('#submitAnswer').classList.add('hidden');$('#nextQuestion').classList.remove('hidden');
    $('#nextQuestion').textContent=activeQuiz.results.length>=activeQuiz.targetLength?'Ver resultados →':'Siguiente pregunta →';
  }
  persist();
}
function submitAnswer(){
  const q=getCurrentQuestion();if(!q||!activeQuiz.selectedAnswer||activeQuiz.results.some(r=>r.qid===q.id))return;
  const t=topicById(activeQuiz.topicId),s=topicState(t.id),correct=activeQuiz.selectedAnswer===q.answer;
  const result={qid:q.id,prompt:q.prompt,selected:activeQuiz.selectedAnswer,answer:q.answer,correct,explanation:q.explanation,level:q.level,topicId:t.id};
  activeQuiz.results.push(result);activeQuiz.asked.push(q.id);
  activeQuiz.recent.push(correct);if(activeQuiz.recent.length>3)activeQuiz.recent.shift();
  s.seenQ=Array.from(new Set([...s.seenQ,q.id]));
  if(correct){s.totalCorrect++;s.wrongQ=s.wrongQ.filter(id=>id!==q.id);}else{s.totalWrong++;s.wrongQ=Array.from(new Set([...s.wrongQ,q.id]));}
  if(activeQuiz.recent.length>=2){const pct=activeQuiz.recent.filter(Boolean).length/activeQuiz.recent.length;if(pct>=.75)activeQuiz.level=Math.min(5,activeQuiz.level+1);else if(pct<=.34)activeQuiz.level=Math.max(1,activeQuiz.level-1);}
  s.level=activeQuiz.level;
  const fb=$('#feedbackBox');fb.className=`feedback-box ${correct?'good':'bad'}`;
  fb.innerHTML=`<div class="feedback-title">${correct?'¡Correcto!':'Respuesta incorrecta'}</div><p>${correct?'La respuesta coincide con el contenido del documento.':`La respuesta correcta es: <strong>${escaped(q.answer)}</strong>.`}</p><p>${escaped(q.explanation)}</p><p class="feedback-reference">Repaso recomendado: ${escaped(t.section)} · ${escaped(t.title)}</p><button type="button" class="text-button" id="feedbackStudy">Ver resumen de este tema →</button>`;
  $('#feedbackStudy').addEventListener('click',()=>openStudy(t.id,'summary'));
  $$('#answerArea .answer-option').forEach(btn=>{
    btn.disabled=true;
    if(btn.dataset.answer===q.answer)btn.classList.add('correct');
    else if(btn.dataset.answer===activeQuiz.selectedAnswer&&!correct)btn.classList.add('incorrect');
  });
  $('#submitAnswer').classList.add('hidden');$('#nextQuestion').classList.remove('hidden');
  $('#nextQuestion').textContent=activeQuiz.results.length>=activeQuiz.targetLength?'Ver resultados →':'Siguiente pregunta →';
  $('#correctLive').textContent=activeQuiz.results.filter(r=>r.correct).length;$('#wrongLive').textContent=activeQuiz.results.filter(r=>!r.correct).length;
  $('#quizLevelTag').textContent=levelText(activeQuiz.level);
  $('#questionCounter').textContent=`${activeQuiz.results.length} / ${activeQuiz.targetLength}`;
  $('#remainingCount').textContent=`${activeQuiz.targetLength-activeQuiz.results.length} ${activeQuiz.targetLength-activeQuiz.results.length===1?'pregunta restante':'preguntas restantes'}`;
  $('#quizProgressBar').style.width=`${Math.round(activeQuiz.results.length/activeQuiz.targetLength*100)}%`;
  persist();
}
function nextQuestion(){
  if(!activeQuiz)return;
  if(activeQuiz.results.length>=activeQuiz.targetLength){finishQuiz();return;}
  selectNextQuestion();
  if(activeQuiz)renderQuizQuestion();
}
function finishQuiz(){
  if(!activeQuiz)return;
  const qz=activeQuiz,t=topicById(qz.topicId),s=topicState(qz.topicId),correct=qz.results.filter(r=>r.correct).length,incorrect=qz.results.length-correct,score=qz.results.length?Math.round(correct/qz.results.length*100):0;
  s.attempts++;s.best=Math.max(s.best,score);s.lastScore=score;s.lastAttempt=new Date().toISOString();s.level=qz.level;
  const entry={id:`att-${Date.now()}-${Math.floor(Math.random()*10000)}`,topicId:t.id,topicTitle:t.title,unitLabel:unitById(t.unitId).label,date:new Date().toISOString(),score,correct,incorrect,total:qz.results.length,maxLevel:Math.max(qz.level,...qz.results.map(r=>r.level)),results:qz.results.map(r=>({...r}))};
  state.history.unshift(entry);state.history=state.history.slice(0,100);state.lastResult=entry;state.currentQuiz=null;activeQuiz=null;currentResult=entry;state.lastResume={view:'study',topicId:t.id};persist();renderResults(entry);showView('results');
}
function renderResults(entry){
  const pct=entry.score;$('#resultsIcon').textContent=pct>=80?'✓':pct>=50?'↗':'↻';
  $('#resultsTitle').textContent=pct>=80?'Buen dominio del tema':pct>=50?'Vas comprendiendo el tema':'Conviene repasar este tema';
  $('#resultsSubtitle').textContent=`${entry.topicTitle} · ${new Date(entry.date).toLocaleString('es-MX',{dateStyle:'medium',timeStyle:'short'})}`;
  $('#scorePercent').textContent=`${pct}%`;$('#scoreRing').style.setProperty('--score',`${pct}%`);$('#scoreRing').style.setProperty('--score-color',pct>=80?'#65c58a':pct>=50?'var(--yellow)':'var(--red)');
  $('#resultsStats').innerHTML=[statCard('Aciertos',entry.correct,'Respuestas correctas'),statCard('Errores',entry.incorrect,'Respuestas por reforzar'),statCard('Preguntas',entry.total,'En este intento'),statCard('Nivel máximo',LEVELS[entry.maxLevel],`Nivel ${entry.maxLevel}`)].join('');
  const wrong=entry.results.filter(r=>!r.correct);
  const corrects=entry.results.filter(r=>r.correct);
  $('#reviewTopics').innerHTML=`<div class="review-item"><strong>${pct>=80?'Buen dominio':pct>=50?'En proceso de aprendizaje':'Necesita reforzarse'} · ${escaped(t.section)} ${escaped(t.title)}</strong><p>${pct>=80?'El resultado alcanza el criterio de dominio (80% o más).':pct>=50?'El resultado está entre 50% y 79%; repasa las ideas que fallaste.':'El resultado es menor de 50%; vuelve al resumen antes de otro intento.'}</p></div>`+(wrong.length?`<div class="review-item"><strong>${wrong.length} pregunta(s) para reforzar</strong><p>Estudia los conceptos asociados a los errores antes de repetir el intento.</p></div>${[...new Set(wrong.map(r=>r.level))].map(l=>`<div class="review-item"><strong>${LEVELS[l]}</strong><p>${wrong.filter(r=>r.level===l).length} error(es) en este nivel.</p></div>`).join('')}`:'<div class="review-item"><strong>Sin errores en este intento</strong><p>Respondiste correctamente todas las preguntas de esta práctica.</p></div>');
  $('#wrongAnswers').innerHTML=wrong.length?wrong.map((r,i)=>`<div class="wrong-item"><strong>${i+1}. ${escaped(r.prompt)}</strong><p>Tu respuesta: ${escaped(r.selected)}</p><p>Correcta: ${escaped(r.answer)}</p><p>${escaped(r.explanation)}</p></div>`).join(''):'<p class="empty-inline">No hay respuestas incorrectas que revisar.</p>';
  $('#reviewAllErrors').classList.toggle('hidden',!wrong.length);
  $('#resultsToStudy').textContent='Volver al resumen';
}

function renderProgress(){
  const attemptedTopics=topics.filter(t=>topicState(t.id).attempts>0).length;
  const totalQ=topics.reduce((s,t)=>s+topicState(t.id).totalCorrect+topicState(t.id).totalWrong,0);
  const correct=topics.reduce((s,t)=>s+topicState(t.id).totalCorrect,0);
  const avg=totalQ?Math.round(correct/totalQ*100):0;
  const mastery=topics.filter(t=>topicStatus(t.id).cls==='mastered').length;
  $('#progressStats').innerHTML=[statCard('Temas practicados',`${attemptedTopics}/${topics.length}`,'Al menos un intento terminado'),statCard('Preguntas resueltas',totalQ,'En todos los intentos'),statCard('Acierto general',`${avg}%`,'Aciertos sobre el total'),statCard('Temas dominados',mastery,'Con 80% o más de acierto')].join('');
  $('#topicProgressList').innerHTML=topics.map(t=>{const s=topicState(t.id),a=topicAccuracy(t.id),st=topicStatus(t.id);return `<div class="progress-topic-row"><div><div class="progress-topic-title">${escaped(t.section)} · ${escaped(t.title)}</div><div class="progress-topic-unit">${escaped(unitById(t.unitId).title)} · ${s.attempts} intento(s)</div></div><div class="progress-meter"><span style="width:${s.attempts?a:0}%"></span></div><div class="progress-score">${s.attempts?a+'%':'—'}</div><span class="status-label ${st.cls}">${st.label}</span></div>`;}).join('');
  $('#attemptHistory').innerHTML=state.history.length?state.history.slice(0,12).map(h=>`<div class="history-row"><div><strong>${escaped(h.topicTitle)}</strong><small>${new Date(h.date).toLocaleString('es-MX',{dateStyle:'medium',timeStyle:'short'})} · ${escaped(h.unitLabel)}</small></div><div class="history-score">${h.score}%</div><div class="history-action"><button type="button" data-history-open="${h.id}">Ver tema →</button></div></div>`).join(''):'<p class="empty-inline">Todavía no hay intentos terminados. Cuando completes un quiz, sus resultados aparecerán aquí.</p>';
}

function continueLearning(){
  if(activeQuiz){state.currentQuiz=activeQuiz;persist();showView('quiz');renderQuizQuestion();return;}
  const res=state.lastResume||{};
  if(res.topicId){openStudy(res.topicId,'summary');return;}
  showView('syllabus');
}
function clearProgress(){
  const theme=state.theme;state=freshState();state.theme=theme;activeQuiz=null;currentTopicId=topics[0].id;currentResult=null;flashcardIndex=0;flashcardBack=false;
  try{localStorage.removeItem(STORAGE_KEY);storageAvailable=true;}catch(err){storageAvailable=false;}
  persist();document.body.classList.toggle('light',theme==='light');renderHome();renderProgress();showView('progress');
}
function applyTheme(){const light=state.theme==='light';document.body.classList.toggle('light',light);$('#themeToggle').textContent=light?'☾':'☼';$('#themeToggle').setAttribute('aria-label',light?'Cambiar a modo oscuro':'Cambiar a modo claro');}

// Navegación principal y acciones delegadas.
$$('.nav-item').forEach(btn=>btn.addEventListener('click',()=>{if(btn.dataset.view==='syllabus'){currentUnitFilter=null;$('#topicSearch').value='';}showView(btn.dataset.view);}));
$$('[data-go]').forEach(btn=>btn.addEventListener('click',()=>{if(btn.dataset.go==='syllabus'){currentUnitFilter=null;$('#topicSearch').value='';}showView(btn.dataset.go);}));
$('#startLearning').addEventListener('click',()=>{currentUnitFilter=null;$('#topicSearch').value='';showView('syllabus');});
$('#continueLearning').addEventListener('click',continueLearning);
$('#resumeButton').addEventListener('click',continueLearning);
$('#themeToggle').addEventListener('click',()=>{state.theme=state.theme==='light'?'dark':'light';applyTheme();persist();});
$('#topicSearch').addEventListener('input',e=>{currentUnitFilter=null;renderSyllabus(e.target.value);});
$('#backToSyllabus').addEventListener('click',()=>{currentUnitFilter=null;$('#topicSearch').value='';showView('syllabus');});
$('#quitQuiz').addEventListener('click',()=>{const id=activeQuiz?.topicId||currentTopicId;if(activeQuiz){state.currentQuiz=activeQuiz;state.lastResume={view:'quiz',topicId:id};persist();}openStudy(id,'practice');});
$('#submitAnswer').addEventListener('click',submitAnswer);
$('#nextQuestion').addEventListener('click',nextQuestion);
$('#retryQuiz').addEventListener('click',()=>beginQuiz(currentResult?.topicId||currentTopicId));
$('#reviewAllErrors').addEventListener('click',()=>beginQuiz(currentResult?.topicId||currentTopicId,{wrongOnly:true}));
$('#resultsToStudy').addEventListener('click',()=>openStudy(currentResult?.topicId||currentTopicId,'summary'));
$('#clearProgress').addEventListener('click',()=>$('#confirmDialog').showModal());
$('#confirmClear').addEventListener('click',e=>{e.preventDefault();$('#confirmDialog').close();clearProgress();});

function findButtonTarget(event,attr){const target=event.target.closest(`[${attr}]`);return target?target.getAttribute(attr):null;}
document.addEventListener('click',event=>{
  let id=findButtonTarget(event,'data-open-topic');if(id){openStudy(id,'summary');return;}
  id=findButtonTarget(event,'data-quiz-topic');if(id){beginQuiz(id);return;}
  id=findButtonTarget(event,'data-start-topic-quiz');if(id){beginQuiz(id);return;}
  id=findButtonTarget(event,'data-wrong-topic-quiz');if(id){beginQuiz(id,{wrongOnly:true});return;}
  id=findButtonTarget(event,'data-study-tab');if(id){renderStudy(id);return;}
  id=findButtonTarget(event,'data-unit');if(id){currentUnitFilter=id;$('#topicSearch').value='';renderSyllabus('');showView('syllabus');return;}
  id=findButtonTarget(event,'data-history-open');if(id){const h=state.history.find(x=>x.id===id);if(h)openStudy(h.topicId,'summary');return;}
  if(event.target.closest('#markSummary')){topicState(currentTopicId).summarySeen=true;persist();renderStudy('summary');return;}
  if(event.target.closest('#resumePendingQuiz')){continueLearning();return;}
  if(event.target.closest('#flipCard')||event.target.closest('#flashcardFlip')){flashcardBack=!flashcardBack;topicState(currentTopicId).cardsSeen=true;renderStudy('cards');persist();return;}
  if(event.target.closest('#nextCard')){flashcardIndex=(flashcardIndex+1)%topicById(currentTopicId).cards.length;flashcardBack=false;renderStudy('cards');return;}
  if(event.target.closest('#prevCard')){flashcardIndex=(flashcardIndex-1+topicById(currentTopicId).cards.length)%topicById(currentTopicId).cards.length;flashcardBack=false;renderStudy('cards');return;}
});

// Atajos de teclado útiles durante el quiz y las tarjetas.
document.addEventListener('keydown',event=>{
  if($('#view-quiz').classList.contains('active')&&activeQuiz&&!$('#submitAnswer').classList.contains('hidden')){
    const idx=Number(event.key)-1;
    const buttons=$$('#answerArea .answer-option');
    if(idx>=0&&idx<buttons.length){buttons[idx].click();}
    if(event.key==='Enter'&&!$('#submitAnswer').disabled){$('#submitAnswer').click();}
  }
  if($('#view-study').classList.contains('active')&&state.currentTab==='cards'){
    if(event.key==='ArrowRight')$('#nextCard')?.click();
    if(event.key==='ArrowLeft')$('#prevCard')?.click();
    if((event.key==='Enter'||event.key===' ')&&event.target.id==='flashcardFlip'){event.preventDefault();$('#flipCard')?.click();}
  }
});

// Corrige el caso de reanudar una práctica guardada: conserva la pregunta y las opciones ya mostradas.
function restorePendingQuiz(){
  if(!activeQuiz||!activeQuiz.topicId||!topicById(activeQuiz.topicId))return false;
  currentTopicId=activeQuiz.topicId;
  const validIds=new Set(topicById(activeQuiz.topicId).questions.map((q,i)=>`${activeQuiz.topicId}-q${i+1}`));
  if(!validIds.has(activeQuiz.currentQid)){activeQuiz=null;state.currentQuiz=null;return false;}
  if(!Array.isArray(activeQuiz.results))activeQuiz.results=[];
  if(!Array.isArray(activeQuiz.asked))activeQuiz.asked=[];
  if(!Array.isArray(activeQuiz.currentOptions)||!activeQuiz.currentOptions.length){const q=getCurrentQuestion();activeQuiz.currentOptions=shuffle(q.options);}
  return true;
}

applyTheme();
// Normaliza y valida el progreso guardado contra los temas presentes en esta versión.
state.topics=state.topics||{};
for(const t of topics)topicState(t.id);
if(!topics.some(t=>t.id===currentTopicId))currentTopicId=topics[0].id;
if(activeQuiz&&!restorePendingQuiz()){activeQuiz=null;state.currentQuiz=null;}
renderHome();renderSyllabus();renderProgress();
if(activeQuiz){showView('quiz');renderQuizQuestion();}
else if(state.lastResume?.view==='results'&&state.lastResult){currentResult=state.lastResult;renderResults(currentResult);showView('results');}
else if(state.lastResume?.view==='study'&&state.lastResume?.topicId){currentTopicId=state.lastResume.topicId;renderStudy(state.currentTab||'summary');showView('home');}
else showView('home');
