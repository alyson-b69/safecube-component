import styled from 'styled-components';

export const StyledNav = styled.nav`
    margin: 25px;
    padding: 10px;
    display:flex;
    align-items: baseline;  
    justify-content: space-between;
  
  p {
    margin: 16px;
    font-size: 3em;
    color: #ccc;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 1s ease-in-out;
    position: relative;
    cursor:pointer;

    &::before {
      content: attr(data-item);
      transition: all 1s ease-in-out;
      color: #7EB279;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0;
      overflow: hidden;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
  
  
    .menuItems {
        list-style: none;
        display: flex;
        justify-content: space-around;
        padding: 10px;
        margin: 25px;

        li {
            margin: 5px 10px;

            a {
                text-decoration: none;
                color: #8f8f8f;
                font-size: 1.2em;
                font-weight: 400;
                transition: all 0.5s ease-in-out;
                position: relative;
                text-transform: uppercase;

            &::before {
                    content: attr(data-item);
                    transition: 0.5s;
                    color: #7EB279;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 0;
                    overflow: hidden;
                }

            &:hover {
                &::before {
                        width: 100%;
                        transition: all 0.5s ease-in-out;
                    }
                }
            }
        }
    }
`