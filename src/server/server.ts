import * as express from 'express';
export let app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/../mutual'));

app.listen(app.get('port'), () => {
    console.log(`Listening on port [${app.get('port')}]`);
});
