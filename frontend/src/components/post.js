import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'


const Posts = (props) => {
    console.log(props)



    const response = props.posts
    //console.log(response)
    const posts = response.posts
    console.log(posts)
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
                                {/* )}  className="btn btn-info" className="btn btn-primary" */}
                        </select>
                    </div>
                   
                    <div className="dropdown">

                        <select className="btn btn-secondary dropdown-toggle header-space" onClick={(event) => {
                            if (event.target.value === "time") {
                                props.sortbydate(posts)

                            }
                            if (event.target.value === "vote") {
                                props.sortbyvote(posts)

                            }
                            else {
                                console.log('nothing selected')
                            }
                        }}>
                            <option disabled="" value="">Filter Post</option>
                            <option value="time" >Sort by Timestamp</option>
                            <option value="vote">Sort by Vote</option>
                        </select>
                    </div>

                    {/* <select className="btn btn-secondary dropdown-toggle header-space">
                        <option value="volvo">Sort by Timestamp</option>
                        <option value="saab">Sort by Date</option>
                    </select> */}
                </div>
                <hr />
                <h4> Posts </h4>
            </div>
            <br />

            <div className="container small ">
                {posts && Object.keys(posts).map((p, index) => (

                    <div key={index}>
                        {/* "display-3" */}
                        <Link to={'/'}>  <h1 className="" >Title: {posts[p].title}</h1> </Link>
                        <br />
                        <div className="">
                            <p className=""> Body: {posts[p].body}</p>
                            <div className="">
                                <p className=""> Category: {posts[p].category} </p>
                                <p className="">Vote:<button onClick={(e) => props.downvote(posts[p].id, "downVote")}><i className="fa fa-thumbs-down" aria-hidden="true"></i> </button> {posts[p].voteScore}  <button onClick={(e) => props.upvote(posts[p].id, "upVote")}> <i className="fa fa-thumbs-up" aria-hidden="true"></i></button> </p>

                                <p className="author"> Author: {posts[p].author} </p>
                                <p className="time" > Time: {moment(posts[p].timestamp).format("MM/DD/YYYY")} </p>
                                <p className="time"> Comments:{(comment[posts[p].id] || []).length}  <i className="fa fa-comment" aria-hidden="true"></i></p>
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



