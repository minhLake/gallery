import imageDatas from './imageDatas.js';

const imageDatasArr = ((imageDatas) => {
	for(let i = 0,j = imageDatas.length;i < j; i++){
		let singleImageData = imageDatas[i];
		singleImageData.imageURL = '../images/' + singleImageData.fileName;
		imageDatas[i] = singleImageData;
	}
	return imageDatas;
})(imageDatas);

let constant = {
	centerPos:{
		left: 0,
		right: 0
	},
	hPosRange: {
		leftSecX:[0,0],
		rightSecX:[0,0],
		y:[0,0]
	},
	vPosRange: {
		x:[0,0],
		topY:[0,0]
	}
};

const getRangeRandom = (low, high) => {
	return Math.ceil(Math.random() * (high - low) + low);
};

const rearrange = (centerIndex,imgsArrangeArr,Constant) => {
	let centerPos = Constant.centerPos,
		hPosRange = Constant.hPosRange,
		vPosRange = Constant.vPosRange,
		hPosRangeLeftSecX = hPosRange.leftSecX,
		hPosRangeRightSecX = hPosRange.rightSecX,
		hPosRangeY = hPosRange.y,
		vPosRangeTopY = vPosRange.topY,
		vPosRangeX = vPosRange.x,

		imgsArrangeTopArr = [],
		topImgNum = Math.floor(Math.random() * 2),
		topImgSpliceIndex = 0,

		imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex,1);

	imgsArrangeCenterArr[0].pos = centerPos;

	topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));
	imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);

	imgsArrangeTopArr.forEach((value, index) => {
		imgsArrangeTopArr[index].pos = {
			top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
			left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
		}
	});
	for(let i = 0, j = imgsArrangeArr.length, k = j / 2; i < j ; i++){
		let hPosRangeLORX = null;

		if(i < k){
			hPosRangeLORX = hPosRangeLeftSecX;
		}else{
			hPosRangeLORX = hPosRangeRightSecX;
		}

		imgsArrangeArr[i].pos = {
			top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
			left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
		}
	}

	if(imgsArrangeTopArr && imgsArrangeTopArr[0]){
		imgsArrangeArr.splice(topImgSpliceIndex,0,imgsArrangeTopArr[0]);
	}

	imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);

	return imgsArrangeArr;

}

export default {
	imageDatasArr,
	constant,
	rearrange
}
