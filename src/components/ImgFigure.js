import React from 'react';

class ImgFigure extends React.Component {

	render(){
		let styleObj = {};

		if(this.props.arrange.pos){
			styleObj = this.props.arrange.pos;
		}

		if(this.props.arrange.rotate){
			(['-moz-','-ms-','-webkit-','']).forEach((value) => {
				 styleObj[value + 'transform'] = 'rotate(' + this.props.arrange.rotate + 'deg)';
			});
		}

		if(this.props.arrange.isCenter) {
			styleObj.zIndex = 11;
		}

		let imgFigureClassName = 'img-figure';
			imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';

		const handleClick = (e) => {
			if(this.props.arrange.isCenter){
				this.props.inverse();
			}else{
				this.props.center();
			}

			e.stopPropagation();
			e.preventDefault();
		};
		
		return (
			<figure className={imgFigureClassName} style={styleObj} onClick={handleClick}>
				<img src={this.props.data.imageURL} alt={this.props.data.title}	/>
				<figcaption>
					<h2 className="img-figure-title">{this.props.data.title}</h2>
					<div className='img-back' onClick={handleClick}>
						<p>
							{this.props.data.desc}
						</p>
					</div>
				</figcaption>
			</figure>
		);
	}
}

export default ImgFigure;