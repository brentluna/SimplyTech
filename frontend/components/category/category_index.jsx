import React from 'react';
import CategoryIndexItem from './category_index_item';


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
    }
  }

  render() {
    return (
      <div>
        <h1>Categories</h1>
        <ul className='category-item-ul'>
          {this.categoryLis()}
        </ul>
      </div>
    );
  }
}

export default CategoryIndex;
