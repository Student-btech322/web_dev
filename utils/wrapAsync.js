// module.exports = (fn) => {
//     return (req,res,next) => {
//         fn(req,res,next).catch(next);
//     };
// };
module.exports = (fn) => {
  return function(req, res, next) {
    fn(req, res, next).catch(next); // ✅ Don't rethrow, just pass to next()
  };
};
