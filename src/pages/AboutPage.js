import { useState } from "react";

const AboutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const changeN = (e) => {
    setName(e.target.value);
  };
  const changeP = (e) => {
    setPhone(e.target.value);
  };
  const changeE = (e) => {
    setEmail(e.target.value);
  };

  async function submit(e) {
    e.preventDefault();
    const res = await fetch(
      "https://ecommerce-d4c39-default-rtdb.firebaseio.com/contactform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
        }),
      }
    );
  }

  return (
    <>
      <form style={{ marginTop: "100px" }}>
        <input placeholder="name" value={name} onChange={changeN}></input>
        <input placeholder="email" value={email} onChange={changeE}></input>
        <input
          placeholder="phone_number"
          value={phone}
          onChange={changeP}
        ></input>
        <button type="submit" onClick={submit}>
          submit
        </button>
      </form>
    </>
  );
};
export default AboutPage;
