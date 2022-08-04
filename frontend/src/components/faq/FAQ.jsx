import React from 'react'
import "./faq.css"
import PossibilityImage from "../../assets/whybudget.png"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';



const faqQuestions = [

    {
     "id": 1,
     "question": "What is BudgetMe?",
     "answer": "BudgetMe is a completely Open source Platform aimed at helping people manage and track all of their expenses and savings"
    },
    {
     "id": 2,
     "question": "Is BudgetMe Free?",
     "answer": "BudgetMe is a completely free to use BudgetManaging system and all donations towards the project would be used for the betterment of the project"
    },
    {
     "id": 3,
     "question": "How can I start using BudgetMe?",
     "answer": "BudgetMe is very easy to use, all of you have to do to get started is sign up!"
    },
    {
     "id": 4,
     "question": "Do I have to transfer money to Track my expenditures? ",
     "answer": "No, BudgetMe does not take money of anykind and is not neeeded to use the project"
    },


]

const FAQ = () => {
  return (
    <div className='budgetme-faq section-padding' id="FAQ">
      <div className='budgetme-faq-image'>
        <img src={PossibilityImage} alt="possibility" />
      </div>
      <div className="budgetme-faq-content">
        <h4>Not sure whether to try it yet? Well Here is our Frequently asked Questions! </h4>
        <h1 className='gradient-text'>
          Frequently Asked Questions 
        </h1>
        <div className='section-margin'>
          {faqQuestions.map((question)=>(
            <Accordion>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >  <Typography>{question.question}</Typography></AccordionSummary>
              <AccordionDetails>
                <Typography>{question.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}


        </div>
        <h4><Link to={"/register"}>Sign Up and Start Tracking Your Expenses now!</Link></h4>
      </div>
    </div>
  )
}

export default FAQ