import React from 'react'
import TextField from '../../../partials/TextField.partial';
import quizStore from '../../../../other/stores/quiz.store';
import { observer } from 'mobx-react';

export default observer(() => {
  console.log('input answer rerender');
  return <TextField {...{
    label: `Enter you're answer`,
    value: quizStore.inputAnswer,
    onValueUpdated: (answer) => quizStore.inputAnswer = answer
  }} />
})
