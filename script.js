/* global $*/
$(document).ready(function(){
    var stepNumber = 0;
    var score = 0;
    var steps = [
        {
        title: "9th grade",
        description: "This is the start of your high school career.",
        options: ["go to class", "skip class once a week"],
        best_option: "go to class",
        picture: "Hallway.jpg",
        points_to_win: 1,
        points_to_lose: -1
        },
        
        {
        title: "10th grade",
        description: "Congratulations on surviving last year.",
        points_to_earn: "1",
        options: ["Acknowlege the importance of PSAT and SAT", "enjoy your youth"],
        best_option: "Acknowlege the importance of PSAT and SAT",
        next_step: "step3",
        picture: "SAT.jpg",
        points_to_win: 1,
        points_to_lose: -1
        },
        
        {
        title: "11th grade",
        description: "Junior Year. Woooh! Halfway to freedom.",
        points_to_earn: "1",
        options: ["drop out", "do free summer programs"],
        best_option: "do free summer programs",
        next_step:  "step4",
        picture: "Summer_Program.jpg",
        points_to_win: 1,
        points_to_lose: -3
        },
        
        {
        title: "12th grade",
        description:"Last first day. Last spirit week. Last year of school",
        points_to_earn: "1",
        options: ["take it easy your senior year", "take AP Courses"],
        best_option: "take AP Courses",
        picture: "AP_Course.jpg",
        points_to_win: 1,
        points_to_lose: -1
        },
        
        {
        title: "SAT",
        description: "The test that makes or breaks your future college career. Good luck!",
        points_to_earn: "1",
        options: ["study every month", "study every week"],
        best_option: "study every week",
        picture: "Studying_SAT.jpg",
        points_to_win: 1,
        points_to_lose: -1
        },
        
        {
        title: "Applications",
        description: "You're so close to freedom from high school.",
        points_to_earn: "1",
        options: ["Finish Applications by December", "Don't complete them on time"],
        best_option: "Finish Applications by December",
        picture: "College_App.jpg",
        points_to_win: 1,
        points_to_lose: -1
        },
        
        {
        title: "Road to College",
        description: "Listen, it's your last year. Do what you will.",
        points_to_earn: "1",
        options: ["Get a Job", "Party all summer because you finished high-school"],
        best_option: "Get a Job",
        picture: "Job.jpg",
        points_to_win: 1,
        points_to_lose: -1
        }
    ];
    
    
    var master = function(stepNumber) {
        
        var step = steps[stepNumber];
        
        // html updating code:
        $('img').attr('src', "Pics/" + step["picture"]);
        $('#description').html(step["description"]);
        $('#choiceA').html(step["options"][0]);
        $('#choiceB').html(step["options"][1]);
    }
        
    master(0);
    
    $('.choice').click(function(e){
        var step = steps[stepNumber];
       var innerChoice =  e.currentTarget.children[0].innerHTML;
       
       // determine points earned:
       if (innerChoice === step["best_option"]) {
           score = score + step["points_to_win"]
       } else {
           score = score + step["points_to_lose"]
       }
       
       console.log(score);
       
       // determine win/lose/continue:
       if(score < 0){
            // you lose
            window.location = "Game-Over.html";
        }
        else{
            stepNumber = stepNumber + 1;
            
            if(stepNumber >= steps.length){
                // you win
                window.location = "good-ending.html";
            } else {
                master(stepNumber);    
            }
        }
    });


});

 