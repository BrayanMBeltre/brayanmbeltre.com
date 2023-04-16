import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    name: "Mike Anderson",
    img: "/images/testimonials/4.jpg",
    profession: "Vivaco Studio",
    details:
      "I rarely like to write reviews, but the Marketify team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism. Many thanks once again for everything and hope that I get to deal with you again in the near future.",
  },
  {
    name: "Keita Smith",
    img: "/images/testimonials/3.jpg",
    profession: "ABC Group",
    details:
      "Really the Code Quality, Customer Support, and design are awesome and its good support they are giving. They give an instant solution to our needs. Really awesome. I will strongly recommend to my friends. Simply amazing team and amazing theme! Thank you from United States of America!",
  },
  {
    name: "Alan Walker",
    img: "/images/testimonials/6.jpg",
    profession: "Web Designer",
    details:
      "Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding but the Marketify team helped me to launch my resume website successfully. Much recommended!",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  };

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_testimonials">
        <div className="list_wrapper">
          <div className="total">
            <div className="in">
              <Slider
                {...settings}
                className="padding-slider"
                appendDots={(dots) => (
                  <div
                    style={{
                      gap: "40px",
                      borderRadius: "10px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ul
                      style={{
                        margin: "0px",
                        gap: "20px",
                        display: "flex",
                      }}
                    >
                      {dots}
                    </ul>
                  </div>
                )}
              >
                {testimonialsData &&
                  testimonialsData.map((data, i) => (
                    <div key={i}>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          width="200px"
                          height="200px"
                          viewBox="796 698 200 200"
                          enableBackground="new 796 698 200 200"
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z" />
                            <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z" />
                          </g>
                        </svg>
                      </div>
                      <div className="text">
                        <p>{data.details}</p>
                      </div>
                      <div className="short">
                        <div className="detail">
                          <h3>{data.name}</h3>
                          <span>{data.profession}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
              <div className="owl-dots"></div>
            </div>
            <div className="left_details">
              <span className="circle green animPulse" />
              <span className="circle yellow animPulse" />
              <span className="circle border animPulse" />
            </div>
            <div className="right_details">
              <span className="circle yellow animPulse" />
              <span className="circle purple animPulse" />
              <span className="circle border animPulse" />
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
          <img src="images/testimonials/brush.png" alt="brush" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
