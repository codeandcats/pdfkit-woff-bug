var Pdf = require('pdfkit');
var http = require('http');
var fs = require('fs');

function downloadFont(url, dest, done) {
	fs.stat(fontFileName, function(err) {
		if (!err) {
			console.log('Font already downloaded');
			return done();
		}

		console.log('Downloading font...');
		var file = fs.createWriteStream(dest);
		var request = http.get(url, function(response) {
			response.pipe(file);
			file.on('finish', function() {
				file.close(function(err) {
					if (!err) {
						console.log('Done');
					}
					return done(err);
				});
			});
		}).on('error', function(err) {
			fs.unlink(dest);
			return done(err);
		});
	});
}

function generatePdf(fontFamily, fontFileName, outputFileName) {
	console.log('Generating PDF...');

	const pdf = new Pdf();

	pdf.pipe(fs.createWriteStream(outputFileName));

	pdf.registerFont(fontFamily, fontFileName);

	pdf
		.font(fontFamily)
		.fontSize(25)
		.text('Some text with an embedded font');

	pdf.end();

	console.log('Done');
}

var fontFamily = 'Indie Flower';
var fontUrl = 'http://fonts.gstatic.com/s/indieflower/v8/10JVD_humAd5zP2yrFqw6hampu5_7CjHW5spxoeN3Vs.woff2';
var fontFileName = 'indie-flower.woff2';

downloadFont(fontUrl, fontFileName, function(err) {
	if (err) {
		console.error(err);
		return;
	}

	generatePdf(fontFamily, fontFileName, 'output.pdf');
});
