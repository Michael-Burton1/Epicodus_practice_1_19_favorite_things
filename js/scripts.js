$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    let input1 = $("#Input1").val();
    let input2 = $("#Input2").val();
    let input3 = $("#Input3").val();
    let input4 = $("#Input4").val();
    let array = [input1, input2, input3, input4];
    let array2 = [];
    $("#firstEl").click(function() {
      array2.push(input1);
      //$(".output").text(array2);
      $("ul").prepend("<li>" + array[0] + "</li>");
    });

    $("#secondEl").click(function() {
      array2.push(input2);
      $("ul").prepend("<li>" + array[1] + "</li>");
    });

    $("#fourthEl").click(function() {
      array2.push(input4);
      //$(".output").text(array2);
      $("ul").prepend("<li>" + array[3] + "</li>");

    });
  });
});