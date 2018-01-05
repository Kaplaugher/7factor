var express = require('express');
var router = express.Router();

/* GET images */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  }, {
  	src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1
	}, {
		src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4
	}, {
		src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4
	}, {
		src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 
	}, {
		src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3
	}, {
		src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4
	}, {
		src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3
	}, {
		src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3
	}, 
]);
});

router.get('/animals', function(req, res, next) {

  res.json([{
  	src: "https://source.unsplash.com/IDO_a-dxrCY/800x599",
    width: 4,
    height: 3
  }, {
  	src: 'https://source.unsplash.com/HQqIOc8oYro/800x799', width: 1, height: 1
	}, {
		src: 'https://source.unsplash.com/K_Na5gCmh38/600x799', width: 3, height: 4
	}, {
		src: 'https://source.unsplash.com/adK3Vu70DEQ/600x799', width: 3, height: 4
	}, {
		src: 'https://source.unsplash.com/mx0DEnfYxic/600x799', width: 3, height: 4 
	}, {
		src: 'https://source.unsplash.com/-VTJEOcYT8o/800x599', width: 4, height: 3
	}, {
		src: 'https://source.unsplash.com/aRXPJnXQ9lU', width: 3, height: 4
	}, {
		src: 'https://source.unsplash.com/N9s3FjzsstM', width: 4, height: 3
	}, {
		src: 'https://source.unsplash.com/mTkKYzlAAMc/800x599', width: 4, height: 3
	}, 
]);
});

router.get('/tech', function(req, res, next) {
	
		res.json([{
			src: "https://source.unsplash.com/DiTiYQx0mh4/800x599",
			width: 4,
			height: 3
		}, {
			src: 'https://source.unsplash.com/0VGG7cqTwCo/800x799', width: 1, height: 1
		}, {
			src: 'https://source.unsplash.com/pgdaAwf6IJg/600x799', width: 3, height: 4
		}, {
			src: 'https://source.unsplash.com/QRWAdBCqysc/600x799', width: 3, height: 4
		}, {
			src: 'https://source.unsplash.com/lMpoDibrEmY/600x799', width: 3, height: 4 
		}, {
			src: 'https://source.unsplash.com/OX_Zv7EFPmE/800x599', width: 4, height: 3
		}, {
			src: 'https://source.unsplash.com/eM6WUs4nKMY', width: 3, height: 4
		}, {
			src: 'https://source.unsplash.com/ggCqWY2sdaQ', width: 4, height: 3
		}, {
			src: 'https://source.unsplash.com/N1I6IgDOGJs/800x599', width: 4, height: 3
		}, 
	]);
	});
	

module.exports = router;
