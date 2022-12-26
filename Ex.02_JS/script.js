var students = [
  {
    name: "Pedro",
    gradeOne: 10,
    gradeTwo: 8,
  },
  {
    name: "Sônia",
    gradeOne: 6,
    gradeTwo: 8,
  },
  {
    name: "Maria",
    gradeOne: 5,
    gradeTwo: 6,
  },
  {
    name: "Zé",
    gradeOne: 10,
    gradeTwo: 10,
  },
  {
    name: "Antônio",
    gradeOne: 1,
    gradeTwo: 5,
  }
]

function average(gradeOne, gradeTwo) {
  return ((gradeOne + gradeTwo)/2).toFixed(2)
}

for (let student of students) {
  let studentAverage = average(student.gradeOne, student.gradeTwo)
  if (studentAverage >= 7) {
    alert(`
    A média do(a) aluno(a) ${student.name} é ${average(student.gradeOne, student.gradeTwo)}.\n
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `)
}
else {
    alert(`
    A média do(a) aluno(a) ${student.name} é ${average(student.gradeOne, student.gradeTwo)}.\n
    Não foi desta vez ${student.name}! Tente novamente!
    `)
}
}

