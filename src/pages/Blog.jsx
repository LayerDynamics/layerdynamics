// import React, { useEffect, useState } from 'react';
// import { createClient } from 'contentful';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { Box, Heading, Image, Card, CardBody, CardHeader, Paragraph, CardFooter } from 'grommet';

// const client = createClient({
//   space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
// });

// const BlogPosts = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     client.getEntries({ content_type: 'blog' }) // Use the content type ID 'blog'
//       .then((response) => {
//         setPosts(response.items);
//       })
//       .catch(console.error);
//   }, []);

//   return (
//     <Box pad="medium" fill="vertical" align="center" overflow="auto">
//       {posts.map((post) => (
//         <Card key={post.sys.id} width="large" margin="small" background="light-1">
//           <CardHeader pad="medium">
//             <Heading level="3" margin="none">{post.fields.title}</Heading>
//           </CardHeader>
//           {post.fields.coverPhoto && (
//             <CardBody pad="none">
//               <Image
//                 fit="cover"
//                 src={`https:${post.fields.coverPhoto.fields.file.url}`}
//                 alt={post.fields.coverPhoto.fields.title || 'Cover Photo'}
//               />
//             </CardBody>
//           )}
//           <CardFooter pad={{horizontal: "medium", vertical: "small"}} background="background-contrast">
//             <Paragraph margin="none">
//               Published on: {new Date(post.fields.publishedDate).toLocaleDateString()}
//             </Paragraph>
//           </CardFooter>
//           <CardBody pad="medium">
//             <div>{documentToReactComponents(post.fields.body)}</div>
//           </CardBody>
//         </Card>
//       ))}
//     </Box>
//   );
// };

// export default BlogPosts;
import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box, Card, CardHeader, CardBody, CardFooter, Heading, Paragraph, Image } from 'grommet';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'blog' })
      .then((response) => {
        setPosts(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <Box pad="medium" fill="horizontal" align="center">
      {posts.map((post) => (
        <Card key={post.sys.id} width="large" background="light-1" margin="small">
          <CardHeader pad="medium">
            <Heading level="2" margin="none">{post.fields.title}</Heading>
          </CardHeader>
          {post.fields.coverPhoto && (
            <CardBody pad="medium">
              <Image
                fit="cover"
                src={`https:${post.fields.coverPhoto.fields.file.url}`}
                alt={post.fields.coverPhoto.fields.title || 'Cover Photo'}
              />
            </CardBody>
          )}
          <CardFooter pad={{ horizontal: "small", vertical: "small" }}>
            <Paragraph margin="none">Published on: {new Date(post.fields.publishedDate).toLocaleDateString()}</Paragraph>
          </CardFooter>
          <Box pad="medium">
            {documentToReactComponents(post.fields.body)}
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default BlogPosts;
