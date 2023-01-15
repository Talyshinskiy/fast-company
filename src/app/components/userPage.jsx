import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./qualitiesList";
// import { getById } from "../api/fake.api/user.api";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    });

    const handleClick = () => {
        history.push("/users");
    };

    if (user) {
        return (
            <div>
                <h2>{user.name}</h2>
                <h2>Профессия: {user.profession.name}</h2>
                <h2>Оценка: {user.rate}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>Встретился, раз: {user.completedMeetings}</p>

                <button onClick={handleClick}>All users !</button>
            </div>
        );
    } else {
        return <h1>loading....</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;

// const [user, setUser] = useState();
// const params = useParams();
// const { userId } = params;

// useEffect(() => {
//     getById(userId).then((user) => setUser(user));
// }, []);

// const history = useHistory();

// console.log("user", user);

// const handleBack = () => {
//     history.replace("/users");
// };
// if (user) {
//     return (

// );
// }
// return "loading....";
