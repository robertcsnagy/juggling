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

  var radiobutton = request.session.data['how-contacted'];

  if (radiobutton == "answer-yes"){
    response.redirect('/supplier/acceptconfirmation');
  } else {
    response.redirect('/supplier/declinedconfirmation');
  }

})
