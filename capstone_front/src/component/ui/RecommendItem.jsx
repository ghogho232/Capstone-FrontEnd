import React from 'react';

function RecommendItem(props) {
  const { id, htmlFor, src, alt, script, onChange } = props;

  return (
    <td>
      <li>
        <div className="works_main">
          <div className="works_container">
            <input 
              type="checkbox" 
              id={id} 
              onChange={() => onChange(script)} 
              value={script}
            />
            <label htmlFor={htmlFor}>
              <img src={src} alt={alt} />
            </label>
          </div>
          <p>{script}</p>
        </div>
      </li>
    </td>
  );
}

export default RecommendItem;
