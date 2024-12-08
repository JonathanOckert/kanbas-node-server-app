import PathParameters from "./PathParameters.js";
import QueryParamters from "./QueryParameters.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import WorkingWithArrays from "./WorkingWithArrays.js";

export default function Lab5(app) {
    app.get("/lab5/welcome", (req, res) => {
        res.send("Welcome to Lab 5");
    });
    PathParameters(app);
    QueryParamters(app);
    WorkingWithObjects(app);
    WorkingWithArrays(app);
}
