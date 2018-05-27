import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReactAutoScroll from 'react-to-target-auto-scroll';
import { createStore } from 'redux';



class Board extends React.Component {
 

  render() {
    return (
      <div>
       
        <div className="header" >
        
        <div className="btn-top"  value={this.props.squares[0]}
        onClick={() => this.props.onClick(0)}>UPCOMING EVENTS
        </div>
        <div className="btn-top"  value={this.props.squares[1]}
        onClick={() => this.props.onClick(1)}>WHAT'S NEW
        </div>
        <div className="btn-top"  value={this.props.squares[2]}
        onClick={() => this.props.onClick(2)}>BLOG
        </div>
    
         
        </div>
      </div>
    );
  }
}

//test
// [
//   {
//         id: {unique}
//         title: {ttle here}
//         description: {description here}
//         type: "new" || "events" || "blog"
//   }
// ]

function todos(state = [], action){
  switch (action.type) {
    case 'ADD_TODO':
    return state.concat([action.text])
    default:
    return state
  }
}

let url1 = "https://media.keepo.me/20180514201744/300x200--1.jpg"
let url2 = "https://media.keepo.me/20180513230837/300x200--page.jpg"
let url3 = "https://media.keepo.me/20180514124930/300x200--ojol-deadpool-2.jpg"

let desc_wi = "optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted "

let addData = []
for(let i = 2; i < 22; i++){
  addData.push({
    id: i,
    title: "title 1",
    description: desc_wi,
    type:  i > 1 && i < 5?"new" : "" || i > 4 && i < 12?"events" : "" ||i > 11 && i <= 22?"blog":"",
    url_img: i > 1 && i < 5?url1 : "" || i > 4 && i < 12?url2 : "" ||i > 11 && i <= 22?url3:"",
    class_a: "header-a",
    class_b: "header-b",
    class_c: "header-c",
    class_d: "header-d",
    class_e: "header-e",
    class_f: "header-f",
  })

}

let dataMustShow = {
	id: 1,
	title: "title show",
	description: desc_wi,
	type: "show",
	url_img: "",
	class_a: "header-a",
	class_b: "header-b",
	class_c: "header-c",
	class_d: "header-d",
	class_e: "header-e",
	class_f: "header-f",
}

const store = createStore(todos, addData )

store.dispatch({
  type : 'ADD_TODO',
  text : dataMustShow
})



store.getState().sort(function(a, b){return a.id - b.id});



class Masonry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {history : store.getState()}
  }

  handleClick(i) {
    const history = this.state.history;
    let historya;
    if (i == 0) {
      historya = store.getState().filter(function(o){
        if (o.type == 'new' || o.type == 'show')
        return o
      })
    } else if (i == 1) {
      historya = store.getState().filter(function(o){
        if (o.type == 'events' || o.type == 'show')
        return o
      })
    }
    else if (i == 2) {
      historya = store.getState().filter(function(o){
        if (o.type == 'blog' || o.type == 'show')
        return o
      })
    }
  
    this.setState({
      history: historya,
    });
  
    this.setState({
      history: historya,
    });
  }


  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    let addclass = "time-container"
    const initone =  <div className={addclass}><div>hihhio</div><div>hihhio</div></div>

    const moves = history.map((step_b, move_so) => {     
      const desc = step_b.title
      const description = <p>{step_b.description}</p>
      const thisImg =  step_b.url_img != ""?<img className='img-forc' src={step_b.url_img}/> : <div style={{color:"white", height :"277.1px"}}>vddbg</div>
      return (
       <div className="item-img">
       <div className= "image">
      {thisImg}
       </div>
       {desc}
       <div className="header-a"></div>
       <div className="header-b"></div>
       <span className="header-c"></span>
       {description}
       <div className="header-d"></div>
       <div className="header-e"></div>
       <div className="header-f"></div>
       </div>
      );
    });

    return (
      <div className="all">
        <div className="header-top">
          <Board
            squares={current.id}
            onClick={(i) => this.handleClick(i)}
          />
        </div>

        <div id="outer">
        <div id="inner">
        <ReactAutoScroll
        targetPosition={-200}
        easeType={'linear'}
        speed={5}
        updateInterval={40}
        onScrollingDone={() => console.log('scrolling finished')}
        scrollTargetRef={this.refs.Board}
        isEnabled
      >
        <div id="text" style={{ overflow: 'scroll', backgroundColor: '#C1A073', width: '90%', height: '600px', textAlign: 'left', display: 'inline-block' }}>
          {moves}
        </div>
        </ReactAutoScroll>
        </div>
        </div>
        
       <div className="content-bottom">
       <div className="btn-bottom">MORE EVENTS</div>
       <div className="btn-bottom">FIND MORE</div>
       <div className="btn-bottom">MORE BLOG SPOT</div>
       </div>

      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Masonry />,
  document.getElementById('root')
);

