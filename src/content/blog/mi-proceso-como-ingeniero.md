---
title: 'Mi proceso como ingeniero de software'
description: 'Quién soy, cómo aprendo y las reglas que me aplico para trabajar en sistemas sin perderme en el camino.'
pubDate: '2026-10-21'
heroImage: '../../assets/hero-proceso.png'
---

Este es el primer post del blog, y no es sobre una tecnología concreta. Es sobre **el método**.
Porque he pasado años dando vueltas, empezando y dejando cosas a medias, y lo que más me ha
servido no ha sido aprender una herramienta más: ha sido encontrar una forma de trabajar que
no dependa de mi ánimo del día.

Voy a contarlo como lo contaría en una conversación: sin adornos y sin ranking de habilidades.

## El punto de partida

No llegué a la programación por el camino que se supone que deberías tomar. No hubo un
bootcamp, ni un título que me pusiera en la fila, ni un primer trabajo en una empresa de
producto digital haciendo landing pages.

Llegué desde la administración de sistemas. Servidores Windows, luego Linux, luego scripts que
me ahorraban media hora cada mañana. Y ahí entendí algo que me acompaña desde entonces:

> Un sistema no es el código. Un sistema es el código **más** la infraestructura que lo sostiene,
> **más** los procesos que lo despliegan, **más** las personas que lo atienden a las 3 AM.

Si solo aprendes a escribir funciones, vas a estar constantemente peleando contra la
infraestructura.

## Cómo se ve mi trabajo por dentro

Si alguien me pregunta a qué me dedico, la respuesta larga cabe en algo así:

```yaml
perfil:
  nombre: Jhosep Steeven
  rol: Ingenieria de Software
  foco: sistemas, automatizacion y cloud
  dominios:
    - banca
    - seguros
  areas:
    - sistemas_y_operacion: [Windows Server, Linux, PowerShell, Bash, Redes]
    - automatizacion_y_cloud: [Docker, CI/CD, GitHub Actions, Git, Terraform]
    - calidad_y_seguridad: [QA, Testing, DevSecOps, OWASP]
  ritmo: constante
```

Y lo que hago con eso, en el día a día, se parece más a esto:

```bash
# 1. Reproducir el problema antes de tocar nada
git log --oneline -20
kubectl get pods -n banca-core

# 2. Rama limpia, un solo objetivo
git switch -c fix/session-timeout-jwt

# 3. El cambio, con el porque documentado en el commit
git commit -m "fix(auth): renueva el token antes de que expire

El refresh ocurre 60s antes de la expiracion para evitar
la carrera con el logout del cliente."

# 4. Antes de subir: verifico lo que importa
npm run lint && npm run test && npm run build

# 5. Y si se rompió algo en produccion, reverso limpio
git revert <sha> && git push
```

Ese `git revert` del paso 5 es importante. En banca y seguros, un despliegue fallido no se
"arregla buscando rápido": se revierte primero y se investiga después. La urgencia no borra el
proceso, el proceso es lo que evita que la urgencia se repita.

## Las cuatro reglas que no rompo

### 1. Entender antes de automatizar

Un script que no entiendo es un script que me va a romper a las 3 de la mañana, en un
despliegue, y en un fin de semana. Automatizar algo que no entiendo solo convierte un error
visible en un error silencioso y repetido.

### 2. El orden no es burocracia

Esto es lo que más me costó aprender, y es lo que más tiempo me ahorró. Un repositorio con
nombres claros, commits con sentido y un README que explica cómo levantarlo no es un capricho
estético: es lo que me permite volver a mi propio código seis meses después.

El repositorio de este sitio es el ejemplo. Antes de escribir la primera línea de la
biografía ya tenía:

```
.
├── astro.config.mjs      # Configuración: sitio, base, fuentes
├── src/
│   ├── site.config.ts    # ← TODO MI CONTENIDO ESTÁ AQUÍ
│   ├── paths.ts          # Rutas con el prefijo de GitHub Pages
│   ├── components/       # Piezas reutilizables
│   ├── layouts/          # Cascarones de página
│   └── pages/            # Rutas del sitio
└── .github/workflows/    # Despliegue automático
```

Todo lo que ves en pantalla sale de `site.config.ts`. Un archivo, un lugar, cero búsquedas a
ciegas por el código.

### 3. La seguridad va desde la primera línea

DevSecOps no es una etapa que se agrega al final. Es la forma en la que escribes el código:

- Los secretos van en el gestor de secretos, nunca en el repositorio.
- Los permisos son mínimos. "Lo dejo abierto para no perder tiempo" es la frase que precede a
  casi todos los incidentes.
- La tubería se audita, porque una tubería sin auditar es un punto de entrada.

### 4. La calidad es parte del código

Las pruebas, el análisis estático y la revisión de código llegan **antes** del despliegue. No
existe un "lo arreglamos en QA" que no sea una deuda con intereses.

## Sobre ir más lento

Lo voy a decir claro, porque sé que es un tema que se mira raro: **aprendo más despacio que
otros**. No es que me falte voluntad ni que no le dedique horas. Es que retengo mejor cuando
entiendo el porqué de cada cosa, y en campos como DevSecOps o la administración de servidores
el "porqué" es donde está el 80% del trabajo real.

En un mundo que mide por rankings, marcas y años de experiencia, eso me deja en una posición
incómoda. Pero hace rato que dejé de competir en ese tablero. Mi tablero es otro:

```text
¿Entiendo el sistema?        → sí / no
¿Puedo reconstruirlo?        → sí / no
¿Sé explicar qué falló?       → sí / no
¿Lo dejé documentado?        → sí / no
```

Si las cuatro son "sí", el trabajo está bien hecho, sin importar cuántos años me tomó.

## Y lo que viene

Este blog es la bitácora. Vamos a escribir sobre:

- **Sistemas y operación**: Windows Server, Linux, redes, lo que aprendo administrando.
- **Automatización y cloud**: Docker, GitHub Actions, Terraform, y todo lo que implica que
  una tubería sea reproducible.
- **Calidad y seguridad**: QA, pruebas automatizadas, y cómo meter la seguridad en el
  desarrollo sin volverlo insufrible.
- **El camino**: lo que me cuesta, lo que funciona y lo que voy cambiando.

Me quedo en sistemas. Es la línea que no cruzo, y esta web es la prueba de que la estoy
tomando en serio.

Si algo de esto te resuena, escríbeme. El [correo](mailto:jhosephuamanigarcia@gmail.com) está
abierto y, ahora que lo pienso, esa es la forma más directa de empezar.
