var r = false;

var result = document.getElementById('result'),
     min = document.getElementById('min').value,
     max = document.getElementById('max').value;

function press()
{
     var min = document.getElementById('min').value,
     max = document.getElementById('max').value;
     setTimeout(function(){result.innerHTML = (Math.round(Math.random() * (Number(max) - 1)) + Number(min));}, 1500);
}

function myPress()
{
     setTimeout(function(){result.innerHTML = 28}, 1500); //  от 1 до 3
}


function changeFunc()
{
     if(!r)
     {
          document.getElementById('btn').removeAttribute("onclick");
          document.getElementById('btn').setAttribute("onclick", "press()");
          r = true;
     }else {
          document.getElementById('btn').removeAttribute("onclick");
          document.getElementById('btn').setAttribute("onclick", "myPress()");
          r = false;
     }
}

changeFunc();
