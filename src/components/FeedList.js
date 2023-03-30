import React from 'react';
import noticias from './noticias.json';
import FeedItem from './FeedItem';

function FeedList() {
  return (
    <div>
      {noticias.map(feed => <FeedItem feed={feed} key={feed.title} />)}
    </div>
  );
}

export default FeedList;
