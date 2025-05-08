document.addEventListener("DOMContentLoaded", () => {
  const isOnline = navigator.onLine;
  const tsparticlesDiv = document.getElementById("tsparticles");
  const offlineSvg = document.getElementById("offline-svg");

  if (isOnline) {
    offlineSvg.hidden = true;
    tsparticlesDiv.hidden = false;

    tsParticles.load("tsparticles", {
      background: { color: { value: "#000000" } },
      fpsLimit: 30,
      particles: {
        number: { value: 35 },
        color: { value: "#FFD700" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          outMode: "bounce",
          random: true,
        },
      },
      interactivity: { events: { onhover: { enable: false } } },
      detectRetina: true,
    });

  } else {
    tsparticlesDiv.hidden = true;
    offlineSvg.hidden = false;
  }
});