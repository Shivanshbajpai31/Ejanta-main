import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Image } from 'react-bootstrap';
import axios from 'axios';

const IndividualPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
    console.log(postId)
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/reports/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error.message);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleLikeClick = (postId) => {
    // Implement logic for handling likes
    console.log(`Like Clicked for Post ${postId}`);
  };

  return (
    <div>
      <Card key={post._id} className="mb-4">
        <Card.Body>
          <Card.Title className="mb-3">
            <strong>{post.user}</strong>
          </Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Image src={`http://localhost:3000/${post?.image}`} alt="Post Image" fluid className="mb-3" />
          <Button
            variant="primary"
            onClick={() => handleLikeClick(post._id)}
          >
            {post.likes ? `${post.likes} Likes` : '0 Likes'}
          </Button>
        </Card.Body>
      </Card>

      {/* Verify and Handle Buttons */}
      
    </div>
  );
};

export default IndividualPost;