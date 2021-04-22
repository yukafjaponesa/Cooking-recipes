import React, {useState, useEffect, createContext} from 'react';

export const ArticlesContext = createContext();

const ArticlesContextProvider = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if(!search) {
      return;
    }
    setLoading(true);

    const getArticles = () => {
      fetch('')
        .then((res) => res.json())
        .then((res) => {
          if(res.name) {
            setArticles(res.name)
            setLoading(false)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [search])

  return (
    <ArticlesContext.Provider
      value={{articles, loading, search, setSearch}}
    >
      {props.children}
    </ArticlesContext.Provider>
  )
};

export default ArticlesContextProvider;
