export default function getStudentIdsSum(listStudents) {
  const studentbyid = listStudents.reduce((total, obj) => total + obj.id, 0);
  return studentbyid;
}
