import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import builtinModules from 'builtin-modules';

import pkg from './package.json';

const externalModules = Object.keys(pkg.dependencies || {}).concat(Object.keys(pkg.peerDependencies || {}));

const isExternal = (id) => {
  let moduleName = id.split('/')[0];
  if (id.startsWith('@')) moduleName = moduleName + '/' + id.split('/')[1];
  return externalModules.includes(moduleName) || builtinModules.includes(moduleName);
}

export default [
  // Modules for NodeJS
  {
    input: 'src/index.ts',
    external: isExternal,
    watch: {
      include: './**'
    },
    plugins: [
      sourceMaps(),
      json(),
      typescript({
        objectHashIgnoreUnknownHack: true
      })
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true
      }
    ]
  }
];
