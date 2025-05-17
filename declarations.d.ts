// declarations.d.ts 또는 global.d.ts 파일에 추가
declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }
  