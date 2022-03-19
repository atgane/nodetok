import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleWrapper = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100px;
  display: flex;
  background-image: linear-gradient( 315deg, #92FFC0 10%, #002661 100%);
  align-items: center;
`

export const Title = styled.div`
  padding-left: 1rem;
  color: #e5e5e5;
  font-size: 1.5rem;
  font-weight: bold;
`;