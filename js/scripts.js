$(document).ready(function() {
  $("form").submit(function(event) {
    var spectrum = 0;
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();

    if(question1 === "agree") {
      spectrum += 1;
    } else {
      spectrum -= 1;
    }
    if(question2 === "agree") {
      spectrum += 1;
    } else {
      spectrum -= 1;
    }

    if(question3 === "agree") {
      spectrum += 1;
    } else {
      spectrum -= 1;
    }

    if(question4 === "agree") {
      spectrum += 1;
    } else {
      spectrum -= 1;
    }

    if(question5 === "agree") {
      spectrum += 1;
    } else {
      spectrum -= 1;
    }

    if(spectrum >=1) {
      $("#gop").show();
      $("#dem").hide();
    } else {
      $("#dem").show();
      $("#gop").hide();
    }


    event.preventDefault();
  });
});
