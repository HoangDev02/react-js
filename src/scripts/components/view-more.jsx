import { Link, NavLink, Routes, Route, useLocation } from "react-router-dom";
import { Fragment, useCallback, useState } from "react";
import Description from "./description";
import Additional from "./additional";

function ViewMore() {
  const [hashs, setHashs] = useState([
    {
      hash: "",
      element: <Description />,
    },
    {
      hash: "#description",
      element: <Description />,
    },
    {
      hash: "#additional",
      element: <Additional count={2} />,
    },
    {
      hash: "#reviews",
      element: <Additional count={3} />,
    },
    {
      hash: "#plans",
      element: <Additional count={4} />,
    },
  ]);
  let location = useLocation();
  const checkHash = useCallback(
    (hash, returnTrue = "active", returnFalse = "") => {
      if (location.hash === hash) return returnTrue;
      return returnFalse;
    },
    [location]
  );
  return (
    <section className="view-more-wrapper container-sm">
      <section className="view-more-detail">
        <nav className="view-more-navigation">
          <Link
            to="#description"
            className={`item-view-more-navigation ${
              checkHash("#description") || checkHash("")
            }`}
          >
            description
          </Link>
          <Link
            to="#additional"
            className={`item-view-more-navigation  ${checkHash("#additional")}`}
          >
            additional
          </Link>
          <Link
            to="#reviews"
            className={`item-view-more-navigation ${checkHash("#reviews")}`}
          >
            reviews(0)
          </Link>
          <Link
            to="#plans"
            className={`item-view-more-navigation  ${checkHash("#plans")}`}
          >
            pricing plans
          </Link>
        </nav>
        <section className="details">
          {hashs.map((item, index) => {
            return (
              <Fragment key={index}>
                {checkHash(item.hash, item.element, <></>)}
              </Fragment>
            );
          })}
        </section>
      </section>
      <section className="book-now">
        <section className="book-now-wrapper">
          <p className="book-now-price">
            price: <span>200$ / Day</span>
          </p>
          <button className="btn btn-primary">book now</button>
          <ul className="list-room-type">
            <li className="room-type">
              <p>
                Room Type : <span>King Bed</span>
              </p>
            </li>
            <li className="room-type">
              <p>
                Room Type : <span>King Bed</span>
              </p>
            </li>
            <li className="room-type">
              <p>
                Room Type : <span>King Bed</span>
              </p>
            </li>
            <li className="room-type">
              <p>
                Room Type : <span>King Bed</span>
              </p>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}

export default ViewMore;
