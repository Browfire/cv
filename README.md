# 🚀 My Developer Portfolio & Resume

Este es mi rincón personal en la web, diseñado para mostrar mi trayectoria profesional, proyectos destacados y habilidades técnicas. Construido con un enfoque en **rendimiento**, **accesibilidad** y **código limpio**.

---

## 🛠️ Tech Stack

El proyecto utiliza tecnologías modernas para garantizar una experiencia de usuario fluida y una puntuación de 100 en Core Web Vitals:

* **Framework:** [Astro 5.0](https://astro.build/) (Static Site Generation)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Deployment:** ...
* **Icons:** ...

## ✨ Características Principales

* ⚡ **Zero JS by default:** Gracias a la arquitectura de islas de Astro.
* 🌓 **Dark/Light Mode:** Implementado con CSS nativo y variables.
* 📱 **Mobile First:** Diseño totalmente responsivo.
* 📂 **Content Collections:** Gestión de experiencia laboral y proyectos mediante archivos Markdown tipados con Zod.

## 🚀 Estructura del Proyecto

```text
/
├── public/          # Assets estáticos (PDF de CV, imágenes de perfil)
├── src/
│   ├── components/  # Componentes reutilizables (Botones, Card, Navbar)
│   ├── content/     # Datos en Markdown (Experiencia, Estudios)
│   ├── layouts/     # Plantillas base de las páginas
│   └── pages/       # Rutas del sitio (index.astro, 404.astro)
└── astro.config.mjs # Configuración de Astro y Tailwind
```

(Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.)

## 🛠️ Comandos de Desarrollo

Para poner en marcha este proyecto localmente:

```sh
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo con hot-reload
npm run dev

# Construir para producción
npm run build
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

---

## 📬 Contacto

Si quieres charlar sobre una colaboración o simplemente saludar:

* **Email:** <luis.ab.dev@gmail.com>
* **LinkedIn:** [Luis Aguirre Bahamonde](https://www.linkedin.com/in/abluis/)
* **Web Personal:** en construcción...

---

> *Hecho con ☕ y Astro por Luis Aguirre*
