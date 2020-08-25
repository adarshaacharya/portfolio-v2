import styled from 'styled-components';

export const StyledSearch = styled.section`
  display: block;

  .ais {
    &-InstantSearch__root {
      position: relative;
    }
    &-SearchBox {
      margin-bottom: 2rem;
      position: relative;
      &-input {
        -webkit-appearance: none;
        background-color: ${p => p.theme.bg};
        border: 1px solid
          ${p => (p.theme.dark ? p.theme.primaryColor : p.theme.bg)};
        color: ${p => p.theme.primaryText};
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        display: block;
        font-size: 1rem;
        padding: 15px;
        border-radius: 4px;

        width: 100%;
      }
      &-reset,
      &-submit {
        align-items: center;
        background-color: ${p => p.theme.bg};
        cursor: pointer;
        display: flex;
        height: 100%;
        justify-content: center;
        position: absolute;
        right: 0;
        top: 0;
        will-change: color;
      }
      &-submit {
        &:hover,
        &:focus {
          color: ${p => p.theme.primaryColor};
        }
      }
      &-reset {
        border: none;

        &[hidden] {
          display: none;
        }
        &:hover,
        &:focus {
        }
      }
      &-submitIcon {
      }
    }
    &-Stats {
      color: ${p => p.theme.primaryColor};
      margin-bottom: 1rem;
    }
    &-Hits {
      &-item {
        &:not(:last-child) {
        }
      }
    }
  }
`;


export const AlgoliaIcon = styled.img`
    mar

`