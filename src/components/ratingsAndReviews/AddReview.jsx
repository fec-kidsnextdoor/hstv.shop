/* eslint-disable */
import React, { useState } from 'react';
import AddReviewModal from './AddReviewModal.jsx'

const AddReview = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}> Add A Review</button>

      <AddReviewModal id={props.id} metaData={props.metaData} open={isOpen} onClose={() => setIsOpen(false)} />

    </div>

  )
};

export default AddReview;