import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./slider.scss";

function Slider() {
  const data = [
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  return (
    <Carousel fade className="curosel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data[0]}
          alt="First slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h1>DECOR YOUR DREAMS!</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="success">KNOW MORE</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data[1]}
          alt="Second slide"
          style={{ height: "500px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h1>FURNISHING CRAFTS!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="success">KNOW MORE</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data[2]}
          alt="Third slide"
          style={{ height: "500px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h1>DECOR YOUR DREAMS</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="success">KNOW MORE</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
