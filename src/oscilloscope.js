import context from './context';

export default class Oscilloscope {
  constructor() {
    this.analyser = context.createAnalyser();
    this.waveform = new Float32Array(this.analyser.frequencyBinCount);
    this.analyser.getFloatTimeDomainData(this.waveform);
    this.updateWaveform = this.updateWaveform.bind(this);
    this.draw = this.draw.bind(this);
    this.updateWaveform();
    this.draw();
  }

  updateWaveform() {
    // console.log(this.waveform);
    requestAnimationFrame(this.updateWaveform);
    // setTimeout(this.updateWaveform, 100);
    this.analyser.getFloatTimeDomainData(this.waveform);
  }

  draw() {
    const canvas = document.getElementById('oscilloscope');
    const ctx = canvas.getContext('2d');
    canvas.width = 250;
    canvas.height = 250;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (let i = 0; i < this.waveform.length; i++) {
      const x = i;
      const y = (0.5 + this.waveform[i] / 3.5) * canvas.height;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.strokeStyle = '#8787b6';
    ctx.lineWidth = 3;
    ctx.stroke();
    requestAnimationFrame(this.draw);
    // setTimeout(this.draw, 100);
  }
}
