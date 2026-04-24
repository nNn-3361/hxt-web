import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const fogRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;
    let particles = [];
    
    const interaction = { x: -1000, y: -1000, clicked: false, clickTime: 0 }; 

    // --- 捲動過渡特效邏輯 ---
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      
      let progress = scrollY / (vh * 0.8);
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      if (textRef.current) {
        textRef.current.style.transform = `scale(${1 + progress * 3})`;
        textRef.current.style.opacity = 1 - (progress * 1.5);
      }

      if (fogRef.current) {
        fogRef.current.style.opacity = progress;
        const blurValue = progress * 20; 
        fogRef.current.style.backdropFilter = `blur(${blurValue}px)`;
        fogRef.current.style.WebkitBackdropFilter = `blur(${blurValue}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // --- Canvas 尺寸與滑鼠事件 ---
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1; 
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const handleMouseMove = (e) => {
      interaction.x = e.clientX;
    };

    const handleMouseOut = () => {
      interaction.x = -1000;
    };

    const handleMouseDown = () => {
      interaction.clicked = true;
      interaction.clickTime = Date.now();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    
    // --- 向上蒸發的粒子類別 ---
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = - (Math.random() * 3 + 2); 
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01; 
        this.size = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
      }
      draw() {
        ctx.fillStyle = `rgba(0, 229, 255, ${this.life * 0.8})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 圓角柱狀圖繪製輔助函式
    const drawRoundRect = (ctx, x, y, width, height, radius) => {
      let r = radius;
      if (height < r * 2) r = height / 2;
      if (width < r * 2) r = width / 2;
      
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + width, y, x + width, y + height, r);
      ctx.arcTo(x + width, y + height, x, y + height, r);
      ctx.arcTo(x, y + height, x, y, r);
      ctx.arcTo(x, y, x + r, y, r);
      ctx.closePath();
      ctx.fill();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // --- 核心動畫迴圈 ---
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const logicalWidth = rect.width;
      const logicalHeight = rect.height;
      
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);
      time += 0.02; // 讓整體波動速度更和緩自然

      // 處理點擊後的脈衝衰減
      let clickWaveAmplitude = 0;
      if (interaction.clicked) {
        const elapsed = Date.now() - interaction.clickTime;
        if (elapsed < 1200) {
          const decayFactor = 1 - (elapsed / 1200); 
          clickWaveAmplitude = 120 * Math.pow(decayFactor, 1.5); // 點擊的突起幅度稍微調柔和
        } else {
          interaction.clicked = false; 
        }
      }

      const centerY = logicalHeight / 2;
      
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(0, 229, 255, 0.4)'; // 柔和的發光
      ctx.fillStyle = 'rgba(0, 191, 255, 0.6)';

      const numBars = logicalWidth < 768 ? 60 : 140; 
      const barGap = logicalWidth < 768 ? 2 : 3; 
      const barWidth = (logicalWidth - (numBars - 1) * barGap) / numBars; 
      const barRadius = barWidth / 2; 

      for (let i = 0; i < numBars; i++) {
        const barX = i * (barWidth + barGap);
        const barCenterX = barX + barWidth / 2;
        const normalizedX = i / numBars; 
        
        // 🚀 核心塑形：模擬人在麥克風前講話的輕柔、隨機動態波形
        // 將三個不同頻率與速度的波形相加取絕對值，創造出像講話般錯落有致的起伏
        const voiceWave = Math.abs(
          Math.sin(normalizedX * 15 + time * 1.5) * 10 + 
          Math.cos(normalizedX * 28 - time * 2.2) * 6 + 
          Math.sin(normalizedX * 5 + time * 0.8) * 8
        );

        // 邊緣收斂 (讓畫面最左邊跟最右邊的柱子乖乖平貼，不會突兀)
        const edgeTaper = Math.sin(normalizedX * Math.PI); 
        
        // 最終靜態+動態的高度 (最小高度 3px，加上語音波動，再乘上邊緣收斂)
        const baseHeight = (3 + voiceWave) * edgeTaper;

        // 點擊觸發的局部脈衝
        const distanceToClickX = Math.abs(barCenterX - interaction.x);
        const localizedSpikeRadius = 80; 
        let localizedSpike = 0;
        
        if (interaction.clicked && distanceToClickX < localizedSpikeRadius) {
          localizedSpike = Math.exp(-Math.pow(distanceToClickX, 2) / (2 * Math.pow(localizedSpikeRadius/2.5, 2)));
        }
        
        const finalSpikeHeight = localizedSpike * clickWaveAmplitude;
        
        // 最終這根柱子的高度 = 輕柔語音波動 + 點擊脈衝
        const totalHeight = baseHeight + finalSpikeHeight;
        const totalBarHeight = Math.max(totalHeight * 2, 2); 
        const startY = centerY - totalHeight;

        // 畫出對稱的音軌柱
        drawRoundRect(ctx, barX, startY, barWidth, totalBarHeight, barRadius);

        // 🚀 粒子邏輯：只在有點擊突起時產生
        if (interaction.clicked && finalSpikeHeight > 10) {
          if (Math.random() < 0.15 * localizedSpike) {
            const isTop = Math.random() > 0.5;
            const particleY = isTop ? startY : startY + totalBarHeight;
            particles.push(new Particle(barCenterX, particleY));
          }
        }
      }
      
      ctx.shadowBlur = 0;

      // 更新並繪製所有粒子
      for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];
        p.update();
        p.draw();
        if (p.life <= 0) particles.splice(i, 1);
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative h-[150vh] w-full bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-auto cursor-crosshair" />
        
        <div 
          ref={fogRef} 
          className="absolute inset-0 z-10 bg-white/80 pointer-events-none opacity-0 will-change-auto transition-none"
        ></div>
        
        <div 
          ref={textRef} 
          className="z-20 text-center px-4 pointer-events-none flex flex-col items-center origin-center will-change-transform"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-brand-blue tracking-tighter mb-4 drop-shadow-sm">
            最細膩的聲音檢測
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl lg:text-3xl font-bold tracking-widest uppercase">
            Hong Xiang Technology
          </p>
        </div>

      </div>
    </div>
  );
}