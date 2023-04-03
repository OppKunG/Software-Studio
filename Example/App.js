import './App.css';
import { Component } from 'react';

class BtnVote extends Component {
  onTrigger = () =>{
    this.props.blockCallback('+');
  }

  render(){
    return(
      <button className='Btn' onClick={this.onTrigger}>Click to Vote</button>
    );
  }
}

class BtnUnvote extends Component {
  onTrigger = () =>{
    this.props.blockCallback('-');
  }
  
  render(){
    return(
      <button className='Btn' onClick={this.onTrigger}>Click to Unvote</button>
    );
  }
}

class DisplayNum extends Component {
  render(){
    return(
      <span className='Textbox'>{this.props.text}</span>
    )
  }
}

class Block extends Component {
  state = {
    vote: 0,
  }

  handleCallback = (childData) =>{
    if (childData === '+'){
      if (this.state.vote < 10) this.setState({vote: this.state.vote + 1});
      else window.alert('Cannot Vote more');
    }
    else{
      if (this.state.vote > 0) this.setState({vote: this.state.vote - 1});
      else window.alert('Cannot unvote');
    }
  }

  voteString(){
    if (this.state.vote === 0) return 'MIN';
    else if (this.state.vote === 10) return 'MAX';
    else return String(this.state.vote);
  }

  render(){
    return(
      <div className='Block'>
        <div className='Container'>
          <div className='Item1'>
            <h1 className='Newline'>{this.props.topic}</h1>
            <h2 className='Newline'>{this.props.name}</h2>
            <p className='Newline'>{this.props.detail}</p>
          </div>
          <div className='Item2'>
            <img src={this.props.img_src} alt=''/>
          </div>
        </div>
        <div className='Vote'>
          <BtnVote blockCallback={this.handleCallback} />
          <DisplayNum text={this.voteString()} />
          <BtnUnvote blockCallback={this.handleCallback}/>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <h1 className='Topic'>โหวตอาหาร</h1>x 
      <Block topic='อาหารคาว' name='ข้าวผัด' 
      detail='Aliquam euismod neque commodo, sagittis lorem id, vestibulum nibh. Suspendisse porttitor vitae ipsum id interdum. Vivamus sem nisi, imperdiet ac feugiat auctor, sagittis id tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus feugiat vulputate hendrerit. Donec scelerisque egestas malesuada. Cras convallis lectus eu nulla accumsan, ut varius nunc malesuada.' 
      img_src='https://images.unsplash.com/photo-1630914441934-a29bf360934c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
      />
      <Block topic='อาหารหวาน' name='บัวลอย' 
      detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis felis nec arcu vestibulum pharetra. Mauris iaculis, turpis ut gravida ullamcorper, velit tellus dictum turpis, non rutrum tortor dui et lorem. Vestibulum nec sapien faucibus, tincidunt felis ac, interdum mauris. Donec at dignissim mi. Aenean ullamcorper id metus a pharetra. Fusce lacinia faucibus nunc in viverra. Mauris interdum quam ex. Cras justo elit, rutrum vel nibh ut, euismod ultricies mi. Vestibulum vulputate justo id nibh commodo porta. Sed magna magna, feugiat nec nunc a, tincidunt laoreet nunc. Sed non arcu nec est ultrices maximus quis sit amet metus.' 
      img_src='https://img.kapook.com/u/2017/wanwanat/93_bualoy/loy4_1.jpg'
      />
    </div>
  );
}

export default App;
