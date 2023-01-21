import React, { useEffect, useState } from "react";
import EditForm from "../../ui/editForm";
import { useParams } from "react-router-dom";
import api from "../../../api";

const EditUserPage = () => {
    const { userId } = useParams();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    const [user, setUser] = useState();
    // console.log("EditUserPage", user.name);

    if (user) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <h1>Edit Form</h1>
                        <EditForm
                            user={user.name}
                            id={user._id}
                            email={user.email}
                            sex={user.sex}
                            profession={user.profession}
                            qualities={user.qualities}
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading . . . . </h1>;
    }
};

export default EditUserPage;
