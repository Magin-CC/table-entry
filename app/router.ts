import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('/save', controller.home.save);
  router.get('/', controller.home.index);
};
