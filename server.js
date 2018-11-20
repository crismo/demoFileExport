const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static('public'));
app.use(bodyParser.json());
app.listen(app.get('port'), function () { console.log('server running', app.get('port'));});


app.get("/app/export/:id",function(req,res,next){

    // The following line represents all the work you would have to do to get the presentation from the database.
    let presentation = JSON.stringify({id:24,slides:[],description:"Lorem ipsum etc.."});

    res.set({
        'Content-Length': Buffer.byteLength(presentation, 'utf8'),
        'Content-Type': 'application/octet-stream;charset=UTF-8',
        'Content-Disposition': "attachment;name='export';filename='export.json'" // You can create better names for the export based on whats in the db
      });

     
      res.end(presentation,"utf8");

});