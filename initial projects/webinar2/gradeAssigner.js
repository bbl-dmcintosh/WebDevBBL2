function assignGrade(score){
    var grade;
    if(score >= 90){
        grade = "A";
    }else if(score >=80){
        grade = "B";
    }else if(score >= 70){
        grade = "C";
    }else if(score >= 60){
        grade = "D";
    }else{
        grade = "F";
    }

    return grade;
}

console.log(assignGrade(95));
console.log(assignGrade(69));
console.log(assignGrade(85));
console.log(assignGrade(0));
