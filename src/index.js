const app = require("express")();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const controllers = require("./controllers");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function callback(controller) {
  return (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent")
      }
    };
    controller(httpRequest)
      .then(httpResponse => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers);
        }
        res.type("json");
        res.status(httpResponse.statusCode).send(httpResponse.body);
      })
      .catch(e => res.status(500).send({ error: "An unkown error occurred." }));
  };
}

app.post("/users/create", callback(controllers.postUser));
app.get("/users/get", callback(controllers.getUser));
app.patch("/users/edit", callback(controllers.patchUser));
app.delete("/users/delete", callback(controllers.deleteUser));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
