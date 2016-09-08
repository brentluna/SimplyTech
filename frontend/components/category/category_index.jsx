import React from 'react';
import CategoryIndexItem from './category_index_item';
import Loading from 'react-loading';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);

    this.categoryLis = this.categoryLis.bind(this);
  }

  categoryLis() {
    let lis= [];
    if (this.props.categories.length) {
      this.props.categories.forEach(category => {
        lis.push(<CategoryIndexItem title={category.title} image={category.image} id={category.id} key={category.title} />);
      });
      return lis;
    } else {
      return <Loading className='loading-bars' type='bars' color='#7e5bbe' style='width: 300px; height: 400px;' />
    }
  }

  render() {
    return (
      <div>

        <ul className='category-item-ul'>
          {this.categoryLis()}
        </ul>
      </div>
    );
  }
}

export default CategoryIndex;
