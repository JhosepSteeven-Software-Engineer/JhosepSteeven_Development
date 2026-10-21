# Jhosep Steeven — sitio y bitácora

Sitio personal y blog construido con [Astro](https://astro.build). Se publica
automáticamente en GitHub Pages.

**Producción:** https://jhosepsteeven-software-engineer.github.io/JhosepSteeven_Development/

---

## 1. Lo único que necesitas editar

Todo el contenido del sitio vive en **un solo archivo**:

```
src/site.config.ts
```

Ahí cambias tu nombre, tu descripción, tus redes sociales, tus áreas de trabajo
y tus principios de trabajo. No hace falta tocar ningún otro archivo para
personalizar el sitio.

| Qué quieres cambiar | Dónde |
| --- | --- |
| Tu nombre, rol, tagline, email | `SITE` en `src/site.config.ts` |
| Tus redes sociales y links | `SOCIAL_LINKS` en `src/site.config.ts` |
| Las áreas en las que trabajas | `SKILLS` en `src/site.config.ts` |
| Las reglas con las que trabajas | `PRINCIPLES` en `src/site.config.ts` |
| Un post del blog | Un `.md` nuevo en `src/content/blog/` |
| Los colores del sitio | `--accent` y las demás variables en `src/styles/global.css` |

### Enlaces pendientes

Si una red social todavía no la tienes configurada, deja `pending: true` en esa
entrada de `SOCIAL_LINKS`. El sitio la muestra marcada como **pendiente** en
lugar de romper el enlace.

---

## 2. Comandos

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor local en `http://localhost:4321/JhosepSteeven_Development/` |
| `npm run build` | Compila el sitio a `./dist/` |
| `npm run preview` | Previsualiza el build antes de subirlo |
| `npm run check` | Revisa errores de tipos y de Astro |

> **Ojo con la ruta local:** como el sitio está configurado con
> `base: '/JhosepSteeven_Development'` (GitHub Pages publica los proyectos en
> una subcarpeta), en local también se abre con ese prefijo. Si el puerto
> aparece vacío, entra por
> `http://localhost:4321/JhosepSteeven_Development/`.

---

## 3. Git: lo mínimo para no perderte

Git guarda **instantáneas** de tu proyecto. Cada vez que haces un commit, queda
registrado qué cambiaste y por qué.

### El ciclo de trabajo, siempre igual

```bash
git status              # 1. ¿Qué cambié y qué está sin guardar?
git add .               # 2. Preparo todos los cambios para guardarlos
git commit -m "Mensaje corto que explica qué hice"   # 3. Guardo el cambio
git push                # 4. Lo subo a GitHub
```

### Los 5 comandos que vas a usar el 95% del tiempo

```bash
git status
git add <archivo>
git commit -m "mensaje"
git push
git log --oneline -10
```

### Escribir buenos mensajes de commit

Usa el estilo *Conventional Commits*, que es el estándar y lo entienden
herramientas automáticas:

```
feat: agrega la sección de experiencia
fix: corrige el prefijo de las rutas internas
docs: actualiza el README
refactor: mueve los datos a site.config.ts
chore: actualiza dependencias
```

### Deshacer cosas (con calma)

```bash
git restore <archivo>          # Descarto los cambios de un archivo, sin guardarlos
git restore --staged <archivo> # Quito un archivo del "stage"
git commit --amend             # Corrijo el último commit que acabo de hacer
git revert <sha>              # Creo un commit nuevo que deshace uno viejo (LO SEGURO)
```

> **Regla de oro:** nunca uses `git reset --hard` ni borres `.git` si no sabes
> exactamente qué hace. Si te equivocas, `git reflog` te salva.

### Ramas (para trabajar sin romper nada)

```bash
git switch -c feat/nueva-seccion   # Creo una rama nueva
# ... hago mis cambios ...
git add . && git commit -m "mensaje"
git push -u origin feat/nueva-seccion  # La subo al remoto
# Cuando la termine y esté bien, la fusiono a main desde GitHub
```

Las ramas son para experimenting tranquilo. `main` es la línea de producción:
cada `push` a `main` **despliega el sitio automáticamente**.

---

## 4. Cómo se publica el sitio

```
   tú editas archivos
          │
          ▼
   git add . && git commit -m "..." && git push
          │
          ▼
   GitHub recibe el push a la rama main
          │
          ▼
   .github/workflows/deploy.yml se dispara solo
          │
          ├── Compila el sitio (npm run build)
          ├── Sube dist/ como artefacto
          ▼
   GitHub Pages publica el resultado
          │
          ▼
   https://jhosepsteeven-software-engineer.github.io/JhosepSteeven_Development/
```

Tarda entre 1 y 3 minutos. Puedes ver el progreso en la pestaña **Actions** de
tu repositorio en GitHub. Si falla, ahí te dice exactamente por qué.

### La configuración que lo hace posible

En `astro.config.mjs` hay dos líneas clave:

```js
site: 'https://jhosepsteeven-software-engineer.github.io/JhosepSteeven_Development',
base: '/JhosepSteeven_Development',
```

- `site` es la dirección pública del sitio. Se usa en los enlaces canónicos, el
  sitemap, el feed RSS y las tarjetas al compartir en redes.
- `base` le dice a Astro que el sitio vive en la subcarpeta
  `/JhosepSteeven_Development`. **Sin esto, los enlaces internos y las fuentes
  darían error 404 en producción** (esto ya estaba roto y se corrigió).

Si algún día cambias el nombre del repositorio, tienes que actualizar las dos
líneas.

---

## 5. Estructura del proyecto

```text
.
├── astro.config.mjs      # Configuración: site, base, fuentes, resaltado
├── public/               # Archivos que se sirven tal cual (favicon, imagen OG)
├── src/
│   ├── site.config.ts    # ★ TODO TU CONTENIDO ESTÁ AQUÍ
│   ├── paths.ts          # Rutas internas con el prefijo de GitHub Pages
│   ├── consts.ts         # Reexporta site.config (compatibilidad)
│   ├── assets/           # Imágenes que Astro optimiza
│   ├── components/       # Piezas reutilizables (Header, Footer, SocialLinks...)
│   ├── layouts/          # Cascarones: BaseLayout y BlogPost
│   ├── content/blog/     # Los posts (archivos .md)
│   ├── pages/            # Las rutas del sitio
│   └── styles/global.css # Tokens de diseño y estilos base
└── .github/workflows/    # El despliegue automático
```

---

## 6. Kredit

El tema visual está basado en [Bear Blog](https://github.com/HermanMartinus/bearblog/)
(MIT) y sobre la plantilla oficial de Astro.
