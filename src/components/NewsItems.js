import React from 'react'

function NewsItems(props) {
  return (
    <div>
       <div className="card" style={{width: "18rem"}}>
  <img src={props.imgurl===null?"https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg":props.imgurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <p class="card-text"><small class="text-muted">published at {new Date(props.time).toGMTString()} by {props.author?props.author:"unknown"}</small></p>
    <a href={props.url} className="btn btn-primary">Open</a>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left: '90%'}}>
    {props.badge?props.badge:"YT"}
    <span class="visually-hidden">unread messages</span>
  </span>
    
  </div>
</div>
    </div>
  );
}

export default NewsItems
