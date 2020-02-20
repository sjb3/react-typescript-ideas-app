import styled from "styled-components";

const MY_GREEN = "#4cff4c";

// Main layouts
export const AuthForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;

  /* input:first-of-type {
  } */

  input:last-of-type {
    margin-top: 32px;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Containers // Just simply taking advantage of tags and FormWrapper
export const TopContainer = styled.header`
  /* flex: 1; */
`;

export const BottomContainer = styled.footer`
  /* flex: 1; */
`;

export const FormContainer = styled.div`
  /* flex: 6; */
`;

export const TopSentence = styled.p`
  padding: 16px 32px;
  text-align: center;
  font-style: italic;
  font-family: "Lacquer", sans-serif;
`;

export const Separator = styled.hr`
  height: 1px;
  width: 80%;
  background: ${MY_GREEN};
`;

export const FooterParagraph = styled.p`
  text-align: center;
  font-weight: 100;
  font-size: 0.8em;
  font-style: italic;
  a {
    color: red;
    text-decoration: none;
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  padding: 4px;
  min-width: 50px;
  font-size: 0.7em;
  font-style: italic;
  margin: 8px 0;
`;

export const FormButton = styled.button`
  font-size: 1.2em;
  background: ${MY_GREEN};
  color: white;
  border: none;
  border-radius: 32px;
  padding: 8px 16px;
  min-width: 150px;
  margin-top: 32px;
`;

export const ErrorParagraph = styled.p`
  font-size: bold;
  font-style: italic;
  min-width: 250px;
  display: flex;
  justify-content: space-around;

  i {
    color: red;
  }
`;
