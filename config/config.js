const fs = require('fs');
const privateKey = null;// = fs.readFileSync( 'cert.key' );
const certificate = null;// = fs.readFileSync( 'cert.crt' );

module.exports = {
	"DEV":true,
	"SSL":false,
	'PRIVATE_KEY':privateKey,
	"CERTIFICATE":certificate,
	"PORT":3000
}
