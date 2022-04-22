const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    // find authorization
	const authHeader = req.header('Authorization')
    // get Bearer
	const token = authHeader && authHeader.split(' ')[1]
    // check
	if (!token)
		return res
			.status(401)
			.json({ success: false, message: 'Access token not found' })

	try {
        // convert token->id
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        // add userId into request
		req.userId = decoded.userId
		next()
	} catch (error) {
		console.log(error)
		return res.status(403).json({ success: false, message: 'Invalid token' })
	}
}

module.exports = verifyToken