import styled from 'styled-components'

export const ProjectPreviewWrapper = styled.div`
  background-color: var(--card-color);
  margin-bottom: 3rem;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* // border: 1px solid hsla(0, 18%, 47%, 0.1); */   
  border-top: 3px solid var(--theme);
  /* // border-left: 1px solid var(--theme);
  // border-right: 1px solid var(--theme); */

  border-radius: 10px;

  transform: translateY(0ox);
  transition: transform 0.22s ease;
  &:hover {
    transition: transform 0.2s ease;
    transform: translateY(-3px);
  }

  > div {
    padding: 0.3rem 0.7rem;
    position: relative;
    h3 {
      font-family: 'IBM Plex Mono', monospace;
      margin-bottom: 5px;
    }

    .project-links {
      display: flex;
      align-items: center;
   
      :first-child {
        height: 1.5rem;
        fill: var(--theme);
      }
    }
    p {
      font-size: 1rem;
    }
  }
`
