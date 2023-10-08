import Questionnaire from "../types/Questionnaire";

const questionnaies: Questionnaire = [
    {
        text: 'What is your name?',
        options: ['Alice', 'Bob', 'Charlie'],
        answer: 'Bob',
    },
    {
        text: 'What is your favourite colour?',
        options: ['Red', 'Blue', 'Green'],
        answer: 'Blue',
    },
    {
        text: 'What is your favourite animal?',
        options: ['Lion', 'Tiger', 'Elephant'],
        answer: 'Lion',
    }
]

export default function QuestionnaireComponent() {
    return (
        <div>
            {questionnaies.map((question, index) => (
                <ul key={index}>
                    <li>{question.text}</li>
                    {/* <li>
                        <ul>
                            {question.options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    </li> */}
                    <li>{question.answer ? question.answer : 'No answer'}</li>
                </ul>
            ))}
        </div>
    );
}