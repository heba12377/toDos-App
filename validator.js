const Joi = require('joi');

const schema = Joi.object({
    title: Joi.string()
        .alphanum()
        .min(3)
        .max(30),
    status: Joi.string()
        .alphanum()
        .min(3)
        .max(30),
})
const validator = async(req,res,next)=>{
    try {
        await schema.validateAsync(req.body);
        next();
      } catch (error) {
        error.statusCode = 422;
        next(error);
      }
};

module.exports = validator;