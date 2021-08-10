import { graphql, StaticQuery } from "gatsby"
import React from "react"
import { useAppContext } from "../../state"
import DesktopMenu from "./desktop"
import BurgerButton from "./mobile/burgerButton"
import MobileMenu from "./mobile"

interface Props {
  mobileMenuOpen: boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavMenu({ mobileMenuOpen, setMobileMenuOpen }: Props) {
  const { isDesktopMedia } = useAppContext()

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
      render={data =>
        isDesktopMedia ? (
          <DesktopMenu menuData={data} />
        ) : (
          <>
            <BurgerButton open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
            <MobileMenu
              menuData={data}
              open={mobileMenuOpen}
              setOpen={setMobileMenuOpen}
            />
          </>
        )
      }
    />
  )
}
