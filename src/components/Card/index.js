import React from "react";
import CardDescription from "./CardDescription";
import ImageContainer from "./ImageContainer";

export default function index() {
  return (
    <article className="card">
      <ImageContainer />
      <CardDescription />
    </article>
  );
}
