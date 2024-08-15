import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={s.item}>
      <div className={s.info}>
        <div className={s.name}>
          <FaUser className={s.icon} />
          {contact.name}
        </div>
        <div className={s.number}>
          <FaPhoneAlt className={s.icon} />
          {contact.number}
        </div>
      </div>
      <button onClick={() => onDelete(contact.id)} className={s.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
