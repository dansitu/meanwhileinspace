require(['d3', 'lib/domReady!'], function(d3, doc){

  var starfield = d3.select('.starfield');
  console.log(starfield);

  var stars = generateStars();

  var dimStar = function(chain){
    console.log(chain);
    console.log(this);
    chain.append('rect')
      .attr('class', 'star dim')
      .attr('x', function(data){return data[0]})
      .attr('y', function(data){return data[1]})
      .attr('width', 4)
      .attr('height', 4);
  };

  var brightStar = function(chain){
    chain.append('rect')
      .attr('class', 'star bright')
      .attr('x', function(data){return data[0]})
      .attr('y', function(data){return data[1]})
      .attr('width', 4)
      .attr('height', 4);
  };

  starfield.selectAll('rect')
    .data(stars.small)
    .enter()
    .append('g')
    .call(dimStar);

});

function generateStars(){

  var SMALL_COUNT = 100;

  var BIG_COUNT = 10;

  var stars = {
    small: []
    , big: []
  };

  var WIDTH = d3.select('.starfield')[0][0].clientWidth;
  var HEIGHT = d3.select('.starfield')[0][0].clientHeight;

  for(var i=0; i<=SMALL_COUNT; i++){
    
    var x = Math.floor(Math.random()*WIDTH+1)
    var y = Math.floor(Math.random()*HEIGHT+1)

    console.log(WIDTH);
    stars.small.push([x,y]);
  
  }

  return stars;

}
