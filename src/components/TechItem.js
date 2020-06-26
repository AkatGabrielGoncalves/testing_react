import React from 'react';

function TechItem({ tech, onDelete }){
  return (
    <li >{tech}
      <button key={tech} onClick={onDelete}>Remover</button>
    </li>
  )
}

export default TechItem;
