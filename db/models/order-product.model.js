const{Model,DataTypes,Sequelize}=require('sequelize');
const{ORDER_TABLE}=require('./order.model')
const{PRODUCT_TABLE}=require('./product.model')

const ORDER_PRODUCT_TABLE= 'orders_products';

const orderProductSchema={
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },createdAt:{
        allowNull:false,
        type:DataTypes.DATE,
        field:'created_at',
        defaultValue:Sequelize.NOW,
    },
    amounth:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    orderId:{
        field:'orderId',
        allowNull:false,
        type:DataTypes.INTEGER,
        references:{
            model:ORDER_TABLE,
            key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL'
    },
    productId:{
        field:'productId',
        allowNull:false,
        type:DataTypes.INTEGER,
        references:{
            model:PRODUCT_TABLE,
            key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL'
    }}

class OrderProduct extends Model{
    static associate(models){

    }
    static config(sequelize){
        return{
            sequelize,
            tableName:ORDER_PRODUCT_TABLE,
            modelName:'OrderProduct',
            timestamps:false
        }
    }
}

module.exports={OrderProduct,orderProductSchema,ORDER_PRODUCT_TABLE};