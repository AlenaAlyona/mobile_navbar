import "./swiper.css";

function Swiper() {
  return (
    <div class="swiper-wrapper">
      <div class="swiper">
        <div class="item" title="Everyday">
          <div class="item-inner one"></div>
        </div>
        <div class="item" title="Sports">
          <div class="item-inner two"></div>
        </div>
        <div class="item" title="Skiing">
          <div class="item-inner three"></div>
        </div>
        <div class="item" title="Travel">
          <div class="item-inner four"></div>
        </div>
        <div class="item" title="Recovery">
          <div class="item-inner five"></div>
        </div>
        <div class="item" title="Hiking">
          <div class="item-inner six"></div>
        </div>
        <div class="item" title="Medical">
          <div class="item-inner seven"></div>
        </div>
      </div>
    </div>
  );
}

export default Swiper;
