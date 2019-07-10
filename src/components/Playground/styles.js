import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 2rem;
  padding-right: 2rem;
  margin-bottom: 3rem;
  border: 1px solid #dadada;
`;

export const LiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-height: 300px;
  padding: 1rem;
  border-right: 1px solid #dadada;
  box-shadow: inset 0 0 10px 0px rgba(0, 0, 0, 0.15);
`;
