import context from './context';

export default class Oscillator {
  constructor(freq, type) {
    this.osc = context.createOscillator();
    this.osc.type = type;
    this.gain = context.createGain();
    this.osc.frequency.value = freq;
    this.osc.connect(this.gain);
    this.gain.connect(context.destination);
    const gainControl = document.getElementById(`${type}-gain`);
    this.gain.gain.value = gainControl.value;
    gainControl.addEventListener('change', e => this.handleGainChange(e));
  }

  handleGainChange(e) {
    this.gain.gain.value = e.target.value;
  }
}
