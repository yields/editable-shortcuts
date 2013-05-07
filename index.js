
/**
 * dependencies
 */

var dispatcher = require('k');

/**
 * add editing shortcuts to `Editable` instance.
 * 
 * Example:
 * 
 *      var el = document.querySelector(el);
 *      shortcuts(new Editable(el))
 *      .map('command + z', 'undo')
 *      .map('command + y', 'redo')
 *      .map('command + b', 'bold')
 *      .map('command + i', 'italic');
 * 
 * @param {Editable} editable
 * @return {Object}
 */

module.exports = function(editable){
  var k = dispatcher(editable.el)
    , ret = {};

  // map `shortcut` to `cmd`.
  ret.map = function(shortcut, cmd){
    k(shortcut, function(e){
      e.preventDefault();
      editable.execute(cmd);
    });
    return ret;
  };

  // api
  return ret;
};
