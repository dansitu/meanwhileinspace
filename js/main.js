require(['d3', 'lib/domReady!'], function(d3, doc){

  var starfield = d3.select('.starfield');

  starfield.selectAll('rect')
    .data([[40,30], [60,90]])
    .enter().append('rect')
      .attr('class', 'star')
      .attr('x', function(data){return data[0]})
      .attr('y', function(data){return data[1]})
      .attr('width', 4)
      .attr('height', 4);



});
