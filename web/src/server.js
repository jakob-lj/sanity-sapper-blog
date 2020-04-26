import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import cookieParser from 'cookie-parser';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		(req, res, next) => {
			if (req.originalUrl === '/lang/nb') {
				const inAYear = new Date()
				inAYear.setTime(inAYear.getTime() + 1000*60*60*24*365)
				res.setHeader('Set-Cookie', `lang=nb; HttpOnly; Path=/`)
				res.end()
			}
			if (req.originalUrl === '/lang/en') {
				const inAYear = new Date()
				inAYear.setTime(inAYear.getTime() + 1000*60*60*24*365)
				res.setHeader('Set-Cookie', `lang=en; HttpOnly; Path=/`)
				res.end()
			}
			next()
		},
		cookieParser(),
		sapper.middleware({
			session: (req, res) => {
				return req.cookies
			}
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
