import Questionnaire from "../components/Questionnaire";

const HomePage = () => {
    return (
        <div className="container-page">
            <h1>Ciao</h1>
            <Questionnaire/>
            <input type="text" />
            <button>Send</button>
        </div>
    );
}

export default HomePage;