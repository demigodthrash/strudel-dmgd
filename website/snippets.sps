// key: dm:demigod
// --
/*

  ██████╗ ███████╗███╗   ███╗██╗ ██████╗  ██████╗ ██████╗
  ██╔══██╗██╔════╝████╗ ████║██║██╔════╝ ██╔═══██╗██╔══██╗
  ██║  ██║█████╗  ██╔████╔██║██║██║  ███╗██║   ██║██║  ██║
  ██║  ██║██╔══╝  ██║╚██╔╝██║██║██║   ██║██║   ██║██║  ██║
  ██████╔╝███████╗██║ ╚═╝ ██║██║╚██████╔╝╚██████╔╝██████╔╝
  ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝ ╚═════╝  ╚═════╝ ╚═════╝

   @title 
   @by ☠️DEMIGOD☠️
   @license CC BY-NC-SA

*/
// --

// key: dm:comment long
// --
/*

*/
// --

// key: dm:live set up
// --
let tempo = 110
let cl = tempo/60/4
setcps(cl)
samples('local:')
// --

// key: dm:beep
// --
$: s("casio:0 casio:1 casio:1 casio:1")
  .gain(0)
  .color("red")
  .spectrum()
// --


// key: dm:song meta
// --
/*

 @title 
 @by ☠️DEMIGOD☠️
 @license CC BY-NC-SA

*/
// --

// key: dm:pattern 1 helper
// --
const Pat1 = (sample) => s(sample).chop(1*4).loopat(4)._punchcard()
// --

// key: dm:pattern 2 helper
// --
const Pat2 = (sample) => s(sample).chop(8*4).loopat(8)._punchcard()
// --

// key: dm:pattern 16 helper
// --
const Pat16 = (sample) => s(sample).chop((16*4)*4).loopat(16*4)._punchcard()
// --

// key: dm:one shot
// --
asdasd
// --

// key: dm:loop 8
// --
asdasd
// --

// key: dm:loop 16
// --
asdasd
// --


// key: dm:euclidrot
// --
$: s("bd").euclidRot(9,24,2).slow(2)
// --

// key: dm:rythm 1
// --
$: n("<x*4 x*4 x(5,8,2) x*4 x(5,8,2) x*4 x*8 x(6,8,5)>")
  .s("kick:0")
  .velocity(".7 .6 .8 .9")
// --

// key: dm:marker
// --
  .firstOf(16, x=>x.rev())  
// --

// key: dm:reverse
// --
  .lastOf(16, x=>x.rev())
// --

// key: dm:one shot
// --
$: s("<bass:0*4>").decay(2)
// --

// key: dm:sequence
// --
$: n("<x*4!3 x*8 x(3,8)*2!3 x(6,6,0)*2!1 >").s("bd")
// --

// key: dm:loop
// --
$: s("sample")
  .chop(16*4)
  .loopat(16)
  .cps(cl)
// --