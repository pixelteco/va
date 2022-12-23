import React from "react";
import "./Timeline.css";

const TimelineSection = () => {
  return (
    <div className="container-fluid bg-dark p-5 text-white">
    <div className="container" Style={"list-style: none"}>
        <ul className="timeline-list" Style={"list-style: none"}>
          <li className="timeline-block-active custom-border">
            <div className="timeline-content">
              <h3 className="title is-4 timeline-heading">Pixel Te 111</h3>
              <p className="timeline-description">
              This is Our Exclusive NFT Limited Edition Collection. By owning a Pixel Te NFT You Will Have Access To Exclusive Members Only Perks Like DAO membership, Giveaways, Voting Rights, Future Drops And Collabs.  
              </p>
            </div>
          </li>
          <li className="timeline-block-not-active custom-border-active text-white">
            <div className="content">
              <h3 className="title is-4 timeline-heading">DOA</h3>
              <p className="timeline-description">
              This is digital-native, community-led organizations powered by Solana blockchain technology, where members vote on the direction and vision of their entity.
              </p>
            </div>
          </li>
          <li className="timeline-block-not-active custom-border-active">
            <div className="content">
              <h3 className="title is-4 timeline-heading">10k Collation Launch</h3>
              <p className="timeline-description">
              This is Our Second Collection NFT Limited Edition Collection. By owning NFT you will have access to Goldern only perks like  voting rights, membership for our DAO.
              </p>
            </div>
          </li>
          <li className="timeline-block-not-active custom-border-active">
            <div className="content">
              <h3 className="title is-4 timeline-heading">WEB SHOP</h3>
              <p className="timeline-description">
              Pixel Te sells digital clothing direct to customers from its online shop.
              </p>
            </div>
          </li>
          <li className="timeline-block-not-active custom-border-active">
            <div className="content">
              <h3 className="title is-4 timeline-heading">AR</h3>
              <p className="timeline-description">
              Augmented reality clothing fitting tools offer a better fashion industry for all: better fit, engaging experiences.
              </p>
            </div>
          </li>
          <li className="timeline-block-not-active ">
            <div className="content">
              <h3 className="title is-4 timeline-heading">Metaverse</h3>
              <p className="timeline-description">
              Pixel Te is Plaining hosting its own metaverse experience in The Sandbox. The fashion house is the first major Digital brand to build a digital world in the metaverse platform.
              </p>
            </div>
          </li>
          
        </ul>
  </div>
  </div>
  );
};

export default TimelineSection;
