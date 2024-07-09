"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/service-bg-shape.png";
import Two from "@/public/images/icon/section-title.png";
import Three from "@/public/images/shape/service-item-shape.png";
import Four from "@/public/images/icon/service-icon1.png";
import Five from "@/public/images/icon/service-icon4.png";
import Six from "@/public/images/icon/service-icon3.png";
import Seven from "@/public/images/icon/service-icon5.png";
import Eight from "@/public/images/icon/service-icon2.png";
import Nine from "@/public/images/icon/about-three-icon3.png";
import Ten from "@/public/images/icon/mobile-development.png";


const Service = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(1);

  return (
    <section className="service-area pt-120 pb-120" id="service-section">
      <div className="service__shape " data-aos="fade-right">
        <Image className="sway_Y__animation" src={One} alt="shape" priority />
      </div>
      <div className="container">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
          <div className="section-header">
            <h5
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1500"
            >
              <Image className="me-1" src={Two} alt="icon" priority />
              What We OFFER
            </h5>
            <h2
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              Excellent It Services
            </h2>
          </div>
          <Link
            href="service"
            className="btn-one "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            View All Services <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
        <div className="row g-4">
          {/* <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 0 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(0)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Four} alt="icon" priority />
              </div>
              <h4>
                <Link href="service-details">IT Management</Link>
              </h4>
              <p>
                Pellentesque nec the condimentum nec lorem nulla augue est
                ultricies ac iaculis ut euismod quis sapien.
              </p>
            </div>
          </div> */}
          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 1 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(1)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Five} alt="icon" priority />
              </div>
              <h4>
                <Link href="service-details">iOS & Android App Development</Link>
              </h4>
              <p>
              Our App team pioneers mobile app development for iOS and Android. Our agile approach ensures tailored solutions, leveraging cutting-edge tech for seamless user experiences. Lets shape your vision into impactful apps together.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 2 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(2)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Six} alt="icon" priority />
              </div>
              <h4>
                <Link href="service-details">Web Development</Link>
              </h4>
              <p>
              Our Web team excels in crafting exceptional websites. With a blend of creativity and technical prowess, we deliver tailored solutions that captivate audiences and drive results. Lets build your online success story together.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 2 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(2)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Seven} alt="icon" priority />
              </div>
              <h4>
                <Link href="service-details">AI Chatbots</Link>
              </h4>
              <p>
              AI chatbots converse with users via text or speech. They offer 24/7 support, scalability, and efficiency to enhance customer experiences and streamline operations. Overall, they are valuable tools for businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 1 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(1)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Eight} alt="icon" priority />
              </div>
              <h4>
                <Link href="service-details">Cyber Security</Link>
              </h4>
              <p>
              Our Cyber security team will make sure to protect computer systems, networks, and data from unauthorized access, theft, and damage. It involves using practices and technologies to defend against cyber threats like hacking, malware, and phishing, ensuring the confidentiality, integrity, and availability of information.              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 2 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(2)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Nine} alt="icon" priority />
              </div>
              <h4>
                <Link href="service-details">Project Management</Link>
              </h4>
              <p>
              Our team specializes in project management, which involves planning, organizing, and overseeing projects to ensure they are completed on time, within budget, and to the desired quality. We coordinate resources, manage risks, and facilitate communication to achieve project goals efficiently.              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 2 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(2)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Ten} alt="icon" priority />
              </div>
              <h4>
                <Link href="service-details">UI/UX Design</Link>
              </h4>
              <p>
              Our team specializes in UI/UX design, creating intuitive and visually appealing interfaces that enhance user experience. We focus on understanding user needs, crafting seamless interactions, and designing attractive layouts to ensure users can easily navigate and enjoy digital products.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
