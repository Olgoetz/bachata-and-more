import React from "react";

function Testimonials() {
  return (
    <div id="bachata" className="py-16 bg-bm-secondary/10">
      <div className="container px-4 mx-auto">
        <h2 className="text-5xl text-bm-main font-bold">Stimmen</h2>

        <div className="carousel max-w-[800px] py-10">
          <div
            id="slide1"
            className="carousel-item relative flex justify-between items-center w-full"
          >
            <blockquote className="text-xl px-20 text-center italic font-semibold text-black ">
              <p>
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
