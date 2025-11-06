/* UBI ROYAL NATA - Galaxy Background */
particlesJS("universe", {
  "particles": {
    "number": {
      "value": 220,
      "density": { "enable": true, "value_area": 1800 }
    },
    "color": { "value": ["#ffffff", "#d4af37", "#f2c94c"] },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": { "enable": true, "speed": 0.5, "opacity_min": 0.2, "sync": false }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": { "enable": false }
    },
    "line_linked": { "enable": false },
    "move": {
      "enable": true,
      "speed": 0.4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": false },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 80, "duration": 0.4 }
    }
  },
  "retina_detect": true
});
