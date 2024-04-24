import React, {useState} from 'react';

const questions = [
	{
		id: 3457,
		question: "What language is React based on?",
		answer: "JavaScript",
	},
	{
		id: 7336,
		question: "What are the building blocks of React apps?",
		answer: "Components",
	},
	{
		id: 8832,
		question: "What's the name of the syntax we use to describe a UI in React?",
		answer: "JSX",
	},
	{
		id: 1297,
		question: "How to pass data from parent to child components?",
		answer: "Props",
	},
	{
		id: 9103,
		question: "How to give components memory?",
		answer: "useState hook",
	},
	{
		id: 2002,
		question:
			"What do we call an input element that is completely synchronised with state?",
		answer: "Controlled element",
	},
];

export default function App ()
{
    return <div className='App'>
        <FlashCards />
    </div>
}

const FlashCards = () =>
{
    // State for current question and answer being shown
    const [ textShownId, setTextShownId ] = useState( null );
    const handleClick = ( id ) =>
    {
        setTextShownId(id !== textShownId ? Number(id): null);
    }
    return <div className='flashcards'>
        { questions.map( question => (
            <Card question={question} textShownId={textShownId} handleClick={handleClick} key={question.id} />
        ))}
    </div>
};

const Card = ({question, textShownId, handleClick}) =>
{
    return <div className={question.id === textShownId ? 'selected' : ''} onClick={() => handleClick(Number(question.id))}>
                <p>{ question.id === textShownId ? question.answer : question.question }</p>
            </div>
}