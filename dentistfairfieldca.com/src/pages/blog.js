import React from "react";
import matter from "gray-matter";
import styled from "styled-components";
import Page from "../components/Page";
import ReactMarkdown from "react-markdown";

export default function Blog({ posts }) {
  return (
    <Page>
      {posts.map(post => (
        <Post post={post} key={post.slug} />
      ))}
    </Page>
  );
}

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}

function Post({
  post: {
    slug,
    excerpt,
    data: { title, date }
  }
}) {
  return (
    <LinkContainer href={`/blog/${slug}`}>
      <h2>
        {title} <small>{reformatDate(date)}</small>
      </h2>
      <ReactMarkdown source={excerpt} escapeHtml={false} />
    </LinkContainer>
  );
}

const LinkContainer = styled.a`
  display: block;
  margin-bottom: 20px;
  text-decoration: none;
  color: inherit;
  background: white;
  border-radius: 7px;
  padding: 20px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  h2 {
    margin: 0;
    font-size: 18px;
  }
  :after {
    content: "";
    clear: both;
    display: table;
  }
`;

Blog.getInitialProps = async function() {
  //get posts & context from folder
  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];

      const content = matter(value.default, { excerpt_separator: "\n\n" });

      if (content.data.draft) return;

      return {
        ...content,
        slug
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/)).filter(Boolean);

  posts.sort((a, b) => {
    return Date.parse(b.data.date) - Date.parse(a.data.date);
  });

  return {
    posts
  };
};
