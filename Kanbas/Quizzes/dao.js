import Database from "../Database/index.js";

export function findAllQuizzesForCourse(courseId) {
    const { quizzes } = Database;
    const quizzesForCourse = quizzes.filter((quiz) => quiz.course === courseId);
    return quizzesForCourse;
}

export function createQuiz(quiz) {
    const newQuiz = { ...quiz };
    Database.quizzes = [...Database.quizzes, newQuiz];
    return newQuiz;
}

export function updateQuiz(quizId, quizUpdates) {
    const { quizzes } = Database;
    const quiz = quizzes.find((quiz) => quiz._id === quizId);
    Object.assign(quiz, quizUpdates);
    return quiz;
}
