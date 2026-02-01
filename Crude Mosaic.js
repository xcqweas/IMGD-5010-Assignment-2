function setup() {
  createCanvas(800, 800)
  let list = []
  for (let i = 0; i < 40; i++){
    list.push(i)
  }
  for (let i = 0; i < 40; i++){
    for (let j = 0; j < 40; j++){
      if(i<20 && j<20){
        fill(255, i*12.75, j*12.75)
      }
      else if(i>=20 && j<20){
        fill(i*12.75, 255, j*12.75)
      }
      else if(i<20 && j>=20){
        fill(255, i*12.75, j*12.75)
      }
      else if(i>=20 && j>=20){
        fill(i*12.75, 255, j*12.75)
      }
      rect(i*20, j*20, 20, 20, 4, 4, 4, 4)
    }
  }
  
  let flaw_count = random(10, 200)
  
  for (let k = 0; k < flaw_count; k++){
    let x = random(list)
    let y = random(list)
    let R = random(0, 256)
    let G = random(0, 256)
    let B = random(0, 256)
    fill(R, G, B)
    rect(x*20, y*20, 20, 20, 3, 3, 3, 3)
  }
}
