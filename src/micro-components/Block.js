// Components==============
import BlockContent from "@sanity/block-content-to-react";
import React from "react";
// =========================

export default function Block({ content }) {
  const lang = "nl";

  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  };

  return <BlockContent blocks={content[lang]} serializers={serializers} />;
}
