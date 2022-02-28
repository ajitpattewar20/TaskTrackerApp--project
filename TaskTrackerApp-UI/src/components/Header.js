import React from "react";

function Header() {
  return <div>
    <h1>Header</h1>
    <h1>{process.env.HOMEPAGE}</h1>
    </div>;
}

export default Header;
