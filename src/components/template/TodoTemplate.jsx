import React from 'react';
import styles from './TodaTemplate.module.css'

function TodoTemplate({children}) {
  return (
    <div className={styles.todoTemplateBlock}>{children}</div>
  );
}

export default TodoTemplate;