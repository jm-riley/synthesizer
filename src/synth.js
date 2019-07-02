export default class Synth {
  constructor() {
    this.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();
    this.playNote = this.playNote.bind(this);
  }

  playNote() {
    let osc = this.audioCtx.createOscillator('triangle');
    osc.frequency.value = 340;
    osc.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 3);
  }
}
