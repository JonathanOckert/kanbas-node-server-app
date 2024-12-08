import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.delete("/api/home/:courseId/", (req, res) => {
        const currentUser = req.session["currentUser"];
        const courseId = req.params;
        const status = enrollmentsDao.unenrollUserInCourse(
            currentUser._id,
            courseId
        );
        res.send(status);
    });
}
