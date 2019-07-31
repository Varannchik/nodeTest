const http = require("http");
const cars = require('./cars.json');
const carsArr=cars.cars.length;
const server = http.createServer((req, res)=>{
                    
    if(req.url===`/`){               
        res.writeHead(200,{"Content-Type":"text/html"}); 
        res.write("<h1 style='display:block; width:300px; margin:0 auto; padding: 10px 0; text-align:center;'>Sale cars!</h1>");
        for(let i=0; i<carsArr; i++){                
            let a=`${cars.cars[i].model}`
            res.write(`<a style="display:block; width:300px; margin:0 auto; padding: 10px 0; text-align:center;" href="http://localhost:3000/${i}">${a}</a>`);                
        };
        res.end();              
    };
                              
    for(let i=0; i<carsArr; i++){ 
        if(req.url===`/${i}`){                
            res.writeHead(200,{"Content-Type":"text/html"}); 
            res.end(`<div style="width:300px; margin:0 auto;" > <div style="width:300px;"><img src=${cars.cars[i].photo} alt="picture" style="width: 100%;" /></div>
                        <h1  style="width:300px; text-align:center;">${cars.cars[i].model}</h1>
                        <div  style="width:300px; text-align:center;">${cars.cars[i].price}</div>
                        <p style="width:300px; text-align:center;">${cars.cars[i].description}</p> </div>                               
                        `);                                             
        }
            
    }
    if(req.url<=0 && req.url>`${carsArr}`){        
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("<h1>404</h1>"); 
    }
});

const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log('listening on port 3000');
})
