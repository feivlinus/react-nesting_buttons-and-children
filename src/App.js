import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Bla</Button>
      <Button>Bli</Button>
      <Button>Blup</Button>
      <Button>Hello</Button>
      <Button>React me</Button>
    </main>
  );
}

function Button(prob) {
  return (
    <button className="button" type="button">
      {prob.children}
    </button>
  );
}
