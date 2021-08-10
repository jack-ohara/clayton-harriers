import { graphql, StaticQuery } from "gatsby"
import React from "react"
import DesktopMenu from "./desktop"
import BurgerButton from "./mobile/burgerButton"
import MobileMenu from "./mobile"
import { useMediaQuery } from "react-responsive"

interface Props {
  mobileMenuOpen: boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface MenuProps {
  data: any
  mainProps: Props
}

function Menu({
  data,
  mainProps: { mobileMenuOpen, setMobileMenuOpen },
}: MenuProps) {
  const isDesktopMedia = useMediaQuery({ query: "(min-width: 815px)" })

  return isDesktopMedia ? (
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
        <Menu data={data} mainProps={{ mobileMenuOpen, setMobileMenuOpen }} />
      )}
    />
  )
}
