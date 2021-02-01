module.exports.hello = function (request, result) {
  result.json(`Hello, ${request.query.name || "stranger"}!`);
};
