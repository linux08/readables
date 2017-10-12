import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import CommentForm from './newcomment/form'


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

                <CommentForm  {...props} />
            </div>
        )
    }
    else {

        return (<div>
            <div>
                {comment && comment.map((p, index) => (
                    <div className="comment" key={index}>
                        <p className="adjust-margin"> Author:{p.author} </p>
                        <p className="adjust-margin">  Body:{p.body} </p>
                        <p className="vote">Vote:<button onClick={(e) => props.commentdownvote(p.id, parentid, "downVote")}><i className="fa fa-thumbs-down" aria-hidden="true"></i> </button> {p.voteScore}  <button onClick={(e) => props.commentupvote(p.id, parentid, "upVote")}> <i className="fa fa-thumbs-up" aria-hidden="true"></i></button> </p>
                        <p className="adjust-margin"> Time:{moment(p.timestamp).format("MM/DD/YYYY")} </p>
                        <div>
                            <button className="adjust-margin"> Edit </button>
                            <button className="adjust-margin" onClick={(e) => props.deletecomment(p.id, parentid)}> Delete </button>
                        </div>

                    </div>
                ))}

            </div>
            <CommentForm  {...props} />
        </div>
        )
    }
}

export default Comment


