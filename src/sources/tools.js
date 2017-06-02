import imageDatas from './imageDatas.js';

const imageDatasArr = ((imageDatas) => {
	for(let i = 0,j = imageDatas.length;i < j; i++){
		let singleImageData = imageDatas[i];
		singleImageData.imageURL = '../images/' + singleImageData.fileName;
		imageDatas[i] = singleImageData;
	}
	return imageDatas;
})(imageDatas);

export default {
	imageDatasArr
}
