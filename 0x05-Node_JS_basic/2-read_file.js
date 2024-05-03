const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const counters = {};
    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (field) {
        counters[field] = counters[field] || [];
        counters[field].push(firstname);
      }
    });
    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);
    for (const field in counters) {
      if (counters.hasOwnProperty(field)) {
        const studentsInField = counters[field].length;
        const studentList = counters[field].join(', ');
        console.log(`Number of students in ${field}: ${studentsInField}. List: ${studentList}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
