export function validator(data, config) {
    const errors = {};
    function validate(validateMethod, data, config) {
        let statusValiday;
        switch (validateMethod) {
        case "isRequired":
            statusValiday = data.trim() === "";
            break;
        case "isEmail": {
            const emailRegExp = /^\S+@\S+\.\S+$/g;
            statusValiday = !emailRegExp.test(data);
            break;
        }
        case "isCapitalSymbol": {
            const capitalRegExp = /[A-Z]+/g;
            statusValiday = !capitalRegExp.test(data);
            break;
        }
        case "isContainDigit":{
            const digitRegExp = /\d+/g;
            statusValiday = !digitRegExp.test(data);
            break;
        }
        case "min":{
            statusValiday = data.length < config.value;
            break;
        }
        default:
            break;
        }
        if (statusValiday) return config.message;
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
