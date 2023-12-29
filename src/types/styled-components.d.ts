import { theme } from "@/styles/theme";
import "styled-components";

type Theme = typeof theme;

declare module "styled-components" {
  /* Disabling rule as styled-components needs implemented this way to work */

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
