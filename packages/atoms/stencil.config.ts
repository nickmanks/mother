import { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";
import { sass } from "@stencil/sass";
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";

export const config: Config = {
  namespace: "atoms",
  bundles: [{ components: ["atom-palette"] }],
  globalStyle: "src/theme/variables.scss",
  taskQueue: "async",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    reactOutputTarget({
      componentCorePackage: "@mother/atoms",
      proxiesFile: "../atoms-react/src/components.ts",
    }),
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null,
    },
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  preamble: "(C) 2020 MotherJS - MIT License",
};
