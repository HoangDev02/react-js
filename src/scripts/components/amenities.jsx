import { Fragment } from "react";

function Amenities({ icon }) {
  const array = new Array(6).fill(1);
  return (
    <section className="description-item-group">
      <p className="amenities-heading">
        <img src={icon} alt="" />
        Amenities
      </p>
      <ul className="list-amenities">
        {array.map((item, index) => (
          <Fragment key={index}>
            <li className="amenities-item">
              <ion-icon name="chevron-forward-outline"></ion-icon>3 Sets of
              nightwear
            </li>
          </Fragment>
        ))}
      </ul>
    </section>
  );
}

export default Amenities;
