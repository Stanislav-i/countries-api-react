import { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { IoMoonOutline, IoSunny } from 'react-icons/io5';
import { changeTheme, selectTheme } from 'redux/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--color-text);
  font-size: var(--fv-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fv-sm);
  font-weight: var(--fw-bold);
  cursor: pointer;
  text-transform: capitalize;
`;

export const Header = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleChange = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    dispatch(changeTheme(nextTheme))
  }

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Home</Title>
          <ModeSwitcher onClick={handleChange}>
            {theme === 'light' ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoSunny size="14px" />
            )}
            <span style={{ marginLeft: '0.75rem' }}>{theme === 'light' ? 'dark' : 'light'} Mode</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
