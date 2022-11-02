import React from "react"
import Card from "react-bootstrap/Card"
import profile from './bugsbunny-photo.jpeg'

function GitHubCard() {
  const imgStyle = {
    maxWidth: "50%",
    borderRadius: "20px"
  };

  return (
      <div className="card">
        <Card style={{ paddingTop: "5em"}}>
        <Card.Img style={imgStyle} variant="top" src={profile} />
        <Card.Body>
            <Card.Title>Luis Donis</Card.Title>
            <Card.Text>
            I'm a software Developer student living in Los Angeles!!
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard

