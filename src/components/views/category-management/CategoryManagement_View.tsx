import React from 'react'
import List_Partial from '../../partials/List.partial'
import CategoryForm_Sub from './category-management-components/CategoryForm_Sub'

export default () =>

<category-management class='view'>

  <category-form class='form'>
    <section-heading>Add Category</section-heading>
    <CategoryForm_Sub />
  </category-form>

  <category-list class='list'>
    <section-heading>Categories List</section-heading>
    <List_Partial type='Category' />
  </category-list>

</category-management>

