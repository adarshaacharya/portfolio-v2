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
        background-color: ${p => p.theme.secondaryColor};
        border: 1px solid
          ${p => (p.theme.dark ? p.theme.primaryColor : p.theme.bg)};
        color: ${p => p.theme.primaryText};
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        display: block;
        font-size: 1rem;
        padding: 15px;
        border-radius: 4px;
        color: ${p => p.theme.primaryText};
        width: 100%;
      }
      &-reset,
      &-submit {
        align-items: center;
        border: none;
        border-left: 1px solid
          ${p => (p.theme.dark ? p.theme.primaryColor : p.theme.bg)};
        cursor: pointer;
        display: flex;
        height: 100%;
        justify-content: center;
        position: absolute;
        right: 0;
        top: 0;
        background: none;
        padding: 0 1rem;
        text-align: center;
        width: 4.8rem;
      }
      &-submit {
        &:hover,
        &:focus {
          color: ${p => p.theme.primaryColor};
        }
      }
      &-reset {
        border: none;
        margin-right: 4.8rem;

        &[hidden] {
          display: none;
        }
        &:hover,
        &:focus {
        }
      }
      &-submitIcon {
        height: 1.2rem;
        width: 1.62rem;
      }
    }
    &-Stats {
      color: ${p => p.theme.primaryColor};
    }
    &-Hits {
      &-item {
        &:not(:last-child) {
        }
      }
    }
  }

  svg {
    fill: ${p => p.theme.primaryText};
  }
`;
