# pdfkit-woff-bug

Simple node app that demonstrates error in [PDFKit](https://github.com/devongovett/pdfkit)/[FontKit](https://github.com/devongovett/fontkit) when trying to embed a woff2 font. 

## Install
```
npm install
```

## Run
```
npm start
```

Produces the following error:
```
bash-3.2$ node index                                                                                                                                                      
                                                                                                                                                                          
TypeError: Cannot read property 'length' of undefined                                                                                                                     
    at WOFF2Glyph._getContours (/node_modules/pdfkit/node_modules/fontkit/index.js:9464:33)                  
    at WOFF2Glyph._getPath (/node_modules/pdfkit/node_modules/fontkit/index.js:9499:27)                      
    at WOFF2Glyph.get (/node_modules/pdfkit/node_modules/fontkit/index.js:9067:19)                           
    at WOFF2Glyph.descriptor.get (/node_modules/pdfkit/node_modules/fontkit/index.js:92:21)                  
    at WOFF2Glyph._getCBox (/node_modules/pdfkit/node_modules/fontkit/index.js:11955:18)                     
    at WOFF2Glyph._getMetrics (/node_modules/pdfkit/node_modules/fontkit/index.js:9482:23)                   
    at WOFF2Glyph.get (/node_modules/pdfkit/node_modules/fontkit/index.js:9078:19)                           
    at WOFF2Glyph.descriptor.get (/node_modules/pdfkit/node_modules/fontkit/index.js:92:21)                  
    at new EmbeddedFont (/node_modules/pdfkit/js/font/embedded.js:23:43)                                     
    at Function.PDFFont.open (/node_modules/pdfkit/js/font.js:25:14) 
```