import { useState } from "react";
import axios from "axios";
import classes from "./AboutPage.module.css";
const AboutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const changeN = (e) => {
    setName(e.target.value);
  };
  const changeP = (e) => {
    setPhone(e.target.value);
  };
  const changeE = (e) => {
    setEmail(e.target.value);
  };
  const changeT = (e) => {
    setText(e.target.value);
  };

  async function submit(e) {
    e.preventDefault();
    const res = await axios.post(
      "https://ecommerce-d4c39-default-rtdb.firebaseio.com/contactform.json",
      {
        name: name,
        email: email,
        phone: phone,
        text: text,
      }
    );
    alert("sent");
    setEmail("");
    setName("");
    setPhone("");
    setText("");
  }

  return (
    <>
      <form className={classes.form}>
        <input
          className={classes.input}
          placeholder="name"
          value={name}
          onChange={changeN}
        ></input>
        <input
          className={classes.input}
          placeholder="email"
          value={email}
          onChange={changeE}
        ></input>
        <input
          className={classes.input}
          placeholder="phone_number"
          value={phone}
          onChange={changeP}
        ></input>
        <input
          className={classes.text}
          placeholder="text"
          value={text}
          onChange={changeT}
        ></input>
        <button className={classes.button} type="submit" onClick={submit}>
          submit
        </button>
      </form>
    </>
  );
};
export default AboutPage;
