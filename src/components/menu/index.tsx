import { graphql, StaticQuery } from "gatsby"
import React from "react"
import DesktopMenu from "./desktop"
import BurgerButton from "./mobile/burgerButton"
import MobileMenu from "./mobile"
import { Media } from "../../utils/useMediaBreakpoints"

interface Props {
  mobileMenuOpen: boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavMenu({ mobileMenuOpen, setMobileMenuOpen }: Props) {
  return (
    <StaticQuery
      query={graphql`
        {
          wpMenu(slug: { eq: "new-site-menu" }) {
            menuItems {
              nodes {
                label
                parentId
                childItems {
                  nodes {
                    label
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Media at="sm">
            <BurgerButton open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
            <MobileMenu
              menuData={data}
              open={mobileMenuOpen}
              setOpen={setMobileMenuOpen}
            />
          </Media>
          <Media greaterThan="sm">
            <DesktopMenu menuData={data} />
          </Media>
        </>
      )}
    />
  )
}
