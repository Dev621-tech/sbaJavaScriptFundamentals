// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

// function getLearnerData(course, ag, submissions) {

   






//     // return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

let learnerScores = {};
let score =0;

for ( i = 0; i < AssignmentGroup.assignments.length; i++){
    for (let j = 0; j < LearnerSubmissions.length; j++){


        if(AssignmentGroup.assignments[i].id === LearnerSubmissions[j].assignment_id){


            const dueDate = AssignmentGroup.assignments[i].due_at;
            const submittedDate = LearnerSubmissions[j].submission.submitted_at;
            let todayDate = "2025-01-01";
            const submission = LearnerSubmissions[j];


            // CHECKS IF ASSIGNMENT IS DUE
            if (dueDate > todayDate){
                continue;
            }

            if (submittedDate > dueDate){
                LearnerSubmissions[j].submission.score -= 10;
            }
                
             score = LearnerSubmissions[j].submission.score / AssignmentGroup.assignments[i].points_possible;
             
            // console.log(`${LearnerSubmissions[j].learner_id} ${score}%`);
            
            if(!learnerScores[submission.learner_id]){
            learnerScores[submission.learner_id] = [];
             }
             
            learnerScores[submission.learner_id].push(score);
        }
    }
}
//   console.log(learnerScores);
    
for (const learnerID in learnerScores){
    let sum = 0;
    const scores = learnerScores[learnerID];

    for (let i = 0; i < scores.length; i++){
        sum += scores[i];
    }

    learnerScores[learnerID].average = sum / scores.length;
}



console.log(learnerScores);
            
    
        



   // learnersScores.push(LearnerSubmissions[j].submission.score);



//  console.log(AssignmentGroup.assignments[0].id);
//  console.log(AssignmentGroup.assignments[1].id);
//  console.log(AssignmentGroup.assignments[2].id);


// Example Output
// const result = [
//         {
//             id: 125,                                     ID NUMBER OF STUDENT
//             avg: 0.985, // (47 + 150) / (50 + 150)       AVG SCORE
//             1: 0.94, // 47 / 50                          SCORE
//             2: 1.0 // 150 / 150                          SCORE  
//         },
//         {
//             id: 132,
//             avg: 0.82, // (39 + 125) / (50 + 150)
//             1: 0.78, // 39 / 50
//             2: 0.833 // late: (140 - 15) / 150           
//         }
//     ];

