import Image from "next/image";
import One from "@/public/images/icon/section-title.png";
import Two from "@/public/images/process/process-arry.png";
import Three from "@/public/images/process/process-image1.png";
import Four from "@/public/images/process/process-image2.png";
import Five from "@/public/images/process/process-image3.png";

const Process = () => {
  return (
    <section className="process-area pt-120 pb-120">
      <div className="container">
        <div className="section-header text-center mb-60">
          <h5
            className=""
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <Image className="me-1" src={One} alt="icon" priority />
            Work Process
          </h5>
          <h2
            className=""
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Our Development Process
          </h2>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-4 "
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <div className="process__item mb-100">
              <div className="process-arry bobble__animation">
                <Image src={Two} alt="arry-icon" />
              </div>
              <div className="process__image">
                <Image src={Three} alt="Image" priority />
                <span className="process-number">1</span>
              </div>
              <div className="process__content">
                <h4 className="mt-25 mb-10">Define Requirements</h4>
                <p>
                We define requirements as the essential specifications and criteria that outline the functionality, features, and constraints necessary for a successful software project, guiding its development process from inception to completion.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="process__item mb-100">
              <div className="process-arry bobble__animation">
                <Image src={Two} alt="arry-icon" />
              </div>
              <div className="process__image">
                <Image src={Four} alt="Image" priority />
                <span className="process-number">2</span>
              </div>
              <div className="process__content">
                <h4 className="mt-25 mb-10">Design & Prototyping</h4>
                <p>
                Design and prototyping encompass the crucial phases of visualizing and refining concepts into tangible, interactive representations, laying the groundwork for the development of user-centric and innovative software solutions.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="process__item">
              <div className="process__image">
                <Image src={Five} alt="Image" priority />
                <span className="process-number">3</span>
              </div>
              <div className="process__content">
                <h4 className="mt-25 mb-10">Final Solution</h4>
                <p>
                The final solution represents the culmination of meticulous planning, innovative design, and expert development, delivering a robust and tailored software product that meets the unique needs of our clients and drives their success in todays competitive market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
