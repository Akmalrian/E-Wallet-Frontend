import Joi from "joi";

const schema = Joi.object({
    username: Joi.string().min(5).email().required().messages({
        'string.empty': "Email tidak boleh kosong",
        'string.min': "Email minimal 5 karakter",
        'string.email': "Email tidak valid!",
    }),
    password: Joi.string().min(8).required().messages({
        'string.min': "password minimal 8 karakter",
        'string.empty': "Password tidak boleh kosong"
    }),
    repeat_password: Joi.valid(Joi.ref("password")).required().messages({
        "any.only": "Confirm password harus sama dengan password",
    }),
});

export default schema;