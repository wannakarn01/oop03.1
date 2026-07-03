enum CourseStatus {
Open = "Open",
Closed = "Closed",
Full = "Full"
}
interface Student {
id: string;
name: string;
}

interface Course {
title: string;
code: string;
status: CourseStatus;
students: Student[];
}

function enroll(student: Student, course: Course): void {
if (course.status === CourseStatus.Open) {
    course.students.push(student);
    console.log(`[สำเร็จ] คุณ ${student.name} ได้ลงทะเบียนเรียนในวิชา ${course.title} แล้ว`);
} else {
    console.log(`[ล้มเหลว] ไม่สามารถลงทะเบียนเรียนวิชา ${course.title} ได้ เนื่องจากสถานะคือ: ${course.status}`);
}
}

const student1: Student = { id: "684245063", name: "วรรณกานต์" };
const student2: Student = { id: "68425100", name: "ธนกร" };

let typescriptCourse: Course = {
title: "comsci",
code: "cs063",
status: CourseStatus.Open,
students: []
};

let webDesignCourse: Course = {
title: "comsci",
code: "cs100",
status: CourseStatus.Closed,
students: []
};
enroll(student1, typescriptCourse);
console.log("รายชื่อนักเรียนในวิชา cs063:", typescriptCourse.students);

enroll(student2, webDesignCourse);
console.log("รายชื่อนักเรียนในวิชา cs100:", webDesignCourse.students);