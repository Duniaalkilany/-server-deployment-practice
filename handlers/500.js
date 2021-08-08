'use strict';


module.exports = (err, req, res, next) => {
    res.status(500).json({
        code: 500,
        route: req.path,
      err: err,
      message: `server error : ${err.message}`,
 
      query: req.query
    });
  };