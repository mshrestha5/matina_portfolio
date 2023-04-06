import React from "react";
import "./testimonials.css";
import A1 from "../../assets/a1.jfif";
import A2 from "../../assets/a2.jfif";
import A3 from "../../assets/a3.jfif";
import A4 from "../../assets/a4.jfif";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

const data = [
  {
    avatar: A1,
    name: "Haley Tyson",
    title:
      "Director of Center for Career and Professional Development, Lamar University",
    review:
      "Matina worked in our office as a Testing Proctor during her graduate studies. She was consistently willing to learn and take on new challenges in the office when presented to her. Matina was welcoming to testing candidates and students while providing a quality customer service experience. Additionally, she was dependable and reliable which is critical when working in a testing environment. I would very much recommend Matina for any position as I believe she will be a valuable team member and adapt quickly.",
  },

  {
    avatar: A2,
    name: "Milan Shrestha",
    title: "Project Manager, Cloudfactory",
    review:
      "I had the pleasure of working on a project with Matina for almost a year, which was very demanding due to its frequently changing use case. She is very quick-witted and always eager to learn new things as reflected by her ability to understand and adapt to the challenging requirements and changes of the project. She works well with the team and works hard while collaborating with everyone so that the entire team can succeed and improve.I strongly recommend Matina for any future career opportunities and have total confidence that she will go above and beyond expectations.",
  },

  {
    avatar: A3,
    name: "Anna Piasek",
    title: "People & operations Manager, Algorizin",
    review:
      "You’ll absolutely love working with Matina. It’s easy and motivating to work with someone who is self-motivated and self-driven, who is willing to learn and improve every step of the way, and who also brings joy and a kind approach to the team. It’s an incredibly powerful and rare combination. Even though, new challenges continuously arrive Matina faces them with enthusiasm and dedication. She puts her heart into projects and assignments and never loses her sight of the main goal. Being in the software development field requires being flexible, open, and persistent fast-learner - Matina is all of that.I can assure you that Matina’s international background, diverse mindset, and work ethic will be an amazing asset to any work environment.",
  },

  {
    avatar: A4,
    name: "Sejuti banik",
    title: "Software developer, Algorizin",
    review:
      "Matina is a responsible, curious, and hardworking member of Algorizin. She is also a team player and will work diligently to achieve her personal and team goals within deadlines. After joining Algorizin in just a few months, I have seen her develop different features both in front end and back end. She also comes forward after finishing her tasks to get more tasks to meet the sprint goal. She maintains good communication both with her peers and the lead developers to understand her tasks and shares her in depth knowledge to develop the product. She is a great asset to Algorizin Inc.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, title, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="c__avatar">
                <img src={avatar} alt="sth" />
              </div>
              <h5 className="c__name">{name}</h5>
              <h5 className="c__title">{title}</h5>
              <small className="c__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
