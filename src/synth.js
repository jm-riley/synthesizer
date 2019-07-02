import context from './context';
import Oscillator from './oscillator';
import { keymappings } from './keymappings';

export default class Synth {
  constructor() {
    window.addEventListener('keydown', e => this.handleKeyDown(e));
    window.addEventListener('keyup', e => this.handleKeyUp(e));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.play = this.play.bind(this);
    this.oscillators = {};
    // gainControls = document.getElementsByClassName('gain-slider')
    // gainControls.addEventListener('change', e => this.handleGainChange(e))
  }

  handleKeyDown(e) {
    const key = e.which.toString();
    // console.log(keymappings);
    if (keymappings[key] && !this.oscillators[key]) {
      console.log(key);
      this.play(key);
    }
  }

  handleKeyUp(e) {
    const key = e.which.toString();
    console.log(key);
    if (keymappings[key]) {
      this.oscillators[key].forEach(osc => osc.osc.stop());
      delete this.oscillators[key];
    }
  }

  play(key) {
    const freq = keymappings[key];
    const osc1 = new Oscillator(freq, 'sine');
    const osc2 = new Oscillator(freq, 'sawtooth');
    osc1.osc.start();
    osc2.osc.start();
    this.oscillators[key] = [osc1, osc2];
  }
}
