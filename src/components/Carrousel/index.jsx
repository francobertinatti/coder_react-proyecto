import Carousel from "react-bootstrap/Carousel";

const styles = {
  caption: {
    color: "white",
    textShadow: "1px 1px #000",
  },
};

function CarouselFadeExample() {
  return (
    <Carousel fade className="p-2">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Assets/carrousel_2.png"
          alt="First slide"
          style={{ height: "250px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3 style={styles.caption}>First slide label</h3>
          <p style={styles.caption}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Assets/carrousel_3.png"
          alt="Second slide"
          style={{ height: "250px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3 style={styles.caption}>First slide label</h3>
          <p style={styles.caption}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Assets/carrousel_4.png"
          alt="Third slide"
          style={{ height: "250px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3 style={styles.caption}>First slide label</h3>
          <p style={styles.caption}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
