import React from 'react';
import './butterfly.css'; // Make sure the CSS file path is correct

export const ButterflyPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        
          <div className="wave">
            <div className="butterfly">
              <div className="wings">
                <div className="fly"></div>
                <div className="fly"></div>
              </div>
              <div className="wings">
                <div className="fly"></div>
                <div className="fly"></div>
              </div>
            </div>
          </div>
        
      </body>
    </html>
  );
};

