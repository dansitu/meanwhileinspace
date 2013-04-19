require(['d3', 'lib/domReady!'], function(d3, doc){

  var starfield = d3.select('.starfield');

  var WIDTH = d3.select('.starfield')[0][0].clientWidth;
  var HEIGHT = d3.select('.starfield')[0][0].clientHeight;

  // var stars = generateStars();
  var stars = {
    small: d3.range(100).map(function() {
      return {
        x: Math.floor(Math.random()*WIDTH+1)
        , y: Math.floor(Math.random()*HEIGHT+1)
      };
    })
  };

  var dimStar = function(chain){
    console.log(chain);
    console.log(this);
    chain.append('rect')
      .attr('class', 'star dim')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y})
      .attr('width', 4)
      .attr('height', 4);
  };

  var brightStar = function(chain){
    chain.append('rect')
      .attr('class', 'star bright')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y})
      .attr('width', 4)
      .attr('height', 4);
  };

  starfield.selectAll('rect')
    .data(stars.small)
    .enter()
    .append('g')
    .call(dimStar);

});
