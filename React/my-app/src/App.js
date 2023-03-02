import "./App.css";
import { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="column1">
            <h2>{this.props.topic}</h2>
            <h3>{this.props.name}</h3>
            <p>{this.props.paragraph}</p>
          </div>
          <div className="column2">
            <img src={this.props.image} alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}

class Button extends Component {
  onTrigger = () => {
    this.props.blockCallback(this.props.btnSign);
  };
  render() {
    return (
      <button className="btn" onClick={this.onTrigger}>
        {this.props.btnText}
      </button>
    );
  }
}

class Vote extends Component {
  state = {
    vote: 0,
  };

  handleCallback = (childData) => {
    if (childData === "+") {
      if (this.state.vote < 10) this.setState({ vote: this.state.vote + 1 });
      else window.alert("Cannot Vote more");
    } else {
      if (this.state.vote > 0) this.setState({ vote: this.state.vote - 1 });
      else window.alert("Cannot unvote");
    }
  };

  voteText() {
    if (this.state.vote === 0) return "MIN";
    else if (this.state.vote === 10) return "MAX";
    else return String(this.state.vote);
  }

  render() {
    return (
      <div className="voteBtn">
        <Button
          btnText="Click to Vote"
          btnSign="+"
          blockCallback={this.handleCallback}
        />
        <span className="voteNum">{this.voteText()}</span>
        <Button
          btnText="Click to Unvote"
          btnSign="-"
          blockCallback={this.handleCallback}
        />
      </div>
    );
  }
}

class Block extends Component {
  render() {
    return (
      <div className="block">
        <Content
          topic={this.props.topic}
          name={this.props.name}
          paragraph={this.props.paragraph}
          image={this.props.image}
        />
        <Vote />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>โหวตอาหาร</h1>
      <Block
        topic={"อาหารคาว"}
        name={"ข้าวผัด"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae suscipit nunc. Vivamus vitae dignissim lorem. Nulla eleifend finibus massa, nec suscipit orci porttitor quis. Proin ultricies, arcu sed viverra fringilla, metus odio pulvinar purus, et auctor tortor elit et lacus. Nam at dui nec nulla sagittis sollicitudin. "
        }
        image={
          "https://img.wongnai.com/p/1920x0/2019/12/19/d5537700a7274ac09964b6a51dd0a9f6.jpg"
        }
      />
      <Block
        topic={"อาหารหวาน"}
        name={"บัวลอย"}
        paragraph={
          "Cras ut justo odio. Nunc nec felis vel ipsum hendrerit elementum vitae sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt varius dapibus. Nullam congue sem elementum diam egestas commodo. Etiam efficitur lorem ac maximus malesuada. Curabitur iaculis eleifend nulla, in auctor nisi faucibus sed. Morbi placerat est in placerat ullamcorper. Duis fermentum sit amet est in ullamcorper."
        }
        image={"https://img.kapook.com/u/2022/wanwanat/1079595941.jpg"}
      />
    </div>
  );
}

export default App;
