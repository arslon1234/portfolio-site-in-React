import "./works.scss";
import work1 from "../../assets/images/work2.jpg";
import work2 from "../../assets/images/work3.jpg";
import work3 from "../../assets/images/work4.jpg";
import {
  BrandingWatermark,
  MobiledataOff,
  PhoneAndroid,
} from "@mui/icons-material";
import { useState } from "react";
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      img: work1,
      icon: <PhoneAndroid />,
      title: "Web Developer",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet",
      project: "Project",
    },
    {
      id: 2,
      img: work2,
      icon: <MobiledataOff />,
      title: "Mobile Data",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet",
      project: "Project",
    },
    {
      id: 3,
      img: work3,
      icon: <BrandingWatermark />,
      title: "Branding",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet",
      project: "Project",
    },
  ];
  function handleClick(way) {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="iconContainer">{item.icon}</div>
                  <h2>{item.title}</h2>
                  <p>{item.p}</p>
                  <span>{item.project}</span>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <i class="left fa-solid fa-angle-left" onClick={() => handleClick()}></i>
      <i
        class="right fa-solid fa-angle-right"
        onClick={() => handleClick("left")}
      ></i>
    </div>
  );
}
