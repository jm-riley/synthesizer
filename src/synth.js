import context from './context';
import Oscillator from './oscillator';
import { keymappings } from './keymappings';

export default class Synth {
  constructor() {
    window.addEventListener('keydown', e => this.handleDown(e));
    window.addEventListener('keyup', e => this.handleUp(e));
    const keyboardKeys = document.getElementsByClassName('keys');
    Array.from(keyboardKeys).forEach(key => {
      key.addEventListener('mousedown', e => this.handleDown(e));
      key.addEventListener('mouseup', e => this.handleUp(e));
    });
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.play = this.play.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.oscillators = {};
    this.filter = context.createBiquadFilter();
    this.gain = context.createGain();
    this.gain.connect(this.filter);
    this.filter.connect(context.destination);
    const filterControl = document.getElementById('lpf');
    this.filter.frequency.setValueAtTime(
      filterControl.value,
      context.currentTime
    );
    filterControl.addEventListener('input', e => this.handleFilterChange(e));
    // gainControls = document.getElementsByClassName('gain-slider')
    // gainControls.addEventListener('change', e => this.handleGainChange(e))
  }

  handleFilterChange(e) {
    this.filter.frequency.setValueAtTime(e.target.value, context.currentTime);
  }

  handleDown(e) {
    console.log(e);
    const key = e.type === 'keydown' ? e.which.toString() : e.target.id;
    // console.log(keymappings);
    if (keymappings[key] && !this.oscillators[key]) {
      document.getElementById(key).classList.add('pressed');
      this.play(key);
    }
  }

  handleUp(e) {
    // const key = e.which.toString();
    const key = e.type === 'keyup' ? e.which.toString() : e.target.id;
    if (keymappings[key]) {
      document.getElementById(key).classList.remove('pressed');
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
    const oscillators = [osc1, osc2, osc3];
    oscillators.forEach(osc => {
      osc.gain.connect(this.gain);
      osc.osc.start();
    });
    this.oscillators[key] = oscillators;
  }
}
