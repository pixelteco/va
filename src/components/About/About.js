import React from "react";
import Image from "../../Assets/AboutImg.png";
import TextImg from "../../Assets/text.png";

export default function About() {
  return (
  <div className="container-fluid" Style={"background-color:#181820;"}>
    <div className="container p-5" Style={"background-color:#181820;"}>
      <div className="row">
        <div className="col-12 col-md-6 flex-column-reverse flex-md-row">
          <p className="fs-1 fw-bold text-white">THE STORY</p>
          <p className="fs-6 mt-5 fw-bold text-white">
          Our generation lives in a paradox On the one hand, we love to express our style and creativity online On the other, we want to reduce all the production waste that hurts
 the environment paradox is caused by the unwritten rule that we can’t be seen online in the same outfit twice.
            <br /> <br />
            How do we secure a better future while maintaining our creative output online with a digital clothing collection, a series of virtually fitted fashion items? That you only wear in digital space.This is how it works. First, you take a picture you choose a product from the webshop before a 3D tailor adjusts a product to your image. Now your Outfit is ready to be shared on social media.
            <br /> <br />
          </p>
          <div className=" mt-2">
            <div className="pt-3">
              <img width="100%" height="150px" src={TextImg} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center pt-5">
          <img src={Image} width="250%" height="`100%" />
        </div>
      </div>
    </div>
  </div>
  );
}
