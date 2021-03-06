import React from 'react';
import '../App.scss';


const TodoTemplate= ({ children }) => {
    return (
      <div className="TodoTemplate">
          <div className="app-title"></div>
          <div className="content">{children}</div>
      </div>
    );
  };
  
  export default TodoTemplate;