import Head from "next/head";
import { Component } from "react";

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Head></Head>
        <article>
          <h1>{title}</h1>
        </article>
      </>
    );
  }
}
