// Home.jsx

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup, Image, Button } from "react-bootstrap";
import AlertCard from "../Alert/AlertCard";
import "./Home.css";
import api from "../../api/index.js";
import { useQuery } from "@tanstack/react-query";
import Footers from "../Footer/Footer.jsx";

function Home() {
  console.log(localStorage.getItem('user'))
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likesMap, setLikesMap] = useState({});
  const [alertVisible, setAlertVisible] = useState(true);

  const getReports = async () => {
    try {
      const res = await api.get("/reports");
      return res.data;
    } catch (error) {
      console.log("Error");
    }
  };

  const {
    data: reports,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: getReports,
  });

  if (isLoading || isError) {
    return <h1>Loading...</h1>;
  }

  const handleLikeClick = (postId) => {
    // Update likes locally
    setLikesMap((prevLikes) => {
      // If already liked, do not update likes
      if (prevLikes[postId] !== undefined) {
        return prevLikes;
      }
      const updatedLikes = {
        ...prevLikes,
        [postId]: (prevLikes[postId] || 0) + 1,
      };
      console.log(updatedLikes);
      return updatedLikes;
    });
  };

  const handleCategoryChange = (location) => {
    setSelectedCategory(location);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
  };

  const renderPosts = () => {
    const filteredPosts =
      selectedCategory === "All"
        ? reports
        : reports.filter((post) => post.location === selectedCategory);
  
    const sortedPosts = [...filteredPosts].sort(
      (a, b) => likesMap[b._id] - likesMap[a._id]
    );
  
    return (
      <div className="post-container">
        {sortedPosts.map((post) => (
          <Card key={post._id} className="mb-4">
            <Card.Body>
              <div className="post-header">
                <strong className="username">{post.reportBy}</strong>
                <small className="timestamp text-muted">
                  <em>{new Date(post.createdAt).toLocaleString()}</em>
                </small>
              </div>
  
              <Card.Text>{post.description}</Card.Text>
              <Image
                src={`http://localhost:3000/${post?.image}`}
                alt="Post Image"
                fluid
                className="mb-3"
              />
              <Button
                variant="primary"
                onClick={() => handleLikeClick(post._id)}
                disabled={likesMap[post._id] !== undefined} // Disable if already liked
              >
                {likesMap[post._id] ? `${likesMap[post._id]} Likes` : "0 Likes"}
              </Button>
              <Button
                variant={post.status === "submitted" ? "info" : post.status === "solved" ? "success" : "warning"}
                className="pendingbutton"
                disabled
              >
                {post.status ? post.status.charAt(0).toUpperCase() + post.status.slice(1) : "Pending"}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };
  

  const renderTopPosts = () => {
    const sortedPosts = [...reports].sort(
      (a, b) => likesMap[b._id] - likesMap[a._id]
    );

    const top3Posts = sortedPosts.slice(0, 3);

    return (
      <div className="top-posts-container">
        <h2 className="mb-4">Top Posts</h2>
        <ListGroup>
          {top3Posts.map((post) => (
            <ListGroup.Item key={post._id}>
              {likesMap[post._id]
                ? `${post.title} ${likesMap[post._id]} Votes`
                : "0 Votes"}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  };

  return (
    <div>
      <Container style={{ display: "flex" }}>
        <Row>
          <Col md={3} className="mt-4">
            <div>
              {alertVisible && <AlertCard alert onClose={handleAlertClose} />}
            </div>
          </Col>
          <Col md={9}>
            {renderPosts()}
          </Col>
          <Col md={3}>{renderTopPosts()}</Col>
        </Row>
      </Container>
      <Footers />
    </div>
  );
}

export default Home;
