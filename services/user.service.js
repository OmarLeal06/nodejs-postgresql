const boom = require('@hapi/boom');

const getConnection = require('./../libs/postgres')
const{models}=require('./../libs/sequelize');
const { use } = require('../routes/users.router');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return data;
  }

  async find() {
    const rta=await models.User.findAll();
    
    return rta
  }

  async findOne(id) {
    const user = await models.User.findByPkid(id)
    if(!user){
      throw boom.notFound('user not found')
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const rta = await user.update(changes)
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy()
    return { id };
  }
}

module.exports = UserService;
