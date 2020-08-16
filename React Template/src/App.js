import React from "react";
import axios from "axios";
import "./styles.css";

export default class App extends React.Component {
  state = {
    users: null,
  };

  componentDidMount() {
    axios
      .get("/user.json")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => console.error("We have a problem,", error));
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        {console.log("this is users,", this.state.users)}
        <h1>HI you better wo</h1>
        {
          users ? 
            <ul className="users">
              {users.map((user) => (
                <li className="user">
                  <p>
                    <strong>Name:</strong> {user.name} I SHOULD SHOW
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>City:</strong> {user.address.city}
                  </p>
                </li>
              ))}
            </ul> : <div> Nothing to see here </div>
        }
      </div>
    );
  }
}
