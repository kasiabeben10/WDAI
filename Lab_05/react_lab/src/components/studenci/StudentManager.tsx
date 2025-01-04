import React from 'react';
import { Student } from './Student.type';
import { useState } from 'react';
import Dodawanie from './Dodawanie';


const StudentManager: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([
        { imie: 'Janusz', nazwisko: 'Piątek', rocznik: 1999 },
        { imie: 'Amadeusz', nazwisko: 'Kozak', rocznik: 1991 },
        { imie: 'Jakub', nazwisko: 'Noga', rocznik: 1996 }
    ]);

    const aktualizuj = (student: Student) => {
        setStudents((prev) => ([...prev, student]));
    };

    return (
        <>
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
            <Dodawanie dodaj={aktualizuj}/>
        </>
    )
}
export default StudentManager;