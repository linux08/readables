import React from 'react'
import { Link } from 'react-router-dom'


const Posts = (props) => {
    console.log(props)

    const response = props.posts
    const posts = response.posts
    const category = response.category

    console.log(post)
 

    // let posts = [
    //     {
    //         "id": "8xf0y6ziyjabvozdd253nd",
    //         "timestamp": 1467166872634,
    //         "title": "Udacity is the best place to learn React",
    //         "body": "Everyone says so after all.",
    //         "author": "thingtwo",
    //         "category": "react",
    //         "voteScore": 6,
    //         "deleted": false
    //     },
    //     {
    //         "id": "6ni6ok3ym7mf1p33lnez",
    //         "timestamp": 1468479767190,
    //         "title": "Learn Redux in 10 minutes!",
    //         "body": "Just kidding. It takes more than 10 minutes to learn technology.",
    //         "author": "thingone",
    //         "category": "redux",
    //         "voteScore": -5,
    //         "deleted": false
    //     }
    // ]

    
    return (
        <div className="">
            <div className="App">
                <div className="positon-header">
                    <button type="button" className="btn btn-primary"><i className="fa fa-plus" aria-hidden="true"> ADD </i></button>
                    {/* {category.map((a,index) =>( */}
                    <div className="dropdown">
                        <select className="header-space btn btn-secondary dropdown-toggle header-space">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    {/* </div> ))} */}
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
                {posts.map((p, index) => (
                    <div key={index}>
                        {/* "display-3" */}
                        <Link to={'/'}>  <h1 className="" >Title: {p.title}</h1> </Link>
                        <br />
                        <div className="">
                            <p className=""> Body: {p.body}</p>
                            <div className="">
                                <p className=""> Category: {p.category} </p>
                                <p className="">Vote:<button> <i className="fa fa-thumbs-down" aria-hidden="true"></i> </button> {p.voteScore}  <button> <i className="fa fa-thumbs-up" aria-hidden="true"></i> </button> </p>

                                <p className="author"> Author: {p.author} </p>
                                <p className="time"> Time: {p.timestamp}</p>
                            </div>
                        </div>
                        <br />

                        {/* </div> */}
                    </div>))}
            </div>
        </div>
    )
}
export default Posts