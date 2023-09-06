const http = require("http");
const jsonObject = [
  {
    name: "Sahil",
    course: "FullStack Developer",
    batch: "EA23",
  },
  {
    name: "Dinesh",
    course: "FullStack Developer",
    batch: "EA23",
  },
  {
    name: "Mahima",
    course: "FullStack Developer",
    batch: "EA23",
  },
];

const app = http.createServer((request, response) => {
  if (request.url == "/") {
    response.write("<html>");
    response.write("<body>");
    response.write("<h1>What is NodeJS?</h1>");
    response.write(
      "<p>NodeJS is a single threaded Non Blocking Operations.It is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>"
    );
    response.write("</body>");
    response.write("</html>");
    response.end();
  } else if (request.url == "/fetch") {
    const data = JSON.stringify(jsonObject);
    response.write(data);
    response.end();
  } else {
    response.write("This is Error Page");
    response.end();
  }
});

app.listen(5000, () => {
  console.log("Server is running in the port number 5000.");
});
