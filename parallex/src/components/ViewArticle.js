import React from "react";
import OnVisible from "react-on-visible";
import classnames from "classnames";

const ViewArticle = props => (
  <div className={classnames("view-article absolute")}>
    <OnVisible
      visibleClassName="extend-line"
      percent={100}
      className={classnames("view-article-line", props.cardBackground)}
    />
    <div className="view-article-link">
      <a href="#">View Article</a>
    </div>
  </div>
);

export default ViewArticle;
