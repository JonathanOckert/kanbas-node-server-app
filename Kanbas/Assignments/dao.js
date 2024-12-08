import Database from "../Database/index.js";

//retrieve assignments
export function findAllAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    // const course = courses.filter((course) => {
    //     course._id === courseId
    // });
    console.log(assignments.filter((a) => a.course === courseId));
    return assignments.filter((assignment) => assignment.course === courseId);
}

export function retrieveAllAssignments() {
    const { assignments } = Database;
    return assignments;
}

//create assignments
export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

//update assignments
export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((a) => a._id === assignmentId);
    console.log("assignments array: ");
    console.log(assignments);
    console.log("assignment info: ");
    console.log(assignmentId);
    console.log(assignment);
    if (!assignment) return;
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}

//delete assignments
// export function deleteAssignment(assignmentId) {
//     const { assignments } = Database;
//     Database.assignments = assignments.filter(
//         (assignment) => assignment._id !== assignmentId
//     );
// }
export function deleteAssignment(assignmentToDelete) {
    const { assignments } = Database;
    const aid = assignmentToDelete._id;
    Database.assignments = assignments.filter(
        (assignment) => assignment._id !== aid
    );
}
