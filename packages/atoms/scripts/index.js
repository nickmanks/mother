export default {
  start: "stencil build --dev --watch --serve",
  test: "stencil test --spec --e2e",
  "test.watch": "stencil test --spec --e2e --watchAll",

  build: "stencil build --docs",
  generate: "stencil generate",

  lint: "run lint:*",
  "lint:ts": "tslint --project . --fix",
  "lint:sass": "stylelint 'src/**/*.scss' --fix",
};
