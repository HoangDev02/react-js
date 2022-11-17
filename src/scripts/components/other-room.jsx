import Card from "./card";

function OtherRoom() {
  return (
    <section className="other-room-wrapper container-sm">
      <h2 className="other-heading">other rooms</h2>
      <p className="other-detail">you may also like other rooms</p>
      <ul className="other-products">
        <Card sale="Sale 8.33%" />
        <Card sale="Sale 8.33%" />
        <Card sale="Sale 8.33%" />
      </ul>
    </section>
  );
}

export default OtherRoom;
