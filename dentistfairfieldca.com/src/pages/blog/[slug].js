import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Page from "../../components/Page";
import ScheduleButton from "../../components/ScheduleButton";
import Head from "next/head";

export default function BlogTemplate({ content, data }) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }
  const markdownBody = content;
  const frontmatter = data;

  return (
    <Page>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <h2>
        {frontmatter.title}
        <small>{reformatDate(frontmatter.date)}</small>
      </h2>
      <ReactMarkdown source={markdownBody} escapeHtml={false} />
      <ScheduleButton />
    </Page>
  );
}

BlogTemplate.getInitialProps = async function(ctx) {
  const { slug } = ctx.query;
  if (!slug) {
    return { content: "", data: { title: "", date: "" } };
  }

  const content = await import(`../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    ...data
  };
};
