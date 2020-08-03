import React, { useState } from "react";
import FormField from "../../../objects/FormField";
import { EditedQuestion } from "../../../../types/edited-question.type";
import { Question } from "../../../../types/question.type";
import questionStoreSingleton from "../../../../mobx-stores/question.store";

export type QuestionFields = 'question' | 'answer' | 'tags'

export default function QuestionForm({existingQuestion}: {existingQuestion?: Question}){

  let initialQuestion: EditedQuestion = {value: '', correctAnswer: '', tags: []}
  if(existingQuestion){
    const {value, correctAnswer, tags} = existingQuestion
    initialQuestion = {value, correctAnswer, tags}
  }    

  const [editedQuestion, setQuestion] = useState(initialQuestion)
  const {value, correctAnswer, tags} = editedQuestion
  

  return (
    <div className="add-question">
      <h2>Add Question</h2>
      <FormField 
        name='question' 
        type='input'
        onUpdate={handleFieldUpdate} 
        value={value}
      />
      <FormField 
        name='answer' 
        type='textarea'
        onUpdate={handleFieldUpdate} 
        value={correctAnswer}
      />          
      <FormField 
        name='tags' 
        type='checkboxes'
        onUpdate={handleFieldUpdate} 
        tags={tags}
      />  
      <button onClick={submitQuestion}>
        {existingQuestion ? 'Update' : 'Submit'}
      </button>
    </div>
  )

    
  function handleFieldUpdate(field: QuestionFields, value: any){
    setQuestion({...editedQuestion, [field]: value})
  }

  function submitQuestion(){
    if(existingQuestion){
      questionStoreSingleton.updateQuestion(existingQuestion.id, editedQuestion) 
    } else {
      questionStoreSingleton.addQuestion(editedQuestion) 
    }
  }
}