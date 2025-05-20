/*

@title Nalaktak
@by ☠️DEMIGOD☠️
@license CC BY-NC-SA

*/

let tempo = 140
let cl = tempo / 60 /4
setcps(cl)

samples('local:')

$: s("casio:0 casio:1 casio:1 casio:1")
.gain(0)
.color("red")
.spectrum()
.orbit(1)

$: s("speach:0")
// .clip(10)
.stretch(1/10)
// .loopAt(10)
.hush()

$: n("<x*4 x*4 x(5,8,2) x*4 x(5,8,2) x*4 x*8 x(6,8,5)>")
  .s("kick:0:0.5")
  .velocity(".8 .9")
  .pan(cosine.segment(8).range(0.2,0.8).vibmod(2).slow(1))
  // .hush()

  $: n(irand(6).struct("<x x [x x], [x x x] x x x>*4"))
    .scale("c2:pelog")
    .scaleTranspose("<0>*8")
      .s("wavetables:2")
      .gain(saw2.segment(2).range(0,.05).vibmod(1).slow(4))._scope()
      .pan(saw.segment(2).range(0.3,0.7).vibmod(6).slow(1))
      // .hush()

      $: n(irand(6).struct("<x x [x x], [x x x] x x x>*1"))
        .scale("c1:pelog")
        .scaleTranspose("<-1 0 2 4 3>*8")
          .velocity(".8 .9")
          .s("wavetables:0:0,wavetables:5:0, wavetables:6:1")
          .clip(1)
          .room(.5)
          .roomsize(.4)
          .delay(.85)
          .pan(sine.segment(8).vibmod(2).slow(1))
          .postgain(.4)
          // .hush()