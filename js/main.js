require(['d3', 'lib/domReady!'], function(d3, doc){

  var starfield = d3.select('.starfield');

  var WIDTH = d3.select('.starfield')[0][0].clientWidth;
  var HEIGHT = d3.select('.starfield')[0][0].clientHeight;

  // var stars = generateStars();
  var stars = {
    dim: d3.range(100).map(function() {
      return randomPosition(WIDTH, HEIGHT)
    })
    , bright: d3.range(10).map(function() {
      return randomPosition(WIDTH, HEIGHT)
    })
  };

  var dimStar = function(chain){
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

  starfield.selectAll('g.dim')
    .data(stars.dim)
    .enter()
    .append('g')
    .call(dimStar);

  starfield.selectAll('g.bright')
    .data(stars.bright)
    .enter()
    .append('g')
    .call(brightStar);

});

function randomPosition(width, height){
  return {
    x: Math.floor(Math.random()*width+1)
      , y: Math.floor(Math.random()*height+1)
  };
}
