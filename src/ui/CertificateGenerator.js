export class CertificateGenerator {
  static async generate(result, themeTitle) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const width = 1080;
    const height = 1080;
    canvas.width = width;
    canvas.height = height;

    // 1. Background (Black)
    ctx.fillStyle = "#0d0d0d";
    ctx.fillRect(0, 0, width, height);

    // 2. Retro Grid / Scanlines
    ctx.fillStyle = "rgba(0, 50, 0, 0.2)";
    for (let i = 0; i < height; i += 4) {
      ctx.fillRect(0, i, width, 2);
    }

    // 3. Border (Green Glow)
    ctx.strokeStyle = "#008f11"; // Darker green (was #33ff00)
    ctx.lineWidth = 20;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    // 4. Header: TAKE 9
    ctx.fillStyle = "#33ff00";
    ctx.font = "bold 120px 'VT323', monospace"; // Assumes font is loaded
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#008f11";
    ctx.fillText("TAKE 9", width / 2, 180);

    // 5. Header: PROTOCOL CERTIFIED
    ctx.fillStyle = "#008f11";
    ctx.font = "60px 'VT323', monospace";
    ctx.fillText(`PROTOCOL: ${themeTitle || "UNKNOWN"}`, width / 2, 260);

    // 6. Result Title (Big Center)
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#ffb000"; // Accent color
    ctx.font = "bold 150px 'VT323', monospace";

    let title = result.title.toUpperCase();
    const titleLines = this.wrapText(ctx, title, width - 150);
    let y = 500;
    if (titleLines.length > 1) y = 450; // shift up if multiline

    titleLines.forEach((line, i) => {
      ctx.fillText(line, width / 2, y + i * 140);
    });

    // 7. Decoration lines around title
    ctx.strokeStyle = "#008f11";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(100, y - 100);
    ctx.lineTo(width - 100, y - 100);
    ctx.moveTo(100, y + titleLines.length * 140 + 20);
    ctx.lineTo(width - 100, y + titleLines.length * 140 + 20);
    ctx.stroke();

    // 8. Description (Bottom)
    ctx.fillStyle = "#33ff00";
    ctx.font = "40px 'VT323', monospace";
    const desc = `"${result.description}"`;
    const descLines = this.wrapText(ctx, desc, width - 200);

    y = 800;
    descLines.forEach((line, i) => {
      ctx.fillText(line, width / 2, y + i * 50);
    });

    // 9. URL Footer
    ctx.fillStyle = "#008f11";
    ctx.font = "30px 'VT323', monospace";
    ctx.fillText(
      "DISCOVER YOUR DIGITAL SOUL AT T9.SAMSEEN.DEV",
      width / 2,
      980,
    );

    return canvas.toDataURL("image/png");
  }

  // Helper for text wrapping
  static wrapText(ctx, text, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + " " + word).width;
      if (width < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }
}
