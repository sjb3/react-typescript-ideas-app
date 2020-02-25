import React from "react";
import { Layout } from "../../Layout/Layout";
import styled from "styled-components";
import { ColorSet } from "../../ColorSet";
import { AddPhoto } from "./AddPhotos";

const AddIdeaPageWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const Header = styled.h1`
  color: ${ColorSet.GREEN};
  font-style: italic;
`;

const Column = styled.div`
  flex: 40%;
  flex-direction: column;
  display: flex;
  margin-bottom: 6px;
`;

const TwoColumneForm = styled.form`
  display: flex;
  ${Column}:first-child {
    margin-right: 10%;
  }
`;

const TitleInput = styled.input`
  border: none;
  border-bottom: 1px solid ${ColorSet.DARK_GREY};
  font-size: 1.2em;
  line-height: 30px;
  outline: none;

  ::placeholder {
    font-weight: bold;
    font-family: "Cedarville Cursive";
  }
`;

const DescTextArea = styled.textarea`
  border: 1px solid ${ColorSet.WARM_SAND};
  border-radius: 16px;
  min-height: 250px;
  font-size: 26px;
  line-height: 30px;
  padding: 1em;
  margin-top: 10px;

  ::placeholder {
    font-weight: bold;
    font-family: "Cedarville Cursive";
  }
`;

const SubmitButton = styled.button`
  /* border: none; */
  padding: 8px 10px;
  cursor: pointer;
  border: 1px solid ${ColorSet.DARK_GREY};

  &:hover {
    background: ${ColorSet.SALMON};
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  align-items: center;
`;

export const AddIdeasPage = () => (
  <Layout>
    <AddIdeaPageWrapper>
      <Header>Create your ideas!</Header>
      <TwoColumneForm>
        <Column>
          <TitleInput placeholder="Create an idea..." name="idea" />
          <DescTextArea placeholder="Share wih your thoughts" name="desc" />
          <Row>
            <AddPhoto />
            <AddPhoto />
            <AddPhoto />
            <SubmitButton type="submit">Submit Idea</SubmitButton>
          </Row>
        </Column>
        <Column>2</Column>
      </TwoColumneForm>
    </AddIdeaPageWrapper>
  </Layout>
);
