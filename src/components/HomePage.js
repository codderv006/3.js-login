import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    // Function to create a new particle
    const createParticle = (x, y, radius, color, speedX, speedY) => {
      return {
        x,
        y,
        radius,
        color,
        speedX,
        speedY,
        update: function () {
          this.x += this.speedX;
          this.y += this.speedY;

          // Bounce off the walls
          if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.speedX = -this.speedX;
          }
          if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
          }
        },
        draw: function () {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
        }
      };
    };

    // Initialize particles
    const init = () => {
      for (let i = 0; i < 100; i++) {
        const radius = Math.random() * 3 + 1;
        const x = Math.random() * (canvas.width - 2 * radius) + radius;
        const y = Math.random() * (canvas.height - 2 * radius) + radius;
        const speedX = (Math.random() - 0.5) * 2;
        const speedY = (Math.random() - 0.5) * 2;
        const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
        particles.push(createParticle(x, y, radius, color, speedX, speedY));
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    // Resize canvas when window is resized
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener('resize', handleResize);

    // Start animation
    init();
    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Welcome Home!</h1>
      <Link to="/">Logout</Link>
      <canvas ref={canvasRef} style={{ width: '100%', height: 'calc(100vh - 40px)', position: 'absolute', top: 0, left: 0 }}></canvas>
    </div>
  );
};

export default HomePage;
