import './App.css';
import Slider from "react-slick";
import mypic from './assets/images/elmahdibenbrahim.jpg'

function App() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="App">
      <Slider {...settings}>
        <div>
          <img width="50" height="50" className="card-img-top" src={ mypic } alt="profile" />
        </div>
        <div>
          <img width="50" height="50" className="card-img-top" src={ mypic } alt="profile" />
        </div>
        <div>
          <img width="50" height="50" className="card-img-top" src={ mypic } alt="profile" />
        </div>
        <div>
          <img width="50" height="50" className="card-img-top" src={ mypic } alt="profile" />
        </div>
      </Slider>
    </div >
  );
}

export default App;
