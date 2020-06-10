import React from "react";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }
  render() {
    return (
      <div>
        <input className="forminput" type="file" onChange={this.handleChange} />
        <div>
          <img className="pic" src={this.state.file} />
        </div>
      </div>
    );
  }
}
export default Upload;
