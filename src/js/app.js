
$('#tryit').click(function (e) {
  e.preventDefault();
  
  $('.face').remove();

  $('#picture').faceDetection({
    complete: function (faces) {
      for (var i = 0; i < faces.length; i++) {
        console.log("couco");
      }
    },
    error:function (code, message) {
      alert('Error: ' + message);
    }
  });
});