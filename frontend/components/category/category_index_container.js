import {connect} from 'react-redux';
import CategoryIndex from './category_index';

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
