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
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.oscillators = {};
    this.filter = context.createBiquadFilter();
    this.gain = context.createGain();
    this.gain.connect(this.filter);
    this.filter.connect(context.destination);
    document
      .getElementById('lpf')
      .addEventListener('change', e => this.handleFilterChange(e));
    // gainControls = document.getElementsByClassName('gain-slider')
    // gainControls.addEventListener('change', e => this.handleGainChange(e))
  }

  handleFilterChange(e) {
    this.filter.frequency.setValueAtTime(e.target.value, context.currentTime);
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
      // this.oscillators[key].forEach(osc => osc.osc.stop());
      this.oscillators[key].forEach(osc => {
        osc.osc.stop();
      });
      delete this.oscillators[key];
    }
  }

  play(key) {
    const freq = keymappings[key];
    const osc1 = new Oscillator(freq, 'sine');
    const osc2 = new Oscillator(freq, 'sawtooth');
    const osc3 = new Oscillator(freq, 'square');
    osc1.gain.connect(this.gain);
    osc2.gain.connect(this.gain);
    osc3.gain.connect(this.gain);
    osc1.osc.start();
    osc2.osc.start();
    osc3.osc.start();
    this.oscillators[key] = [osc1, osc2, osc3];
  }
}
