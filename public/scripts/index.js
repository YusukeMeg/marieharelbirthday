var React = require('react');//React.jsのライブラリをimport
var ReactDOM = require('react-dom');

//コンポーネントを定義
var Cells = React.createClass({
  getInitialState: function(){
      return {
        departure_station:"",
        arrival_station:"",
        dataTrainFareJp: []
      };
  },
  render:function(){

    return (
      <div className="reactRoot">
          onakasuita
      </div>
    );
  }
});
//id='content'の要素にコンポーネント「Index」を挿入してレンダリング
ReactDOM.render(
  <Cells />,
  document.getElementById('content')
);
