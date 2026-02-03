"use client";
import * as excalidrawLib from "@excalidraw/excalidraw";
import { StoreNCraft } from "@excalidraw/excalidraw";

import "@excalidraw/excalidraw/index.css";

import App from "../../with-script-in-browser/components/ExampleApp";

const ExcalidrawWrapper: React.FC = () => {
  return (
    <>
      <App
        appTitle={"StoreNCraft with Nextjs Example"}
        useCustom={(api: any, args?: any[]) => {}}
        excalidrawLib={excalidrawLib}
      >
        <StoreNCraft />
      </App>
    </>
  );
};

export default ExcalidrawWrapper;
