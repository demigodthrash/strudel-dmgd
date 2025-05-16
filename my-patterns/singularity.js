/*  
@title Singularity (Optimized)  
@by ☠️DEMIGOD☠️  
@license CC BY-NC-SA  
*/  
  
setcpm(143) 
samples('local:')

  
// Fungsi helper untuk membuat pola dasar  
const Pat1 = (sample) => s(sample).chop(1*4).loopat(4)._punchcard()
const Pat2 = (sample) => s(sample).chop(8*4).loopat(8)._punchcard()
const Pat16 = (sample) => s(sample).chop((16*4)*4).loopat(16*4)._punchcard()
  
// Fungsi untuk menerapkan efek reverb  
const applyReverb = (pattern, roomVal = 0.7) => pattern  
  .room(slider(1, 0, 1, 0.01))  
  .rsize(slider(5, 1, 10, 1))  
  .rdim(slider(3000, 1000, 20000, 100))  
  .rlp(slider(13100, 1000, 20000, 100))
  .rfade(1)
  
// Fungsi untuk menerapkan efek delay  
const applyDelay = (pattern, delayVal = 0.55) => pattern  
  .delay(slider(delayVal, 0, 1, 0.01))  
  .delaytime(slider(0.22, 0, 0.5, 0.01))  
  .delayfeedback(slider(0.59, 0, .99, 0.01))  
  
// Fungsi untuk menerapkan filter  
const applyFilter = (pattern, lpfVal = 1500) => pattern  
  .lpf(slider(lpfVal, 100, 20000, 100))  
  .lpq(slider(14, 0, 50, 1))  
  
// Membuat pola-pola dengan konfigurasi yang berbeda  
stack( 
  // s("casio"),
  // Kick  
  Pat1("kick:0")
  .euclidrot(9,24,1)
  .slow(8)
  .cut(1)
  .postgain(slider(1, 0, 1, 0.01)),
  Pat1("kick:1/4*3 kick:1/4*6").postgain(slider(0.58, 0, 1, 0.01)),
  Pat1("kick:2/4*6").postgain(slider(0.49, 0, 1, 0.01)),
  // Atmos 
  Pat1("atmos:0/4*.24").postgain(slider(1, 0, 1, 0.01)),
  Pat1("atmos:1/4*6").postgain(slider(1, 0, 1, 0.01)),

  
  // Rumble (dengan efek lengkap)  
  applyFilter(  
    applyReverb(  
      applyDelay(
        Pat16("singularity:2")
      )  
    )  
  ).postgain(slider(0.38, 0, 1, .01)),  
     
)  
// Efek global yang dikomentari  
// .coarse("<1 4 8 16 32>")  
// .crush("<16 8 7 6 5 4 3 2>")  
// .distort("<0:.1 2:.1 3:.1 10:.05>")  
// .phaser(2).phaserdepth("<0 .5 .75 1>")  
// .compressor("-16:20:10:.002:.02")  
// .adsr(".1:.1:.5:.2")  
.gain(slider(1, 0, 1, 0.01))  
.scope()