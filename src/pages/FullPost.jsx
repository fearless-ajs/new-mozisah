import { useEffect, useState } from 'react';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function FullPost({ isAuth, user }) {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loadingInProgress, setLoading] = useState(true);
  const navigate = useNavigate();

  FullPost.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      uid: PropTypes.string.isRequired,
      displayName: PropTypes.string,
    }),
  };

  const deletePost = async (postId) => {
    try {
      window.scrollTo(0, 0);
      const postDocRef = doc(db, 'Posts', postId);

      if (user && post && user.uid === post.author.id) {
        await deleteDoc(postDocRef);
        notifySuccess('Post deleted successfully!');
        navigate('/blog');
      } else {
        console.error('Unauthorized to delete this post.');
        notifyError('Unauthorized to delete this post.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const editPost = (postId) => {
    window.scrollTo(0, 0);
    // Navigate to the edit page, passing the postId
    navigate(`/edit-post/${postId}`);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postDocRef = doc(db, 'Posts', postId);
        const postDoc = await getDoc(postDocRef);
  
        if (postDoc.exists()) {
          const postData = postDoc.data();
          setPost({ id: postDoc.id, ...postData });
          setLoading(false);
        } else {
          console.error('Post not found');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };
  
    fetchPost();
  }, [postId]);
  

  const notifySuccess = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog post</title>
        <meta
          name="Home"
          content=" Blog section "
        />
        <link rel="canonical" href="/full-post/:postId" />
      </Helmet>
    <div className="max-w-5xl mx-auto leading-8 px-8 h-full">
      {loadingInProgress ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="purple" size={50} />
        </div>
      ) : post ? (
        <div>
          <h1 className="text-center font-bold text-4xl my-8">{post.title}</h1>
          {post.imageUrl && (
            <img
              className="w-full mb-8 rounded-md hover:opacity-30"
              src={post.imageUrl}
              alt="Post Image"
              style={{
                maxWidth: '1024px',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            )}
          <div dangerouslySetInnerHTML={{ __html: post.postText }} />
          <h3 className="my-4">
            <span className="font-bold">Posted By: </span>
            <span className="text-red-600">
              {post.author?.name || 'Unknown Author'}
            </span>
          </h3>
          {isAuth && user && post.author && user.uid === post.author.id && (
            <div className="mb-8">
              <button
                onClick={() => editPost(post.id)}
                className="mr-2 bg-purple-700 py-2 px-6 text-white rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => deletePost(post.id)}
                className="mr-2 bg-purple-700 py-2 px-6 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>Loading Blog...</p>
        )}
    </div>
        </>
  );
}

export default FullPost;
