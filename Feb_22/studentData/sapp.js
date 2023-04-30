var studentData = {
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0; i < this.marks.length; i++) {
            this.total = this.total + this.marks[i];
        }
        this.avg = this.total / this.marks.length;
    },
    getStudentGrade() {
        if (this.avg >= 40) {
            this.grade = 'Student Passed';
        } else {
            this.grade = 'You have a surprise';
        }
    },
    displayStudentDetails() {
        this.getTotalAndAvg();
        this.getStudentGrade();
        console.log("student name " + this.sname);
        console.log("Gender " + this.sgender);
        console.log("total marks " + this.total);
        console.log("Avg Marks " + this.avg);
        console.log("Grade " + this.grade);

        // document.querySelector("#dsname").innerText = '<b>' + this.sname + '</b>';
        document.querySelector("#dsname").innerText = this.sname;
        // document.querySelector("#dgender").innerHTML = '<b>' + this.sGender + '</b>';
        document.querySelector("#dgender").innerHTML = this.sgender;
        document.querySelector("#dclass").innerText = this.sClass;
        document.querySelector("#dtotal").innerText = this.total;
        document.querySelector("#davg").innerText = this.avg;
        document.querySelector("#dgrade").innerText = this.grade;
        document.querySelector("#lngsKnwn").innerHTML = this.languages.join(", ")

    }
};
var readUserData = () => {
    studentData.sname = document.querySelector("#sname").value;
    studentData.sClass = document.querySelector("#sclass").value;
    studentData.sgender = document.querySelector("input[name=gender]:checked").value;
    studentData.marks = [];
    studentData.languages = [];


    //Reading language
    var lngList = ['eng', 'tel', 'hin']
    for (var i = 0; i < lngList.length; i++) {
        var id = '#lng_' + lngList[i];
        if (document.querySelector(id).checked) {
            studentData.languages.push(document.querySelector(id).value)
        }
    }
    //read marks
    for (var i = 1; i <= 5; i++) {
        var id = '#m' + i;
        var marksValue = document.querySelector(id).value;
        marksValue = parseInt(marksValue);
        studentData.marks.push(marksValue);
    }
    console.log(studentData);

    studentData.displayStudentDetails();
    document.querySelector(".progressCardBlock").style.display = 'block';

} 
