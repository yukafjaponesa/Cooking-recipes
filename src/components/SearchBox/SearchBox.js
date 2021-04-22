// import React, {useContext} from 'react';
// import {ArticlesContext} from './Articles';
// import ArticlesDetails from './ArticlesDetails';
//
// const SearchBox = () => {
//     const {
//       search,
//       setSearch,
//       loading,
//       setLoading,
//       articles,
//       setArticles
//     } = useContext(ArticlesContext);
//
//     return (
//       <div>
//         <input
//           classname='search-box'
//           type='text'
//           placeholder='Search..'
//           onChange={(e) => setSearch(e.target.value)}
//           value={search}
//         />
//
//         {loading && <p>Loading...</p>}
//
//         {!loading &&
//           articles.map(article, name) =>
//            <ArticlesDetails
//               key={name}
//               {...article}
//            />
//         }
//       </div>
//     )
// }
//
// export default SearchBox

import React from 'react';
import {ArticlesContext} from './Articles';
import ArticlesDetails from './ArticlesDetails';

const SearchBox = () => (
  <form action='/' method='get'>
    <label htmlFor='search-bar'>
      <span className='visually-hidden'>Search Recieps</span>
    </label>
    <input
      type='text'
      id='search-bar'
      placeholder='Search recieps'
      name='search'
    />
    <button type='submit'>Search</button>
  </form>
);


export default SearchBox;
