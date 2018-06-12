const moment = require('moment');

/**
Sample helper definitions for HackMyResume's "basis" example theme.
@license MIT. See LICENSE.md for details.
@module themes/basis/helpers/sample-helpers
*/

(function() {

  // Block helper function definitions.
  var dateHelpers = module.exports = {
    MY: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMMM YYYY'),
    Y: date => moment(date.toString(), ['YYYY-MM-DD']).format('YYYY'),
    DMY: date => moment(date.toString(), ['YYYY-MM-DD']).format('D MMMM YYYY')
  };

}).call(this);
