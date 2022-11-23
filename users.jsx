import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    console.log(number);
    if (number >= 5) {
      return <>{number} человек тусанет с тобой сегодня</>;
    } else if (number <= 4 && number >= 2) {
      return <>{number} человека тусанет с тобой сегодня</>;
    } else if (number === 1) {
      return <>{number} человек тусанет с тобой сегодня</>;
    } else if (number === 0) {
    }
  };
  const styleClasses = [
    "badge border-radius m1 bg-",
    "badge badge-pill badge-warning bg-danger",
  ];

  console.log(api.users.fetchAll());

  if (users.length === 0) {
    return (
      <h1 className="">
        <span className={styleClasses[1]}>Никто с тобой не тусанет</span>
      </h1>
    );
  }
  return (
    <>
      <h1 className="badge border-radius bg-primary">
        <span className="">{renderPhrase(users.length)}</span>
      </h1>

      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Качества</th>
            <th>Профессия</th>
            <th>Завершенные встречи</th>
            <th>Оценка</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id + item.name}>
              <th>{item.name}</th>
              <th>
                {item.qualities.map((item) => (
                  <span
                    className={styleClasses[0] + item.color}
                    key={item.id + item.name}
                  >
                    {item.name}
                  </span>
                ))}
              </th>
              <th>{item.profession.name}</th>
              <th>{item.completedMeetings}</th>
              <th>{item.rate} / 5</th>
              <th>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
