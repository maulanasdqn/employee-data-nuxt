import { defineConfig } from "windicss/helpers";

export default defineConfig({
  preflight: true,
  extract: {
    include: ["**/*.{vue,html}"],
    exclude: ["node_modules", ".git", ".direnv"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ["Open Sans"],
      },
    },
  },
});
