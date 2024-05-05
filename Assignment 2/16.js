/* Q16.Parse an URL: */

function parseURL(url) {
  var parser = document.createElement('a');
  parser.href = url;
  return parser;
}

var result = parseURL('https://www.example.com/path/?query=test');
console.log(result);

/* Output:
{
  href: "https://www.example.com/path/?query=test",
  protocol: "https:",
  hostname: "www.example.com",
  port: "",
  pathname: "/path/",
  search: "?query=test",
  hash: ""
} */