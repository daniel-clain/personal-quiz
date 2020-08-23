import s from './other/state'
import ReactDOM from 'react-dom'

const quizStringFunctions = {
  'if the selected view IS Quiz then show': Quiz_View => 
    s.view.selectedView == 'Quiz' ? Quiz_View : null,
  'if the quiz IS NOT in progress then show': PreQuiz_Sub => 
    s.quiz.inProgress == false ? PreQuiz_Sub : null,
  'if the quiz IS in progress then show': ActiveQuizQuestion_Sub => 
    s.quiz.inProgress ? ActiveQuizQuestion_Sub : null,
  'if the active question IS NOT submitted then show': SubmitButton_Sub => 
    s.quiz.questionSubmitted == false ? SubmitButton_Sub : null,
  'if the active question IS submitted then show': Answer_Sub => 
    s.quiz.questionSubmitted ? Answer_Sub : null,

}


const questionManagementStringFunctions = {  
  'if the selected view is Question Management then show': QuestionManagement_View => 
    s.view.selectedView == 'Question Management' ? QuestionManagement_View : null,
  'if the selected subview is questions list then show': QuestionsList_Sub => 
    s.view.selectedSubView == 'Questions List' ? QuestionsList_Sub : null,
  'if the selected subview is category management then show': CategoryManagement_View => 
    s.view.selectedSubView == 'Category Management' ? CategoryManagement_View : null
}


const f = {
  'react render': renderUIWithReact,
  ...quizStringFunctions,
  ...questionManagementStringFunctions,
  'what the fuck cunt': () => {console.log('yeah wtf....'); return false},
  'this shit is fucked': () => {console.log('... i know bro'); return 'sausage'}
}
export {f}



function renderUIWithReact(PersonalQuiz_UI){
  
  document.body.innerHTML = `<main id='personal-quiz'></main>`

  const personalQuizContainer = document.getElementById('personal-quiz')

  ReactDOM.render(PersonalQuiz_UI, personalQuizContainer)
   
}


