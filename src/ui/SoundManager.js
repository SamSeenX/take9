export class SoundManager {
  constructor() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.enabled = true;
  }

  async resume() {
    if (this.ctx.state === "suspended") {
      await this.ctx.resume();
    }
  }

  playTone(freq, type, duration) {
    if (!this.enabled) return;

    // Attempt resume on every play attempt if still suspended
    if (this.ctx.state === "suspended") {
      this.ctx
        .resume()
        .catch((e) => console.warn("Audio Context resume failed:", e));
    }

    if (this.ctx.state !== "running") return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.01,
      this.ctx.currentTime + duration,
    );

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playType() {
    // High pitched blip
    this.playTone(800 + Math.random() * 200, "square", 0.05);
  }

  playClick() {
    // Lower confirm sound
    this.playTone(400, "sawtooth", 0.1);
  }

  playHover() {
    this.playTone(600, "sine", 0.05);
  }
}
