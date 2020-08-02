import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
  

function ConvertDateToCommentDateFormat({timestamp}) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function RenderDish({dish}) {
    return (
      <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
      </div>
    );
  }

  function RenderComments({comments}) {
    if (comments == null || comments.length === 0) {
      return (
        <div></div>
      );
    }

    const renderedComments = comments.map((comment) => {
      return (
        <li>
          <p>{comment.comment}</p>
          <p>-- {comment.author}, <ConvertDateToCommentDateFormat date={ConvertDateToCommentDateFormat(comment.date)} /></p>
        </li>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          { renderedComments }
        </ul>
      </div>
    );
  }

  const DishDetail=(props) => {
    if (props.dish != null) {
      return (
        <div className="row">
          
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.dish.comments} />
          
          
          </div>
        
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }



export default DishDetail;
