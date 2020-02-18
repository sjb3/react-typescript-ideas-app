import styled from "styled-components";

// Main layouts
export const AuthForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`;

export const AuthWrapper = styled.main`
  display: flex;
  min-height: 100vh;
`;

export const VioletField = styled.div`
  flex: 3;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1566015173570-b80a0774c241?ixlib=rb-1.2.1&auto=format&fit=crop&w=560&q=80");
`;
export const FormWrapper = styled.div`
  flex: 1;
`;

// Containers
export const FormContainer = styled.div``;

export const TopContainer = styled.div``;

export const BottomContainer = styled.div``;

export const TopSentence = styled.p`
  padding: 16px 32px;
  text-align: center;
  font-style: italic;
  font-family: "Lacquer", sans-serif;
`;

export const Separator = styled.hr`
  height: 3px;
  background: purple;
`;

export const FooterParagraph = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 1em;
  a {
    color: red;
    text-decoration: none;
  }
`;
