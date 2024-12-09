import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const newEnrollment = {
        _id: Date.now().toString(),
        user: userId,
        course: courseId,
    };
    //console.log("created enrollment: ", newEnrollment);
    const exists = enrollments.find(
        (e) => e.user === userId && e.course === courseId
    );
    if (exists) {
        console.log("booted");
        return;
    }
    console.log("didn't boot");
    enrollments.push(newEnrollment);
    //console.log(enrollments);
    return enrollments;
}

export function unenrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const enrollment = enrollments.find(
        (e) => e.user === userId && e.course === courseId
    );
    //console.log("here");
    if (!enrollment) return;

    //console.log("deleting enrollment: ", enrollment);

    Database.enrollments = enrollments.filter(
        (enrollments) => enrollments._id !== enrollment._id
    );
    //console.log(Database.enrollments);
}
