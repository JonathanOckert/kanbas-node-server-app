export default [
    {
        _id: "q101",
        name: "Q1 - HTML",
        course: "RS101",
        quizType: "Graded Quiz", //may need to revisit
        points: 100, //sum of all questions... formula?
        assignmentGroup: "QUIZZES", //list?
        shuffleAnswers: "Yes", //yes/no
        timeLimit: 20, //in minutes
        multipleAttempts: "No", //yes/no
        numAttempts: 1, //if multAtt = yes, then can be other than 1
        showCorrectAnswer: "Yes", //yes/no
        accessCode: "", //optional password protection
        oneQuestionAtATime: "Yes", //yes/no for # of Q to display at a time
        webcamRequired: "No", //yes/no
        lockQuestionsAfterAnswering: "No", //yes/no
        dueDate: new Date("2024-12-10T23:59:59.000Z"),
        availableDate: new Date("2024-12-09T23:59:59.000Z"),
        untilDate: new Date("2024-12-10T23:59:59.000Z"),
        status: "Unpublished",
    },
    {
        _id: "q102",
        name: "Q2 - CSS",
        course: "RS101",
        quizType: "Graded Quiz", //may need to revisit
        points: 50, //sum of all questions... formula?
        assignmentGroup: "QUIZZES", //list?
        shuffleAnswers: "No", //yes/no
        timeLimit: 20, //in minutes
        multipleAttempts: "No", //yes/no
        numAttempts: 2, //if multAtt = yes, then can be other than 1
        showCorrectAnswer: "Yes", //yes/no
        accessCode: "", //optional password protection
        oneQuestionAtATime: "Yes", //yes/no for # of Q to display at a time
        webcamRequired: "No", //yes/no
        lockQuestionsAfterAnswering: "No", //yes/no
        dueDate: new Date("2024-12-14T23:59:00Z"),
        availableDate: new Date("2024-12-07T23:59:00Z"),
        untilDate: new Date("2024-12-16T23:59:00Z"),
        status: "Unpublished",
    },
    {
        _id: "q103",
        name: "Q3 - Node Intro",
        course: "RS101",
        quizType: "Graded Quiz", //may need to revisit
        points: 100, //sum of all questions... formula?
        assignmentGroup: "QUIZZES", //list?
        shuffleAnswers: "Yes", //yes/no
        timeLimit: 20, //in minutes
        multipleAttempts: "No", //yes/no
        numAttempts: 1, //if multAtt = yes, then can be other than 1
        showCorrectAnswer: "Yes", //yes/no
        accessCode: "", //optional password protection
        oneQuestionAtATime: "Yes", //yes/no for # of Q to display at a time
        webcamRequired: "No", //yes/no
        lockQuestionsAfterAnswering: "No", //yes/no
        dueDate: new Date("2024-12-08T23:59:00Z"),
        availableDate: new Date("2024-12-07T23:59:00Z"),
        untilDate: new Date("2024-12-13T23:59:00Z"),
        status: "Published",
    },
];
