import { defineNuxtModule, createResolver } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "@davingm/roobert",
    configKey: "roobert",
  },

  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.css.push(
      resolver.resolve("../runtime/roobert.css")
    );
  },
});