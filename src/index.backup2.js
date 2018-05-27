import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReactAutoScroll from 'react-to-target-auto-scroll';



class Board extends React.Component {
 

  render() {
    return (
      <div>
        <ReactAutoScroll
        targetPosition={-200}
        easeType={'linear'}
        speed={5}
        updateInterval={40}
        onScrollingDone={() => console.log('scrolling finished')}
        scrollTargetRef={this.refs.Board}
        isEnabled
      >
        <div
          ref="Board"
          // style={{ 'overflow-y' : 'scroll', backgroundColor: 'red', width: '300px', height: '300px' }}
          className="overflow-text"
          >
          
            <div ref="scrollExample">joe</div>
            <div ref="scrollExample">er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div> 
            <div>er3r3</div>
            <div>er3r3</div>
            <div>sata</div>
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div> 
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div>
            <div>joe</div> 
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div> 
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div>
            <div>er3r3</div> 
            <div>er3r3</div>
         
         </div>
     </ReactAutoScroll>
        <div className="board-row" >
        
           <button className="square"  value={this.props.squares[0]}
        onClick={() => this.props.onClick(0)}>jk
    </button>
    <button className="square"  value={this.props.squares[1]}
        onClick={() => this.props.onClick(1)}>jk
    </button>
    <button className="square"  value={this.props.squares[2]}
        onClick={() => this.props.onClick(2)}>jk
    </button>
    
         
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
       // squares: Array(9).fill(null)
        squares: [null, null, "0", "15"]
      },{
         squares: [null, null, "0", "215"]
       }],
      //xIsNext: true
    };
  }

  handleClick(i) {
     const history = this.state.history;
    
    
    let historya;
    if(i == 0){
      historya = [{squares : [null, null, "0", "15"]}, {squares : [null,"90", "4", "15"]}]
      }else if(i== 1){
        historya = [{squares : [null, null, "0", "15"]}, {squares : [null,"90", "4", "15"]}, {squares : [null,"90", "4", "15"]}, {squares : [null,"90", "4", "15"]}]
      }
      else if(i == 2){
        historya = [{squares : [null, null, "0", "15"]}]
      }


    this.setState({
      history : historya,
      //lanjut: !this.state.lanjut,
    });


    console.log(i)
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];

    const moves = history.map((step_bos, move_so) => {
      console.log("ini = ",step_bos.squares[3])
     
      const desc = "ini ="+step_bos.squares[3]
      return (
        <li>
          <button>{desc}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
        {/* <div>{status}</div> */}
          <ol>{moves}</ol>
        </div>
        <div><img src="https://img20.jd.id/Indonesia/nHBfsgAAAwAAAAQAKXS92gAAZ0c.png"/></div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

