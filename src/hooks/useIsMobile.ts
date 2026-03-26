import { useWindowSize } from "./useWindowSize";

const BP_SM = 768;

export function useIsMobile(): boolean {
  const { width } = useWindowSize();
  return width !== undefined && width <= BP_SM;
}
