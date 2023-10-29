import { Ong } from "../models/Ong";
//CRE QUE FALTABA 2 CORDENADAS
/*
export var arrayOngs:Ong[] = [{index: 1.0,
  nombre_institucion: 'ASOCIACIÓN RUWAN PERU',
  tipo_entidad: '0NGD',
  representante: ['Julio Cesar Herrada Alejos'],
  telefono: ['084-2608250', '987370319'],
  correo: ['contacto@ruwanperu.org'],
  enlace_web: 'www.ruwanperu-org',
  direccion: {detalle: 'Av. Aviación 4785 - Of. 401 ',
    distrito: 'Santiago de Surco',
    provincia: 'Lima'},
  proyectos: [{nombre_proyecto: 'PILOTO CONSTRUYENDO UNA ESCUELA PARA EL MAÑANA',
    objetivos: ['Mejorar la educación y calidad de vida, porque la construcción de la escuela tendrá fuentes de energías renovables, de tal manera que se mantenga el aire limpio y el mejor cuidado del medio ambiente'],
    ambito_intervencion: {distrito: 'QUISPICANCHI',
     provincia: 'OCONGATE'},
    presupuesto: 'US$  3,000,000',
    periodo_ejecucion: {inicio: '01-08-2023', fin: '24-07-2023'},
    sector: ['AMBIENTE', 'EDUCACIÓN'],
    total_benef: '150',
    estado: 'En Inicio'}],
  fuentes_coperantes: ['Ninguno'],
  cordenadas: {lat: -12.123193307346492, lng: -76.99866423231006},
  dir_image: '../assets/images/ASOCIACIÓN RUWAN PERU.jfif'},
 {index: 2.0,
  nombre_institucion: 'ASOCIACIÓN LAFF CHARITY',
  tipo_entidad: 'ONGD',
  representante: ['Macarena Martinez De Las Casas'],
  telefono: ['942761264'],
  correo: ['info@laftcharity.org.uk'],
  enlace_web: 'www.laffcharity.org.uk',
  direccion: {detalle: 'Bar. Profesional Mz, B Lote 7 Dpto. 601',
   distrito: 'CUSCO',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: 'LAS ORGANIZACIONES LOCALES  SOSTENIBLES ESTAN CAPAITADOS PARA PROPORCIONAR  UNA EDUCACION DE CALIDAD Y FOMENTAR POSITIVAMENTE EL DESARROLLO PERSONAL DE LOS JOVENES Y PERSONAS  VULNERABLES ',
    objetivos: ['Mejorar la educación y calidad de vida, porque la pobreza, la violencia familiar, la falta de vivienda y el embarazo de las adolescentes, entre otros factores, se ven en muchas niñas, niños y adolescentes carentes de estas oportunidades de acceder a derechos básicos como la educación y participación en la sociedad en condiciones de igualdad.'],
    ambito_intervencion: {distrito: 'CALCA  PAUCARTAMBO URUBAMBA',
     provincia: 'CALCA PAUCARTAMBO OLLANTAYTAMBO'},
    presupuesto: 'USD  160,000.00    ',
    periodo_ejecucion: {inicio: '13-12-2022', fin: '31-12-2026'},
    sector: ['EDUCACIÓN', 'INCLUSIÓN SOCIAL', 'SALUD'],
    total_benef: '142',
    estado: 'En Incio'}],
  fuentes_coperantes: ['LATIN AMERICAN FUNDATION FPT THE FUTURE',
   'REINO UNIDO'],
  cordenadas: {lat: 0, lng: 0},
  dir_image: '../assets/images/ASOCIACION LAF 2.jpg'},
 {index: 3.0,
  nombre_institucion: 'ASOCIACIÓN CENTRO DE ESTUDIOS Y PREVENCION DE DESASTRES - PREDES.',
  tipo_entidad: 'ONGD',
  representante: ['Gilberto Romero Zevallos ', 'Lima Karin Cancha '],
  telefono: ['01-4423410', '084-223634'],
  correo: ['elisabeth@predes.org.pe'],
  enlace_web: 'www.predes.org.pe',
  direccion: {detalle: 'Calle Martín de Porres 159 - 161',
   distrito: 'SAN ISIDRO',
   provincia: 'LIMA'},
  proyectos: [{nombre_proyecto: 'INTRODUCCION A LA GESTION DE RIESGO DE DESASTRES -GRD A NUEVAS AUTORIDADES  ELECTAS Y FUNCIONARIOS MUNICIPALES Y DEL GOBIERNO REGIONAL DEL CUSCO',
    objetivos: ['Reducir el impacto ambiental negativo en las ciudades y comunidades que sean sostenibles, incluso prestando especial atención a la calidad del aire y la gestión de los desechos municipales.'],
    ambito_intervencion: {distrito: 'CUSCO', provincia: '13 PROVINCIAS'},
    presupuesto: 'S/.   197,500.00',
    periodo_ejecucion: {inicio: '04-11-2022', fin: '30-06-2023'},
    sector: ['AGROPECUARIO',
     'AMBIENTE',
     'CIENCIA Y TECNOLOGÍA',
     'EDUCACIÓN',
     'GÉNERO',
     'GOBERNABILIDAD',
     'INCLUSIÓN SOCIAL',
     'SALUD',
     'VIVIENDAYSANEAMIENTO'],
    total_benef: '365',
    estado: 'En Ejecucion'}],
  fuentes_coperantes: ['EMBAJADE DE SUIZA', 'COSUDE'],
  cordenadas: {lat: -12.094439972284086, lng: -77.0313128914879},
  dir_image: '../assets/images/ASOCIACIÓN  CENTRO DE ESTUDIOS Y PREVENCION DE DESASTRES - PREDES.jpg'},
 {index: 4.0,
  nombre_institucion: 'ASOCIACION CIVIL RELIGIOSA DIOSPI SUYANA',
  tipo_entidad: 'ENIEX',
  representante: ['Alberto Ruben Arango De La Torre'],
  telefono: ['084-275032'],
  correo: ['arangodlt@suyana.org '],
  enlace_web: 'https://suyana.org/es/where/peru/',
  direccion: {detalle: 'Urbanización Santa María L-17',
   distrito: 'SAN JERONIMO',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: 'PROGRAMA MUNICIPIO SALUDABLE – PMS” CUSCO',
    objetivos: ['Promover programas y centros de formación profesional, coadyuvado con el otorgamiento de becas, la colaboración en seminarios y ayuda a proyectos, la facilitación de material didáctico, el apoyo a publicaciones culturales y científicas, a proyectos para la promoción del sistema sanitario y alimentario, así como la elaboración y administración de proyectos propios.'],
    ambito_intervencion: {distrito: 'PARURO',
     provincia: 'ACCHA- OMACHA'},
    presupuesto: 'US$  783,597.23',
    periodo_ejecucion: {inicio: '01-01-2023', fin: '30-12-2023'},
    sector: ['EDUCACIÓN', 'SALUD'],
    total_benef: '6485',
    estado: 'En Ejecucion'}],
  fuentes_coperantes: ['STIFTUNG SUYANA (FUNDACION SUYANA)'],
  cordenadas: {lat: -13.522585140146541, lng: -71.9000643129725},
  dir_image: '../assets/images/ASOCIACION CIVIL RELIGIOSA DIOSPI SUYANA.jpg'},
 {index: 5.0,
  nombre_institucion: 'ASOCIACIÓN NIÑOS ALTO ANDINOS',
  tipo_entidad: 'ONGD',
  representante: ['Diana Lux Suero Valdivia'],
  telefono: ['946772549'],
  correo: ['sweetchildperu@gmail.com'],
  enlace_web: 'www.sweetchild.com',
  direccion: {detalle: 'Localidad de Sillacancha',
   distrito: 'CALCA',
   provincia: 'CALCA'},
  proyectos: [{nombre_proyecto: 'SWEET CHILD PERU',
    objetivos: ['Mejorar la educación y calidad de vida, promoviendo el cuidado, protección y el desarrollo educativo, cultural de las niñas, niños y adolescentes menores de edad de las comunidades campesinas para poder lograr su desarrollo, bienestar social y espiritual.'],
    ambito_intervencion: {distrito: 'CALCA', provincia: 'CALCA'},
    presupuesto: 'US$  75,000.00    ',
    periodo_ejecucion: {inicio: '01-01-2023', fin: '01-01-2024'},
    sector: ['EDUCACIÓN',
     'INCLUSIÓN SOCIAL',
     'SALUD',
     'VIVIENDAYSANEAMIENTO'],
    total_benef: '150',
    estado: 'En Inicio'}],
  fuentes_coperantes: ['Ninguno'],
  cordenadas: {lat: 0, lng: 0},
  dir_image: '../assets/images/NIÑOS ALTO ANDINOS 5.webp'},
 {index: 6.0,
  nombre_institucion: 'ASOCIACIÓN NACION ASHANINKA MACHIGUENGA DEL VALLE RIO APURIMAC MANTARO (NAMVRAM)',
  tipo_entidad: 'ONGD',
  representante: ['Poyenti Yawar Barboza Tivito'],
  telefono: ['984649457'],
  correo: ['namvram@gmail.com'],
  enlace_web: 'NO TIENE',
  direccion: {detalle: 'Av. Progreso – Barrio La Victoria',
   distrito: 'PICHARI',
   provincia: 'LA CONVENCION'},
  proyectos: [{nombre_proyecto: 'FORTALECIMIENTO DE LAS CAPACIDADES DEL  MANVRAM',
    objetivos: ['Fortalecer sus instituciones internas, que les permita mejorar sus organizaciones y lograr una adecuada producción, así obtener recursos económicos para las familias'],
    ambito_intervencion: {distrito: 'LA CONVENCION',
     provincia: 'PICHARI'},
    presupuesto: 'US$  20,000.00  (por año)',
    periodo_ejecucion: {inicio: '18-04-2023', fin: '17-04-2027'},
    sector: ['INCLUSIÓN SOCIAL', 'JUSTICIA'],
    total_benef: '5000',
    estado: 'En Inicio'}],
  fuentes_coperantes: ['INSTITUTO INTERAMERICANO DE COOPERACION PARA LA AGRICULTURA ',
   'COSTA RICA'],
  cordenadas: {lat: -12.520693, lng: -73.832335},
  dir_image: '../assets/images/NACION ASHANINKA MACHIGUENGA DEL VALLE RIO APURIMAC MANTARO.jpeg'},
 {index: 7.0,
  nombre_institucion: 'ASOCIACIÓN CENTRO DE EDUCACION Y COMUNICACION GUAMAN POMA DE AYALA',
  tipo_entidad: 'ONGD',
  representante: ['Lucio Quiñones Jalisto'],
  telefono: ['084-235931'],
  correo: ['direccion@guamanpoma.org'],
  enlace_web: 'www.guamanpoma.org',
  direccion: {detalle: 'Jr. Retiro Nº 346 - Barrio de Tawantinsuyo',
   distrito: 'WANCHAQ',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: 'FORTALECIMIENTO DE LA AUTONOMIA EN LA GESTION EMPRESARIAL Y COMERCIAL DE PEQUEÑOS EMPREDIMIENTOS DE TURISMO RURAL COMUNITARIO LIDERADOS POR POBLACION INDIGENA EMPRENDEDORA, , HOMBRES Y MUJERES, CON ARTICULACION MUNICIPAL Y ENFOQUE DE GENERO, EN EL DISTRITO DE  CHINCHERO CUSCO',
    objetivos: ['Promover el crecimiento económico sostenido, inclusivo y el empleo pleno y productivo del trabajo decente para todos, se busca también reducir las desigualdades con esto se pretende realizar proposiciones de políticas y legislación pertinentes al asunto'],
    ambito_intervencion: {distrito: 'URUBAMBA', provincia: 'CHINCHERO'},
    presupuesto: 'EUROS 386,547.50  ',
    periodo_ejecucion: {inicio: '01-07-2019', fin: '31-10-2023'},
    sector: ['EDUCACIÓN', 'JUSTICIA', 'SALUD'],
    total_benef: '180',
    estado: 'En Ejecucion'}],
  fuentes_coperantes: ['ENERALITAT VALENCIA - ESPAÑA'],
  cordenadas: {lat: -13.518000349547645, lng: -71.96819003253225},
  dir_image: '../assets/images/Guaman Poma de Ayala.jpg'},
 {index: 8.0,
  nombre_institucion: 'ASOCIACIÓN PROFESIONALES PARA PROMOVER EL DESARROLLO PRODUCTIVO - TANQAY',
  tipo_entidad: 'ONGD',
  representante: ['Ana Maia Simovic Ruiz Luis Fernando Novoa Meza'],
  telefono: ['964940186', '961841223', '997178212'],
  correo: ['maria.r@tanqay.org',
   'luis.de@tanqay.org ',
   'scamateconsultores@gmail.com'],
  enlace_web: 'www.tanqay.org',
  direccion: {detalle: 'Calle Bolognesi N°125 Dpto. 501 Int. Piso 5',
   distrito: 'MIRAFLORES',
   provincia: 'LIMA'},
  proyectos: [{nombre_proyecto: 'MEJORAMIENTO DE CAPACIDADES PARA LA PRODUCCION DE CAFÉ, CACAO Y ESPECIES FORESTALES ',
    objetivos: ['Considerar que los recursos naturales renovables, contribuyen al desarrollo económico viable de la region y de sus pueblos, esto por la riqueza de sus potencialidades físicas, biológicas y ambientales.'],
    ambito_intervencion: {distrito: 'LA CONVENCION',
     provincia: 'ECHARATI'},
    presupuesto: 'US$ 4,014,197.19   ',
    periodo_ejecucion: {inicio: '02-01-2023', fin: '30-12-2025'},
    sector: ['EDUCACIÓN', 'PRODUCCIÓN'],
    total_benef: '107',
    estado: 'En Inicio'}],
  fuentes_coperantes: ['FONTAAGRO', 'ESPAÑA'],
  cordenadas: {lat: -12.119342629265303, lng: -77.03562696813248},
  dir_image: '../assets/images/TANQAY 8.jfif'},
 {index: 9.0,
  nombre_institucion: 'ASOCIACIÓN WORLD VISION PERU',
  tipo_entidad: 'ONGD',
  representante: ['Sandra Elizabeth Contreras Angulo ',
   ' Lima Deisy Moscoso Zambrano '],
  telefono: ['01-5136500'],
  correo: ['worldvision_onper@wvi.org'],
  enlace_web: 'www.wvi.org',
  direccion: {detalle: 'Jr. Sanchez Cerro 2040',
   distrito: 'JESUS MARIA',
   provincia: 'LIMA'},
  proyectos: [{nombre_proyecto: 'PDA AUSANGATE',
    objetivos: ['Niñas niños y adolescentes de las zonas de intervención de Word Vision Peru mejoran sus habilidades para la vida y el trabajo en un entorno más seguro al 2022.'],
    ambito_intervencion: {distrito: 'QUISPICANCHI',
     provincia: 'CCATCCA OCONGATE URCOS'},
    presupuesto: 'US$ 670,400 ',
    periodo_ejecucion: {inicio: '01-10-2012', fin: '30-09-2027'},
    sector: ['EDUCACION', 'GENERO'],
    total_benef: '5858',
    estado: 'En Continuidad'}],
  fuentes_coperantes: ['WORLD VISION ', 'ESTADOS UNIDOS'],
  cordenadas: {lat: -12.082393442441589, lng: -77.0489663532031},
  dir_image: '../assets/images/WORLD VISION 9.jpg'}, 
 {index: 10.0,
  nombre_institucion: 'ENIEX ASOCIACIÓN NIÑOS DEL ARCO IRIS',
  tipo_entidad: 'ENIEX',
  representante: ['Luis Antonio Bouroncle Tello'],
  telefono: ['084-201484', '955705236'],
  correo: ['mramos@niñosdelarcoiris.edu.pe'],
  enlace_web: 'www.niñosdelarcoiris.com',
  direccion: {detalle: 'Querocancha s/n',
   distrito: 'URUBAMBA',
   provincia: ' URUBAMBA'},
  proyectos: [{nombre_proyecto: 'EL MEDIO AMBIENTE Y SU PROPIO FUTURO',
    objetivos: ['Formar agentes del cambio capaces de aportar al mundo globalizado con valores y principios de igualdad, justicia, amor, respeto y confianza de manera que contribuya al bienestar de su familia, la comunidad.'],
    ambito_intervencion: {distrito: ' URUBAMBA', provincia: 'URUBAMBA'},
    presupuesto: 'US$ 361,688 ',
    periodo_ejecucion: {inicio: '01-01-2023', fin: '31-12-2023'},
    sector: ['EDUCACIÓN', 'INCLUSIÓN SOCIAL', 'SALUD'],
    total_benef: '550',
    estado: 'En Ejecicion'}],
  fuentes_coperantes: ['FUNDACION STICHTING KUYCHI - HOLANDA',
   'SUCEDE-GORDON FUND ESTADOS UNIDOS',
   'AURUBIS - ALEMANIA',
   'ORPHANED STARFISH FOUNDATION - ESTADOS UNIDOS',
   'SIEMENS STIFTUNG - ALEMANIA'],
  cordenadas: {lat: -13.287471854824044, lng: -72.13260644578143},
  dir_image: '../assets/images/NIÑOS DEL ARCO IRIS 10.jpg'},
 {index: 11.0,
  nombre_institucion: 'ASOCIACIÓN ARARIWA PARA LA PROMOCIÓN TÉCNICO CULTURAL ANDINA',
  tipo_entidad: 'ONGD',
  representante: ['Francisco Roman Cueva Garcia '],
  telefono: ['084-236887', '094-263845'],
  correo: ['arariwa_cusco@terra.com.pe'],
  enlace_web: 'EN RENOVACION',
  direccion: {detalle: 'AVENIDA LOS INCAS 1606',
   distrito: 'WANCHAQ',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: 'PRODUCTORES RURALES ORGANIZADOS SE INCORPORAN EN EL SISTEMA ALIMENTARIO SOSTENIBLE PARA  MEJORA LAS CONDICIONES DE DESARROLLO EN LA PROVINCIA DE CALCA Y CHUMBIVILCAS',
    objetivos: ['Los agricultores y otros actores de la economía social y solidaria, con especial atención a los jóvenes y las mujeres disfrutan de mejores condiciones de vida'],
    ambito_intervencion: {distrito: 'CALCA  CHUMBUVILCAS',
     provincia: 'LAMAY SANTO TOMAS, LLUSCO, COLQUEMARCA Y CCAPACMARCA'},
    presupuesto: 'EUROS 535,000 ',
    periodo_ejecucion: {inicio: '01-01-2022', fin: '31-12-2026'},
    sector: ['AGRICULTURA'],
    total_benef: '8484',
    estado: 'En Continuidad'}],
  fuentes_coperantes: ['SOS FAIM - BÉLGICA'],
  cordenadas: {lat: -13.525799180878543, lng: -71.9537934576719},
  dir_image: '../assets/images/ARARIWA 11.jpg'},
 {index: 12.0,
  nombre_institucion: 'ASOCIACIÓN PARA LA CONSERVACIÓN DE LA CUENCA AMAZÓNICA',
  tipo_entidad: 'ONGD',
  representante: ['Maria Elena Gutierrez Herazo'],
  telefono: ['084-222329', '984108118'],
  correo: ['mesadepartes@conservaconamazonica.org'],
  enlace_web: 'www.acca.org.pe',
  direccion: {detalle: 'CALLE GENERAL VARGAS MACHUCA 627',
   distrito: 'MIRAFLORES',
   provincia: 'LIMA'},
  proyectos: [{nombre_proyecto: 'PAISAJE DE CHALLABAMBA',
    objetivos: ['Proteger y restaurar las cabeceras de las microcuencas proveedoras de recursos hídricos pertenecientes a la comunidad campesina Juan Velasco Alvarado y Jajahuana, con actividades de restauración de estos ecosistemas andinos-amazónicos'],
    ambito_intervencion: {distrito: 'PAUCARTAMBO',
     provincia: 'CHALLABAMBA'},
    presupuesto: 'US$ 52,393 ',
    periodo_ejecucion: {inicio: '01-01-2021', fin: '31-12-2023'},
    sector: ['CONSERVACIÓNMEDIOAMBIENTE', 'AGROPECUARIO'],
    total_benef: '1250',
    estado: 'En Ejecucion'}],
  fuentes_coperantes: ['ASOCIACIÓN ECOSISTYEMAS INDINOS -ECOAN'],
  cordenadas: {lat: -12.1222712797327, lng: -77.0188169463343},
  dir_image: '../assets/images/CONSERVACION AMAZONICA ACCA.jpg'},
 {index: 13.0,
  nombre_institucion: 'CENTRO DE ESTUDIOS REGIONALES ANDINO BARTOLOME DE LAS CASAS',
  tipo_entidad: 'ONGD',
  representante: ['Carlos Augusto Herz Saenz'],
  telefono: ['084-245415'],
  correo: ['cbc@apu.cbc.org.pe'],
  enlace_web: 'www.cbc.org.pe',
  direccion: {detalle: 'PASAJE PAMPA DE ALIANZA 164',
   distrito: 'CUSCO',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: 'ALIANZA DE ORO EXPERIENCIA ANDINA DE DEFENSA DE LOS DERECHOS HUMANOS FRENTE A LA ACTIVIDAD MINERA',
    objetivos: ['No tiene objetivos'],
    ambito_intervencion: {distrito: 'ESPINAR  CHUMBIVILCAS',
     provincia: 'ESPINAR CHUMBIVILCAS'},
    presupuesto: '0',
    periodo_ejecucion: {inicio: '01-02-2021', fin: '31-01-2024'},
    sector: ['DESARROLLOSOCIAL'],
    total_benef: '4638',
    estado: 'En Continuidad'},
   {nombre_proyecto: 'DERECHOS HUMANOS AMBIENTALES YA DEFENSORES Y DEFENSORAS DE DERECHOS HUMANOS AMBIENTALES COMUNIDADES CAMPESINAS INDÍGENAS GOBIERNO LOCALES JUNTAS PARA UNA  MEJOR GOBERNANZA AMBIENTAL Y UN DESARROLLO TERRITORIAL DIVERSIFICADO Y SOSTENIBLE EN EL CORREDOR MINERO DEL SUR ANDINO',
    objetivos: ['Contribuir a la reducción de los efectos adversos de las actividades de empresas mineras frente a los derechos humanos (DDHH) individuales y colectivo de las comunidades rurales de Bolivia, Ecuador y Perú'],
    ambito_intervencion: {distrito: 'ESPINAR  CHUMBIVILCAS',
     provincia: 'ESPINAR CHUMBIVILCAS'},
    presupuesto: 'US$ 70,265.6  ',
    periodo_ejecucion: {inicio: '01-02-2021', fin: '31-07-2023'},
    sector: ['DESARROLLOSOCIAL'],
    total_benef: '265',
    estado: 'En Continuidad'},
   {nombre_proyecto: 'FOOD SYSTEM INNOVATION AT SCALE IN CUSCO A JOINT LEARNING APPROACH',
    objetivos: ['No tiene objetivos'],
    ambito_intervencion: {distrito: 'No definido',
     provincia: 'No definido'},
    presupuesto: '0',
    periodo_ejecucion: {inicio: '01-012020', fin: '15-12-2023'},
    sector: ['DESARROLLOSOCIAL'],
    total_benef: '2000',
    estado: 'No definido'}],
  fuentes_coperantes: ['Ninguno'],
  cordenadas: {lat: -13.5183002295143, lng: -71.9745052667603},
  dir_image: '../assets/images/BARTOLOME DE LAS  CASAS 13.jpg'},
 {index: 14.0,
  nombre_institucion: 'ASOCIACIÓN ONG APU SALQANTAY',
  tipo_entidad: 'ONGD',
  representante: ['Mauro Caceres Mariscal'],
  telefono: ['984377388'],
  correo: ['ongapusalqantay@gmail.com'],
  enlace_web: 'EN RENOVACIÓN',
  direccion: {detalle: 'APV EL VALLECITO B-14',
   distrito: 'SAN SEBASTIAN',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: 'SISTEMA DE INSTALACIÓN DE ABASTECIMIENTO DE AGUA POTABLE EN LOS CENTROS POBLAOS DE MOLLEPATA, HUAMPA, SANTIAGIO DE PUPUJA, MARCAHUAYLLA, PAMPA TUTACCA, ALQUIORCCO Y TILLCA, DISTRITO DE MOLLEPATA, PROVINCIA DE ANTA Y DEPARTAMENTO DEL CUSCO',
    objetivos: ['Contribuir la pobreza en las comunidades campesinas y nativas, mediante proyectos integrales de desarrollo como: turismo, irrigación para ampliar la frontera agrícola.'],
    ambito_intervencion: {distrito: 'ANTA CUSCO',
     provincia: 'CUSCO MOLLEPATA '},
    presupuesto: 'US$ 46,233,700.39',
    periodo_ejecucion: {inicio: '01-01-2022', fin: '30-12-2023'},
    sector: ['SANEAMIENTOBÁSICO'],
    total_benef: '06 COMUNIDADES CAMPESINAS',
    estado: 'En Inicio'}],
  fuentes_coperantes: ['COOPERACIÓN FINANCIERA ALEMANIA'],
  cordenadas: {lat: -13.55011397140306, lng: -71.94094899057602},
  dir_image: '../assets/images/none'},
 {index: 15.0,
  nombre_institucion: 'ASOCIACIÓN PATRIMONIO FILMICO PERUANO',
  tipo_entidad: 'ONGD',
  representante: ['Yuleysi Jauregui Ripa'],
  telefono: ['958141632'],
  correo: ['patrimoniofilmicoperuano@gmail.com'],
  enlace_web: 'FACEBOOK ONAWAY FRUST',
  direccion: {detalle: 'JR. PUMACAHUA 307, URB. TAHUANTINSUYO',
   distrito: 'CUSCO',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: 'FORTALECIMIENTO  DEL PATRIMONIO  AUDIOVISUAL DE LA NACIÓN QERO PAUCARTAMBO, CUSCO A TRAVÉS DEL CINE COMUNITARIO CON CELULARES: RIMAYNINCHIS, NUESTRAS VOCES',
    objetivos: ['Fortalecimiento del patrimonio audiovisual de la nación Qero Paucartambo, cusco a través del cine comunitario con celulares; Rimayninchis, nuestras voces'],
    ambito_intervencion: {distrito: 'PAUCARTAMBO',
     provincia: 'PAUCARTAMBO'},
    presupuesto: '0',
    periodo_ejecucion: {inicio: '01-09-2023', fin: '01-09-2025'},
    sector: ['CIENCIA Y TECNOLOGÍA',
     'TRANSPORTES Y COMUNICACIONES',
     'MEDIOCULTURAL'],
    total_benef: '2500',
    estado: 'En Inicio'}],
  fuentes_coperantes: ['ONAWAY FRUST'],
  cordenadas: {lat: -13.5165987197867, lng: -71.9680433940903},
  dir_image: '../assets/images/ASOCIACION FILMICO PERUANO 17.jpg'},
 {index: 16.0,
  nombre_institucion: 'ASOCIACIÓN SANTA RITA DEL CUSCO DE LOS PADRES AGUSTINOS',
  tipo_entidad: 'ONGD',
  representante: ['Alexander Escobar Farfan'],
  telefono: ['941471194'],
  correo: ['policlinicosantarita@gmail.com'],
  enlace_web: 'www.policlinicosantarita.com',
  direccion: {detalle: 'URB. LARAPA GRANDE, AV. SAN AGUSTÍN LOTE G2',
   distrito: 'SAN JERONIMO',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: 'GASP EN CUSCO: LUCHA Y PREVENCIÓN A LAS ENFERMEDADES RESPIRATORIAS EN LA SIERRA ANDINA- FASE II',
    objetivos: ['Contribuir a la mejoría de la condiciones de vida de la población, a través de la optimización de los servicios de salud en la ciudad del cusco y provincia, en el campo neológico'],
    ambito_intervencion: {distrito: 'CUSCO',
     provincia: 'SAN SEBASTIAN SANTIAGO'},
    presupuesto: '0',
    periodo_ejecucion: {inicio: '02-01-2023', fin: '31-12-2023'},
    sector: ['EDUCACIÓN', 'INCLUSIÓN SOCIAL', 'SALUD'],
    total_benef: '2490',
    estado: 'En Inicio'}],
  fuentes_coperantes: ['ESTADOS UNIDOS'],
  cordenadas: {lat: -13.5314590267296, lng: -71.9002490484501},
  dir_image: '../assets/images/ASOCIACION SANTA RITA 16.jpg'},
 {index: 17.0,
  nombre_institucion: 'ASOCIACIÓN CARITAS ARQUIDIOCESANA DEL CUSCO',
  tipo_entidad: 'ONGD',
  representante: ['No existe'],
  telefono: ['084-226966'],
  correo: ['ccusco@coritas.org.pe'],
  enlace_web: 'www.caritas.org.pe',
  direccion: {detalle: 'CALLE CARMEN BAJO 206',
   distrito: 'CUSCO  ',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: '    ',
    objetivos: ['Contribuir al desarrollo integral de mujeres y hombres de las comunidades campesinas de la Región Cusco y la sierra Sur del Perú, facilitando el empoderamiento de las mujeres en los espacios locales de manera que impulsen procesos de desarrollo comunal, con identidad, inclusivos, concertados, equitativos y sostenibles.'],
    ambito_intervencion: {distrito: 'ANTA ACOMAYO',
     provincia: 'CHINCHAYPUJIO SAGARARA'},
    presupuesto: 'US$ 658,783.94 ',
    periodo_ejecucion: {inicio: '03-01-2022', fin: '31-12-2023'},
    sector: ['SALUD'],
    total_benef: '315',
    estado: 'En Ejecución'}],
  fuentes_coperantes: ['Ninguno'],
  cordenadas: {lat: -13.5157392056739, lng: -71.974122410612},
  dir_image: '../assets/images/CARITAS 17.jpg'},
 {index: 18.0,
  nombre_institucion: 'AMANTANI CCORCA',
  tipo_entidad: 'ONGD',
  representante: ['Thilo Bock'],
  telefono: ['084-584785'],
  correo: ['pilar@amantani.org.uk ', ' rodrigo@amantani.org.pe'],
  enlace_web: 'No definido',
  direccion: {detalle: 'URBANIZACION MARISCAL GAMARRA PASAJE LOS ROSALES 20 D',
   distrito: 'CUSCO',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: 'PROYECTO TRANSICIÓN ETAPA 2',
    objetivos: ['Los jóvenes de comunidades nativas quechua hablantes tendrán acceso a educación superior de calidad que deriva en oportunidades de empleo justo.'],
    ambito_intervencion: {distrito: 'CUSCO PARURO',
     provincia: 'CCORCA HUANOQUITE'},
    presupuesto: 'US$ 810,501.75',
    periodo_ejecucion: {inicio: '01-01-2022', fin: '31-12-2024'},
    sector: ['EDUCACIÓN', 'GÉNERO', 'SALUD'],
    total_benef: 'nan',
    estado: 'En Ejecucion'}],
  fuentes_coperantes: ['AMANTANI UK'],
  cordenadas: {lat: -13.5208574201875, lng: -71.9614021789811},
  dir_image: '../assets/images/AMANTANI CCORCA.jpg'},
 {index: 19.0,
  nombre_institucion: 'ASOCIACION JESUS OBRERO',
  tipo_entidad: 'ONGD',
  representante: ['Eberth Molina Romero'],
  telefono: ['084-612606', '991260621'],
  correo: ['ccaijoperu@yahoo.es'],
  enlace_web: 'No definido',
  direccion: {detalle: 'CALLE GARCILASO 707',
   distrito: 'ANDAHUAYLILLAS',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: '"PROYECTO DE TRANSICIÓN DE LOS SISTEMAS AGRARIOS Y ALIMENTARIOS EN LOS TERRITORIOS" – TERSAA',
    objetivos: ['Garantizar a los consumidores la disponibilidad y el acceso a alimentos de calidad producidos localmente, el programa se centrará en mejorar la articulación entre la agricultura familiar y los mercados locales a través del acceso a nuevas oportunidades comerciales diversificadas, justas y sostenibles, mejorar la sostenibilidad de los sistemas de producción y movilizar a los actores de los territorios, favoreciendo mecanismos de gobernanza económica.'],
    ambito_intervencion: {distrito: 'QUISPICANCHI',
     provincia: 'CCATCA OCONGATE'},
    presupuesto: 'US$ 183,533.06',
    periodo_ejecucion: {inicio: '01-12-2021', fin: '30-11-2024'},
    sector: ['AGROPECUARIO',
     'AMBIENTE',
     'CIENCIA Y TECNOLOGÍA',
     'ECONOMÍA',
     'GÉNERO',
     'GOBERNABILIDAD',
     'INCLUSIÓN SOCIAL',
     'PRODUCCIÓN'],
    total_benef: 'nan',
    estado: 'En Ejecucion'},
   {nombre_proyecto: 'PROMOVIENDO LA ALIMENTACIÓN SALUDABLE Y EL CUIDADO DE LA MADRE TIERRA EN LOS DISTRITOS DE ANDAHUAYLILLAS Y QUIQUIJANA - QUISPICANCHI, CUSCO, PERÚ.',
    objetivos: ['Reducir la inseguridad alimentaria aumentando la biodiversidad y los cultivos agroecologicos 130 titulares de derecho (100 mujeres y 30 varones) en los distritos de Andahuaylillas y Quiquijana.'],
    ambito_intervencion: {distrito: 'QUISPICANCHI',
     provincia: 'ANDAHUAYLILLAS QUIQUIJANA'},
    presupuesto: 'US$ 313,172.28',
    periodo_ejecucion: {inicio: '01-08-2022', fin: '31-01-2024'},
    sector: ['Ninguno'],
    total_benef: 'nan',
    estado: 'En Ejecucion'}],
  fuentes_coperantes: ['ACTING FOR LIFE'],
  cordenadas: {lat: -13.6738429175753, lng: -71.6774923654836},
  dir_image: '../assets/images/ASOCIACION JESUS OBRERO.jpg'},
 {index: 20.0,
  nombre_institucion: 'AYUDA PARA VIDA SILVESTRE AMENAZADA SOCIEDAD ZOOLOGICA DE FRANCFORT PERU',
  tipo_entidad: 'ONGD',
  representante: ['Kevin Sidney Ibañez Saravia'],
  telefono: ['084-253840', '984552131'],
  correo: ['eliana.latorre@fzs.org'],
  enlace_web: 'No definido',
  direccion: {detalle: 'URB. ENTEL PERU C-1',
   distrito: 'WANCHAQ',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: 'FORTALECIMIENTO DE LA RESERVA DE BIOSFERA DEL MANU (RBM) BASADO EN SOLUCIONES BASADAS EN LA NATURALEZA II.',
    objetivos: ['Desarrollo e implementación de acciones priorizadas para apoyar el uso y el comercio sostenible de productos y servicios de las cadenas de valor priorizadas de la biodiversidad en áreas protegidas, zonas de amortiguamiento y zonas adyacentes en la Reserva de Biosfera del Manu.'],
    ambito_intervencion: {distrito: 'CALCA PAUCARTAMBO',
     provincia: 'YANATILE CHALLABAMBA KOSÑIPATA'},
    presupuesto: 'US$ 89,865.00',
    periodo_ejecucion: {inicio: '17-08-2022', fin: '30-03-2024'},
    sector: ['AMBIENTE', 'EDUCACIÓN'],
    total_benef: 'nan',
    estado: 'En Ejecucion'},
   {nombre_proyecto: 'PROTECCIÓN Y REGENERACIÓN DE LOS PASTIZALES DE PUNA ALTOANDINOS Y DEL  BOSQUE ARBOLADO DE LA RESERVA DE LA BIOSFERA DEL MANU (PUNAMANU).',
    objetivos: ['El Paisaje Manu mantiene su estado de conservación a largo plazo, garantizando sus procesos ecológicos y contribuyendo al cumplimiento de los compromisos de conservación del país.'],
    ambito_intervencion: {distrito: 'PAUCARTAMBO',
     provincia: 'CHALLABAMBA'},
    presupuesto: 'US$ 480,510.63',
    periodo_ejecucion: {inicio: '01-07-2021', fin: '30-06-2024'},
    sector: ['Ninguno'],
    total_benef: 'nan',
    estado: 'En Ejecucion'}],
  fuentes_coperantes: ['DEUTSCHE GESELL SCHAFT FÜR INTERNATIONALE ZUSAMMENARBEIT -  COOPERACIÓN ALEMANA AL DESARROLLO'],
  cordenadas: {lat: -13.530922894183234, lng: -71.95093034089784},
  dir_image: '../assets/images/AYUDA PARA VIDA SILVESTRE AMENAZADA SOCIEDAD ZOOLOGICA DE FRANCFORT PERU.jpg'},
 {index: 21.0,
  nombre_institucion: 'ASOCIACIÓN KALLPA PARA LA PROMOCION INTEGRAL DE LA SALUD Y EL DESARROLLO',
  tipo_entidad: 'ONGD',
  representante: ['Daniel Maldonado Corzo'],
  telefono: ['930998151', '084-238-999'],
  correo: ['peru@kallpa.org.pe ', ' fgaray@kallpa.org.pe'],
  enlace_web: 'https://www.kallpa.org.pe/es/quienes-somos/nuestro-equipo',
  direccion: {detalle: 'PASAJE CAPRI 140 URB PALOMAR NORTE',
   distrito: 'LA VICTORIA',
   provincia: 'LIMA'},
  proyectos: [{nombre_proyecto: 'CENTRO DE JOVENES Y EMPLEO INCLUSIVO FASE II',
    objetivos: ['Garantizar una educación inclusiva y equitativa de calidad y promover oportunidades de aprendizaje permanente para todos'],
    ambito_intervencion: {distrito: 'CUSCO', provincia: 'CUSCO'},
    presupuesto: 'US$ 127,580.94',
    periodo_ejecucion: {inicio: '01-08-2021', fin: '31-07-2024'},
    sector: ['EDUCACIÓN', 'GÉNERO', 'SALUD'],
    total_benef: '185',
    estado: 'En Ejecución'}],
  fuentes_coperantes: ["L'ASSOCIATION KALLPA - GENÈVE(ASOCIACIONKALLPA-GINEBRA)"],
  cordenadas: {lat: -12.0878618278898, lng: -77.0134622118207},
  dir_image: '../assets/images/KALLPA.jpg'},
 {index: 22.0,
  nombre_institucion: 'ASOCIACION ALLIN KAWSAY',
  tipo_entidad: 'ONGD',
  representante: ['Miguel Andres Quispe Chayña'],
  telefono: ['084-351914', '984517287'],
  correo: ['allinkawsay@speedy.com.pe ', ' miquispe8@gmail.com'],
  enlace_web: 'https://allinkawsay.org.pe/',
  direccion: {detalle: 'JR. SANTA ANA 720',
   distrito: 'SICUANI',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: '10134_2022/24 ESCUELAS PARA LA PAZ Y EL BUEN VIVIR SOCIAL Y MEDIO AMBIENTAL',
    objetivos: ['Prevención de la violencia Prácticas de paz y buen vivir','Prevención del deterioro de la salud mental y emocional','Formación acción integral de niños y niñas promotores de paz y buen vivir','Formación acción de jóvenes protagonistas de convivencia sin violencia.'],
    ambito_intervencion: {distrito: 'CANCHIS',
     provincia: 'SICUANI CANAS'},
    presupuesto: 'US$ 233,242.30',
    periodo_ejecucion: {inicio: '01-01-2022', fin: '31-12-2024'},
    sector: ['EDUCACIÓN'],
    total_benef: '3685',
    estado: 'En Ejecución'}],
  fuentes_coperantes: ['LIECHTENSTEINISCHER ENTWICKLUNGS DIENST'],
  cordenadas: {lat: -14.2651525238717, lng: -71.2252986237203},
  dir_image: '../assets/images/ASOCIACION ALLIN KAWSAY.jpg'},
 {index: 23.0,
  nombre_institucion: 'ASOCIACION PUKLLASUNCHIS',
  tipo_entidad: 'ONGD',
  representante: ['Christine Appenzeller Schlegel'],
  telefono: ['084-237918', '984297511', '984566780'],
  correo: ['pukllas@pukllasunchis.org'],
  enlace_web: 'https://pukllasunchis.org/',
  direccion: {detalle: 'CALLE SIETE DIABLITOS 222 - SAN BLAS',
   distrito: 'CUSCO',
   provincia: 'CUSCO'},
  proyectos: [{nombre_proyecto: 'ESCUELAS IMPULSANDO TERRITORIOS VIVOS',
    objetivos: ['Institución dedicada a la educación, con propuestas transformadoras dentro del sistema educativo peruano y en espacios no escolarizados, con un enfoque intercultural, inclusivo y medioambiental.'],
    ambito_intervencion: {distrito: 'CUSCO', provincia: 'CUSCO'},
    presupuesto: 'US$ 82,650.00',
    periodo_ejecucion: {inicio: '01-02-2022', fin: '31-12-2026'},
    sector: ['AMBIENTE',
     'CIENCIA Y TECNOLOGÍA',
     'CULTURA',
     'EDUCACIÓN',
     'GOBERNABILIDAD',
     'JUSTICIA',
     'TRABAJO'],
    total_benef: 'nan',
    estado: 'En Ejecución'}],
  fuentes_coperantes: ['EMBAJADA DE LA CONFEDERACION DE SUIZA',
   'FUNDACION PUKLLASUNCHIS',
   'SAHEE FOUNDATION'],
  cordenadas: {lat: -13.5129569640445, lng: -71.9752754612179},
  dir_image: '../assets/images/ASOCIACION PUKLLASUNCHIS.jpeg'}]
  */