import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Comment = (props) => {
    console.log(props)
    const comment = props.comments
    const url = window.location.href
    const parentid = url.split('/')[4]

    let a = comment && comment.length || []

    if (a.length == 0) {
        return (
            <div className="comment">
                <p> NO COMMENT </p>
            </div>
        )
    }
    else {

        return (
            <div>
                {comment && comment.map((p, index) => (
                    <div className="comment" key={index}>
                        <p className="adjust-margin"> Author:{p.author} </p>
                        <p className="adjust-margin">  Body:{p.body} </p>
                        <p className="vote">Vote:<button onClick={(e) => props.commentdownvote(p.id, parentid, "downVote")}><i className="fa fa-thumbs-down" aria-hidden="true"></i> </button> {p.voteScore}  <button onClick={(e) => props.commentupvote(p.id, parentid, "upVote")}> <i className="fa fa-thumbs-up" aria-hidden="true"></i></button> </p>
                        <p className="adjust-margin"> Time:{moment(p.timestamp).format("MM/DD/YYYY")} </p>
                        <div>
                            <button className="adjust-margin"> Edit </button>
                            <button className="adjust-margin" onClick={(e) => props.deletecomment(p.id,parentid)}> Delete </button>
                        </div>

                    </div>
                ))}
                <button type="button" className="btn btn-primary"><i className="fa fa-plus" aria-hidden="true"> ADD  COMMENT </i></button>
            </div>
        )
    }
}

export default Comment


