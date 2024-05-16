import React from 'react';

function Item(props) {
  const { id, htmlFor, src, alt, script } = props;
 //id로 prompt를 넘겨줄 수 있는지 확인.
  return (
    <td>
      <li>
        <div className="works_main">
          <div className="works_container">
            <input type="checkbox" id={id}  />
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
