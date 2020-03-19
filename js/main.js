$(function() {

// click event
  $("#randomize").click(() => {
    console.log('clicked')
    getNewWord()
  })
// end click function

// display new word function

async function getNewWord() {
  const url = "https://sat-words-api.herokuapp.com/api/v1/words/random"

  const response = await axios.get(url)
  console.log(response.data)
  updatePage(response.data)

}

// function getNewWord() {
//
// const url = "https://sat-words-api.herokuapp.com/api/v1/words/random"
//
// $.ajax({
//   url: url,
//   type: "GET",
//   data: {}
// })
// .done((response) => {
//   console.log(response.name, response.definition)
//   updatePage(response)
// })
// .fail(() => {
//   alert('error occured')
// })
// }
// end

function updatePage(response) {

let word = response.name

  $('#word').html(word)
  $('#definition').html(response.definition)

  scrabbleScore(word)
}

async function scrabbleScore(word) {
  const url = "https://scrabble-scorer-api.herokuapp.com/api/v1/words/score"

  const response = await axios.get(url, {
    params: {
      word: word
    }
  })

  console.log(response)
  updateScore(response.data)
}

// function scrabbleScore(apple) {
//   const scrabbleUrl =
//     "https://scrabble-scorer-api.herokuapp.com/api/v1/words/score";
//
//   $.ajax({
//     url: scrabbleUrl,
//     type: "GET",
//     data: { word: apple }
//   }).done(reponse => {
//     console.log(reponse);
//     updateScore(reponse)
//   })
//   .fail(() => {
//     alert('error occured')
//   })
// }
//
function updateScore(response) {

let score = response.score
console.log(score)

$('#score').html(score)

}

})
