import styled from 'styled-components'

export const AuthorInfoWrapper = styled.section`
  > div {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 5px;
    align-items: center;
    max-width: 900px;
    margin-bottom: 2rem;

    .author-img {
      img {
        border-radius: 50%;
        border: 3px solid var(--theme);
      }
    }
  }

  .info {
    h1 {
      color: var(--primary-color);
      font-weight: 700;
      font-size: 2.4rem;
      margin-left: 1rem;
    }

    .social-icons {
      display: flex;
      justify-content: start;
      a {
        img {
          height: 20px;
          padding-left: 1rem;
        }
      }
    }

    p {
      margin-left: 1rem;
    }
  }

  .resume {
    display: flex;
    color: var(--dark-color);
    font-family: Ibm Plex Mono;
    font-size: 20px;
    margin: 15px 0;

    .icon {
      padding-right: 1rem;
    }

    .link {
      border-bottom: 1px dashed var(--primary-color);
    }
  }
`

export const TechStackWrapper = styled.section`
padding: 1rem 0;
  h2 {
    padding: 2rem 0;
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    letter-spacing: -0.03rem;
  }
  .techs {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 2rem;

    > div {
      text-align: center;
      margin-bottom: 40px;
      p {
        display: inline-block;
        font-family: Ibm Plex Mono;
        font-size: 17px;
        border-bottom: 1px dashed var(--primary-color);
      }
    }
  }
}



@media screen and (max-width: 520px) {
  .author-info {
    > div {
     
      grid-template-columns: 1fr 1fr;
      grid-gap: 1px;
      

      .author-img {
        height: 100px !important ;
        width: 100px !important;
      }
    }

    .info {
      padding-top: 2rem;
      h1 {
        font-weight: 400px;
        font-size: 1.4rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }


`
