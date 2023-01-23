import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
// import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import PropTypes from "prop-types";
import { validator } from "../../utils/validator";

const EditForm = ({
    currentUser
    // id,
    // name,
    // email,
    // sex,
    // profession,
    // qualities
}) => {
    const [user, setUser] = useState(currentUser);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        validate();
    }, [user]);
    const [data] = useState({
        name: user.name,
        email: user.email,
        profession: user.profession,
        sex: user.sex,
        qualities: user.qualities
    });

    const handleChange = (target) => {
        // setUser((prevState) => ({
        //     ...prevState,
        //     [target.name]: target.value
        // }));
        let userValue = target.value;

    if (target.name === 'qualities') {
      userValue = target.value.map((v) => v.value);
    }

    setUser(prev => ({ ...prev, [target.name]: userValue }));
    };

    const handleSubmit = (e) => {
        // console.log("handleSubmit", e);
    };
    // console.log(email);

    const addLocalStorage = () => {
        // localStorage.setItem("users", JSON.stringify(data));
    };

    const validateConfig = {
        name: {
            isRequired: { message: "Имя обязательно для заполнения" }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: { message: "Почта введена некорректно" }
        }
    };
    console.log(validateConfig);

    const validate = () => {
        const errors = validator(user, validateConfig);

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                // error={errors.email}
            />
            {/* <SelectField/> */}
            {/* <SelectField
                label="Выбери свою профессию"
                defaultOption="Choose..."
                options={profession}
                name="profession"
                onChange={handleChange}
                value={profession}
                // error={errors.profession}
            /> */}
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
            />

            <MultiSelectField
                options={data.qualities.name}
                onChange={handleChange}
                defaultValue={data.qualities.name}
                name="qualities"
                label="Выберите ваши качества"
            />
            <button
                className="btn btn-primary w-100 mx-auto"
                type="submit"
                onClick={addLocalStorage}
                // disabled={!isValid}
            >
                Обновить
            </button>
        </form>
    );
};

EditForm.propTypes = {
    currentUser: PropTypes.object

    // id: PropTypes.string,
    // name: PropTypes.string,
    // email: PropTypes.string,
    // sex: PropTypes.string,
    // profession: PropTypes.object,
    // qualities: PropTypes.array
};

export default EditForm;
