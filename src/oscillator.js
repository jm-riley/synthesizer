import context from './context';

export default class Oscillator {
  constructor(freq, type) {
    this.osc = context.createOscillator();
    this.osc.type = type;
    this.gain = context.createGain();
    this.osc.frequency.value = freq;
    this.osc.connect(this.gain);
    this.gain.connect(context.destination);
    // this.osc.start();
    // this.osc.stop(context.currentTime + 1);
  }
}
