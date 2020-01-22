import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Page from "../../components/Page";
import ScheduleButton from "../../components/ScheduleButton";

export default function BlogTemplate(props) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }
  const markdownBody = props.content;
  const frontmatter = props.data;

  return (
    <Page>
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
  const content = await import(`../../posts/${slug}.md`);
  const config = await import(`../../data/config.json`);
  const data = matter(content.default);
  return {
    siteTitle: config.title,
    ...data
  };
};
