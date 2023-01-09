import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { useHistory } from "react-router-dom";
// import UserPage from "./userPage";

// import { Link } from "react-router-dom";

const TableBody = ({ data, columns }) => {
    const history = useHistory();

    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        }
        return _.get(item, columns[column].path);
    };

    const replaceToUserPage = (item) => {
        console.log(item);
        history.replace(`/users/${item._id}`);
    };

    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id} onClick={() => replaceToUserPage(item)}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>{renderContent(item, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableBody;
