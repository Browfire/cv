# 🚀 My Developer Portfolio & Resume

Este es mi rincón personal en la web, diseñado para mostrar mi trayectoria profesional, proyectos destacados y habilidades técnicas. Construido con un enfoque en **rendimiento**, **accesibilidad** y **código limpio**.

---

## 🛠️ Tech Stack

* **Framework:** [Astro 5.0](https://astro.build/) (Static Site Generation)
* **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (vía plugin de Vite)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (modo estricto)
* **Icons:** [Iconify](https://iconify.design/) / [Lucide](https://lucide.dev/)
* **Deployment:** ...

## ✨ Características Principales

* ⚡ **Zero JS by default:** Arquitectura de Islas de Astro — JS solo donde la interactividad lo requiere.
* 🌓 **Dark/Light Mode:** Clase `.dark` en `<html>`, sin dependencias externas.
* 📱 **Mobile First:** Diseño totalmente responsivo.
* 📂 **Content Collections:** Experiencia laboral, proyectos y educación en Markdown, tipados con Zod en `src/content/config.ts`.
* ♿ **Accesibilidad:** Etiquetas ARIA correctas y contraste adecuado (A11y).

## 🚀 Estructura del Proyecto

```text
/
├── public/                  # Assets estáticos (PDF de CV, imágenes de perfil)
├── src/
│   ├── components/          # Componentes .astro reutilizables (Botones, Card, Navbar)
│   ├── content/
│   │   ├── config.ts        # Esquemas Zod para Content Collections
│   │   └── ...              # Archivos Markdown (experiencia, proyectos, educación)
│   ├── layouts/             # Plantillas base de las páginas
│   ├── pages/               # Rutas del sitio (index.astro, 404.astro)
│   └── styles/
│       └── global.css       # @import "tailwindcss"
└── astro.config.mjs         # Configuración de Astro + Tailwind Vite plugin
```

## 🧞 Comandos

| Comando                   | Acción                                                  |
| :------------------------ | :------------------------------------------------------ |
| `npm install`             | Instala dependencias                                    |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321`       |
| `npm run build`           | Construye el sitio de producción en `./dist/`           |
| `npm run preview`         | Previsualiza el build localmente antes de desplegar     |
| `npm run astro ...`       | Comandos CLI de Astro (`astro add`, `astro check`, ...) |

---

## 📬 Contacto

* **Email:** <luis.ab.dev@gmail.com>
* **LinkedIn:** [Luis Aguirre Bahamonde](https://www.linkedin.com/in/abluis/)
* **Web Personal:** en construcción...

---

> *Hecho con ☕ y Astro por Luis Aguirre*
