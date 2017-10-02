import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'


const Posts = (props) => {
    console.log(props)

    // props.upvote("8xf0y6ziyjabvozdd253nd","upVote")

    const response = props.posts
    const posts = response.postincategory
    const comment = props.comment




    return (
        <div className="">
            <div className="App">
                <div className="positon-header">
                    <button type="button" className="btn btn-primary"><i className="fa fa-plus" aria-hidden="true"> ADD </i></button>
                    <div className="dropdown" >
                        <select className="header-space btn btn-secondary dropdown-toggle header-space" onChange={(event) => props.changeEvent(event.target.value)}>
                            {/* {category && category.categories.map((a, index) => ( */}
                            <option value=''  >All</option>
                            <option value='react'>React</option>
                            <option value='redux'>Redux</option>
                            <option value='udacity'>Udacity</option>
                            )
                                {/* )} */}
                        </select>
                    </div>
                    <select className="btn btn-secondary dropdown-toggle header-space">
                        <option value="volvo">Sort by Timestamp</option>
                        <option value="saab">Sort by Date</option>
                    </select>
                </div>
                <hr />
                <h4> Posts </h4>
            </div>
            <br />


            <div className="container small ">
                {posts && posts.map((p, index) => (

                    <div key={index}>
                        {/* "display-3" */}
                        <Link to={'/'}>  <h1 className="" >Title: {p.title}</h1> </Link>
                        <br />
                        <div className="">
                            <p className=""> Body: {p.body}</p>
                            <div className="">
                                <p className=""> Category: {p.category} </p>
                                <p className="">Vote:<button onClick={(e) =>props.downvote(p.id,"downVote")}><i className="fa fa-thumbs-down" aria-hidden="true"></i> </button> {p.voteScore}  <button onClick={(e) =>props.upvote(p.id,"upVote")}> <i className="fa fa-thumbs-up" aria-hidden="true"></i></button> </p>

                                <p className="author"> Author: {p.author} </p>
                                <p className="time" > Time: { moment(p.timestamp).format("MM/DD/YYYY")} </p>
                                <p className="time"> Comments:{(comment[p.id] || []).length}  <i className="fa fa-comment" aria-hidden="true"></i></p>
                            </div>
                        </div>
                        <br />
                        <div className="belowpost">
                            <button>Edit: <i className="fa fa-pencil-square-o" aria-hidden="true"></i> </button>
                            <button className="delete">Delete: <i className="fa fa-trash-o" aria-hidden="true"></i> </button>
                        </div>
                        <br />
                        {/* </div> */}
                    </div>))}
            </div>
        </div>
    )
}
export default Posts




