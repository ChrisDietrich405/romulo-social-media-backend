// const app = require('./src/app');
const app = require("./app")

const port = process.env.PORT || 3001;
 
const server = app.listen(port, () => {
    console.log(`App Express is running!`);
});