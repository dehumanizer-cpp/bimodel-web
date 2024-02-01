// Yeni ECMAScript modül syntax
import router from './routes/pageRoute.js'; // Dosya uzantısını kontrol ederek kullanın
import express from 'express';
import path from 'path';


const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.use(express.static(path.join('src'))) //main path beginning
app.set('views', path.join('views'));

app.use('/', router);
app.use('/contact', router);
app.use('/bim-model', router);
app.use('/cad-manufacturing', router);
app.use('/software-developing', router);


app.listen(port, () =>{
    console.log(`App listening on port ${port}!`);
});