require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';
import ImgFigure from './ImgFigure.js';
import Tools from '../sources/tools.js';



class AppComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			imgsArrangeArr:[]
		}
	}

	componentDidMount() {
		var stageDOM = ReactDOM.findDOMNode(this.refs.stage),
		 	stageW = stageDOM.scrollWidth,
		 	stageH = stageDOM.scrollHeight,
		 	halfStageW = Math.ceil(stageW / 2),
		 	halfStageH = Math.ceil(stageH / 2);

		var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
			imgW = imgFigureDOM.scrollWidth,
			imgH = imgFigureDOM.scrollHeight,
			halfImgW = Math.ceil(imgW / 2),
			halfImgH = Math.ceil(imgH / 2);

		Tools.constant.centerPos = {
			left: halfStageW - halfImgW,
			top: halfStageH - halfImgH
		}
		Tools.constant.hPosRange.leftSecX[0] = -halfImgW;
		Tools.constant.hPosRange.leftSecX[1] = halfStageW - halfImgW*3;
		Tools.constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
		Tools.constant.hPosRange.rightSecX[1] = stageW - halfImgW;
		Tools.constant.hPosRange.y[0] = -halfImgH;
		Tools.constant.hPosRange.y[1] = stageH - halfImgH;

		Tools.constant.vPosRange.topY[0] = -halfImgH;
		Tools.constant.vPosRange.topY[1] = halfStageH - halfImgH*3;
		Tools.constant.vPosRange.x[0] = halfStageW - imgW;
		Tools.constant.vPosRange.x[1] = halfStageW;

		let newImgsArrangeArr = Tools.rearrange(0,this.state.imgsArrangeArr,Tools.constant);
		this.setState({
			imgsArrangeArr: newImgsArrangeArr
		});
	}

  	render() {
  		let controllerUnits = [],
  			imgFigurs = [];

  		Tools.imageDatasArr.forEach((value, index) => {
  			if(!this.state.imgsArrangeArr[index]){
  				this.state.imgsArrangeArr[index] = {
  					pos: {
  						left: 0,
  						top: 0
  					},
  					rotate: 0,
  					isInverse: false,
  					isCenter: false
  				}
  			}
			const inverse = (index, imgsArrangeArr) => {
				return () => {
					imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
					this.setState({
						imgsArrangeArr: imgsArrangeArr
					});
				}
			};

			const center = (index, imgsArrangeArr, constant) => {
				return () => {
					let newImgsArrangeArr = Tools.rearrange(index,imgsArrangeArr,constant);
					this.setState({
						imgsArrangeArr: newImgsArrangeArr
					});
				}
			}
  			imgFigurs.push(
  				<ImgFigure 
  					data={value} 
  					ref={'imgFigure' + index} 
  					arrange={this.state.imgsArrangeArr[index]} 
  					inverse={inverse(index,this.state.imgsArrangeArr)} 
  					center={center(index,this.state.imgsArrangeArr,Tools.constant)}
				/>
  			);
  		});

	    return (
	    	<section className="stage" ref="stage">
	    		<section className="img-sec">
	    			{imgFigurs}
	    		</section>
	    		<nav className="controller-nav">
	    			{controllerUnits}
	    		</nav>
	    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
