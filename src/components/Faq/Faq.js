import React, { useEffect, useState } from "react";
import "./Faq.css";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "  How much will it cost to mint?",
      content: ` The cost per NFT is 11 Sol + gas fees.`,
    },
    {
      title: "What is the total number of NFTs ?",
      content: `111 NFTs.`,
    },
    {
      title: "What is the Exclusive Members can get ?",
      content: `Exclusive Members has get 20% of webshop profitshare, DAO membership, Giveaways, Voting Rights, Future Drops And Collabs.`,
    },
    {
      title: "What is the Goldern Members can get ?",
      content: `Goldern Members has get 30% of webshop profitshare, DAO membership, Giveaways, Voting Rights, Future Drops And Collabs.`,
    },
    {
      title: "How will the Pixel Te fund work?",
      content: `Pixel Te Treasury - 30%, Co - 10%,  111 Exclusive Members - 20%, 10k Goldern Members - 30%, The World Recycling Foundation(TWRF) - 10%`,
    },
    {
      title: "What is Digital Clothing? ?",
      content: `Digital clothing isn’t made of fabric or anything tangible. The garments are made from pixels rather than textiles, using computer technologies and 3D software. So you’ll never wear an item of digital clothing in real life.`,
    },
    {
      title: "What is the Pixel Te Webshop ?",
      content: `Pixel Te sells digital clothing direct to customers from its online shop. This is how it works. First, you take a picture you choose a product from the webshop before a 3D tailor adjusts a product to your image. Now your Outfit is ready to be shared on social media.`,
    },
    {
      title: "What is the Pixel Te Ar ?",
      content: `Men and women can use technology to test garments before making a purchase. Dresses, skirts, tops, shorts, skirts, sweaters, jackets, trousers, jeans, and other apparel categories are virtual try-ons.`,
    },
    {
      title: "What is the The World Recycling Foundation (TWRF) ?",
      content: `The World Recycling Foundation supports the promotion of recycling, and the recycling industry.`,
    },
  ],
};

const styles = {
  bgColor: "transparet",
  titleTextColor: "dark",
  rowTitleColor: "dark",
  rowContentColor: "dark",
  rowContentPaddingBottom: "20px",
  arrowColor: "dark",
};

const config = {
  animate: true,
  arrowIcon: "+",
  tabFocus: true,
};

export default function FAQ() {
  return (
    <div>
      <div className="container">
        <div className="row text-white">
          <div
            class="col-12 col-lg-12  d-flex justify-content-start"
            Style="font-size: 45px;padding-left:0; color:black;"
          >
            <p>FAQ</p>
          </div>
        </div>
        <div className="row text-dark">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </div>
  );
}
