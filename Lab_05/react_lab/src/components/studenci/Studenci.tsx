import React from 'react';
import { Student } from './Student.type';


const Studenci: React.FC = () => {
    const students: Student[] = [
        { imie: 'Janusz', nazwisko: 'Piątek', rocznik: 1999 },
        { imie: 'Amadeusz', nazwisko: 'Kozak', rocznik: 1991 },
        { imie: 'Jakub', nazwisko: 'Noga', rocznik: 1996 }
    ];

    return (
        <table style={{ width: '100%', textAlign: 'center' }}>
            <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Rocznik</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => {
                    return (
                    <tr key={index}>
                        <td>{student.imie}</td>
                        <td>{student.nazwisko}</td>
                        <td>{student.rocznik}</td>
                    </tr>);
                })}
            </tbody>
        </table>
    )
}

export default Studenci;