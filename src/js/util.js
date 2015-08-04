
module.exports = {

  transform: function (node, transform) {
    
    var style = node.style;

    style.webkitTransform = 
    style.msTransform = 
    style.MozTransform = 
    style.OTransform =
    style.transform = transform;

    return node;
  },

  transition: function (node, transition) {
    
    var style = node.style;
    
    style.webkitTransition = 
    style.msTransition = 
    style.MozTransition = 
    style.OTransition = 
    style.transition = transition;

    return node;
  }

};
