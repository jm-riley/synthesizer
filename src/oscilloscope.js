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
    this.analyser.getFloatTimeDomainData(this.waveform);
  }

  draw() {
    requestAnimationFrame(this.draw);
    const canvas = document.getElementById('oscilloscope');
    const ctx = canvas.getContext('2d');
    canvas.width = 250;
    canvas.height = 250;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (let i = 0; i < this.waveform.length; i++) {
      const x = i;
      const y = (0.5 + this.waveform[i] / 2) * (canvas.height - 50);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }
}
