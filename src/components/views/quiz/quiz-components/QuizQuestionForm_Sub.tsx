import { observer } from 'mobx-react'
import React from 'react'
import quizService from '../../../../other/services/quiz.service'
import { show } from '../../../../other/services/utilities.service'
import correctnessMarkSet from '../../../../other/sets/correctness-mark.set'
import TextField from '../../../partials/TextField.partial'

export default observer(() => {
  const {activeQuestionIndex, activeQuiz, submitCorrectnessMark} = quizService
  const {value, correctAnswer, correctnessMarkSubmitted} = activeQuiz.questions[activeQuestionIndex]
  const lastQuestion = activeQuiz.questions.length == activeQuestionIndex + 1

  const labels = {
    question: `Question ${activeQuestionIndex + 1}`,
    answerInput: `Enter you're answer`,
    correctAnswer: 'The correct answer is',
  }

  return (
    <quiz-question>
      <form-field name={labels.question}>
        <TextField {...{
          label: labels.question,
          value,
          readonly: true
        }}/>
      </form-field>
      
      <form-field name={labels.answerInput}>
        <TextField {...{
          label: labels.answerInput,
          value: quizService.inputAnswer,
          onValueUpdated: (answer) => quizService.inputAnswer = answer
        }} />
      </form-field>

      {show(
        <button 
          className='submit'
          onClick={quizService.submitQuestion}
        >
          Submit
        </button>
      ).if(quizService.answerSubmitted == false)}

      {show(<>
      
        <form-field name={labels.correctAnswer}>
          <TextField {...{
            label: labels.correctAnswer,
            value: correctAnswer,
            readonly: true
          }}/>
        </form-field>

        {correctnessMarkSet.map(correctnessMark =>
          <button 
            className={correctnessMark}
            {...{
              key: correctnessMark,
              onClick: () => submitCorrectnessMark(correctnessMark)
            }}          
            {...correctnessMarkSubmitted == correctnessMark ? {selected: ''} : ''}
          >
            {correctnessMark}
          </button>
        )}

        {show(<>
          <hr />
          <button 
            className='next'
            onClick={() => quizService.nextQuestion()}
          >
            {lastQuestion ? 'Finish' : 'Next'}
          </button>
        </>).if(quizService.answerSubmitted == true)}

      </>).if(quizService.answerSubmitted == true)}
    </quiz-question>
  )


})
