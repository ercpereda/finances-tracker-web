import React from 'react';

const Category = ({
  title,
  description,
  creationDate,
  modificationDate
}) => {
  return (
    <div>
      <h3>title: {title}</h3>
      <p><strong>description:</strong> {description}</p>
      <h4>created at: {creationDate.toString()}</h4>
      <h4>modified at: {modificationDate.toString()}</h4>
    </div>
  );
};

Category.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  creationDate: React.PropTypes.instanceOf(Date).isRequired,
  modificationDate: React.PropTypes.instanceOf(Date).isRequired
};

export default Category;
