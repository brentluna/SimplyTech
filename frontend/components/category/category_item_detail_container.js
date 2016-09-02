import {connect} from 'react-redux';
import CategoryItemDetail from './category_item_detail';

const mapStateToProps = state => ({
  category: state.categories
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItemDetail);
