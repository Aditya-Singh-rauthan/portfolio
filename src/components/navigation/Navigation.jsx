import React, { useState } from "react";
import "./Navigation.css";
import { BiHome } from "react-icons/bi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { RiContactsBookUploadLine, RiFeedbackLine } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
const Navigation = () => {
  const [selected, setSelected] = useState("");
  return (
    <nav>
      <a
        href="#home"
        className={selected === "home" ? "active" : ""}
        onClick={(e) => setSelected("home")}
        title="Home"
      >
        <BiHome />
      </a>
      <a
        href="#about"
        className={selected === "about" ? "active" : ""}
        onClick={(e) => setSelected("about")}
        title="Home"
      >
        <BsFillInfoSquareFill />
      </a>
      <a
        href="#contact"
        className={selected === "contact" ? "active" : ""}
        onClick={(e) => setSelected("contact")}
        title="Home"
      >
        <RiContactsBookUploadLine />
      </a>
      <a
        href="#experience"
        className={selected === "experience" ? "active" : ""}
        onClick={(e) => setSelected("experience")}
        title="Home"
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#testimonials"
        className={selected === "testimonials" ? "active" : ""}
        onClick={(e) => setSelected("testimonials")}
        title="Home"
      >
        <RiFeedbackLine />
      </a>
    </nav>
  );
};

export default Navigation;
