import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getById } from "../api/fake.api/user.api";

const UserPage = () => {
    const [user, setUser] = useState();
    const params = useParams();
    const { userId } = params;

    useEffect(() => {
        getById(userId).then((user) => setUser(user));
    }, []);

    const history = useHistory();

    console.log("user", user);

    const handleBack = () => {
        history.replace("/users");
    };
    if (user) {
        return (
            <div>
                <h2>{user.name}</h2>
                <h2>Профессия: {user.profession.name}</h2>
                <h2>Оценка: {user.rate}</h2>

                <h2>Встретился, раз: {user.completedMeetings}</h2>
                <span className={"badge m-1 bg-" + user.qualities[0].color}>
                    {user.qualities[0].name}
                </span>
                <button onClick={() => handleBack()}>All users !</button>
            </div>
        );
    }
    return "loading....";
};

UserPage.propTypes = {
    user: PropTypes.array
};

export default UserPage;
