require(['d3', 'lib/domReady!'], function(d3, doc){

  var starfield = d3.select('.starfield');

  var STARSIZE = 2;

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
    , bright: d3.range(RATIO*20).map(function() {
      return randomPosition(WIDTH, HEIGHT)
    })
    , red: d3.range(RATIO*8).map(function() {
      return randomPosition(WIDTH, HEIGHT)
    })
    , nova: d3.range(RATIO*5).map(function() {
      return randomPosition(WIDTH, HEIGHT)
    })
    , bigNova: d3.range(RATIO*12).map(function() {
      return randomPosition(WIDTH, HEIGHT)
    })
  };

  var dimStar = function(chain){
    chain.attr('class', 'dim')
      .append('rect')
      .attr('class', 'star')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
  };

  var brightStar = function(chain){
    chain.attr('class', 'bright')
      .append('rect')
      .attr('class', 'star')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
  };

  var redStar = function(chain){
    chain.attr('class', 'red')
      .append('rect')
      .attr('class', 'star')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
  };

  var novaStar = function(chain){
    var core = chain.attr('class', 'nova')
      .append('rect')
      .attr('class', 'nova-core')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
    var petal1 = chain.append('rect')
      .attr('class', 'nova-petal')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y-STARSIZE})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
    var petal2 = chain.append('rect')
      .attr('class', 'nova-petal')
      .attr('x', function(star){return star.x+STARSIZE})
      .attr('y', function(star){return star.y})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
    var petal3 = chain.append('rect')
      .attr('class', 'nova-petal')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y+STARSIZE})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
    var petal4 = chain.append('rect')
      .attr('class', 'nova-petal')
      .attr('x', function(star){return star.x-STARSIZE})
      .attr('y', function(star){return star.y})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
  };

  var bigNovaStar = function(chain){
    var core = chain.attr('class', 'big-nova')
        .append('rect')
        .attr('class', 'nova-core')
        .attr('x', function(star){return star.x})
        .attr('y', function(star){return star.y})
        .attr('width', STARSIZE)
        .attr('height', STARSIZE);
    var petal1 = chain.append('rect')
      .attr('class', 'nova-petal')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y-STARSIZE})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
    var petal1a = chain.append('rect')
      .attr('class', 'nova-petal dim')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y-(STARSIZE*2)})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
    var petal2 = chain.append('rect')
      .attr('class', 'nova-petal')
      .attr('x', function(star){return star.x+STARSIZE})
      .attr('y', function(star){return star.y})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
    var petal2a = chain.append('rect')
      .attr('class', 'nova-petal dim')
      .attr('x', function(star){return star.x+(STARSIZE*2)})
      .attr('y', function(star){return star.y})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
    var petal3 = chain.append('rect')
      .attr('class', 'nova-petal')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y+STARSIZE})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
    var petal3a = chain.append('rect')
      .attr('class', 'nova-petal dim')
      .attr('x', function(star){return star.x})
      .attr('y', function(star){return star.y+(STARSIZE*2)})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
    var petal4 = chain.append('rect')
      .attr('class', 'nova-petal')
      .attr('x', function(star){return star.x-STARSIZE})
      .attr('y', function(star){return star.y})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
    var petal4a = chain.append('rect')
      .attr('class', 'nova-petal dim')
      .attr('x', function(star){return star.x-(STARSIZE*2)})
      .attr('y', function(star){return star.y})
      .attr('width', STARSIZE)
      .attr('height', STARSIZE);
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

  starfield.selectAll('g.red')
    .data(stars.red)
    .enter()
    .append('g')
    .call(redStar);

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

  var twinkle_bigNova = function(){

    // Select all the big novae
    var bigNovae = starfield.selectAll('g.big-nova');

    // Choose one at random to animate
    var randomIndex = Math.floor(Math.random()*bigNovae[0].length);
    
    // I'm sure there's a better way to select the random
    // element than this
    bigNovae.each(function(datum, index){
      if(index !== randomIndex) return;

      // Animate the transition
      d3.select(this)
        .selectAll('rect.nova-petal:not(.dim)')
        .transition()
        .duration(500)
        .style('fill', '#888')
        .transition()
        .duration(500)
        .style('fill', '#666');
    });

    // Twinkle again soon
    setTimeout(twinkle_bigNova, 6000 );
  
  }

  twinkle_bigNova();

});

function randomPosition(width, height){
  return {
    x: Math.floor(Math.random()*width+1)
      , y: Math.floor(Math.random()*height+1)
  };
}
