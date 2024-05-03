const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
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
          if (Object.prototype.hasOwnProperty.call(counters, field)) {
            const studentsInField = counters[field].length;
            const studentList = counters[field].join(', ');
            console.log(`Number of students in ${field}: ${studentsInField}. List: ${studentList}`);
          }
        }
        resolve(counters);
      }
    });
  });
}

module.exports = countStudents;
