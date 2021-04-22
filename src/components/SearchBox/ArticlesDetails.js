import React from 'react';
import posts from './MenuLists';

function ArticlesDetails() {
  return (
    <div>
      <ul>
        {posts.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ArticlesDetails;
