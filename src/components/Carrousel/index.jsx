import Carousel from "react-bootstrap/Carousel";

const styles = {
  caption: {
    color: "white",
    textShadow: "3px 2px #000",
  },
};

function CarouselFadeExample() {
  return (
    <Carousel fade className="p-1">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Assets/carrousel_2.png"
          alt="First slide"
          style={{ height: "250px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3 style={styles.caption}>
            Equipa tu moto con los mejores repuestos
          </h3>
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
          <h3 style={styles.caption}>
            Manten tu moto en óptimas condiciones en nuestro taller
          </h3>
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
          <h3 style={styles.caption}>Lo que necesitas en un solo lugar</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
