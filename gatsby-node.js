const axios = require('axios');
const crypto = require('crypto');
const remark = require('remark');
const remarkHTML = require('remark-html');

exports.sourceNodes = async function sourceNodes({ actions }) {
  const { createNode } = actions;

  const fetchPatterns = () => axios.get('https://gist.githubusercontent.com/ghajl/d873bcb8d32128b32618c7468dc6ca43/raw/15a82e2251bb6e4c84c83c785caae528809c59b6/patterns.json');
  const res = await fetchPatterns();
  res.data.map((item, i) => {
    const { name, pattern, label } = item;
    const patternNode = {
      id: `${i}`,
      parent: '__SOURCE__',
      internal: {
        type: 'Pattern',
      },
      children: [],
      name,
      pattern,
      label,
    };

    const contentDigest = crypto
      .createHash('md5')
      .update(JSON.stringify(patternNode))
      .digest('hex');
    patternNode.internal.contentDigest = contentDigest;
    createNode(patternNode);
  });
};

exports.onCreateNode = ({ node }) => {
  if (node.frontmatter) {
    const sections = { ...node.frontmatter.page };
    Object.keys(sections).forEach((section) => {
      const content = remark()
        .use(remarkHTML)
        .processSync(sections[section].content)
        .toString();
      sections[section].content = content;
      if (sections[section].subsections != null) {
        const { subsections } = sections[section];
        Object.keys(subsections).forEach((subsection) => {
          const subcontent = remark()
            .use(remarkHTML)
            .processSync(subsections[subsection].content)
            .toString();
          subsections[subsection].content = subcontent;
        });
      }
    });
    node.frontmatter.page = sections;
  }
};
