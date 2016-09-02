import React from 'react';

class CategoryItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.mapFeeds = this.mapFeeds.bind(this);
  }

  mapFeeds() {
    let lis = [];
    if (this.props.category.feeds) {
      this.props.category.feeds.forEach(feed => {
        lis.push(
          <li className='category-detail-li'>
            <h2>{feed.title}</h2>
            <div className='category-feed-img-div'>
              <img className='category-feed-img' src={feed.logo} />
            </div>
            <div className='category-feed-first-entry'>
              <p> {feed.first_entry.title}</p>
              <div className='firs-entry-img-div'>
                <img className='first-entry-img' src={feed.first_entry.image} />
              </div>
            </div>
          </li>
        );
      });
      return lis;
    }
  }

  render() {
    return (
      <div className='category-detail-container'>
      <div className='category-img-div'>
        <img className='category-img' src={this.props.category.image} />
      </div>
        <h1 className='category-detail-title'>{this.props.category.title}</h1>
        <ul className='category-detail-ul'>
          {this.mapFeeds()}
        </ul>
      </div>
    );
  }

}
// const CategoryItemDetail = ({category}) => {
//   return (
//     <div className='category-detail-container'>
//       <img src={category.image} />
//       <h1>{category.title}</h1>
//       <ul>
//         {/* {mapFeeds(category.feeds)} */}
//       </ul>
//     </div>
//   );
// };

export default CategoryItemDetail;
