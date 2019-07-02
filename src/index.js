import Synth from './synth';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = 600;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(100,100,100)';
  ctx.fillRect(0, 0, 600, 600);
  const synth = new Synth();
  document.querySelector('button').addEventListener('click', function() {
    synth.audioCtx.resume();
  });
  synth.playNote();
});
