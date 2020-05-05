import React from 'react';
import styled from 'styled-components';
import { InnerContent } from '../components/InnerContent';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const StyledInnerContent = styled(InnerContent)`
    height: calc(100vh - 110px);
    box-sizing: border-box;
`;

const StyledProfile = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
`;

const StyledImageWrapper = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 20px auto;
`;

const StyledImage = styled.img`
    display: block;
    position: relative;
    left: -30px;
    width: 300px;
    height: 300px;
`;

const StyledName = styled.p`
    font-size: 30px;
    text-align: center;
    margin: 0 0 15px;
`;

const StyledText = styled.span`
    display: block;
    font-size: 25px;
    margin: 0 0 20px;
`;

const StyledSnsList = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
`;

const StyledSnsListItem = styled.li`
    margin: 0 10px;
    list-style: none;
`;

const StyledIconLink = styled.a`
    display: inline-block;
    color: #dadada;
    width: 30px;
    height: 30px;
    svg {
        width: 100%;
        height: 100%;
    }
`;

export default () => (
  <StyledInnerContent>
        <StyledProfile>
            <StyledImageWrapper>
                <StyledImage src="images/avater.jpg" alt="Profile" />
            </StyledImageWrapper>
            <StyledName>Shogo Kato</StyledName>
            <StyledText>Frontend Engineer at DMM GAMES.</StyledText>

            <StyledSnsList>
                <StyledSnsListItem>
                    <StyledIconLink href="https://github.com/kt-sygo0921" target="_blank">
                        <GitHubIcon />
                    </StyledIconLink>
                </StyledSnsListItem>
                <StyledSnsListItem>
                    <StyledIconLink href="https://twitter.com/katoon_mr" target="_blank">
                        <TwitterIcon />
                    </StyledIconLink>
                </StyledSnsListItem>
                <StyledSnsListItem>
                    <StyledIconLink href="https://www.facebook.com/p.zonda.pmgp/about?section=overview&lst=100006275850499%3A100006275850499%3A1588672239" target="_blank">
                        <FacebookIcon />
                    </StyledIconLink>
                </StyledSnsListItem>
            </StyledSnsList>
        </StyledProfile>
  </StyledInnerContent>
);
