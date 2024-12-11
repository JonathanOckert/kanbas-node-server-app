import Database from "../Database/index.js";

export function findAllQuizzesForCourse(courseId) {
    const { quizzes } = Database;
    const quizzesForCourse = quizzes.filter((quiz) => quiz.course === courseId);
    return quizzesForCourse;
}

export function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: Date.now().toString() };
    Database.quizzes = [...Database.quizzes, newQuiz];
    return newQuiz;
}
