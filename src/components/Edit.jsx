import React from "react";

function Edit({ value, setValue }) {
  console.log(value)
  return (
    <>
      <section className="text_div">
       

        <textarea value={value} rows="9" cols="90" onChange={(e)=>setValue(e.target.value)} placeholder='# Hello, *world*!'></textarea>
      </section>
    </>
  );
}

export default Edit;
