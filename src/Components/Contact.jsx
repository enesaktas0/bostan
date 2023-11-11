import React from "react";
import "./CCSS/Contact.css";
import { HiMail } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";

export default function Contact() {
  return (
    <div className="contact">
      <div className="bostan-store">
        <img
          className="store-img"
          src="/bostan/src/Components/images/bostanStore.jpeg"
          alt="store-img"
        />
      </div>
      <div className="contact-info">
        <div className="contact-type">
          <HiMail className="icon" />
          <div className="info">
            <label>Email</label>
            <a href="mailto:bostandondurmacafe@gmail.com">
              bostandondurmacafe@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-type">
          <BiSolidPhone className="icon" />
          <div className="info">
            <label>Telefon Numarası</label>
            <a href="tel:+905347357756">0 (505) 070 53 07</a>
          </div>
        </div>
        <div className="contact-type">
          <MdLocationPin className="icon" />
          <div className="info">
            <label>Adres</label>
            <a>Merkez, Yunus Emre Cd. No:15 D:B, 06145 Pursaklar/Ankara</a>
          </div>
        </div>
      </div>
    </div>
  );
}
