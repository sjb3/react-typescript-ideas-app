import React, { useState, useEffect } from "react";
import { Layout } from "../Layout/Layout";
import { Idea } from "../common/types";
import Api from "../common/Api";
import styled from "styled-components";

const IdeasList = styled.ul`
  list-style: none;
  padding-inline-end: 40px;
`;

export const IdeasPage = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const { data } = await Api.get<Idea[]>("idea");
      setIdeas(data);
    };
    fetchIdeas();
  }, []);
  return (
    <Layout>
      <IdeasList>
        <h2>Ideas List</h2>
        {ideas.map(idea => (
          <li>{idea.idea}</li>
        ))}
      </IdeasList>
    </Layout>
  );
};
