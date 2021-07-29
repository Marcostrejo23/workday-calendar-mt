let button = $('.saveBtn')


let now = moment()
$("#head").text(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));

function currentTime() {
    let current = moment().hours()
    let time = $('.time-block');

    time.each(function () {
      let hour = parseInt($(this).attr('id'))
      if (hour === current) {
        $(this).children('.col-sm-10').addClass('present col-sm-10 description')
      } else if (current > hour) {
        $(this).children('.col-sm-10').addClass('past col-sm-10 description')
      } else {
        $(this).children('.col-sm-10').addClass('future col-sm-10 description')
      }
    })
  };
  currentTime();
//to save the information in the text area
  var container = $(".container")

container.on("click","#save-btn1", function(event){
  event.preventDefault();
  var info1 = document.getElementById("nine").value;
  console.log(info1);
  localStorage.setItem("info1",info1)
});
container.on("click","#save-btn2", function(event){
  event.preventDefault();
  var info2 = document.getElementById("ten").value;
  console.log(info2);
  localStorage.setItem("info2",info2)
});
container.on("click","#save-btn3", function(event){
  event.preventDefault();
  var info3 = document.getElementById("eleven").value;
  console.log(info3);
  localStorage.setItem("info3",info3)
});
container.on("click","#save-btn4", function(event){
  event.preventDefault();
  var info4 = document.getElementById("twelve").value;
  console.log(info4);
  localStorage.setItem("info4",info4)
});
container.on("click","#save-btn5", function(event){
  event.preventDefault();
  var info5 = document.getElementById("thirteen").value;
  console.log(info5);
  localStorage.setItem("info5",info5)
});
container.on("click","#save-btn6", function(event){
  event.preventDefault();
  var info6 = document.getElementById("fourteen").value;
  console.log(info6);
  localStorage.setItem("info6",info6)
});
container.on("click","#save-btn7", function(event){
  event.preventDefault();
  var info7 = document.getElementById("fifteen").value;
  console.log(info7);
  localStorage.setItem("info7",info7)
});
//to make the saved text appear on refresh.
function openPage(){
  if(document.getElementById("nine").value){
  }else {
  document.getElementById("nine").value = window.localStorage.getItem('info1');
  } if (document.getElementById("ten").value){
  }else {
  document.getElementById("ten").value = window.localStorage.getItem('info2');
  } if (document.getElementById("eleven").value){
  } else {
  document.getElementById("eleven").value = window.localStorage.getItem('info3');
  } if (document.getElementById("twelve").value){
  } else {
  document.getElementById("twelve").value = window.localStorage.getItem('info4');
  } if(document.getElementById("thirteen").value){
  } else {
document.getElementById("thirteen").value = window.localStorage.getItem('info5');
  } if (document.getElementById("fourteen").value){
  } else {
document.getElementById("fourteen").value = window.localStorage.getItem('info6');
  } if (document.getElementById("fifteen").value){
  } else {
document.getElementById("fifteen").value = window.localStorage.getItem('info7');
  }

};

openPage();