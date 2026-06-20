import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "shadcn-nuxt",
    "nuxt-seo-utils",
  ],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
  site: {
    name: "Career Branding Playbook Waitlist | Jem's Creatives",
    description:
      "Join the Career Branding Playbook waitlist and learn to build an ATS-friendly CV, optimize LinkedIn, and attract better career opportunities.",
    ogTitle: "Career Branding Playbook Waitlist | Jem's Creatives",
    ogDescription:
      "Join early for 35% off, practical career positioning frameworks, and exclusive launch bonuses.",
    url: "https://jemscreatives.vercel.app",
    image: "https://jemscreatives.vercel.app/og-image.jpg",
  },
});
