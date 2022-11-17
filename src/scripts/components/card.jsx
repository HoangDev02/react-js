import { Link } from "react-router-dom";
import Room from '../../img/detail-room2.jpg'
function Card({ sale, price, desc }) {
  return (
    <Link className="card">
      <div className="card-image" data-sale={sale}>
        <img src={Room} alt="" />
      </div>
      <div className="card-details">
        <p className="card-details-title">classic room</p>
        <ul className="quantity-bed">
          <li className="item-quantity-bed">
            <ion-icon name="bed-outline"></ion-icon>
            bed
          </li>
          <li className="item-quantity-bed">
            <ion-icon name="bed-outline"></ion-icon>
            bed
          </li>
          <li className="item-quantity-bed">
            <ion-icon name="bed-outline"></ion-icon>
            bed
          </li>
        </ul>
        <p className="card-details-desc">
          Basic Room Suite has a comfortable queen size or twin bed, a sitting
          area, separate...
        </p>
        <p className="btn">view more</p>
      </div>
      <span className="card-price">
        price : <span className="card-price-old">120$</span>-
        <span className="card-price-new">170$</span> / <span> day</span>
      </span>
    </Link>
  );
}

export default Card;
