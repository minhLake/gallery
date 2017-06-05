import React from 'react';

class ImgFigure extends React.Component {
	render(){
		let styleObj = {};

		if(this.props.arrange.pos){
			styleObj = this.props.arrange.pos;
		}

		return (
			<figure className="img-figure" style={styleObj}>
				<img src={this.props.data.imageURL} alt={this.props.data.title}	/>
				<figcaption>
					<h2 className="img-figure-title">{this.props.data.title}</h2>
				</figcaption>
			</figure>
		);
	}
}

export default ImgFigure;