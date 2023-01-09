import React from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
// import api from "../api";

// import TableBody from "./tableBody";
// import TableHeader from "./tableHeader";

const UserPage = ({ user }) => {
    // const [user, setUser] = useState();

    // useEffect(() => {
    //     api.users.fetchAll().then((data) => getById(data));
    // }, []);

    const history = useHistory();

    const handleBack = () => {
        console.log(1);
        history.replace("/users");
    };
    return (
        <div>
            <h1>123</h1>

            {/* <h1>{user._id}</h1>
            <h1>{user.name}</h1>
            <h2>{user.profession}</h2>
            <h2>{user.qualities}</h2>
            <h2>{user.completedMeetings}</h2>
            <h2>{user.rate}</h2> */}
            <button onClick={() => handleBack()}>All users !</button>
        </div>
    );
};

UserPage.propTypes = {
    user: PropTypes.array
};

export default UserPage;
