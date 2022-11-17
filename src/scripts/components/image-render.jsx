import DtRom1 from "../../img/detail-room1.jpg";
import DtRom2 from "../../img/detail-room2.jpg";

function ImageRender() {
  return (
    <section className="image-render">
      <ul className="images">
        <li className="item-image">
          <img src={DtRom1} alt="" />
        </li>
        <li className="item-image">
          <img src={DtRom2} alt="" />
        </li>
        <li className="item-image">
          <img src={DtRom1} alt="" />
        </li>
      </ul>
    </section>
  );
}

export default ImageRender;
