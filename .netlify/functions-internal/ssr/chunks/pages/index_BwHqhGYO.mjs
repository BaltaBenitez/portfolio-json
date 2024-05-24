import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderHead, j as renderSlot, h as createAstro, m as maybeRenderHead, k as renderComponent } from '../astro_CmIZ9Vc9.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                          */

const basics = {
	name: "Baltasar Benitez",
	label: "Fronted Developer React",
	image: "/hero1.webp",
	email: "baltaarex363@gmail.com",
	phone: "",
	url: "https://midu.dev",
	summary: "Me llamo Batasar, pero mis amigos me dicen Balti o Balta. Empecé en la programación a mitad del 2023 porque estaba aburrido. Actualmente estoy buscando trabajo. Me interesé en un bootcamp de Desarrollo Web. Trabajando con HTML & CSS. Implemente las prácticas de versionado de código con GIT, y preprocesadores como SASS. En marzo de 2024 termine el bootcamp de Desarrollo Frontend React. Donde aprendi, el manejo de rutas utilizando Firebase, y comprendi el uso del virtual DOM mediante los componentes de React JS.",
	location: {
		address: "",
		postalCode: "b1686",
		city: "Gran Buenos Aires",
		countryCode: "ARG",
		region: "Argentina"
	},
	profiles: [
		{
			network: "LinkedIn",
			username: "Baltasar Benitez",
			url: "https://linkedin.com/in/midudev"
		},
		{
			network: "GitHub",
			username: "BaltaBenitez",
			url: "https://github.com/baltabenitez"
		}
	]
};
const skills = [
	{
		name: "HTML",
		level: "",
		keywords: [
			"Desarrollo Web",
			"Frontend"
		]
	},
	{
		name: "CSS",
		level: "",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"Diseño Responsive"
		]
	},
	{
		name: "JavaScript",
		level: "",
		keywords: [
			"Desarrollo Web",
			"Frontend"
		]
	},
	{
		name: "Bootstrap",
		level: "",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"CSS Framework",
			"Diseño Responsive"
		]
	},
	{
		name: "Tailwind",
		level: "",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"CSS Framework",
			"Diseño Responsive"
		]
	},
	{
		name: "Git",
		level: "",
		keywords: [
			"Control de Versiones",
			"Colaboración",
			"Código Fuente"
		]
	},
	{
		name: "GitHub",
		level: "",
		keywords: [
			"Control de Versiones",
			"Colaboración",
			"Código Fuente",
			"Git"
		]
	},
	{
		name: "React",
		level: "",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"JavaScript Library",
			"UI"
		]
	}
];
const projects = [
	{
		name: "Arena Spot Gym",
		description: "Sitio web estático para la promoción de gimnasios, diseñado con HTML y CSS. Incluye información sobre el gimnasio, horarios de clases y detalles de contacto.",
		highlights: [
			"Diseño responsivo",
			"Fácil de navegar"
		],
		url: "https://arenasportgym.netlify.app/"
	},
	{
		name: "Red bull",
		description: "Tienda en línea de productos Red Bull, desarrollada con React, Context API, sin métodos de pago integrados.",
		highlights: [
			"Diseño responsivo",
			"React y Context"
		],
		url: "https://rb-19.netlify.app/"
	},
	{
		name: "Red bull",
		description: "Tienda en línea de productos Red Bull, desarrollada con React, Context API y Firebase, sin métodos de pago integrados.",
		highlights: [
			"React, Context API",
			"Base de datos en tiempo real con Firebase"
		],
		url: "https://rb-20.netlify.app/"
	},
	{
		name: "Astro & Tailwind",
		description: "Sitio web de dos páginas creado con Astro y TailwindCSS para aprender y experimentar con estas tecnologías.",
		highlights: [
			"Desarrollado con Astro",
			"Estilizado con TailwindCSS"
		],
		url: "https://astro-twcss.netlify.app/"
	}
];

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { image, summary, url } = basics;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><title>${title}</title><meta name="description"${addAttribute(summary, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preload" as="image"${addAttribute(image, "href")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(summary, "content")}><meta property="og:image" content=""><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${addAttribute(url.split("//")[1] ?? "", "content")}><meta property="twitter:url"${addAttribute(url, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(summary, "content")}><meta name="twitter:image" content="">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-sh445jdo> ${title && renderTemplate`<h2 data-astro-cid-sh445jdo>${title}</h2>`} ${renderSlot($$result, $$slots["default"])} </section>  `;
}, "C:/Users/USUARIO/Documents/pepe/am/src/components/Section.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const { summary } = basics;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Sobre m\xED" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p> ${summary} </p> ` })}`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/components/sections/About.astro", void 0);

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-4"><title>Mail Icon</title><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/Mail.astro", void 0);

const $$Phone = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>Phone Icon</title><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/Phone.astro", void 0);

const $$X = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/X.astro", void 0);

const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/LinkedIn.astro", void 0);

const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/GitHub.astro", void 0);

const $$WorldMap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path> </svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/WorldMap.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const { name, label, image, location, profiles, phone, email } = basics;
  const { city, region } = location;
  const SOCIAL_ICONS = {
    GitHub: $$GitHub,
    LinkedIn: $$LinkedIn,
    X: $$X
  };
  const linkedInfo = profiles.find(({ network }) => network === "LinkedIn");
  const linkedUrl = linkedInfo?.url;
  const printInfo = [email, phone, linkedUrl].filter(Boolean).join(" \u2022 ");
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-anhloy43> <div class="info" data-astro-cid-anhloy43> <h1 data-astro-cid-anhloy43>${name}</h1> <h2 data-astro-cid-anhloy43>${label}</h2> <span data-astro-cid-anhloy43> ${renderComponent($$result2, "WorldMap", $$WorldMap, { "data-astro-cid-anhloy43": true })} ${city}, ${region} </span> <footer class="print" data-astro-cid-anhloy43> ${printInfo} </footer> <footer class="no-print" data-astro-cid-anhloy43> ${email && renderTemplate`<a${addAttribute(`mailto:${email}`, "href")}${addAttribute(`Enviar un correo electr\xF3nico a ${name} al correo ${email}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Mail", $$Mail, { "data-astro-cid-anhloy43": true })} </a>`} ${phone && renderTemplate`<a${addAttribute(`tel:${phone}`, "href")}${addAttribute(`Llamar por tel\xE9fono a ${name} al n\xFAmero ${phone}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Phone", $$Phone, { "data-astro-cid-anhloy43": true })} </a>`} ${profiles.map(({ network, url, username }) => {
    const Icon = SOCIAL_ICONS[network];
    return renderTemplate`<a${addAttribute(url, "href")}${addAttribute(`Visitar el perfil de ${name} en ${network}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-anhloy43": true })} </a>`;
  })} </footer> </div> <figure data-astro-cid-anhloy43> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} data-astro-cid-anhloy43> </figure> </div> ` })} `;
}, "C:/Users/USUARIO/Documents/pepe/am/src/components/sections/Hero.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Proyectos", "data-astro-cid-44zkpkd5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-44zkpkd5> ${projects.map(
    ({ url, description, highlights, name, isActive, github }) => {
      return renderTemplate`<li data-astro-cid-44zkpkd5> <article data-astro-cid-44zkpkd5> <header data-astro-cid-44zkpkd5> <h3 data-astro-cid-44zkpkd5> <a${addAttribute(url, "href")} target="_blank"${addAttribute(`Ver el proyecto ${name}`, "title")} data-astro-cid-44zkpkd5> ${name} </a> ${isActive && renderTemplate`<span data-astro-cid-44zkpkd5>•</span>`} ${github && renderTemplate`<a class="github-code-link"${addAttribute(github, "href")} target="_blank"${addAttribute(`Ver c\xF3digo fuente del proyecto ${name}`, "title")} data-astro-cid-44zkpkd5> ${renderComponent($$result2, "GitHub", $$GitHub, { "data-astro-cid-44zkpkd5": true })} </a>`} </h3> <p data-astro-cid-44zkpkd5>${description}</p> </header> <footer data-astro-cid-44zkpkd5> ${highlights.map((highlight) => {
        return renderTemplate`<span data-astro-cid-44zkpkd5>${highlight}</span>`;
      })} </footer> </article> </li>`;
    }
  )} </ul> ` })} `;
}, "C:/Users/USUARIO/Documents/pepe/am/src/components/sections/Projects.astro", void 0);

const $$Html = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/html.astro", void 0);

const $$Css = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/css.astro", void 0);

const $$Javascript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M7.5 8h3v8l-2 -1"></path><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/javascript.astro", void 0);

const $$Type = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"></path><path d="M9 12h4"></path><path d="M11 12v6"></path><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/type.astro", void 0);

const $$React = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/react.astro", void 0);

const $$Node = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/node.astro", void 0);

const $$Sql = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"></path><path d="M9 7h.01"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/sql.astro", void 0);

const $$Git = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 15v-6"></path><path d="M15 11l-2 -2"></path><path d="M11 7l-1.9 -1.9"></path><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/git.astro", void 0);

const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/tailwind.astro", void 0);

const $$Next = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path><path d="M15 12v-3"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/next.astro", void 0);

const $$Swift = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M729.173 841.387c-100.693 58.026-238.506 64-378.026 4.266A589.099 589.099 0 0 1 85.333 618.667c28.587 23.466 62.294 42.666 98.134 59.733 143.786 66.987 287.146 62.293 388.266 0-143.786-110.507-266.24-254.293-357.12-371.627-19.2-19.2-33.28-43.093-47.786-64.426 353.28 258.133 337.92 323.84 102.826-43.094C478.293 410.027 672 529.493 672 529.493c6.827 3.84 10.667 6.827 15.36 9.387 4.267-10.667 8.107-21.76 11.093-33.28 33.707-121.6-4.693-261.12-88.746-375.893C803.84 247.04 919.04 467.2 870.827 651.947c-1.28 4.693-2.56 9.386-2.134 16.64 95.574 120.746 69.974 246.613 57.6 222.72-51.626-101.974-148.48-70.4-197.12-49.92z"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/swift.astro", void 0);

const $$Swiftui = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 50 50" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14.182 5C9.122 5 5 9.122 5 14.182v21.636C5 40.878 9.122 45 14.182 45h21.636C40.878 45 45 40.878 45 35.818V14.182C45 9.122 40.878 5 35.818 5H14.182zm0 2h21.636A7.166 7.166 0 0 1 43 14.182v21.636A7.166 7.166 0 0 1 35.818 43H14.182A7.166 7.166 0 0 1 7 35.818V14.182A7.166 7.166 0 0 1 14.182 7zm12.816 6.033c2.078 4.156 3.283 6.5 2.307 12.227C27.079 23.774 18.855 17.152 17 15c1.336 2.375 5.18 7.586 6.516 8.922-2.375-1.632-10.02-7.645-10.02-7.645s6.532 9.871 12.024 13.211c-2.078.668-6.59 3.398-14.457-1.425 2.003 2.745 5.55 8.255 14.234 7.736 3.043-.148 4.896-1.113 6.603-1.781 1.707-.668 3.34-.595 4.75 1.93.297-2.302.371-4.454-2.004-6.903 0 0 2.348-8.95-7.648-16.012z"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/swiftui.astro", void 0);

const $$Kotlin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M55.467 1024 537.6 533.333 1024 1024zM0 0h512L0 533.333zm571.733 0L0 597.333V1024l512-512L1024 0z"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/kotlin.astro", void 0);

const $$Flutter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M610.73 0 98.134 512 256 669.867 925.184.512H611.285L610.731 0zm.598 472.405L335.232 747.904l276.053 276.053h314.582L650.24 747.99l275.627-275.626H611.37z"></path></svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/flutter.astro", void 0);

const $$Bootstrap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bootstrap"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"></path><path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2"></path><path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z"></path> </svg>`;
}, "C:/Users/USUARIO/Documents/pepe/am/src/icons/bootstrap.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const SKILLS_ICONS = {
    HTML: $$Html,
    CSS: $$Css,
    JavaScript: $$Javascript,
    TypeScript: $$Type,
    React: $$React,
    Node: $$Node,
    MySQL: $$Sql,
    Git: $$Git,
    GitHub: $$GitHub,
    Next: $$Next,
    Bootstrap: $$Bootstrap,
    Tailwind: $$Tailwind,
    Swift: $$Swift,
    SwiftUI: $$Swiftui,
    Kotlin: $$Kotlin,
    Flutter: $$Flutter
  };
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Habilidades", "data-astro-cid-sye7xtqh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-sye7xtqh> ${skills.map(({ name }) => {
    const iconName = name === "Next.js" ? "Next" : name;
    const Icon = SKILLS_ICONS[iconName];
    return renderTemplate`<li data-astro-cid-sye7xtqh> ${Icon && renderTemplate`${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-sye7xtqh": true })}`} <span data-astro-cid-sye7xtqh>${name}</span> </li>`;
  })} </ul> ` })} `;
}, "C:/Users/USUARIO/Documents/pepe/am/src/components/sections/Skills.astro", void 0);

const $$KeyboardManager = createComponent(($$result, $$props, $$slots) => {
  const { profiles } = basics;
  const SOCIAL_ICONS = {
    GitHub: `<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><path
    fill="currentColor"
    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  ></path></svg
>`,
    LinkedIn: `<svg
  height="16"
  width="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><title>LinkedIn</title><path
    fill="currentColor"
    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  ></path></svg
>`,
    X: `<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><title>X</title><path
    fill="currentColor"
    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
  ></path></svg
>
`
  };
  const profilesInfo = profiles.map(({ network, url }) => {
    const icon = SOCIAL_ICONS[network];
    const firstLetter = network[0].toUpperCase();
    return {
      id: network,
      section: "Social",
      title: `Visitar ${network}`,
      url,
      icon,
      hotkey: `ctrl+${firstLetter}`
    };
  });
  return renderTemplate`${maybeRenderHead()}<footer id="normal-footer" class="no-print" data-astro-cid-5uazswxx>
Pulsa <kbd data-astro-cid-5uazswxx>Cmd</kbd> + <kbd data-astro-cid-5uazswxx>K</kbd> para abrir la paleta de comandos.
</footer> <div id="footer-button" class="no-print" data-astro-cid-5uazswxx> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-command" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#777" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5uazswxx> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-5uazswxx></path> <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" data-astro-cid-5uazswxx></path> </svg> </div> <div id="hotkeypad" data-placeholder="Buscar comando"${addAttribute(JSON.stringify(profilesInfo), "data-info")} data-astro-cid-5uazswxx></div>  `;
}, "C:/Users/USUARIO/Documents/pepe/am/src/components/KeyboardManager.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { name, label } = basics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${label} - ${name}`, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} <!-- <Experience />
    <Education /> --> ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "KeyboardManager", $$KeyboardManager, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/USUARIO/Documents/pepe/am/src/pages/index.astro", void 0);

const $$file = "C:/Users/USUARIO/Documents/pepe/am/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
