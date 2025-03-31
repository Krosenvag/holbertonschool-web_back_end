export default function getStudentsByLocation(listStudents, City) {
  const arrayCity = listStudents.filter((students) => students.location === City);
  return arrayCity;
}
