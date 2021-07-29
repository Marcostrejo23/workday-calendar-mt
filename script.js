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
  var container = $('.container')

console.log(document.getElementById("nine").value)

container.on("click","save-btn1", function(event){
  event.preventDefault();
  var info1 = document.getElementById('nine').value;
  console.log(info1);
  localStorage.setItem("info1",info1)
});

// function openPage(){
//   if(document.getElementById("nine").value){
//   }else {
//   document.getElementById("nine").value = window.localStorage.getItem('info1');
//   };