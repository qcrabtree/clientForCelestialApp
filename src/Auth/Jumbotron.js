import React from 'react';
import { Jumbotron } from 'reactstrap';

const JumbotronHeader = (props) => {
  return (
    <div className="Jumbo">
      <Jumbotron>
        <h1 className="JumbotronHeader">Celestial App</h1>
        
      </Jumbotron>
    </div>
  );
};

export default JumbotronHeader;