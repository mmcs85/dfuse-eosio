import * as React from "react"
import { color as color_, fontSize } from "styled-system"
import { Link } from "react-router-dom"
import { Cell, Grid } from "../../atoms/ui-grid/ui-grid.component"
import { Links } from "../../routes"
import { t } from "i18next"
import { theme, styled } from "../../theme"

export const LogoElement: React.ComponentType<any> = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  ${color_};
  ${fontSize};
  top: -10px;
  position: relative;

  @media (max-width: 767px) {
    top: -6px;
  }
`

export const Tagline: React.ComponentType<any> = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.logo1};
  ${fontSize};
  letter-spacing: 1px;
`
export const LogoLink: React.ComponentType<any> = styled(Link)`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface Props {
  variant: "dark" | "light"
}

export const HeaderLogo: React.FC<Props> = ({ variant }) => {
  const protocolLogoColor = variant === "light" ? "#ffffff" : theme.colors.bleu10

  return (
    <Grid gridTemplateColumns={["auto 1fr"]} gridRow={["1"]} gridColumn={["1"]}>
      <Cell py={[0, 0]} alignSelf="center">
        <LogoLink to={Links.home()}>
          <LogoElement px={[0]} color={protocolLogoColor} fontSize={["40px", "56px", "56px"]}>
            eos
          </LogoElement>
          <LogoElement px={[0]} color={theme.colors.logo2} fontSize={["40px", "56px"]}>
            q
          </LogoElement>
        </LogoLink>
      </Cell>
      <Cell pl={[0, 1, 3]} alignSelf="center" justifySelf="left">
        <Tagline color="#fff" fontWeight="400">
          <Cell display={["none", "block"]} fontSize={[0, 1, 2]}>
            {t("core.tagline")}
          </Cell>
          <Cell display={["none", "block"]} fontSize={[0, 1, 2]}>
            {t("core.tagline2")}
          </Cell>
        </Tagline>
      </Cell>
    </Grid>
  )
}
