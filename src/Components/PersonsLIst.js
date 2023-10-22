import React from "react";
import "../App.css";
function PersonsLIst({ data, setData }) {
  const deleteItem = (itemToDelete) => {
    const updatedItems = data.filter((item) => item !== itemToDelete);
    setData(updatedItems);
  };

  const hoveringFunc = (itemToHover) => {
    const infor = data.map((item) => {
      if (item.id === itemToHover) {
        return {
          ...item,
          hovering: true,
        };
      }
      return item;
    });
    setData(infor);
  };

  const unhoveringFunc = (itemToHover) => {
    const infor = data.map((item) => {
      if (item.id === itemToHover) {
        return {
          ...item,
          hovering: false,
        };
      }
      return item;
    });
    setData(infor);
  };

  return (
    <ul className="card-list">
      {data.map((item, index) => (
        <li
          key={index}
          className={item.hovering ? "hover card" : "card"}
          onMouseOver={() => hoveringFunc(item.id)}
          onMouseOut={() => unhoveringFunc(item.id)}
        >
          <div className="card-item">
            <div className="card-top">
              <div className="card-img__box"></div>
              <div className="card-name">
                <p className="name">{item.name}</p>
                <p className="fullName">{item.fullName}</p>
              </div>
            </div>
            <ul className="user-info__list">
              <li className="user-info__item">
                <h1>Company</h1>
                <h2 className="Company">{item.company}</h2>
              </li>
              <li className="user-info__item">
                <h1>Email</h1>
                <h2 className="Company">{item.email}</h2>
              </li>
              <li className="user-info__item">
                <h1>Phone</h1>
                <h2 className="Company">{item.phone}</h2>
              </li>
              <li className="user-info__item">
                <h1>Website</h1>
                <h2 className="Company">{item.website}</h2>
              </li>
            </ul>
          </div>
          <div className="button-box">
            <button onClick={() => deleteItem(item)} className="delete-button">
              Delete Me
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PersonsLIst;
