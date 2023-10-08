type Question = {
    text: string;
    options: string[];
    answer: string | null;
};

type Questionnaire = Question[];

export default Questionnaire;
