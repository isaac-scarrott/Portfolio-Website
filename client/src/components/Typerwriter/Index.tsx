import React, { useEffect } from "react";

import { useTypewriteLinesExtraction } from "./useTypewriteLineExtraction";


export function TypeWriter(props: any) {
  const element = useTypewriteLinesExtraction(props);
  return (
    <>{element && element}</>
  );
}

export function TypeWriterInput(props: any) {
  return <>{props.children}</>;
}
