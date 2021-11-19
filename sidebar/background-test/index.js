$shy_display = false;

function reset() {
  $("#me").fadeIn("slow");
  $shy_display = false;
  }

$('#top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });

$( "#me" ).hover(function() {
  $( "#me" ).fadeOut("slow", function() {
    if(!$shy_display) {
      alert("If you hadn't noticed, I am shy");
      $shy_display = true;
      }
    });
  });

setTimeout(function(){
        $(".element0 .type").typed({
            strings: ["apt-get install konquer"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: 1, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 0);

setTimeout(function(){
        $(".element1").css("display", "inherit");
        $(".element1 .type").typed({
            strings: ["konquer -r /world"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: 1, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 2000);

setTimeout(function(){
        $(".element2").css("display", "inherit");
        $(".element2 .type").typed({
            strings: ["chown gabriel /world"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: 1, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 4000);

setTimeout(function(){
        $(".element3").css("display", "inherit");
        $(".element3 .type").typed({
            strings: ["chmod 700 /world"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: 1, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 6000);

setTimeout(function(){
        $(".element4").css("display", "inherit");
        $(".element4 .type").typed({
            strings: ["chown parents /world/australia"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: 1, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 8000);

$(".home-link").mouseup(function() {
  $(".home").fadeOut("slow", function() {
    $(".work").fadeOut("slow", function() {
      $(".project").fadeOut("slow", function() {
        reset();
        $(".home").fadeIn("slow");
        });
      });
    });
  });

$(".work-link").mouseup(function() {
  $(".home").fadeOut("slow", function() {
    $(".work").fadeOut("slow", function() {
      $(".project").fadeOut("slow", function() {
        reset();
        $(".work").fadeIn("slow");
        });
      });
    });
  });

$(".project-link").mouseup(function() {
  $(".home").fadeOut("slow", function() {
    $(".work").fadeOut("slow", function() {
      $(".project").fadeOut("slow", function() {
        reset();
        $(".project").fadeIn("slow");
        });
      });
    });
  });
