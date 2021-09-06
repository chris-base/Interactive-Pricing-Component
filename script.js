const priceKey = [
	['10K', 8],
	['50K', 12],
	['100K', 16],
	['500K', 24],
	['1M', 36]
];

const updatePrice = () => {

	let price = priceKey[document.getElementById('main-slider').value - 1][1];

	document.getElementById('pageviews-text').innerHTML = priceKey[document.getElementById('main-slider').value - 1][0] + ' Pageviews';

	if (document.getElementById('checkbox').checked) {
		price -= priceKey[document.getElementById('main-slider').value - 1][1] * 0.25;
	}

	document.getElementById('price-text').innerHTML = '$' + price + '.00';


}