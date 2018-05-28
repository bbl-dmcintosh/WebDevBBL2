import * as fs from 'fs';
import * as parse from 'csv-parse';

var csvData = [];

fs.createReadStream('./data/my.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        csvData.push(csvrow);        
    })
    .on('end',function() {
      
        displayLines();

    });

    function displayLines(){

        csvData.forEach(function(data, index){

            if(index > 0){
                console.log("Total order for " + 
                data[0] + " is BZD $" +
                parseFloat(data[2]) + " , Salex Tax BZD $" + (0.125 * parseFloat(data[2])).toFixed(2)); 
            }       
 
      });
        
    }

