import { View_Type, QuestionManagementView_Type } from "../types/view.type"

let selectedView: View_Type = 'Question Management'
let selectedSubView: QuestionManagementView_Type = 'Questions List'


export default {
  get selectedView(){return selectedView},
  get selectedSubView(){return selectedSubView}
}