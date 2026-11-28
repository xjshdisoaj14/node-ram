import { appRoot } from '@prisma/composer';
import web from './service.mjs';

export default appRoot('hao', ({ provision }) => {
  provision(web);
});
