import React from "react";
import TextField from "../common/form/textField";
// import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import PropTypes from "prop-types";

const EditForm = ({ id, name, email, sex, profession, qualities }) => {
    const handleSubmit = (e) => {
        console.log("handleSubmit", e);
    };
    const handleChange = ({ target }) => {
        console.log("handleChange", target.value);
    };
    console.log(name);
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Имя"
                name="name"
                value={name}
                onChange={handleChange}
                // error={errors.name}
            />
            <TextField
                label="Электронная почта"
                name="email"
                // value={currentUser.email}
                onChange={handleChange}
                // error={errors.email}
            />
            {/* <SelectField/> */}
            {/* <SelectField
                // label="Выбери свою профессию"
                // defaultOption="Choose..."
                // options={professions}
                // name="profession"
                // onChange={handleChange}
                // value={data.profession}
                // error={errors.profession}
            /> */}
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                // value={currentUser.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
            />

            <MultiSelectField
                // options={currentUser.qualities}
                onChange={handleChange}
                // defaultValue={currentUser.qualities}
                name="qualities"
                label="Выберите ваши качества"
            />
            <button
                className="btn btn-primary w-100 mx-auto"
                type="submit"
                // disabled={!isValid}
            >
                Обновить
            </button>
        </form>
    );
};

EditForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    sex: PropTypes.string,
    profession: PropTypes.object,
    qualities: PropTypes.array
};

export default EditForm;
