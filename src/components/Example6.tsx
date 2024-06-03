"use client";

import { useRef, useState } from "react";

const arxivarColor = "#f6981e";

export const Example6 = () => {
  const [showWcag, setShowWcag] = useState(false);
  const [showApca, setShowApca] = useState(false);
  const [showArx, setShowArx] = useState(false);

  return (
    <>
      <div>Example 6 - WCAG 1.4.1 - Use of color</div>
      <button onClick={() => setShowWcag(!showWcag)}>SPOILER 1</button>
      <button onClick={() => setShowApca(!showApca)}>SPOILER 2</button>
      <button onClick={() => setShowArx(!showArx)}>SPOILER 3</button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                border: "1px solid black",
                backgroundColor: "white",
                color: "red",
                margin: "5px",
                padding: "10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              placeat voluptas adipisci maxime sed iure nihil, expedita non
              officia ad veniam vitae quaerat quasi, iste incidunt debitis eos
              ipsum quam quia eum rem inventore magnam eligendi excepturi? Eos
              ut at architecto quasi corporis rem exercitationem ab inventore
              dolor modi nostrum vero praesentium, mollitia porro debitis
              reiciendis soluta laboriosam eum quam? Fuga hic a maiores sapiente
              eveniet dolor nemo repellat quia, debitis amet! Nulla temporibus
              consequatur, vel illo aperiam commodi labore saepe debitis eveniet
              error consectetur molestias maiores laborum nostrum distinctio,
              voluptatum quam a. Maiores magni repellendus magnam nulla saepe
              in?
            </div>
            {showWcag && <div>WCAG: Contrast 4 - Level AA 🔴</div>}
            {showApca && <div>APCA: LC 64.1 🟢</div>}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                border: "1px solid black",
                backgroundColor: "black",
                color: "red",
                margin: "5px",
                padding: "10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              placeat voluptas adipisci maxime sed iure nihil, expedita non
              officia ad veniam vitae quaerat quasi, iste incidunt debitis eos
              ipsum quam quia eum rem inventore magnam eligendi excepturi? Eos
              ut at architecto quasi corporis rem exercitationem ab inventore
              dolor modi nostrum vero praesentium, mollitia porro debitis
              reiciendis soluta laboriosam eum quam? Fuga hic a maiores sapiente
              eveniet dolor nemo repellat quia, debitis amet! Nulla temporibus
              consequatur, vel illo aperiam commodi labore saepe debitis eveniet
              error consectetur molestias maiores laborum nostrum distinctio,
              voluptatum quam a. Maiores magni repellendus magnam nulla saepe
              in?
            </div>
            {showWcag && <div>WCAG: Contrast 5.25 - Level AA 🟢</div>}
            {showApca && <div>APCA: LC -37.5 🔴</div>}
          </div>
        </div>

        {showArx && (
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  border: "1px solid black",
                  backgroundColor: arxivarColor,
                  color: "white",
                  margin: "5px",
                  padding: "10px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                placeat voluptas adipisci maxime sed iure nihil, expedita non
                officia ad veniam vitae quaerat quasi, iste incidunt debitis eos
                ipsum quam quia eum rem inventore magnam eligendi excepturi? Eos
                ut at architecto quasi corporis rem exercitationem ab inventore
                dolor modi nostrum vero praesentium, mollitia porro debitis
                reiciendis soluta laboriosam eum quam? Fuga hic a maiores
                sapiente eveniet dolor nemo repellat quia, debitis amet! Nulla
                temporibus consequatur, vel illo aperiam commodi labore saepe
                debitis eveniet error consectetur molestias maiores laborum
                nostrum distinctio, voluptatum quam a. Maiores magni repellendus
                magnam nulla saepe in?
              </div>
              {showWcag && <div>WCAG: Contrast 2.22 - Level AA 🔴</div>}
              {showApca && <div>APCA: -LC 48.2 🟡</div>}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  border: "1px solid black",
                  backgroundColor: "black",
                  color: arxivarColor,
                  margin: "5px",
                  padding: "10px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                placeat voluptas adipisci maxime sed iure nihil, expedita non
                officia ad veniam vitae quaerat quasi, iste incidunt debitis eos
                ipsum quam quia eum rem inventore magnam eligendi excepturi? Eos
                ut at architecto quasi corporis rem exercitationem ab inventore
                dolor modi nostrum vero praesentium, mollitia porro debitis
                reiciendis soluta laboriosam eum quam? Fuga hic a maiores
                sapiente eveniet dolor nemo repellat quia, debitis amet! Nulla
                temporibus consequatur, vel illo aperiam commodi labore saepe
                debitis eveniet error consectetur molestias maiores laborum
                nostrum distinctio, voluptatum quam a. Maiores magni repellendus
                magnam nulla saepe in?
              </div>
              {showWcag && <div>WCAG: Contrast 9.42 - Level AA 🟢</div>}
              {showApca && <div>APCA: LC -58.7 🟡</div>}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
