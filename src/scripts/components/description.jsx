import Amenities from "./amenities";
import Icon1 from "../../icons/ring.png";
import Icon2 from "../../icons/staff.png";

function Description() {
  return (
    <section className="description-wrapper">
      <section className="description-item">
        <strong>
          Suspendisse vel gravida nulla. Fusce sagittis posuere ante, at dapibus
          odio ullamcorper ut. Fusce sagittis, purus in porta faucibus, arcu
          odio interdum tellus, in consectetur dolor massa non eros.
        </strong>
        <p>
          Suspendisse vel gravida nulla. Fusce sagittis posuere ante, at dapibus
          odio ullamcorper ut. Fusce sagittis, purus in porta faucibus, arcu
          odio interdum tellus, in consectetur dolor massa non eros. Fusce
          consectetur ac lectus vitae placerat. Duis vitae tempus orci.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Phasellus mi urna, sodales in quam ac, blandit
          blandit massa. Curabitur suscipit, massa id hendrerit pulvinar, augue
          purus malesuada ex, a laoreet sapien massa id dolor.
        </p>

        <p>
          Suspendisse vel gravida nulla. Fusce sagittis posuere ante, at dapibus
          odio ullamcorper ut. Fusce sagittis, purus in porta faucibus, arcu
          odio interdum tellus, in consectetur dolor massa non eros. Fusce
          consectetur ac lectus vitae placerat. Duis vitae tempus orci.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Phasellus mi urna, sodales in quam ac, blandit
          blandit massa. Curabitur suscipit, massa id hendrerit pulvinar, augue
          purus malesuada ex, a laoreet sapien massa id dolor.
        </p>
      </section>
      <section className="description-item">
        <Amenities icon={Icon1} />
        <Amenities icon={Icon2} />
      </section>
    </section>
  );
}

export default Description;
