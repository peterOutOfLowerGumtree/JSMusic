const scribble = require("scribbletune");
let chords = scribble.clip({
    notes: ["F#min", "C#min", "Dmaj", "Bmin", "Emaj", "Amaj", "Dmaj", "C#min", "Amaj"],
    pattern: "x_x_x_--".repeat(8),
    sizzle: true
});  
 
scribble.midi(chords, "chords.mid");