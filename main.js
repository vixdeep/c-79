name_student = [];

function submit()
{

    var student_1 = document.getElementById("name_1").value;
    var student_2 = document.getElementById("name_2").value;
    var student_3 = document.getElementById("name_3").value;
    var student_4 = document.getElementById("name_4").value;
    var student_5 = document.getElementById("name_5").value;

    name_student.push(student_1);
    name_student.push(student_2);
    name_student.push(student_3);
    name_student.push(student_4);
    name_student.push(student_5);

    console.log(name_student);

    document.getElementById("display_names").innerHTML = name_student;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}
 


function sorting()
{

    name_student.sort();
    document.getElementById("display_names").innerHTML = name_student;
    console.log(name_student);
}