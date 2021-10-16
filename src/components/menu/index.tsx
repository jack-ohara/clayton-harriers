import { graphql, StaticQuery } from "gatsby"
import React from "react"
import DesktopMenu from "./desktop"
import BurgerButton from "./mobile/burgerButton"
import MobileMenu from "./mobile"
import MobileComponent from "../mobileComponent"
import DesktopComponent from "../desktopComponent"

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
                url
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
          <MobileComponent>
            <BurgerButton open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
            <MobileMenu
              menuData={data}
              open={mobileMenuOpen}
              setOpen={setMobileMenuOpen}
            />
          </MobileComponent>
          <DesktopComponent>
            <DesktopMenu menuData={data} />
          </DesktopComponent>
        </>
      )}
    />
  )
}
