import { typescript } from 'projen';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'express-project',
  projenrcTs: true,

  deps: [
    'express',
    'body-parser',
    'reflect-metadata',
    'sequelize',
    'sequelize-typescript',
    'pg',
    'pg-hstore',
    'jsonwebtoken',
    'passport',
    'passport-jwt',
    'passport-local',
    'bcryptjs',

    '@types/passport-jwt',
    '@types/express',

    'inversify',
    'inversify-express-utils',
  ],
  devDeps: ['@types/express'],
  tsconfig: {
    compilerOptions: {
      experimentalDecorators: true,
      emitDecoratorMetadata: true,
      types: ['reflect-metadata'],
      lib: ['es2020'],
      target: 'ES2020',
      module: 'commonjs',
    },
  },
  // packageName: undefined,  /* The "name" in package.json. */
});

project.tasks.addTask('start', {
  exec: 'ts-node src/index.ts',
  receiveArgs: true,
});

project.synth();
