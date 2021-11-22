import "./testimonial.scss";
import face1 from "../../assets/images/face1.jpg";
import face2 from "../../assets/images/face2.jfif";
import face3 from "../../assets/images/face3.jpg";
export default function Testimonial() {
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="Container">
        <div className="card">
          <div className="top">
            <img src={face1} className="left" alt="" />
            <div className="icon">
              <i className=" yutube fa-brands fa-youtube"></i>
              <i className=" facebook fa-brands fa-facebook-square"></i>
              <i className=" twitter fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              deleniti
            </p>
          </div>
          <div className="bottom">
            <h3>ArslonBek</h3>
            <h4>Web Developer</h4>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <img src={face3} className="left" alt="" />
            <div className="icon">
              <i className=" yutube fa-brands fa-youtube"></i>
              <i className=" facebook fa-brands fa-facebook-square"></i>
              <i className=" twitter fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              deleniti
            </p>
          </div>
          <div className="bottom">
            <h3>Maftuna </h3>
            <h4>Grafik Design</h4>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <img src={face2} className="left" alt="" />
            <div className="icon">
              <i className=" yutube fa-brands fa-youtube"></i>
              <i className=" facebook fa-brands fa-facebook-square"></i>
              <i className=" twitter fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              deleniti
            </p>
          </div>
          <div className="bottom">
            <h3>DavronBek</h3>
            <h4>Mobile Developer</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
