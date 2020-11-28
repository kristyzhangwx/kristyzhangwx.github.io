(function ($) {
  $(".article").each(function (i) {
    $(this)
      .find("img")
      .each(function () {
        if ($(this).parent().hasClass("fancybox")) return;

        var alt = this.alt;

        if (alt) $(this).after('<span class="caption">' + alt + "</span>");

        $(this).wrap(
          '<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>'
        );
      });

    $(this)
      .find(".fancybox")
      .each(function () {
        $(this).attr("rel", "article" + i);
      });
  });

  if ($.fancybox) {
    $(".fancybox").fancybox();
  }

  // Change ol\ul list style
  $(".article ul, .article ol").each(function (i, elem) {
    $(elem)
      .find("li")
      .each(function (index, li) {
        var $li = $(li);

        if (!$li.children().hasClass("li-inner")) {
          $li.wrapInner('<span class="li-inner"></span>');
        }
      });
  });

  $('.article input[type="checkbox"]').each(function (i, elem) {
    var $elem = $(elem);
    var checked = elem.checked;
    var dom =
      '<span class="checkbox-wrap ' + (checked ? "checked" : "") + '"></span>';

    if (!$elem.parent().hasClass("checkbox-wrap")) {
      var $parent = $elem.parent().parent();
      var text = $parent.text();

      $parent.html(
        dom +
          '<span class="check-content ' +
          (checked ? "checked" : "") +
          '">' +
          text +
          "</span>"
      );
    }
  });

  // Avatar
  var $mask = $(".about-me-mask");
  $(".avatar").on("click", function () {
    if (!$mask.hasClass("open")) {
      $mask.addClass("open");
    }
  });

  $mask.on("click", function (e) {
    if (e.target.classList.contains("about-me-mask")) {
      $mask.removeClass("open");
    }
  });

  // Back to top
  var $backToTop = $("#backToTop");
  $(document).on("scroll", function () {
    var sX = $(document).scrollTop();
    if (sX > 100) {
      $backToTop.addClass("show");
    }

    if (sX <= 100) {
      $backToTop.removeClass("show");
    }
  });

  $backToTop.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });

  var a_idx = 0,b_idx=0;
  $("body").click(function (e) {
    if(e.target.tagName!=="BODY") return;
    var a = new Array(
      "天灵灵",
      "地灵灵",
      "太上老君不显灵",
      "富强",
      "民主",
      "文明",
      "和谐",
      "自由",
      "平等",
      "公正",
      "法治",
      "爱国",
      "敬业",
      "诚信",
      "友善"
    );
    var b = new Array(
      "#eccc68",
      "#ff7f50",
      "#ff6b81",
      "#ffa502",
      "#ff6348",
      "#ff4757",
      "#7bed9f",
      "#70a1ff",
      "#5352ed",
      "#2ed573",
      "#1e90ff",
      "#3742fa",
    )
    var $i = $("<span/>").text(a[a_idx]);
    var $color = b[b_idx]
    a_idx = (a_idx + 1) % a.length;
    b_idx = (b_idx + 1) % b.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 9999999,
      top: y - 20,
      left: x,
      position: "absolute",
      "font-weight": "bold",
      color: $color,
    });
    $("body").append($i);
    $i.animate(
      {
        top: y - 180,
        opacity: 0,
      },
      1500,
      function () {
        $i.remove();
      }
    );
  });

})(jQuery);
