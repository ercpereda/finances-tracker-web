import { connect } from 'react-redux';
import { createCategory } from '../thunks/category-thunks';
import { resetNewCategory } from '../actions/category-actions';
import CategoryForm from '../components/CategoryForm';

const mapStateToProps = state => ({
  newCategory: state.categories.newCategory
});
const mapDispatchToProps = dispatch => ({
  createCategory: category => dispatch(createCategory(category)),
  resetMe: () => dispatch(resetNewCategory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryForm);
