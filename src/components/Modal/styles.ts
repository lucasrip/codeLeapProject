import styled from 'styled-components';
import { colors } from './../../globalStyles/colors';

export const Container = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 position: fixed;
 top:0;
 left:0;
 width:100%;
 height:100%;
 background:${colors.gray.opacityNormal}
`;
