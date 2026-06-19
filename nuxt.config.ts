import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/icon", "@nuxt/image", "@nuxtjs/sitemap", "shadcn-nuxt", "nuxt-seo-utils"],
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
    name: "Career Brand Playbook Waitlist | Positioned",
    description:
      "Join the Career Brand Playbook waitlist and learn to build an ATS-friendly CV, optimize LinkedIn, and attract better career opportunities.",
    ogTitle: "Stop Being Invisible — Career Brand Playbook",
    ogDescription:
      "Join early for 40% off, practical career positioning frameworks, and exclusive launch bonuses.",
    url: "https://dashboard.oneclickafrica.com",
    image: "https://dashboard.oneclickafrica.com/og-image.jpg",
  },
});