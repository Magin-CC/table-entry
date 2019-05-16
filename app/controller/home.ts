import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const data = await ctx.model.Table.find();
    await ctx.render('index.ejs', {
      csrf: ctx.csrf,
      data,
    });
    // ctx.body = await ctx.service.test.sayHi('egg');
  }
  public async save() {
    const { ctx, app } = this;
    ctx.request.body.yes = ctx.request.body.yes === 'on';
    console.log(ctx.request.body);
    await app.model.Table.create(ctx.request.body);
    // const data = await ctx.model.Table.find();
    ctx.redirect('/');
  }
}
