const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// router.post('/juggling-balls-answer', function(request, response){
//
//   var jugglingBalls = request.session.data['juggling-balls']
//
//   if (jugglingBalls == "3 or more"){
//     response.redirect('/juggling-trick')
//   } else {
//     response.redirect('/ineligible')
//   }
// })

router.post('/doyouaccept', function(request, response){

debugger;
  var radiobutton = document.querySelector('input[type="radio"]:checked').value;

  if (radiobutton=="answer-yes"){
    response.redirect('/acceptconfirmation')
  } else {
    response.redirect('/declinedconfirmation')
  }

})
