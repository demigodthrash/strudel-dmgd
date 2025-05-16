/*  
@title Singularity (Optimized)  
@by ☠️DEMIGOD☠️  
@license CC BY-NC-SA  
*/  
  
setcpm(143)  
  
// Fungsi helper untuk membuat pola dasar  
const Pat4 = (sample) => s(sample).chop(4*4).loopat(4)._punchcard()
const Pat8 = (sample) => s(sample).chop(8*4).loopat(8)._punchcard()   
  
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
  // Kick  
  Pat4("singularity:2").postgain(slider(0, 0, 1, 0.01)),  
    
  // Rumble (dengan efek lengkap)  
  applyFilter(  
    applyReverb(  
      applyDelay(
        Pat4("singularity:2")
      )  
    )  
  ).postgain(slider(0.38, 0, 1, .01)),  
    
  // Kick groove  
  Pat4("singularity:3").postgain(slider(1, 0, 1, .01)),  
    
  // Kick move  
  Pat4("singularity:4").postgain(slider(1, 0, 1, .01)),  
    
  // Marker (dimatikan)  
  Pat4("singularity:5").postgain(slider(0, 0, 1, 0.01)),  
    
  // Noise  
  Pat4("singularity:6").postgain(slider(0.48, 0, 1, .01)),  
    
  // Perc  
  Pat4("singularity:7").postgain(slider(0.98, 0, 1, .01)),  
    
  // Rev
  Pat8("singularity:8").postgain(slider(0, 0, 1, 0.01)),  
    
  // Poly  
  Pat4("singularity:9").postgain(slider(0.57, 0, 1, 0.01)),  
    
  // Atmos  
  Pat4("singularity:10").postgain(slider(1, 0, 1, 0.01)),  
    
  // Bass  
  Pat4("singularity:11").postgain(slider(1, 0, 1, 0.01))  
)  
// Efek global yang dikomentari  
// .coarse("<1 4 8 16 32>")  
// .crush("<16 8 7 6 5 4 3 2>")  
// .distort("<0:.1 2:.1 3:.1 10:.05>")  
// .phaser(2).phaserdepth("<0 .5 .75 1>")  
// .compressor("-16:20:10:.002:.02")  
// .adsr(".1:.1:.5:.2")  
.gain(slider(0.51, 0, 1, 0.01))  
.scope()