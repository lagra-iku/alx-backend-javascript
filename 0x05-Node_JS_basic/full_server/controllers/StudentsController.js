import { readDatabase } from '../utils';

export default class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase('./database.csv');
            let response = 'This is the list of our students\n';
            Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).forEach(field => {
                response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
            });
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }
        try {
            const students = await readDatabase('./database.csv');
            const studentsInMajor = students[major] || [];
            const response = `List: ${studentsInMajor.join(', ')}`;
            res.status(200).send(response);
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }
}

