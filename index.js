const app = require('./server');

try {
    app.listen(4000, ()=> console.log('Server running on port 4000'))
} catch (error) {
    console.log('Server errror: ' + error)
}