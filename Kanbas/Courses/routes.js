import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function CourseRoutes(app) {
    app.get("/api/courses", (req, res) => {
        const courses = dao.findAllCourses();
        res.send(courses);
    });

    app.delete("/api/courses/:courseId", (req, res) => {
        const { courseId } = req.params;
        const status = dao.deleteCourse(courseId);
        res.send(status);
    });

    app.get("/api/courses/:courseId/modules", (req, res) => {
        const { courseId } = req.params;
        const modules = modulesDao.findModulesForCourse(courseId);
        res.json(modules);
    });

    app.post("/api/courses/:courseId/modules", (req, res) => {
        const { courseId } = req.params;
        const module = {
            ...req.body,
            course: courseId,
        };
        const newModule = modulesDao.createModule(module);
        res.send(newModule);
    });

    // assignments for course
    app.get("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const assignments =
            assignmentsDao.findAllAssignmentsForCourse(courseId);
        res.json(assignments);
    });

    // create a course's assignment
    app.post("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const assignment = {
            ...req.body,
            course: courseId,
        };
        const newAssignment = assignmentsDao.createAssignment(assignment);
        res.send(newAssignment);
    });

    // delete an enrollment
    app.delete("/api/courses/:courseId/:userId/unenroll", (req, res) => {
        const { courseId, userId } = req.params;
        console.log("here with: ", courseId, " and ", userId);
        const status = enrollmentsDao.unenrollUserInCourse(userId, courseId);
        console.log("might have sent");
        res.send(status);
    });

    // enroll user
    app.post("/api/courses/:courseId/:userId/enrollments", (req, res) => {
        const { courseId, userId } = req.params;
        const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.send(enrollment);
    });
}
