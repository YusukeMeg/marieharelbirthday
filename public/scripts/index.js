var React = require('react');//React.jsのライブラリをimport
var ReactDOM = require('react-dom');

//コンポーネントを定義
var Cells = React.createClass({
  getInitialState(){
    return {
        current_index:2,
        image_src_top: "",
        image_src_bottom: "",
        is_changed:false
    };
  },
  loadsImageFromServer(index,callback){
    var xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.open("GET", "./img/"+index+".png", true);
    xhr.onload = function() {

      var oURL = URL.createObjectURL(this.response);
      var image = new Image();
      const canvas = document.createElement('canvas');
      canvas.width = 1160;
      canvas.height = 500;
      ctx = canvas.getContext('2d');
      image.src = oURL;
      image.onload = function() {
        ctx.drawImage(image, 0, 0);
        callback({image_src_top:canvas.toDataURL()});
        ctx.clearRect(0,0,1160,500);
        ctx.drawImage(image, 1737, 0,1160,500,0,0,1160,500);
        callback({image_src_bottom:canvas.toDataURL()});
        URL.revokeObjectURL(oURL);
      };
    };
    xhr.send();
  },
  moveBackImage(){

  },
  moveNextImage(){
    this.setState({is_changed:true})
    this.loadsImageFromServer(this.state.current_index,(e)=>{this.setState(e)});
    this.setState({current_index:this.state.current_index +1})
  },
  componentDidUpdate(prevProps, prevState){
    if(prevState.is_changed){
      this.setState({is_changed:false})
    }
  },
  render:function(){

    return (
      <div>
          <div onClick={this.moveNextImage}>load</div>
          <img id="image_top" src={this.state.image_src_top}    style={{"z-index": 0,"position": "fixed"}}/>
          <img id="image_bottom"  src={this.state.image_src_bottom} className={this.state.is_changed?"hidden":""} style={{"z-index": 1,"position": "fixed"}}/>
      </div>
    );
  }
});
//id='content'の要素にコンポーネント「Index」を挿入してレンダリング
ReactDOM.render(
  <Cells />,
  document.getElementById('content')
);
