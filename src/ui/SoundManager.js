export class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  async resume() {
    try {
      if (!this.ctx) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.ctx.state === "suspended") {
        await this.ctx.resume();
      }
    } catch (e) {
      // Silently fail - browser will block until gesture
    }
  }

  playTone(freq, type, duration) {
    if (!this.enabled || !this.ctx || this.ctx.state !== "running") return;

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
