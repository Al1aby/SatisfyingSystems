
window.Sound = (() => {
  let enabled = true;
  let ctx;

  function ensureContext() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      ctx = new AudioCtx();
    }
    return ctx;
  }

  function beep(freq = 440, duration = 0.08, type = "sine", volume = 0.03) {
    if (!enabled) return;
    const audioCtx = ensureContext();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.start(now);
    osc.stop(now + duration);
  }

  function rotate() { beep(430, 0.05, "triangle", 0.02); }
  function hint() { beep(620, 0.08, "sine", 0.025); }
  function success() {
    beep(523, 0.08, "triangle", 0.03);
    setTimeout(() => beep(659, 0.08, "triangle", 0.03), 70);
    setTimeout(() => beep(784, 0.12, "triangle", 0.03), 140);
  }
  function flow() { beep(310, 0.05, "sawtooth", 0.012); }

  return {
    rotate, hint, success, flow,
    isEnabled: () => enabled,
    toggle() { enabled = !enabled; return enabled; }
  };
})();
