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
  }
  
  currentTime()
