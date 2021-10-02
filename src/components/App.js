import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    
    render() {
          const relative=[
              {name:"love",key:"relativeListItem1"},
              {name:"priya",key:"relativeListItem2"},
              {name:"shyam",key:"relativeListItem3"}
                  ];
        return(
            <div id="main">
               <ol id="relativeList">
                 {relative.map(relatives => {
                  return(
                    <li key={relatives.key}>{relatives.name}</li>
                    );
                     })}
               </ol>
            </div>
        )
    }
}


export default App;
