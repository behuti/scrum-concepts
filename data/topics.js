const topics = [
  {
    id: 1,
    title: "Scrum",
    category: "framework",
    summary: "Marco de trabajo ágil para gestionar proyectos complejos.",
    description: "Scrum es un marco de trabajo ligero que ayuda a personas, equipos y organizaciones a generar valor a través de soluciones adaptativas para problemas complejos. Se basa en el empirismo y el pensamiento lean. Sus pilares son la transparencia, la inspección y la adaptación.",
    keywords: ["ágil", "framework", "empirismo", "iterativo", "incremental"]
  },
  {
    id: 2,
    title: "Sprint",
    category: "evento",
    summary: "Iteración de tiempo fijo (1-4 semanas) donde se crea un incremento de valor.",
    description: "El Sprint es el corazón de Scrum. Es un contenedor de tiempo fijo (normalmente de 1 a 4 semanas) durante el cual se crea un Incremento de producto potencialmente entregable. Todos los eventos de Scrum (Sprint Planning, Daily Scrum, Sprint Review y Sprint Retrospective) ocurren dentro del Sprint. Un nuevo Sprint comienza inmediatamente después de la conclusión del Sprint anterior.",
    keywords: ["iteración", "timebox", "incremento", "ciclo", "sprint"]
  },
  {
    id: 3,
    title: "Sprint Planning",
    category: "evento",
    summary: "Reunión al inicio del Sprint para definir qué y cómo se va a trabajar.",
    description: "El Sprint Planning inicia el Sprint estableciendo el trabajo a realizar. El equipo colabora para responder dos preguntas fundamentales: ¿Qué se puede entregar en este Sprint? y ¿Cómo se va a lograr el trabajo? El resultado es el Sprint Backlog y el Sprint Goal. Tiene un timebox máximo de 8 horas para Sprints de 4 semanas.",
    keywords: ["planificación", "planeación", "sprint backlog", "sprint goal", "compromiso"]
  },
  {
    id: 4,
    title: "Daily Scrum (Standup Diario)",
    category: "evento",
    summary: "Reunión diaria de 15 minutos para inspeccionar el progreso hacia el Sprint Goal.",
    description: "El Daily Scrum es una reunión diaria de máximo 15 minutos donde los Developers inspeccionan el progreso hacia el Sprint Goal y adaptan el Sprint Backlog según sea necesario. Se enfoca en: ¿Qué hice ayer? ¿Qué haré hoy? ¿Hay algún impedimento? Mejora la comunicación, elimina obstáculos y promueve la toma rápida de decisiones.",
    keywords: ["daily", "standup", "reunión diaria", "sincronización", "impedimentos"]
  },
  {
    id: 5,
    title: "Sprint Review",
    category: "evento",
    summary: "Reunión al final del Sprint para inspeccionar el Incremento y adaptar el Product Backlog.",
    description: "La Sprint Review se realiza al final del Sprint para inspeccionar el Incremento y adaptar el Product Backlog si es necesario. El equipo presenta los resultados del Sprint a los stakeholders y se discute el progreso hacia la meta del producto. Es una sesión de trabajo colaborativo, no una simple presentación. Timebox máximo de 4 horas para Sprints de 4 semanas.",
    keywords: ["revisión", "demo", "stakeholders", "feedback", "incremento"]
  },
  {
    id: 6,
    title: "Sprint Retrospective",
    category: "evento",
    summary: "Reunión para inspeccionar el proceso del equipo y planificar mejoras.",
    description: "La Sprint Retrospective es la oportunidad del equipo Scrum para inspeccionarse a sí mismo y crear un plan de mejoras para el siguiente Sprint. Se enfoca en: ¿Qué funcionó bien? ¿Qué no funcionó? ¿Qué podemos mejorar? Es fundamental para la mejora continua del equipo. Timebox máximo de 3 horas para Sprints de 4 semanas.",
    keywords: ["retro", "mejora continua", "kaizen", "inspección", "adaptación"]
  },
  {
    id: 7,
    title: "Product Backlog",
    category: "artefacto",
    summary: "Lista ordenada de todo lo que se necesita para mejorar el producto.",
    description: "El Product Backlog es una lista emergente y ordenada de todo lo que se necesita para mejorar el producto. Es la única fuente de trabajo para el equipo Scrum. Los elementos del Product Backlog (PBIs) pueden ser funcionalidades, mejoras, correcciones de errores, requisitos técnicos, etc. El Product Owner es responsable de gestionarlo y priorizarlo.",
    keywords: ["backlog", "pbi", "requisitos", "priorización", "refinement"]
  },
  {
    id: 8,
    title: "Sprint Backlog",
    category: "artefacto",
    summary: "Plan del equipo para el Sprint que incluye el Sprint Goal y el trabajo seleccionado.",
    description: "El Sprint Backlog es el conjunto de elementos del Product Backlog seleccionados para el Sprint, más un plan para entregarlos. Es una representación en tiempo real del trabajo que los Developers planean realizar durante el Sprint para lograr el Sprint Goal. Solo los Developers pueden modificar el Sprint Backlog durante el Sprint.",
    keywords: ["plan", "compromiso", "selección", "sprint goal", "tareas"]
  },
  {
    id: 9,
    title: "Incremento",
    category: "artefacto",
    summary: "Resultado tangible del Sprint que suma valor al producto.",
    description: "El Incremento es la suma de todos los elementos del Product Backlog completados durante un Sprint, sumado a los Incrementos de todos los Sprints anteriores. Debe estar en condiciones de uso y cumplir con la Definition of Done. Cada Incremento es un paso hacia la meta del producto y debe ser potencialmente entregable.",
    keywords: ["increment", "entregable", "valor", "done", "producto"]
  },
  {
    id: 10,
    title: "Definition of Done (DoD)",
    category: "artefacto",
    summary: "Acuerdo formal sobre lo que significa que un trabajo esté completo.",
    description: "La Definition of Done (DoD) es un acuerdo formal entre el equipo Scrum que define cuándo un elemento del Product Backlog está realmente 'completo'. Proporciona transparencia y garantiza que todos entiendan qué significa 'hecho'. Si un PBI no cumple la DoD, no se puede considerar completado ni presentar en la Sprint Review.",
    keywords: ["dod", "completado", "calidad", "criterios", "acuerdo"]
  },
  {
    id: 11,
    title: "Product Owner (PO)",
    category: "rol",
    summary: "Responsable de maximizar el valor del producto gestionando el Product Backlog.",
    description: "El Product Owner es una de las tres responsabilidades del equipo Scrum. Es responsable de maximizar el valor que el equipo de desarrollo genera. Sus principales funciones incluyen: gestionar y priorizar el Product Backlog, comunicar la visión del producto, definir los criterios de aceptación y ser la voz del cliente. Es una sola persona, no un comité.",
    keywords: ["po", "dueño de producto", "visión", "priorización", "stakeholder"]
  },
  {
    id: 12,
    title: "Scrum Master",
    category: "rol",
    summary: "Facilitador que asegura que Scrum se entienda y se aplique correctamente.",
    description: "El Scrum Master es responsable de establecer Scrum como se define en la Guía Scrum. Ayuda a todos a entender la teoría, prácticas, reglas y valores de Scrum. Actúa como un líder-servidor para el equipo Scrum y la organización. Elimina impedimentos, facilita eventos, y protege al equipo de distracciones externas.",
    keywords: ["facilitador", "coach", "líder servidor", "impedimentos", "agile"]
  },
  {
    id: 13,
    title: "Developers (Equipo de Desarrollo)",
    category: "rol",
    summary: "Profesionales que realizan el trabajo de entregar un Incremento usable cada Sprint.",
    description: "Los Developers son las personas del equipo Scrum que se comprometen a crear el Incremento en cada Sprint. Son autoorganizados y multifuncionales, lo que significa que deciden colectivamente cómo hacer el trabajo y poseen todas las habilidades necesarias. No hay sub-equipos ni títulos especializados dentro de los Developers.",
    keywords: ["desarrolladores", "devs", "autoorganización", "multifuncional", "equipo"]
  },
  {
    id: 14,
    title: "Sprint Goal",
    category: "concepto",
    summary: "Objetivo único del Sprint que guía al equipo y proporciona enfoque.",
    description: "El Sprint Goal es el objetivo único que se establece para el Sprint. Proporciona coherencia y enfoque al equipo, creando flexibilidad respecto a los elementos del Sprint Backlog. Si el trabajo resulta ser diferente de lo esperado, el equipo colabora con el Product Owner para negociar el alcance del Sprint Backlog sin afectar el Sprint Goal.",
    keywords: ["objetivo", "meta", "enfoque", "compromiso", "propósito"]
  },
  {
    id: 15,
    title: "User Story",
    category: "concepto",
    summary: "Descripción corta de una funcionalidad desde la perspectiva del usuario.",
    description: "Una User Story es una descripción simple y concisa de una funcionalidad desde la perspectiva del usuario final. Sigue el formato: 'Como [tipo de usuario], quiero [acción] para [beneficio]'. Las historias de usuario son una técnica común para gestionar elementos del Product Backlog, pero no son un requisito de Scrum. Deben ser INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable.",
    keywords: ["historia", "formato", "invest", "criterios de aceptación", "usuario"]
  },
  {
    id: 16,
    title: "Valores de Scrum",
    category: "concepto",
    summary: "Los cinco valores fundamentales que guían el comportamiento del equipo Scrum.",
    description: "Scrum se fundamenta en cinco valores: Compromiso (el equipo se compromete a lograr los objetivos), Coraje (tener el valor de hacer lo correcto), Enfoque (concentrarse en el trabajo del Sprint), Apertura (ser transparentes sobre el trabajo y los desafíos) y Respeto (respetarse mutuamente como profesionales capaces e independientes). Estos valores guían las decisiones y el comportamiento del equipo.",
    keywords: ["compromiso", "coraje", "enfoque", "apertura", "respeto"]
  },
  {
    id: 17,
    title: "Product Backlog Refinement",
    category: "práctica",
    summary: "Actividad continua para desglosar y detallar elementos del Product Backlog.",
    description: "El Product Backlog Refinement (o grooming) es la actividad de agregar detalles, estimaciones y orden a los elementos del Product Backlog. No es un evento formal de Scrum, pero es una práctica recomendada. El equipo y el Product Owner colaboran para desglosar PBIs grandes en otros más pequeños, estimarlos y priorizarlos. Generalmente no ocupa más del 10% del tiempo del equipo.",
    keywords: ["refinement", "grooming", "desglose", "estimación", "priorización"]
  },
  {
    id: 18,
    title: "Velocity (Velocidad)",
    category: "métrica",
    summary: "Medida de cuánto trabajo completa el equipo en un Sprint.",
    description: "La Velocity es una métrica que indica la cantidad de trabajo que un equipo Scrum completa en un Sprint. Se usa principalmente para la planificación y pronóstico. Es importante recordar que la velocidad no debe usarse para comparar equipos, sino como una herramienta interna de planificación. Se mide en puntos de historia u horas ideales.",
    keywords: ["velocidad", "métrica", "story points", "planificación", "pronóstico"]
  },
  {
    id: 19,
    title: "Burndown Chart",
    category: "métrica",
    summary: "Gráfico que muestra el trabajo pendiente a lo largo del tiempo en un Sprint.",
    description: "El Burndown Chart es una representación gráfica del trabajo pendiente a lo largo del tiempo. Muestra cuánto trabajo queda en el Sprint día a día. La línea ideal muestra cómo sería el progreso si se completara trabajo de manera lineal. Comparar la línea real con la ideal ayuda al equipo a entender si va en camino de cumplir el Sprint Goal.",
    keywords: ["gráfico", "progreso", "seguimiento", "tendencia", "sprint"]
  },
  {
    id: 20,
    title: "Timeboxing",
    category: "práctica",
    summary: "Técnica que asigna un límite de tiempo fijo a cada actividad o evento.",
    description: "El Timeboxing es una técnica fundamental en Scrum que asigna una duración máxima fija a cada evento. Ayuda a evitar el perfeccionismo innecesario, mejora la productividad, y asegura que el equipo invierta el tiempo adecuado en cada actividad. Todos los eventos de Scrum tienen un timebox definido: Daily Scrum (15 min), Sprint Planning (8 horas), Sprint Review (4 horas) y Sprint Retrospective (3 horas).",
    keywords: ["timebox", "límite", "duración", "eventos", "productividad"]
  }
];

module.exports = topics;
