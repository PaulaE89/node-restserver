const mongoose=require('mongoose');
const Schema =mongoose.Schema;

let categoriaSchema= new Schema({

    descripcion:{
        type:String,
        unique:true,
        required:[true, 'la descricpcion se obligotaria']
    },
    usuario:{
        type:Schema.Types.ObjectId, ref: 'Usuario'
    }
});

//export default model('categoria', categoriaSchema)

module.exports=mongoose.model('categoria', categoriaSchema);