import React from "react"
import { css, Global } from "@emotion/core"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          html {
            font-size: 16px;
            overflow: hidden;
          }
        `}
      />

      <main>{children}</main>
    </>
  )
}

export default Layout
