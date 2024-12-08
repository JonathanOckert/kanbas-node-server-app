import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({
        _id: Date.now().toString(),
        user: userId,
        course: courseId,
    });
}

export function unenrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const enrollment = enrollments.find(
        (e) => e.user === userId && e.course === courseId
    );

    Database.enrollments = enrollments.filter(
        (enrollments) => enrollments._id !== enrollment._id
    );
}
