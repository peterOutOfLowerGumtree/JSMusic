const scribble = require('scribbletune');
 
let clip = scribble.clip({
    notes: scribble.scale('c', 'major', 3), // this works too ['c3', 'd3', 'e3', 'f3', 'g3', 'a3', 'b3'] 
    pattern: 'x-'.repeat(8)
});
 
scribble.midi(clip, 'cscale.mid');