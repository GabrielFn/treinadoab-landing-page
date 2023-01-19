class Carousel {
  constructor(carouselContainer) {
    this.carousel = document.querySelector(carouselContainer);

    this.width = this.carousel.offsetWidth;
    this.index = 0;

    window.addEventListener("resize", this.resizeEvent.bind(this));
  }

  resizeEvent() {
    const next = this.carousel.querySelector('.next');
    const prev = this.carousel.querySelector('.prev');
    const track = this.carousel.querySelector('.track');

    this.width = this.carousel.offsetWidth;
    this.index = 0;

    track.style.transform = "translateX(0px)";
    next.classList.remove("hide");
    prev.classList.remove("show");
  }

  prev() {
    const next = this.carousel.querySelector('.next');
    const prev = this.carousel.querySelector('.prev');
    const track = this.carousel.querySelector('.track');

    this.index = this.index - 1;

    next.classList.remove("hide");

    if (this.index === 0) {
      prev.classList.remove("show");
    }

    track.style.transform = "translateX(" + this.index * -this.width + "px)";
  };

  next() {
    const condition = (this.index + 1) * this.width;

    const prev = this.carousel.querySelector('.prev');
    const next = this.carousel.querySelector('.next');
    const track = this.carousel.querySelector('.track');

    this.index = this.index + 1;
    prev.classList.add("show");
    track.style.transform = "translateX(" + this.index * -this.width + "px)";

    if (track.scrollWidth - track.offsetWidth < condition) {
      next.classList.add("hide");
    }
  };
};
