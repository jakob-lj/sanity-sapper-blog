
export async function get(req, res, next) {
  const inAYear = new Date()
  inAYear.setTime(inAYear.getTime() + 60*60*24*365)
  res.setHeader('Set-Cookie', `lang=en; HttpOnly; Path=/`)
	res.end()
}