# Web Synthesizer

> A classic three oscillator synth with filter and amplitude controls.

![synth](https://raw.githubusercontent.com/jm-riley/synthesizer/master/dist/synth_screenshot.png)

# MVPs

- Interactive keyboard with click events and keybindings
- User can mix sine, sawtooth, and square waves together to create the desired output tone
- Basic control over the amplitude envelope (attack, release)
- Asjustable filter to cutoff low end frequencies

![synth outline](https://raw.githubusercontent.com/jm-riley/synthesizer/master/dist/outline.png)

## Technologies Used

- Javascript
- Web Audio API

## Oscilloscope and Frequency Graph

Both utilize an HTML canvas element and the Web Audio API's analyser node. Data is stored and continually updated in an array using analyser node functions, either getByteFrequencyData for the frequency graph, or getByteTimeDomainData for the oscilloscope. Both classes implement a similar draw function that iterate through the array of data and draw the relevant points to their associated canvas elements.

![oscilloscope](https://raw.githubusercontent.com/jm-riley/synthesizer/master/dist/oscilloscope_gif.gif)

![frequency graph](https://raw.githubusercontent.com/jm-riley/synthesizer/master/dist/frequency_gif.gif)
