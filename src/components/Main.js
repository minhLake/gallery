require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ImgFigure from './ImgFigure.js';
import Tools from '../sources/tools.js';



class AppComponent extends React.Component {

  	render() {

  		let controllerUnits = [],
  			imgFigurs = [];

  		Tools.imageDatasArr.forEach((value) => {
  			imgFigurs.push(<ImgFigure data={value} />);
  		});

	    return (
	    	<section className="stage">
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
