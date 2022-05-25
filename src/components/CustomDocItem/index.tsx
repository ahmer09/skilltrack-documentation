import React from 'react';
import ActualDocItem from '@theme/DocItem';
import PageHelpful from "@site/src/components/PageHelpful";
import CustomFooter from '@site/src/components/CustomFooter';
import styles from "./styles.module.scss";

const CustomDocItem = (props) => (
  <div className={`custom_doc_item_wrapper ${styles["custom_doc_item_wrapper"]}`}>
    <ActualDocItem {...props} />
    <div className={styles['custom_doc_item_footer']}>
      <PageHelpful />
      <CustomFooter />
    </div>
  </div>
)

export default CustomDocItem;
