import { css } from "styled-components"

import { H1Brown, B1Pine, fontSizer } from "./index"

export const standardWysiwyg = css`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  &::after {
    display: table;
    clear: both;
    content: "";
  }

  .post-edit-link {
    font-size: 1.6rem;
  }

  blockquote {
    display: block;
    width: 95%;
    margin: 1.5rem auto 2rem;
    padding: 0 2.25rem;
    border-right: 5px solid #333;
    border-left: 5px solid #333;
    font-size: 1.6rem;
    font-style: $italic;

    @media (min-width: 768px) {
      width: 80%;
      margin: 5em auto;
      padding: 0 3rem;
    }

    p {
      margin-bottom: 0;

      &::before,
      &::after {
        color: rgba($color-secondary, 1);
      }

      &::before {
        padding-right: 0.25em;
        content: "\f10d";
      }

      &::after {
        padding-left: 0.25em;
        content: "\f10e";
      }
    }
  }

  hr {
    display: block;
    height: 0.25em;
  }

  ul {
    margin-bottom: 2.5rem;

    li {
      ${B1Pine};
      position: relative;
      margin-bottom: 0.75em;
      padding-left: 0.75em;
      font-size: 1.6rem;

      &::before {
        position: absolute;
        top: 0.1em;
        left: 0;
        padding-right: 0.5em;
        color: rgba(#333, 0.75);
        content: "\f0da";
      }
    }
  }

  ol {
    margin-bottom: 2.5rem;
    margin-left: 1.75rem;
    font-size: 1.6rem;

    li {
      ${B1Pine};
      position: relative;
      margin-bottom: 0.75em;
      font-size: 1.6rem;
      margin-bottom: 0.25rem;
      list-style-position: outside;
      list-style-type: decimal;
    }
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: $italic;
  }

  h1 {
    ${H1Brown};
  }

  h2 {
    ${H1Brown};
  }

  h3 {
    ${H1Brown}
  }

  h4 {
    ${H1Brown}
  }

  h5 {
    ${H1Brown}
    ${fontSizer(2, 2.4, 76.8, 150, 2)};
  }

  h6 {
    ${H1Brown}
    ${fontSizer(1.8, 2, 76.8, 150, 2)};
  }

  p {
    ${B1Pine};

    a {
      transition: all 0.3s;
      font-weight: bold;
      font-size: 1em;
    }
  }

  /* WordPress Core */
  .alignnone {
    margin: 5px 20px 20px 0;
  }

  .aligncenter,
  div.aligncenter {
    display: block;
    margin: 2rem auto;
  }

  .alignright {
    float: right;
    margin: 5px 0 20px 20px;
  }

  .alignleft {
    float: left;
    margin: 5px 20px 20px 0;
  }

  a img.alignright {
    float: right;
    margin: 5px 0 20px 20px;
  }

  a img.alignnone {
    margin: 5px 20px 20px 0;
  }

  a img.alignleft {
    float: left;
    margin: 5px 20px 20px 0;
  }

  a img.aligncenter {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .wp-caption {
    background: #fff;
    border: 1px solid #f0f0f0;
    max-width: 96%; /* Image does not overflow the content area */
    padding: 5px 3px 10px;
    text-align: center;
  }

  .wp-caption.alignnone {
    margin: 5px 20px 20px 0;
  }

  .wp-caption.alignleft {
    margin: 5px 20px 20px 0;
  }

  .wp-caption.alignright {
    margin: 5px 0 20px 20px;
  }

  .wp-caption img {
    border: 0 none;
    height: auto;
    margin: 0;
    max-width: 98.5%;
    padding: 0;
    width: auto;
  }

  .wp-caption p.wp-caption-text {
    font-size: 1.1rem;
    line-height: 17px;
    margin: 0;
    padding: 0 4px 5px;
  }

  /* Text meant only for screen readers. */
  .screen-reader-text {
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  .screen-reader-text:focus {
    background-color: #f1f1f1;
    border-radius: 3px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
    clip: auto !important;
    color: #21759b;
    display: block;
    font-size: 14px;
    font-size: 0.875rem;
    font-weight: bold;
    height: auto;
    left: 5px;
    line-height: normal;
    padding: 15px 23px 14px;
    text-decoration: none;
    top: 5px;
    width: auto;
    z-index: 100000; /* Above WP toolbar. */
  }

  img {
    width: auto;
  }
`
