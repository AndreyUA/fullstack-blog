import React, { useEffect } from "react";
import "./Canvas.css";

function Canvas() {
  useEffect(() => {
    const canvas = document.querySelector(".Canvas");
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colorArray = ["#fcfc00", "#fc0043", "#19fc00", "#0060fc"];

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = radius;
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
      };

      this.update = function () {
        if (
          this.x + this.radius > window.innerWidth ||
          this.x - this.radius < 0
        ) {
          this.dx = -this.dx;
        }

        if (
          this.y + this.radius > window.innerHeight ||
          this.y - this.radius < 0
        ) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      };
    }

    let circleArray = [];

    function init() {
      circleArray = [];
      for (let i = 0; i < 300; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const dx = (Math.random() - 0.5) * 8;
        const dy = (Math.random() - 0.5) * 8;
        const radius = Math.random() * 3 + 1;
        circleArray.push(new Circle(x, y, dx, dy, radius));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }
    animate();
    init();
  });

  return <canvas className="Canvas"></canvas>;
}

export default Canvas;
