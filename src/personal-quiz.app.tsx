import React from 'react'
import { f } from './personal-quiz.app.string-functions'
import { CategorySelect_Sub, StartButton_Sub, Question_Sub, InputAnswer_Sub, SubmitButton_Sub, CorrectAnswer_Sub, CorrectnessButtons_Sub } from './components/views/quiz/quiz-components'

import { QuestionList_Sub, CategoryManagement_View, ViewButtons_Sub, QuestionForm_Sub } from './components/views/question-management/question-management-components'

import Quiz_View from './components/views/quiz/Quiz.view'
import QuestionManagement_View from './components/views/question-management/QuestionManagement.view'

const doThing = () => [
  f['what the fuck cunt'](), f['this shit is fucked']()]

console.log('f :>> ', f)

const x = doThing()

console.log('x :>> ', x);

const PersonalQuiz_UI = [console.log('ding'),f[
  'if the selected view IS Quiz then show'](
    <Quiz_View>{[f[
      'if the quiz IS NOT in progress then show'](
        <section id='pre-quiz' key='pq'>
          <CategorySelect_Sub />
          <StartButton_Sub />
        </section>
      ), f[
      'if the quiz IS in progress then show'](
        <section id='active-quiz-question' key='aqq'>
          <Question_Sub />
          <InputAnswer_Sub />{f[
          'if the active question IS NOT submitted then show'](
            <SubmitButton_Sub />
          ) && f[
          'if the active question IS submitted then show']([
            <CorrectAnswer_Sub /> &&
            <CorrectnessButtons_Sub />
          ])}
        </section>
      )]}
    </Quiz_View>)]


f['react render'](PersonalQuiz_UI)
