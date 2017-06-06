import React, {Component} from 'react';

class ControllerUnit extends Component {

	render() {
		let constrollerUnitClassName = 'controller-unit';

		if(this.props.arrange.isCenter) {
			constrollerUnitClassName += ' is-center';
			if(this.props.arrange.isInverse) {
				constrollerUnitClassName += ' is-inverse';
			}
		}

		const handleClick = (e) => {
			if(this.props.arrange.isCenter) {
				this.props.inverse();
			}else {
				this.props.center();
			}

			e.stopPropagation();
			e.preventDefault();
		}

		return (
			<span className={constrollerUnitClassName} onClick={handleClick}></span>
		);
	}
}

export default ControllerUnit;