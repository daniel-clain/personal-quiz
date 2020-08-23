import React from 'react'
import { f } from './Dependencies'
import { CategorySelect_Sub, StartButton_Sub, Question_Sub, InputAnswer_Sub, SubmitButton_Sub, CorrectAnswer_Sub, CorrectnessButtons_Sub } from './components/views/quiz/quiz-components'

import { QuestionList_Sub, CategoryManagement_View, ViewButtons_Sub, QuestionForm_Sub } from './components/views/question-management/question-management-components'

import Quiz_View from './components/views/quiz/Quiz.view'
import QuestionManagement_View from './components/views/question-management/QuestionManagement.view'


f['react render'](PersonalQuizUI)

function PersonalQuizUI(){
  return f[`
  if the selected view is quiz then show`](
    <Quiz_View>{[f[`
    if the quiz is not in progress then show`](
      <section id='pre-quiz'>
        <CategorySelect_Sub />
        <StartButton_Sub />
      </section>),f[`
    if the quiz is in progress then show`](
      <section id='active-quiz-question'>
        <Question_Sub />
        <InputAnswer_Sub />{(f[`
        if the active question is not submitted then show`](
          <SubmitButton_Sub />),f[`
        if the active question is submitted then show`](
          <CorrectAnswer_Sub />,
          <CorrectnessButtons_Sub />))}
      </section>)]}
    </Quiz_View>),f[`

  if the selected view is question management then show`](
    <QuestionManagement_View>
      <QuestionForm_Sub />
      <hr />
      <ViewButtons_Sub />{(f[`
      if the selected subview is questions list then show`](
        <QuestionList_Sub />),f[`
      if the selected subview is category management then show`](
        <CategoryManagement_View />))}
    </QuestionManagement_View>
  )
}

