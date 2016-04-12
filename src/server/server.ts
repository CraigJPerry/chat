import * as express from 'express';
export let app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

let server = app.listen(app.get('port'), () => {
    console.log(`Listening on port [${app.get('port')}]`);
});
