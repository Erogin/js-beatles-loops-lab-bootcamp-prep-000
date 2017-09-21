function theBeatlesPlay(musicians, instruments){
  var sentenceObj = []
    for (let i = 0; i < musicians.length; i++){
      var sentence = musicians[i] + " plays " + instruments[i]
      sentenceObj[i] = sentence
    }
    return sentenceObj
}

function johnLennonFacts(facts){
  let i = 0
  var length = facts.length
  while (i< length){
    facts[i] = facts[i] +"!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var emptArray = []
  let i = 0
    do {
    console.log('I love the Beatles!')
    i++
  } while (i<15)  
}