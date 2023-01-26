import React from "react";

import Style from "./Style.module.scss";

interface props {
  children: React.ReactNode;
  text: string;
}

export default function Button({ children, text }: props) {
  return (
    <button className={Style.Button}>
      {text}
      <div>{children}</div>
    </button>
  );
}
