import Joi from 'joi';

const userSchima = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().required()
})

export const validateUser = (req, res, next) => {
    const { error } = userSchima.validate(req.body);
    if (error) {
        return res.status(400).json({
            statusCode: 400,
            message: error.details[0].message,
            data: null
        })
    }
    next();
}
