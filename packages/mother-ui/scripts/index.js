export default {
    start: 'rollup -c -w',
    docs: 'start-storybook -p 9000 -s ./src/assets',
    build: 'rollup -c',
    test: 'run lint jest:full',
    lint: "eslint 'src/**/*.{js,ts,tsx}' --quiet --fix",
    ['jest:full']: 'jest --verbose --runInBand --no-cache',
    jest: 'jest --collectCoverage=false --cache=true',
};
