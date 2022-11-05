import React from 'react';
import ReactDOM from 'react-dom/client';
import 'devextreme/dist/css/dx.light.css';
import Button from 'devextreme-react/button';



 function btn1Click(){
   window.api.button1Click("You clicked Button 1");
 }

function btn2Click(){
   window.api.button2Click("You clicked Button 2");
}
function btn3Click(){
  window.api.button3Click("You Clicked Button 3");
}


function App() {
  return (

    <div>
        <Button
                text="Button 1"
                onClick={btn1Click}
            />
        <Button
                text="Button 2"
                onClick={btn2Click}
            />
             <Button
                text="Button 3"
                onClick={btn3Click}
            />
   
   

        </div>



  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <App />

);
