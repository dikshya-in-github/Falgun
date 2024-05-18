import React from "react";
import { useState } from "react";

export default function GoogleTabs() {
  const [currentTab, setCurrentTab] = useState("all");

  function change(){
    setCurrentTab()
  }
  let tabs = ["all", "images","videos"]
  return (
    <>
      <div>
        <ul style={{ display: "flex", gap: "1rem", listStyleType: "none" }} >
          {
            tabs.map((tab)=>{
              return
            })
          }
        </ul>
      </div>
      <p> Currented Selected tab: {currentTab}</p>
      <div>
        <h2>All contents</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam
          blanditiis non, praesentium laboriosam inventore voluptate asperiores
          maiores ullam quo consequatur libero vel aliquam, ex vero dolore
          ratione distinctio. Quas?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam
          blanditiis non, praesentium laboriosam inventore voluptate asperiores
          maiores ullam quo consequatur libero vel aliquam, ex vero dolore
          ratione distinctio. Quas?
        </p>
      </div>
      <div>
        <h2 >Image contents</h2>
        <img src="" alt="some image" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam
          blanditiis non, praesentium laboriosam inventore voluptate asperiores
          maiores ullam quo consequatur libero vel aliquam, ex vero dolore
          ratione distinctio. Quas?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam
          blanditiis non, praesentium laboriosam inventore voluptate asperiores
          maiores ullam quo consequatur libero vel aliquam, ex vero dolore
          ratione distinctio. Quas?
        </p>
      </div>
      <div>
        <h2>Video contents</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam
          blanditiis non, praesentium laboriosam inventore voluptate asperiores
          maiores ullam quo consequatur libero vel aliquam, ex vero dolore
          ratione distinctio. Quas?
        </p>
      </div>
    </>
  );
}
