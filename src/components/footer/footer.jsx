import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto gap-20 flex flex-col  justify-center items-center py-8">
    <div className="mb-4 md:mb-0 md:mr-8">
      <ul className="flex flex-wrap">
        <li className="mr-4 mb-2">Tilda.cc</li>
        <li className="mr-4 mb-2">Help Center</li>
        <li className="mr-4 mb-2">Video Tutorials</li>
        <li className="mb-2">Blogs</li>
      </ul>
    </div>
    <div className="mb-4 md:mb-0 md:mr-8 flex items-center gap-4">
      <div className="w-6 h-6 bg-black grid rounded-full place-items-center">
        <FontAwesomeIcon icon={faInstagram} className="text-white " />
      </div>{" "}
      <div className="w-6 h-6 bg-black grid rounded-full place-items-center">
        <FontAwesomeIcon icon={faYoutube} className="text-white " />
      </div>{" "}
      <div className="w-6 h-6 bg-black grid rounded-full place-items-center">
        <FontAwesomeIcon icon={faFacebook} className="text-white " />
      </div>{" "}
      <div className="w-6 h-6 bg-black grid rounded-full place-items-center">
        <FontAwesomeIcon icon={faTwitter} className="text-white " />
      </div>
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="mb-8 md:mb-0 max-w-xs  md:max-w-[400px] md:mr-8">
        <h1 className="text-lg md:text-xl font-bold mb-2">Report Abuse</h1>
        <p className="text-sm md:text-base">
          If you believe that any website made on Tilda is violating your
          rights, file a complaint by filling out this{" "}
          <Link className="text-[#dc2626]" to="/">
            Form
          </Link>
        </p>
      </div>
      <div className="mb-8 md:mb-0 max-w-xs md:max-w-[400px] md:mr-8">
        <h1 className="text-xl md:text-xl font-bold mb-2">
          How to contact our support
        </h1>
        <p className="text-sm md:text-base">
          To find out more about the platform features, use the feedback form
          in your Tilda account, or contact us via email.{" "}
          <Link
            className="text-[#dc2626]"
            to="mailto:team@tilda.cc"
          >
            team@tilda.cc
          </Link>
        </p>
      </div>
      <div className="max-w-xs md:max-w-[400px]">
        <h1 className="text-base md:text-lg font-bold mb-2">
          Accounting docs
        </h1>
        <p className="text-sm md:text-base">
          To get the supporting documentation and proof of payment, send your
          request to{" "}
          <Link
            className="text-[#dc2626]"
            to="mailto:docs@tilda.cc"
          >
            docs@tilda.cc
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Footer;
