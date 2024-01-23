const { body, param, validationResult } = require("express-validator");
const validate = {};

validate.contactIdValidationRules = () => {
    return [
        param("id")
            .trim()
            .notEmpty()
            .withMessage("Id is required.")
            .isAlphanumeric()
            .withMessage("Id does not have any special character.")
            .isLength({ min: 24, max: 24 })
            .withMessage("Id should have 24 characters."),
    ];
}

validate.createContactValidationRules = () => {
    return [
        body("firstName")
            .trim()
            .notEmpty()
            .withMessage("firstName is required")
            .isLength({ min: 2, max: 30 })
            .withMessage("firstName should have between 2 and 30 characters."),

        body("lastName")
            .trim()
            .notEmpty()
            .withMessage("lastName is required")
            .isLength({ min: 2, max: 50 })
            .withMessage("lastName should between 2 and 50 characters."),

        body("email")
            .trim()
            .notEmpty()
            .withMessage("email is required")
            .isEmail()
            .withMessage("A valid email is required."),

        body("favoriteColor")
            .trim()
            .notEmpty()
            .withMessage("favoriteColor is required")
            .isLength({ min: 2, max: 30 })
            .withMessage("favoriteColor should have between 2 and 30 characters."),

        body("birthday")
            .trim()
            .notEmpty()
            .withMessage("birthday is required")
            .isLength({ min: 2, max: 15 })
            .withMessage("birthday should have between 2 and 15 characters."),
    ]
}

validate.updateContactValidationRules = () => {
    return [
        param("id")
            .trim()
            .notEmpty()
            .withMessage("Id is required.")
            .isAlphanumeric()
            .withMessage("Id does not have any special character.")
            .isLength({ min: 24, max: 24 })
            .withMessage("Id should have 24 characters."),

        body("firstName")
            .trim()
            .notEmpty()
            .withMessage("firstName is required")
            .isLength({ min: 2, max: 30 })
            .withMessage("firstName should have between 2 and 30 characters."),

        body("lastName")
            .trim()
            .notEmpty()
            .withMessage("lastName is required")
            .isLength({ min: 2, max: 50 })
            .withMessage("lastName should between 2 and 50 characters."),

        body("email")
            .trim()
            .notEmpty()
            .withMessage("email is required")
            .isEmail()
            .withMessage("A valid email is required."),

        body("favoriteColor")
            .trim()
            .notEmpty()
            .withMessage("favoriteColor is required")
            .isLength({ min: 2, max: 30 })
            .withMessage("favoriteColor should have between 2 and 30 characters."),

        body("birthday")
            .trim()
            .notEmpty()
            .withMessage("birthday is required")
            .isLength({ min: 2, max: 15 })
            .withMessage("birthday should have between 2 and 15 characters."),
    ]
}

validate.checkContact = async (req, res, next) => {
    let validationErrors = [];
    validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = [];

        for (let validationError of validationErrors.array()) {
            errors.push({ error: validationError.msg })
        }

        res.status(400).json({ errors: errors });
        return;
    }
    next();
}

module.exports = validate;