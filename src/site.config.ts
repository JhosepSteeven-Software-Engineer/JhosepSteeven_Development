/**
 * ============================================================================
 *  ESTE ES EL ÚNICO ARCHIVO QUE TIENES QUE EDITAR PARA PERSONALIZAR EL SITIO
 * ============================================================================
 *
 *  Todo lo que aparece en el header, en el footer, en la página principal y
 *  en la biografía sale de aquí. Si cambias algo, se actualiza en todo el sitio.
 *
 *  - Los textos entre comillas son TUYO: cámbialos.
 *  - Los que dicen "TU-..." son marcadores: rellénalos.
 *  - Si una red social no la tienes aún, deja `pending: true` y se mostrará
 *    marcada como "pendiente" en lugar de romper el sitio con un link roto.
 */

// ---------------------------------------------------------------------------
// Identidad
// ---------------------------------------------------------------------------

export const SITE = {
	/** Tu nombre como quieres que te vean. */
	name: 'Jhosep Steeven',
	/** Nombre completo (opcional). Se usa en el pie de página. */
	fullName: 'Jhosep Steeven',
	/** Tu cargo o rol profesional. */
	role: 'Ingeniero de Software',
	/** Tu tagline: una frase corta que resume a qué te dedicas. */
	tagline: 'Ingeniería de sistemas, automatización y clouds',
	/** Descripción larga. Se usa en SEO (Google, Facebook, X) y en el RSS. */
	description:
		'Ingeniero de software enfocado en sistemas, automatización y cloud. Trabajo con banca, seguros, DevOps, DevSecOps, QA y administración de servidores Windows y Linux.',
	/** Ubicación. Ponla o quítala según prefieras. */
	location: 'Perú',
	/** Email de contacto. Es el mismo que usas en git. */
	email: 'jhosephuamanigarcia@gmail.com',
	/** Texto del copyright del pie de página. */
	copyright: 'Jhosep Steeven',
} as const;

/** Título por defecto (sirve para el <title> y el feed RSS). */
export const SITE_TITLE = `${SITE.name} | ${SITE.role}`;

/** Descripción por defecto (SEO y RSS). */
export const SITE_DESCRIPTION = SITE.description;

// ---------------------------------------------------------------------------
// Redes sociales
// ---------------------------------------------------------------------------

export type SocialIcon =
	| 'github'
	| 'linkedin'
	| 'gmail'
	| 'whatsapp'
	| 'telegram'
	| 'twitter'
	| 'instagram';

export interface SocialLink {
	/** Texto que se ve junto al icono. */
	label: string;
	/** Texto corto con tu usuario, ej. "@jhosepsteeven". */
	handle: string;
	/** URL completa. */
	href: string;
	/** Qué icono se dibuja. */
	icon: SocialIcon;
	/**
	 * Si es `true` el enlace aparece marcado como "pendiente" y no navega.
	 * Úsalo cuando aún no tengas el link real.
	 */
	pending?: boolean;
}

export const SOCIAL_LINKS: SocialLink[] = [
	{
		label: 'GitHub',
		handle: '@JhosepSteeven-Software-Engineer',
		href: 'https://github.com/JhosepSteeven-Software-Engineer',
		icon: 'github',
	},
	{
		label: 'LinkedIn',
		handle: '@TU-PERFIL-LINKEDIN',
		href: 'https://www.linkedin.com/in/TU-PERFIL-LINKEDIN',
		icon: 'linkedin',
		pending: true,
	},
	{
		label: 'Correo',
		handle: SITE.email,
		href: `mailto:${SITE.email}`,
		icon: 'gmail',
	},
	{
		label: 'WhatsApp',
		handle: '@TU-NUMERO',
		href: 'https://wa.me/TU-NUMERO',
		icon: 'whatsapp',
		pending: true,
	},
];

// ---------------------------------------------------------------------------
// Lo que hago — la sección de "stack"
// ---------------------------------------------------------------------------

export interface SkillGroup {
	title: string;
	items: string[];
}

/**
 * Las áreas en las que me estoy formando. Se agrupan para que se lean fácil.
 */
export const SKILLS: SkillGroup[] = [
	{
		title: 'Sistemas y operación',
		items: ['Windows Server', 'Linux', 'PowerShell', 'Bash', 'Redes'],
	},
	{
		title: 'Automatización y cloud',
		items: ['Docker', 'CI/CD', 'GitHub Actions', 'Git', 'Terraform'],
	},
	{
		title: 'Calidad y seguridad',
		items: ['QA', 'Testing', 'DevSecOps', 'OWASP', 'CI seguro'],
	},
	{
		title: 'Dominios',
		items: ['Banca', 'Seguros', 'Sistemas de pago', 'Datos'],
	},
];

/**
 * Los valores con los que trabajo. Se muestran como tarjetas en el home.
 */
export const PRINCIPLES: { title: string; body: string }[] = [
	{
		title: 'Primero entender, después automatizar',
		body: 'Un script que no entiendo es un script que me va a romper a las 3 de la mañana. Prefiero entender el sistema antes de ponerlo a trabajar.',
	},
	{
		title: 'El orden es parte del trabajo',
		body: 'Un repositorio con nombres claros, commits con sentido y documentación al día no es burocracia: es lo que me permite volver a mi propio código seis meses después.',
	},
	{
		title: 'Aprender construyendo',
		body: 'Estudio la teoría y la aplico el mismo día en un laboratorio propio. La banca y los seguros me enseñan que un error en producción cuesta dinero real.',
	},
	{
		title: 'Seguridad desde el inicio',
		body: 'DevSecOps no es una etapa final, es una forma de escribir código. Los secretos no se suben, los permisos se ajustan, la tubería se audita.',
	},
];
