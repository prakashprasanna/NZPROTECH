"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import One from "@/public/images/service/service-single-image1.jpg";
import Two from "@/public/images/service/service-single-image2.jpg";

const ServiceSingle = () => {
  const [imgTab, setImgTab] = useState(0);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="service-single-area pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="service-single__left-item">
                <div className="image mb-50">
                  <Image src={One} alt="Image" priority />
                  {/* <div className="service-single__video-btn">
                    <div
                      className="video-btn video-pulse "
                      data-aos="zoom-in"
                      data-aos-delay="200"
                      data-aos-duration="1500"
                    >
                      <a className="video-popup" onClick={() => setOpen(true)}>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
                <h3 className="title mb-30">IT Management</h3>
                <p className="mb-20">
                Our team specializes in IT management, which involves overseeing and optimizing an organizations technology resources and systems to ensure they align with business objectives. This encompasses managing hardware, software, networks, and data, while also ensuring robust security measures are in place to protect against cyber threats. 
                </p>
                <p>
                Our IT management services include maintaining and upgrading technology infrastructure, providing technical support to users, managing IT budgets, and implementing new technologies to drive innovation. By effectively managing IT resources, our team enhances operational efficiency, supports business growth, and ensures the seamless functioning of all technological aspects within the organization.
                </p>
                <div className="row g-5 mt-40 mb-40 align-items-center">
                  <div className="col-lg-5">
                    <h4 className="mb-20">Benefits With Our Service</h4>
                    <ul>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>Technology
                        Consultancy
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>Maintenance And
                        Support
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>We Provide best
                        services
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>Requirements
                        Gathering
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>Business Growth
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-7">
                    <div className="image">
                      <Image src={Two} alt="Image" priority />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="service-single__right-item">
                <div className="item sub-bg mb-30">
                  <h4 className="mb-20">All Services</h4>
                  <ul className="category service-category">
                    <li>
                      <Link href="/">Database Security</Link>{" "}
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                    <li>
                      <Link href="/">IT Consultancy</Link>{" "}
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                    <li className="active">
                      <Link href="/">App Development</Link>{" "}
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                    <li>
                      <Link href="/">UI/UX Design</Link>{" "}
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                    <li>
                      <Link href="/">Cyber Security</Link>{" "}
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                  </ul>
                </div>
                {/* <div className="item sub-bg mb-30">
                  <h4 className="mb-20">Opening Hours</h4>
                  <ul className="category">
                    <li className="secondary-color justify-content-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                          fill="#3C72FC"
                        />
                        <path
                          d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      Mon - Sat: 10.00 AM - 4.00 PM
                    </li>
                    <li className="secondary-color justify-content-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                          fill="#3C72FC"
                        />
                        <path
                          d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      Sun: 09.00 AM - 4.00 PM
                    </li>
                    <li className="secondary-color justify-content-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                          fill="#3C72FC"
                        />
                        <path
                          d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      Friday: Closed
                    </li>
                    <li className="secondary-color justify-content-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                          fill="#3C72FC"
                        />
                        <path
                          d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      Emergency: 24 hours
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="iVqz_4M5mA0"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default ServiceSingle;
