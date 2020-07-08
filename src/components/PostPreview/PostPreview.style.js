import styled from 'styled-components'

export const PostPreviewWrapper = styled.article`
   /* box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
   margin-bottom: 4rem; */
  background-color: var(--card-color);

  .post {
    border-bottom: 1px dashed var(--hr-color);
    padding: 30px 30px;
    display: grid;
    margin: 0;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }

    h2 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.9em;
      color: var(--theme);
    }

    .prefix {
      display: flex;
      justify-content: space-between;
      .date,
      .reading-time {
        margin: 0;
        font-size: 0.9rem;
        color: var(--light-text);
        font-weight: 400;
      }
    }
  }
  p {
    font-size: 1.1rem;
  }

  .tags {
    list-style-type: none;
    display: flex;

    li {
      padding-right: 1rem;
      &:hover {
      }
    }
  }

  &:last-of-type {
    .post {
      border-bottom-color: transparent;
    }
  }
`