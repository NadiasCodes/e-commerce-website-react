import React from 'react'
import "./DescriptionBox.css"
export default function () {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(115)</div>
      </div>
      <div className="descriptionbox-description">
        <p>At
           <span className="brand"> Minimal</span>, we're not just another online clothing brand; we're a movement redefining fashion in the digital age. Born from a passion for style, sustainability, and cutting-edge technology, our brand is a fusion of creativity and consciousness. Our mission is simple: to empower individuals to express themselves through fashion while making a positive impact on the planet. We believe that style should never compromise sustainability, and innovation should never sacrifice ethics. That's why every piece in our collection is carefully crafted using eco-friendly materials and ethical practices, ensuring that you not only look good but feel good too.
        </p>
        <p>
          From our use of recycled fabrics to our commitment to fair labor practices, every aspect of our brand reflects our dedication to environmental and social responsibility. We're not just selling clothes; we're building a community of like-minded individuals who believe that fashion has the power to change the world. So whether you're shopping for the latest trends or looking to make a statement with your wardrobe, join us at <span className="brand">Minimal</span> and be a part of the movement towards a more sustainable and stylish future. Together, we can weave a better world, one thread at a time.
        </p>
      </div>
    </div>
  );
}
