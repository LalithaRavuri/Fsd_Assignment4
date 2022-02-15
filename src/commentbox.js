import React from 'react'
import Faker from 'faker'

const CommentBox=(props)=>{
    
  console.log(props)

    return (
        <div className="ui cards">
  <div className="card">
    <div className="content">
      <img className="right floated mini ui image" src={Faker.image.image()}/>
      <div className="header">
        Jenny Hess
      </div>
      <div className="meta">
        New Member
      </div>
      <div className="description">
        Jenny wants to add you to the group <b>best friends</b>
      </div>
    </div>
    
  </div>
  </div>

    )
}

export default CommentBox;