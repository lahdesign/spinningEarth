function spinGlobe() {
  var tmax_tl = new TimelineMax({
        delay: 0.1675,
        repeat: -1 
      });

  var globe_continents = [
        $('#globe #middle g path'),
        $('#globe #left g path')
      ];

  var globe_speed = 10;

  var map_from = {
    x: 0
  };

  var map_to = {
    x: 150,
    ease: Linear.easeOut
  };

  tmax_tl.fromTo(globe_continents, globe_speed, map_from, map_to, 0);
  
  return tmax_tl;
}

spinGlobe();