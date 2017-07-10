const scribble = require('scribbletune');
let bass, lead, kick, snare, hi_hat;

bass = scribble.clip({
    notes: ['b2','b2','b2','d3','d3','g2','g2','a2','e2','e2','a2','b2','b2','b2','d3','d3','g2','g2','a2','e2','e2','a2',
    'b2','b2','b2','d3','d3','g2','g2','a2','e2','e2','a2','b2','b2','b2','d3','d3','g2','g2','a2','e2','e2','a2',
    'g2','g2','g2','g2','g2','g2','g2','g2','e2','d3','a2','b2','b2','b2','b2','b2','b2','b3','f#3','a3','f#3','b2','b2',
    'g2','g2','g2','g2','g2','g2','g2','g2','e2','d3','a2','e2','e3','e2','e3','e2','e3','e2','e3','f#2','f#3','f#2','f#3','f#2','f#3','f#2','f#3',
    'b2','b3','b2','b3','b2','b3','b2','b3','g2','g3','g2','g3','g2','g3','g2','g3','d2','d3','d2','d3','d2','d3','d2','d3','a2','a3','a2','a3','a2','a3','a#2','a#3',
    'b2','b3','b2','b3','b2','b3','b2','b3','g2','g3','g2','g3','g2','g3','g2','g3','d2','d3','d2','d3','d2','d3','d2','d3','a2','a3','a2','a3','a2','a3','a#2','a#3'],
    pattern: 'x_x_x_____x_x___x_x___x___x_x_x_'.repeat(4)+'x_x_'+'__x_'.repeat(5)+'x_'.repeat(4)+'x_x_'+'__x_'.repeat(5)+'x_'.repeat(3)+'xx'+'x_x_'+'__x_'.repeat(5)+'x_'.repeat(4)+'x_'.repeat(16)+'x_'.repeat(64)
});
lead = scribble.clip({
    notes: ['f#5','e5','d5','e5','f#5','a4','b4','f#5','e5','d5','e5','f#5','a4','a5','a5','g5','f#5',
    'f#5','e5','d5','e5','f#5','a4','b4','f#5','e5','d5','e5','f#5','a4','a5','a5','g5','f#5',
    'Gmaj','Amaj','Bm','Dmaj','Gmaj','Dmaj','Amaj','Emaj','F#maj',
    'f#5','f#5','f#5','f#5','e5','f#5','f#5','f#5','f#5','f#5','e5','f#5','f#5','a5','f#5','e5','d5','b4','b4','c#5','d5','b4',
    'f#5','f#5','f#5','f#5','e5','f#5','f#5','f#5','f#5','f#5','e5','f#5','f#5','a5','f#5','e5','d5','b4','b4','c#5','d5','b4'],
    pattern: '--x_x_x___x_x_x_x_____________----x_x_x___x_x_x_x_x_--x_--x_____'.repeat(2)+
    'x_________________________x___x_'+'________________________x_____x_'+'________________________x_x_--x_'+'________________x_______________'+
    'x_------x_xxxx__x_------x_xxxx__x_----x___x___x___x___x_x_x_x_x_'.repeat(2)
});
drum = scribble.clip({
    notes: ['c2','f#2','d2','f#2'],
    pattern: 'x-x-'.repeat(96)
});

scribble.midi(bass, 'bass.mid');
scribble.midi(lead,'lead.mid');
scribble.midi(drum,'drum.mid');