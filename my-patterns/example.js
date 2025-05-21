// setcpm(143)
let tempo = 100;
let cl = tempo / 60 / 4;
setcps(cl);
samples('local:');

$: stack(
  s('casio:0 casio:1 casio:1 casio:1').gain(0.5).color('red'),
  // s("speach:0").clip(10).stretch(1/10).loopAt(10), // sample 10 bar one shot
  n('<0 1*5 3 4*4 7*2 2*16 2*2 3*4>').scale('d:pelog').s('gm_blown_bottle:0'),
  note('c d e f g a b').sound('acid_v').clip(1.5),
  s('<bd bd bd*2 bd bd - bd*8>*4'),
  s('<kick:1 kick:1 kick:1*2 kick:1 kick:1 - kick:1*8>*4'),
  s('kick:1').fit().cut(1).slice(4, '<0 1 2*2 1 1 - 3*8>*4').color('orange').gain(0.5).speed(cl).hush()._punchcard(),
  s('kick:2').fit().cut(1).slice(4, '<0 1 - 1 1 2*4 ->*4').color('orange').hush()._punchcard(),
).spectrum();

// $: s("speach:0").clip(10).stretch(1/10).loopAt(10) // sample 10 bar one shot
$: stack(
  s('bd*4, hh*16, hh:1*8'),
  n('<0 1*5 3 4*4 7*2 2*16 2*2 3*4>')
    .scale('d:pelog')
    .s('gm_blown_bottle:0')
    .clip(4)
    .room(0.8)
    .roomsize(0.9)
    .delay(0.5)
    .delayfeedback(0.75),
);
$: s('bd sd');
$: note('c eb g');

$: note('<[g3,b3,e4]!2 [a3,c3,e4] [b3,d3,f#4]>')
  .n('<1 2 3 4 5 6 7 8 9 10>/2')
  .scale('d:pelog')
  .room(0.5)
  .size(0.9)
  .s('wavetables')
  .velocity(0.25)
  .often((n) => n.ply(2))
  .release(0.125)
  .decay('<0.1 0.25 0.3 0.4>')
  .sustain(0)
  .cutoff(2000)
  .cutoff('<1000 2000 4000>')
  .fast(4)
  ._scope();

$: sound('white*24').gain(square.range(0, 1).fast(rand))._scope();

$: n('<x*4!3 x*8 x(3,8)*2!3 x(6,6,0)*2!1 >').s('bd'); //sequence
$: s('<bass:0*4>').decay(2); //one shot
$: s('bass:0') //loop
  .chop(16 * 4)
  .loopat(16)
  .cps(cl)
  .hush();
$: s('atmos:0') //loop
  .chop(1 * 4)
  .loopat(1)
  .cps(cl);
