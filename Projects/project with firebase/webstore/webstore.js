// (document).ready(function() {
//     var svg = $(".sidebar"),
//         $demo = $(".demo"),
//         $path = $(".s-path"),
//         $sCont = $(".sidebar-content"),
//         $chat = $(".chat"),
//         demoTop = $demo.offset().top,
//         demoLeft = $demo.offset().left,
//         diffX = 0,
//         curX = 0,
//         finalX = 0,
//         frame = 1000 / 60,
//         animTime = 600,
//         sContTrans = 200,
//         animating = false;
  
//     var easings = {
//       smallElastic: function(t,b,c,d) {
//         var ts = (t/=d)*t;
//         var tc = ts*t;
//         return b+c*(33*tc*ts + -106*ts*ts + 126*tc + -67*ts + 15*t);
//       },
//       inCubic: function(t,b,c,d) {
//         var tc = (t/=d)*t*t;
//         return b+c*(tc);
//       }
//     };
  
//     function createD(top, ax, dir) {
//       return "M0,0 "+top+",0 a"+ax+",250 0 1,"+dir+" 0,500 L0,500";
//     }
  
//     var startD = createD(50,0,1),
//         midD = createD(125,75,0),
//         finalD = createD(200,0,1),
//         clickMidD = createD(300,80,0),
//         clickMidDRev = createD(200,100,1),
//         clickD = createD(300,0,1),
//         currentPath = startD;
  
//     function newD(num1, num2) {
//       var d = $path.attr("d"),
//           num2 = num2 || 250,
//           nd = d.replace(/\ba(\d+),(\d+)\b/gi, "a" + num1 + "," + num2);
//       return nd;
//     }
  
//     function animatePathD(path, d, time, handlers, callback, easingTop, easingX) {
//       var steps = Math.floor(time / frame),
//           curStep = 0,
//           oldArr = currentPath.split(" "),
//           newArr = d.split(" "),
//           oldLen = oldArr.length,
//           newLen = newArr.length,
//           oldTop = +oldArr[1].split(",")[0],
//           topDiff = +newArr[1].split(",")[0] - oldTop,
//           nextTop,
//           nextX,
//           easingTop = easings[easingTop] || easings.smallElastic,
//           easingX = easings[easingX] || easingTop;
  
//       $(document).off("mousedown mouseup");
  
//       function animate() {
//         curStep++;
//         nextTop = easingTop(curStep, oldTop, topDiff, steps);
//         nextX = easingX(curStep, curX, finalX-curX, steps);
//         oldArr[1] = nextTop + ",0";
//         oldArr[2] = "a" + Math.abs(nextX) + ",250";
//         oldArr[4] = (nextX >= 0) ? "1,1" : "1,0";
//         $path.attr("d", oldArr.join(" "));
//         if (curStep > steps) {
//           curX = 0;
//           diffX = 0;
//           $path.attr("d", d);
//           currentPath = d;
//           if (handlers) handlers1();
//           if (callback) callback();
//           return;
//         }
//         requestAnimationFrame(animate);
//       }
//       animate();
//     }
  
//     function handlers1() {
  
//       $(document).on("mousedown touchstart", ".s-path", function(e) {
//         var startX =  e.pageX || e.originalEvent.touches[0].pageX;
  
//         $(document).on("mousemove touchmove", function(e) {
//           var x = e.pageX || e.originalEvent.touches[0].pageX;
//           diffX = x - startX;
//           if (diffX < 0) diffX = 0;
//           if (diffX > 300) diffX = 300;
//           curX = Math.floor(diffX/2);
//           $path.attr("d", newD(curX));
//         });
//       });
  
//       $(document).on("mouseup touchend", function() {
//         $(document).off("mousemove touchmove");
//         if (animating) return;
//         if (!diffX) return;
//         if (diffX < 40) {
//           animatePathD($path, newD(0), animTime, true);
//         } else {
//           animatePathD($path, finalD, animTime, false, function() {
//             $sCont.addClass("active");
//             setTimeout(function() {
//               $(document).on("click", closeSidebar);
//             }, sContTrans);
//           });
//         }
//       });
  
//     }
  
//     handlers1();
  
//     function closeSidebar(e) {
//       if ($(e.target).closest(".sidebar-content").length ||
//           $(e.target).closest(".chat").length) return;
//       if (animating) return;
//       animating = true;
//       $sCont.removeClass("active");
//       $chat.removeClass("active");
//       $(".cloned").addClass("removed");
//       finalX = -75;
//       setTimeout(function() {
//         animatePathD($path, midD, animTime/3, false, function() {
//           $chat.hide();
//           $(".cloned").remove();
//           finalX = 0;
//           curX = -75;
//           animatePathD($path, startD, animTime/3*2, true);
//           animating = false;
//         }, "inCubic");
//       }, sContTrans);
//       $(document).off("click", closeSidebar);
//     }
  
//     function moveImage(that) {
//       var $img = $(that).find(".contact__photo"),
//           top = $img.offset().top - demoTop,
//           left = $img.offset().left - demoLeft,
//           $clone = $img.clone().addClass("cloned");
  
//       $clone.css({top: top, left: left});
//       $demo.append($clone);
//       $clone.css("top");
//       $clone.css({top: "1.8rem", left: "25rem"});
//     }
  
//     function ripple(elem, e) {
//       var elTop = elem.offset().top,
//           elLeft = elem.offset().left,
//           x = e.pageX - elLeft,
//           y = e.pageY - elTop;
//       var $ripple = $("<div class='ripple'></div>");
//       $ripple.css({top: y, left: x});
//       elem.append($ripple);
//     }
  
//     $(document).on("click", ".contact", function(e) {
//       if (animating) return;
//       animating = true;
//       $(document).off("click", closeSidebar);
//       var that = this,
//           name = $(this).find(".contact__name").text(),
//           online = $(this).find(".contact__status").hasClass("online");
//       $(".chat__name").text(name);
//       $(".chat__online").removeClass("active");
//       if (online) $(".chat__online").addClass("active");
//       ripple($(that),e);
//       setTimeout(function() {
//         $sCont.removeClass("active");
//         moveImage(that);
//         finalX = -80;
//         setTimeout(function() {
//           $(".ripple").remove();
//           animatePathD($path, clickMidD, animTime/3, false, function() {
//             curX = -80;
//             finalX = 0;
//             animatePathD($path, clickD, animTime*2/3, true, function() {
//               $chat.show();
//               $chat.css("top");
//               $chat.addClass("active");
//               animating = false;
//             });
//           }, "inCubic");
//         }, sContTrans);
//       }, sContTrans);
//     });
  
//     $(document).on("click", ".chat__back", function() {
//       if (animating) return;
//       animating = true;
//       $chat.removeClass("active");
//       $(".cloned").addClass("removed");
//       setTimeout(function() {
//         $(".cloned").remove();
//         $chat.hide();
//         finalX = 100;
//         animatePathD($path, clickMidDRev, animTime/3, false, function() {
//           curX = 100;
//           finalX = 0;
//           animatePathD($path, finalD, animTime*2/3, true, function() {
//             $sCont.addClass("active");
//             $(document).on("click", closeSidebar);
//             animating = false;
//           });
//         }, "inCubic");
//       }, sContTrans);
//     });
  
//     $(window).on("resize", function() {
//       demoTop = $demo.offset().top;
//       demoLeft = $demo.offset().left;
//     });
  
//   });



(function() {
  App.init();
});
var App = {
  init: function() {
        this.datetime(), this.side.nav(), this.search.bar(), this.navigation(), this.hyperlinks(), setInterval("App.datetime();", 1e3)
  },
  datetime: function() {
        var e = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"),
              t = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"),
              a = new Date,
              i = a.getYear();
        1e3 > i && (i += 1900);
        var s = a.getDay(),
              n = a.getMonth(),
              r = a.getDate();
        10 > r && (r = "0" + r);
        var l = a.getHours(),
              c = a.getMinutes(),
              h = a.getSeconds(),
              o = "AM";
        l >= 12 && (o = "PM"), l > 12 && (l -= 12), 0 == l && (l = 12), 9 >= c && (c = "0" + c), 9 >= h && (h = "0" + h), $(".welcome .datetime .day").text(e[s]), $(".welcome .datetime .date").text(t[n] + " " + r + ", " + i), $(".welcome .datetime .time").text(l + ":" + c + ":" + h + " " + o)
  },
  title: function(e) {
        return $(".header>.title").text(e)
  },
  side: {
        nav: function() {
              this.toggle(), this.navigation()
        },
        toggle: function() {
              $(".ion-ios-navicon").on("touchstart click", function(e) {
                    e.preventDefault(), $(".sidebar").toggleClass("active"), $(".nav").removeClass("active"), $(".sidebar .sidebar-overlay").removeClass("fadeOut animated").addClass("fadeIn animated")
              }), $(".sidebar .sidebar-overlay").on("touchstart click", function(e) {
                    e.preventDefault(), $(".ion-ios-navicon").click(), $(this).removeClass("fadeIn").addClass("fadeOut")
              })
        },
        navigation: function() {
              (".nav-left a").on("touchstart click", function(e) {
                    e.preventDefault();
                    var t = $(this).attr("href").replace("#", "");
                    $(".sidebar").toggleClass("active"), $(".html").removeClass("visible"), "home" == t || "" == t || null == t ? $(".html.welcome").addClass("visible") : $(".html." + t).addClass("visible"), App.title($(this).text())
              })
        }
  },
  search: {
        bar: function() {
              (".header .ion-ios-search").on("touchstart click", function() {
                    var e = ($(".header .search input").hasClass("search-visible"), $(".header .search input").val());
                    return "" != e && null != e ? (App.search.html($(".header .search input").val()), !1) : ($(".nav").removeClass("active"), $(".header .search input").focus(), void $(".header .search input").toggleClass("search-visible"))
              }), (".search form").on("submit", function(e) {
                    e.preventDefault(), App.search.html($(".header .search input").val())
              })
        },
        html: function(e) {
              (".search input").removeClass("search-visible"), (".html").removeClass("visible"), (".html.search").addClass("visible"), App.title("Result"), (".html.search").html((".html.search").html()), (".html.search .key").html(e), (".header .search input").val("")
        }
  },
  navigation: function() {
        (".nav .mask").on("touchstart click", function(e) {
              e.preventDefault(), (this).parent().toggleClass("active")
        })
  },
  hyperlinks: function() {
        (".nav .nav-item").on("click", function(e) {
              e.preventDefault();
              var t = (this).attr("href").replace("#", "");
              (".html").removeClass("visible"), (".html." + t).addClass("visible"), (".nav").toggleClass("active"), App.title((this).text())
        })
  }
};