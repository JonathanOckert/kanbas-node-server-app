import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
    // get assignments -> exists in the Courses routes.js file
    // app.get("/api/courses/:courseId/assignments", (req, res) => {
    //     const { courseId } = req.params;
    //     const assignments = dao.findAllAssignmentsForCourse(courseId);
    //     res.send(assignments);
    // });

    // delete assignment
    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        //const assignmentToDelete = req.body;
        //console.log("deleting assignment: ", assignmentId);
        const status = dao.deleteAssignment(assignmentId);
        res.send(status);
    });

    // post (create) assignments -> via a specific course, need courseId to tag
    // app.post("api/courses/:courseId/assignments", (req, res) => {
    //     const { courseId } = req.params;
    // });

    // put (update) assignments
    app.put("/api/assignments/:assignmentID", (req, res) => {
        //const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const assignmentId = assignmentUpdates._id;
        //console.log("updating assignment: ", assignmentUpdates);
        const status = dao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });
}
