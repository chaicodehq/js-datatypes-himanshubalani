/**
 * 📝 School Report Card Generator
 *
 * Sharma ji ke bete ka report card generate karna hai! Student ka naam aur
 * subjects ke marks milenge, tujhe pura analysis karke report card banana hai.
 *
 * Rules:
 *   - student object: { name: "Rahul", marks: { maths: 85, science: 92, ... } }
 *   - Calculate using Object.values() and array methods:
 *     - totalMarks: sum of all marks (use reduce)
 *     - percentage: (totalMarks / (numSubjects * 100)) * 100,
 *       rounded to 2 decimal places using parseFloat(val.toFixed(2))
 *     - grade based on percentage:
 *       "A+" (>= 90), "A" (>= 80), "B" (>= 70), "C" (>= 60), "D" (>= 40), "F" (< 40)
 *     - highestSubject: subject name with highest marks (use Object.entries)
 *     - lowestSubject: subject name with lowest marks
 *     - passedSubjects: array of subject names where marks >= 40 (use filter)
 *     - failedSubjects: array of subject names where marks < 40
 *     - subjectCount: total number of subjects (Object.keys().length)
 *   - Hint: Use Object.keys(), Object.values(), Object.entries(),
 *     reduce(), filter(), map(), Math.max(), Math.min(), toFixed()
 *
 * Validation:
 *   - Agar student object nahi hai ya null hai, return null
 *   - Agar student.name string nahi hai ya empty hai, return null
 *   - Agar student.marks object nahi hai ya empty hai (no keys), return null
 *   - Agar koi mark valid number nahi hai (not between 0 and 100 inclusive),
 *     return null
 *
 * @param {{ name: string, marks: Object<string, number> }} student
 * @returns {{ name: string, totalMarks: number, percentage: number, grade: string, highestSubject: string, lowestSubject: string, passedSubjects: string[], failedSubjects: string[], subjectCount: number } | null}
 *
 * @example
 *   generateReportCard({ name: "Rahul", marks: { maths: 85, science: 92, english: 78 } })
 *   // => { name: "Rahul", totalMarks: 255, percentage: 85, grade: "A",
 *   //      highestSubject: "science", lowestSubject: "english",
 *   //      passedSubjects: ["maths", "science", "english"], failedSubjects: [],
 *   //      subjectCount: 3 }
 *
 *   generateReportCard({ name: "Priya", marks: { maths: 35, science: 28 } })
 *   // => { name: "Priya", totalMarks: 63, percentage: 31.5, grade: "F", ... }
 */
export function generateReportCard(student) {

  if (!student || student === null) return null
     let namex = student.name
     let marksx = student.marks

   if (!namex || typeof namex !== "string" || namex === "" || !marksx || Object.keys(marksx).length === 0) return null

  
   let marksarr = Object.values(marksx)

   if (marksarr.find(n => n === null || n > 100 || n < 0 || typeof n !== "number") ) return null
   let totalMarksx = marksarr.reduce((acc, curr) => acc + curr, 0)
   let numSubjects = marksarr.length
   let perx = parseFloat(((totalMarksx / (numSubjects * 100)) * 100).toFixed(2))
   let gradex = ""
   if (perx >= 90) {gradex = "A+"} 
   else if (perx >= 80) {gradex = "A"} 
   else if (perx >= 70) {gradex = "B"} 
   else if (perx >= 60) {gradex = "C"} 
   else if (perx >= 40) {gradex = "D"}
   else if (perx < 40) {gradex = "F"}

   let maxmarks = Math.max(...marksarr)
   let minmarks = Math.min(...marksarr)
   let highestSubjectx = Object.entries(marksx).filter(([name, mark]) => mark === maxmarks).map(([name, mark]) => name)[0];
   let lowestSubjectx = Object.entries(marksx).filter(([name, mark]) => mark === minmarks).map(([name, mark]) => name)[0];

    let passedSubjectsx = Object.entries(marksx).filter(([name, mark]) => mark >= 40).map(([name]) => name)
   let failedSubjectsx = Object.entries(marksx).filter(([name, mark]) => mark < 40).map(([name]) => name)

   let subjectCountx = Object.keys(marksx).length

  return { name: namex, totalMarks: totalMarksx, percentage: perx, grade: gradex, highestSubject: highestSubjectx, lowestSubject: lowestSubjectx,
         passedSubjects: passedSubjectsx, failedSubjects: failedSubjectsx,
         subjectCount: subjectCountx }

}
