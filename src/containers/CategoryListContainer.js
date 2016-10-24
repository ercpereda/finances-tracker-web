import { connect } from 'react-redux';
import { fetchCategories } from '../thunks/category-thunks';
import CategoryList from '../components/CategoryList';

const mapStateToProps = state => ({ 
  categoryList: state.categories.categoryList
});
const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
