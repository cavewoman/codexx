import React from "react";
import axios from "axios";

class MemberContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    axios
      .get("api/members")
      .then(response => {
        console.log(response.data);
        this.setState({
          members: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="MemberContainer">
        Members Here
      </div>
    );
  }
}

export default MemberContainer;
