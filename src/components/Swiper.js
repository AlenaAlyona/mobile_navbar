import "./swiper.css";

function Swiper() {
  return (
    <div className="swiper-wrapper">
      <div className="swiper">
        <div className="item" title="Everyday">
          <div className="gradient"></div>
          <div className="item-inner one"></div>
        </div>
        <div className="item" title="Sports">
          <div className="gradient"></div>
          <div className="item-inner two"></div>
        </div>
        <div className="item" title="Skiing">
          <div className="gradient"></div>
          <div className="item-inner three"></div>
        </div>
        <div className="item" title="Travel">
          <div className="gradient"></div>
          <div className="item-inner four"></div>
        </div>
        <div className="item" title="Recovery">
          <div className="gradient"></div>
          <div className="item-inner five"></div>
        </div>
        <div className="item" title="Hiking">
          <div className="gradient"></div>
          <div className="item-inner six"></div>
        </div>
        <div className="item" title="Medical">
          <div className="gradient"></div>
          <div className="item-inner seven"></div>
        </div>
      </div>
    </div>
  );
}

export default Swiper;
