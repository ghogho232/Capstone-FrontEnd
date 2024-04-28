import React from 'react';

function Item(props) {
  const { id, htmlFor, src, alt, script } = props;

  return (
    <td>
      <li>
        <div className="works_main">
          <div className="works_container">
            <input type="checkbox" id={id} />
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

export default Item;
