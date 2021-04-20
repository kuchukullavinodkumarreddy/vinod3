
      function printEvenNums(){
    
        var start = parseInt(document.getElementById("txt1").value);
        var end = parseInt(document.getElementById("txt2").value);
        var evenNums = "<br>Even Numbers:<br>";
 
        for(i=start; i<=end; i++)
        {
          if(i % 2 == 0)
          {
            evenNums += i + "<br>";
          }
        }

        document.getElementById("result1").innerHTML = evenNums;
      } 
      function printOddNums(){
    
    var start = parseInt(document.getElementById("txt1").value);
    var end = parseInt(document.getElementById("txt2").value);
    var oddNums = "<br>Odd Numbers:<br>";

    for(i=start; i<=end; i++)
    {
      if((i % 2 )!= 0)
      {
        oddNums += i + "<br>";
      }
    }

    document.getElementById("result2").innerHTML = oddNums;
  }

