import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  buildModules: ["nuxt-windicss"],
  components: {
    global: true,
    dirs: ["~/components", "~/components/Common"],
  },
  alias: {
    assets: "~/assets",
    public: "~/public",
  },
  ignore: [
    "**/*.stories.{js,ts,jsx,tsx}",
    "**/*.{spec,test}.{js,ts,jsx,tsx}",
    ".output",
    ".direnv",
    ".vscode",
    "**/-*.*",
  ],
});
