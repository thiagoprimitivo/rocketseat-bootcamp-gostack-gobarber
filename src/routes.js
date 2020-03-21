import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Thiago Primitivo',
    email: 'thiago.primitivo@gmail.com',
    password_hash: '123456789',
  });
  return res.json(user);
});

export default routes;
