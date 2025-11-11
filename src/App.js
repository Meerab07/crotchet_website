import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const infoBoxes = {
    basicStitches: {
      title: "Basic Crochet Stitches",
      content:
        "Learn the foundation of crochet with these essential stitches: Chain (ch), Single Crochet (sc), Half Double Crochet (hdc), Double Crochet (dc), and Treble Crochet (tr). Master these and you can create almost anything!",
    },
    tools: {
      title: "Essential Crochet Tools",
      content:
        "You'll need: Crochet hooks (various sizes), yarn scissors, stitch markers, measuring tape, and a yarn needle for weaving in ends. Start with aluminum hooks - they're smooth and affordable!",
    },
    yarnTypes: {
      title: "Yarn Weight Guide",
      content:
        "Yarn weights range from 0 (lace) to 6 (super bulky). Worsted weight (4) is perfect for beginners! Cotton is great for dishcloths, acrylic for blankets, and wool for cozy sweaters.",
    },
    patterns: {
      title: "Reading Patterns",
      content:
        "Crochet patterns use abbreviations and symbols. Always check the pattern's abbreviation key! Start with simple projects like scarves or granny squares before tackling complex amigurumi.",
    },
    tips: {
      title: "Beginner Tips",
      content:
        "Keep consistent tension, count your stitches, and don't be afraid to frog (rip out) your work if needed. Practice makes perfect, and every crocheter has dropped stitches - it's part of learning!",
    },
    projects: {
      title: "Fun Project Ideas",
      content:
        "Start with: dishcloths, scarves, simple hats, granny square blankets, or cute amigurumi animals. These projects help you practice different techniques while creating useful items!",
    },
  };

  return (
    <div className="app">
      <header className="header">
        <h1>💖 Cozy Crochet Corner 💖</h1>
        <p>Your magical journey into the world of yarn and hooks begins here! ✨</p>
      </header>

      <main className="main">
        <div className="grid">
          {Object.keys(infoBoxes).map((key) => (
            <div key={key} className="card" onClick={() => setActiveModal(key)}>
              <div className="emoji">🧶</div>
              <h3>{infoBoxes[key].title}</h3>
              <p>Click to learn more!</p>
            </div>
          ))}
        </div>

        <div className="quote-box">
          <div className="emoji">⭐</div>
          <blockquote>
            "You'll learn to love crocheting, you can create anything you can think of!"
          </blockquote>
          <div className="emoji">💖 🧶 ✨</div>
        </div>
      </main>

      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{infoBoxes[activeModal].title}</h2>
            <p>{infoBoxes[activeModal].content}</p>
            <button onClick={() => setActiveModal(null)}>Got it! 💕</button>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>Happy Crocheting! 🧶✨</p>
        <p>Made with love and lots of yarn 💖</p>
      </footer>
    </div>
  );
}

export default App;
