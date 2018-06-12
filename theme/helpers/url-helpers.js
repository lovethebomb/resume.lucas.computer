const REGEX_SCHEME=/^(http|https)\:\/\/.*/;

(function() {
  // Block helper function definitions.
  var urlHelpers = module.exports = {
    withoutScheme: url => {
        let matches = url.match(REGEX_SCHEME);
        if (!matches) {
            return url;
        }

        let scheme = matches[1];
        // 3 here is '://'
        return url.substring(scheme.length + 3);
    }
  };

}).call(this);
