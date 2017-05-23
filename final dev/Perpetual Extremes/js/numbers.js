
var format = d3.format(",d");
var svg = d3.select("body").append("h1")
  .transition()
    .duration(15000)
    .on("start", function repeat() {
      d3.active(this)
          .tween("text", function() {
            var that = d3.select(this),
                i = d3.interpolateNumber(that.text().replace(/,/g, ""), 117708);
            return function(t) { that.text(format(i(t))); };
          })
        .transition()
          .delay(5000)
          .on("start", repeat);

    });
