const express = require('express');
const{ createOrderSchema,getOrderSchema, addItemSchema }=require('../schemas/order.schema');
const validationHandler=require('../middlewares/validator.handler');
const OrderService = require('../services/order.service');

const router = express.Router();

const service = new OrderService()

router.get('/:id',
  validationHandler(getOrderSchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const order = await service.findOne(id);
        res.json(order);
      } catch (error) {
        next(error);
      }
    }
);
router.post('/',
  validationHandler(createOrderSchema,'body'),
  async(req,res,next)=>{
      try{
          const body=req.body;res.status(201).json(await service.create(body));
      }catch(error){
          next(error);
      }
  }
);

router.post('/add-item',
  validationHandler(addItemSchema,'body'),
  async(req,res,next)=>{
      try{
          const body=req.body;
          const newItem = await service.addItem(body)
          res.status(201).json(newItem);
      }catch(error){
          next(error);
      }
  }
);


module.exports = router;
