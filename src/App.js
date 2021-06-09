import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./styles.css";

export default function App() {
  const colors = [
    "#abcdef",
    "#fedcba",
    "#defabc",
    "#bcaefd",
    "#123abc",
    "#456def",
    "#321cba",
    "#FFAEBC",
    "#d8f1f4",
    "#edf324",
    "#aa1111",
    "#00ff00",
    "#ff040b",
    "#d9f2f5",
    "#def346",
    "#ba2262",
    "#010b13",
    "#d8f000",
    "#e00024",
    "#feafea"
  ];

  const [background, setBackground] = useState("#abcdef");
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrent(null);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [current]);

  return (
    <div className="App" style={{ background: background }}>
      {current !== null && <h1>Copied! {current}</h1>}
      <div className="container">
        {colors.map((color, index) => (
          <div className="card" key={index}>
            <div
              style={{
                background: color,
                filter: "brightness(85%)",
                boxShadow: color === background ? "0 0 5px #000" : ""
              }}
              className="box"
              onClick={() => setBackground(color)}
            />
            <CopyToClipboard text={`color: ${color};`}>
              <p
                style={{ color: color === background ? "#fff" : color }}
                onClick={() => setCurrent(color)}
              >
                {color}
              </p>
            </CopyToClipboard>
          </div>
        ))}
      </div>
    </div>
  );
}
