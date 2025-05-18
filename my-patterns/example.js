// setcpm(143) 
let tempo = 100
let cl = tempo / 60 /4
setcps(cl)

samples('local:')
stack(
s("casio:0 casio:1 casio:1 casio:1")
  .gain(0.5)
  .color("red")
,
s("<bd bd bd*2 bd bd - bd*8>*4"),
s("<kick:1 kick:1 kick:1*2 kick:1 kick:1 - kick:1*8>*4"),
s("kick:1")
  .fit()
  .cut(1)
  .slice(4, "<0 1 2*2 1 1 - 3*8>*4")
  .color("orange")
  .gain(0.5)
  .speed(cl)
  .hush()
  ._punchcard()
,
s("kick:2")
  .fit()
  .cut(1)
  .slice(4, "<0 1 - 1 1 2*4 ->*4")
  .color("orange")
  .hush()
  ._punchcard()
)
.spectrum()



































