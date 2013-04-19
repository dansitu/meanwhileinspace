require(['d3', 'lib/domReady!'], function(d3, doc){

  var starfield = d3.select('.starfield');

  var WIDTH = d3.select('.starfield')[0][0].clientWidth;
  var HEIGHT = d3.select('.starfield')[0][0].clientHeight;

  var AREA = WIDTH * HEIGHT;

  // This is the ratio of my developer window size to the
  // current window size. Use it to keep star density similar
  // to what I have been working with.
  var RATIO = 1/1700000 * AREA;

  var stars = {
    dim: d3.range(RATIO*150).map(function() {
      return randomPosition(WIDTH, HEIGHT)
    })
    , bright: d3.range(RATIO*10).map(function() {
      return randomPosition(WIDTH, HEIGHT)
    })
    , nova: d3.range(RATIO*3).map(function() {
      return randomPosition(WIDTH, HEIGHT)
    })
    , bigNova: d3.range(RATIO*3).map(function() {
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

  var novaStar = function(chain){
    var core = chain.append('rect')
      .attr('class', 'star nova-core')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y})
      .attr('width', 4)
      .attr('height', 4);
    var petal1 = chain.append('rect')
      .attr('class', 'star nova-petal')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y-4})
      .attr('width', 4)
      .attr('height', 4);
    var petal2 = chain.append('rect')
      .attr('class', 'star nova-petal')
      .attr('x', function(star){return star.x+4})
      .attr('y', function(star){return star.y})
      .attr('width', 4)
      .attr('height', 4);
    var petal3 = chain.append('rect')
      .attr('class', 'star nova-petal')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y+4})
      .attr('width', 4)
      .attr('height', 4);
    var petal4 = chain.append('rect')
      .attr('class', 'star nova-petal')
      .attr('x', function(star){return star.x-4})
      .attr('y', function(star){return star.y})
      .attr('width', 4)
      .attr('height', 4);
  };

  var bigNovaStar = function(chain){
    var core = chain.append('rect')
      .attr('class', 'star nova-core')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y})
      .attr('width', 4)
      .attr('height', 4);
    var petal1 = chain.append('rect')
      .attr('class', 'star nova-petal')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y-4})
      .attr('width', 4)
      .attr('height', 4);
    var petal1a = chain.append('rect')
      .attr('class', 'star nova-petal dim')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y-8})
      .attr('width', 4)
      .attr('height', 4);
    var petal2 = chain.append('rect')
      .attr('class', 'star nova-petal')
      .attr('x', function(star){return star.x+4})
      .attr('y', function(star){return star.y})
      .attr('width', 4)
      .attr('height', 4);
    var petal2a = chain.append('rect')
      .attr('class', 'star nova-petal dim')
      .attr('x', function(star){return star.x+8})
      .attr('y', function(star){return star.y})
      .attr('width', 4)
      .attr('height', 4);
    var petal3 = chain.append('rect')
      .attr('class', 'star nova-petal')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y+4})
      .attr('width', 4)
      .attr('height', 4);
    var petal3a = chain.append('rect')
      .attr('class', 'star nova-petal dim')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y+8})
      .attr('width', 4)
      .attr('height', 4);
    var petal4 = chain.append('rect')
      .attr('class', 'star nova-petal')
      .attr('x', function(star){return star.x-4})
      .attr('y', function(star){return star.y})
      .attr('width', 4)
      .attr('height', 4);
    var petal4a = chain.append('rect')
      .attr('class', 'star nova-petal dim')
      .attr('x', function(star){return star.x-8})
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

  starfield.selectAll('g.nova')
    .data(stars.nova)
    .enter()
    .append('g')
    .call(novaStar);

  starfield.selectAll('g.big-nova')
    .data(stars.bigNova)
    .enter()
    .append('g')
    .call(bigNovaStar);

});

function randomPosition(width, height){
  return {
    x: Math.floor(Math.random()*width+1)
      , y: Math.floor(Math.random()*height+1)
  };
}
