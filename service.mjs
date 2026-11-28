import { compute } from '@prisma/composer-prisma-cloud';
import node from '@prisma/composer/node';

export default compute({
  name: 'web',
  deps: {},
  build: node({
    module: import.meta.url,
    entry: './dist/index.js',
    dependencies: 'external',
  }),
});
