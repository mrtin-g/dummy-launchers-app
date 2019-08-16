import React from "react";
import Button from "../components/Button";
import Launcher from "../components/Launcher";

class Main extends React.Component {
  launcherStyleLight = {
    position: "relative",
    float: "left",
    top: "15%",
    padding: "5px 10px 5px 10px",
    margin: "1% 5px auto 5px",
    backgroundColor: "grey",
    width: "30%",
    height: "200px",
    border: "2px solid black",
    boxShadow: "0px 2px 3px grey"
  };

  launcherStyleDark = {
    position: "relative",
    float: "left",
    top: "15%",
    padding: "5px 10px 5px 10px",
    margin: "1% 5px auto 5px",
    backgroundColor: "black",
    width: "30%",
    height: "200px",
    border: "2px solid darkGrey",
    boxShadow: "0px 2px 3px grey",
    color: "lightGrey"
  };

  containerStyleDark = {
    minHeight: "100%",
    backgroundColor: "darkRed"
  };

  containerStyleLight = {
    minHeight: "100%",
    backgroundColor: "lightGrey"
  };

  launchers = [
    { name: "Some dir", image: "/images/crab1.png" },
    { name: "Dummy launcher name", image: "/images/crab2.png" },
    { name: "Another Launcher", image: "/images/crab3.png" },
    { name: "I ran out of Crab :(", image: "/images/crab1.png" },
    { name: "Some dir555", image: "/images/crab2.png" },
    { name: "To complete the cycle", image: "/images/crab3.png" }
  ];

  state = {
    switchToLight: false
  };

  colorSwitchHandler = () => {
    this.setState({ switchToLight: !this.state.switchToLight });
  };

  render() {
    return (
      <div
        className="MainContent"
        style={
          this.state.switchToLight
            ? this.containerStyleDark
            : this.containerStyleLight
        }
      >
        <Button
          clickAction={this.colorSwitchHandler}
          labelText={"Toggle Theme"}
          style={this.state.buttonStyle}
        />
        {this.launchers.map((launcher, index) => {
          return (
            <Launcher
              style={
                this.state.switchToLight
                  ? this.launcherStyleDark
                  : this.launcherStyleLight
              }
              name={launcher.name}
              src={launcher.image}
              key={index}
            />
          );
        })}
        <Button clickAction={""} labelText={"Do absolutely nothing"} />
      </div>
    );
  }
}

export default Main;
